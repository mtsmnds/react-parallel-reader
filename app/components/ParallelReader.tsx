import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';
import { useDebounce } from '../hooks/useDebounce';
import styles from './ParallelReader.module.scss';
import type { Rendition, Highlight } from '../../types/epub';
import SelectionMenu from './SelectionMenu';

// Define a type for the location (can be a string CFI or integer 0)
type LocationType = string | number;

interface ParallelReaderProps {
    initialUrls: string[];
    onBack?: () => void;
}

interface SelectionState {
    cfiRange: string;
    text: string;
    bookIndex: number;
    position: { top: number; left: number }; // Absolute position for popover
    tempHighlightId?: string; // If we pre-highlight visually
}

export default function ParallelReader({ initialUrls, onBack }: ParallelReaderProps) {
    // --- State ---
    const [urls, setUrls] = useState<string[]>(initialUrls);
    const [count, setCount] = useState(initialUrls.length || 2);
    // NEW: We must track the location of each book individually
    const [locations, setLocations] = useState<LocationType[]>(initialUrls.map(() => 0));

    // Highlights State
    const [highlights, setHighlights] = useState<Highlight[]>([]);
    const [showHighlights, setShowHighlights] = useState(true);

    // Selection / Popover State
    const [selection, setSelection] = useState<SelectionState | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [editingHighlight, setEditingHighlight] = useState<Highlight | null>(null);

    // Styling State
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState({
        fontSize: 100, // percentage
        fontFamily: 'Helvetica, sans-serif',
        lineHeight: 1.6
    });

    const renditionRefs = useRef<(Rendition | null)[]>([]);
    // Track rendered highlights per panel to prevent duplicates
    const renderedRef = useRef<Set<string>>(new Set());

    // Panel refs to calculate offsets for popovers
    const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Persistence: Hydrate locations from localStorage on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem('parallel-reader-progress');
            if (saved) {
                const progress = JSON.parse(saved);

                // Update locations based on URLs
                // We map over current *urls* state to ensure we align with what's visible
                const restoredLocations = urls.map((url, i) => {
                    // if we have a saved location for this URL, use it
                    if (progress[url]) return progress[url];
                    // otherwise keep existing (which might be 0 or already set)
                    return locations[i];
                });

                // Only update if different to avoid unnecessary re-renders?
                // Initial locations are 0.
                setLocations(restoredLocations);
            }
        } catch (e) {
            console.error("Failed to load progress", e);
        }
    }, []); // Run once on mount (window object available)

    // Persistence: Save Logic
    const saveProgress = (bookUrl: string, loc: LocationType) => {
        try {
            const saved = localStorage.getItem('parallel-reader-progress');
            const progress = saved ? JSON.parse(saved) : {};

            progress[bookUrl] = loc;
            localStorage.setItem('parallel-reader-progress', JSON.stringify(progress));
        } catch (e) {
            console.error("Failed to save progress", e);
        }
    };

    const debouncedSave = useDebounce(saveProgress, 1000);

    // Load highlights on mount or when URLs change
    useEffect(() => {
        if (urls.length > 0) {
            const searchParams = new URLSearchParams();
            searchParams.set('urls', urls.join(','));

            fetch(`/api/highlights?${searchParams.toString()}`)
                .then(res => res.json())
                .then(data => setHighlights(data))
                .catch(err => console.error("Error loading highlights:", err));
        }
    }, [urls]);

    // Style Injection Helper
    const applyStyles = (rendition: Rendition) => {
        rendition.themes.default({
            'body': {
                'font-family': `${settings.fontFamily} !important`,
                'font-size': `${settings.fontSize}% !important`,
                'line-height': `${settings.lineHeight} !important`
            },
            'p': {
                'font-family': `${settings.fontFamily} !important`,
                'font-size': `${settings.fontSize}% !important`,
                'line-height': `${settings.lineHeight} !important`
            },
            'div': { 'padding-bottom': '20px' },
            '::selection': {
                'background': 'rgba(255, 255, 0, 0.3)'
            },
            // Custom highlight classes
            '.hl-highlight': { 'fill': 'yellow', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply' },
            '.hl-underline': { 'border-bottom': '2px solid red', 'fill': 'transparent' } // Simplified underline
        });
    };

    // Update active renditions when settings change
    useEffect(() => {
        renditionRefs.current.forEach(rendition => {
            if (rendition) {
                applyStyles(rendition);
            }
        });
    }, [settings]);

    // --- Handlers ---

    const getRendition = (index: number, rendition: Rendition) => {
        renditionRefs.current[index] = rendition;

        // Initial styles
        applyStyles(rendition);

        // CLEANUP
        const keysToRemove: string[] = [];
        renderedRef.current.forEach(key => {
            if (key.startsWith(`${index}-`)) keysToRemove.push(key);
        });
        keysToRemove.forEach(k => renderedRef.current.delete(k));

        // INITIAL RENDER
        const bookHighlights = highlights.filter(h => h.bookUrl === urls[index]);
        bookHighlights.forEach(h => {
            // Use dynamic style class
            rendition.annotations.add('highlight', h.cfiRange, {}, null, `hl-exist-${h.id}`);
            renderedRef.current.add(`${index}-${h.id}`);
        });

        // SELECTION HANDLER
        rendition.on('selected', (cfiRange: string, contents: any) => {
            const range = contents.window.getSelection().getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const text = range.toString();

            // Calculate absolute position
            const iframe = rendition.manager.container.querySelector('iframe');
            if (iframe) {
                const iframeRect = iframe.getBoundingClientRect();
                setSelection({
                    cfiRange,
                    text,
                    bookIndex: index,
                    position: {
                        top: iframeRect.top + rect.top,
                        left: iframeRect.left + rect.right
                    }
                });
                setMenuOpen(false); // Start with just the button
                console.log("Selection set at", iframeRect.top + rect.top, iframeRect.left + rect.right);
            }
        });

        // Click handler removed to prevent conflict with selection logic
        rendition.on('click', () => {
            // specific logic can be added here if needed to clear selection
        });

    };

    // Re-apply highlights + Custom Color Injection
    useEffect(() => {
        renditionRefs.current.forEach((rendition, index) => {
            if (!rendition) return;

            const url = urls[index];
            const bookHighlights = highlights.filter(h => h.bookUrl === url);

            // Inject styles for specific highlight colors
            bookHighlights.forEach(h => {
                const className = `hl-exist-${h.id}`;
                rendition.themes.default({
                    [`.${className}`]: {
                        'fill': h.color,
                        'fill-opacity': '0.3',
                        'mix-blend-mode': 'multiply',
                        ...(h.style === 'underline' ? {
                            'fill': 'transparent',
                            'border-bottom': `2px solid ${h.color}`
                        } : {})
                    }
                });

                const key = `${index}-${h.id}`;
                if (!renderedRef.current.has(key)) {
                    rendition.annotations.add('highlight', h.cfiRange, {}, null, className);
                    renderedRef.current.add(key);
                }
            });

            // Cleanup removed highlights
            const bookHighlightIds = new Set(bookHighlights.map(h => h.id));
            const keysToRemove: string[] = [];
            renderedRef.current.forEach(key => {
                const [pIdx, hId] = key.split('-');
                if (parseInt(pIdx) === index && !bookHighlightIds.has(hId)) {
                    keysToRemove.push(key);
                }
            });
            keysToRemove.forEach(k => renderedRef.current.delete(k));
        });
    }, [highlights, urls]);


    const handleSaveHighlight = (data: { color: string; style: 'highlight' | 'underline'; note: string }) => {
        if (!selection) return;

        const newHighlight: Highlight = {
            id: Date.now().toString(),
            cfiRange: selection.cfiRange,
            text: selection.text,
            bookUrl: urls[selection.bookIndex],
            created: Date.now(),
            color: data.color,
            style: data.style,
            note: data.note
        };

        // Optimistic UI
        setHighlights(prev => [...prev, newHighlight]);

        // Render Immediately
        const rendition = renditionRefs.current[selection.bookIndex];
        if (rendition) {
            const className = `hl-exist-${newHighlight.id}`;
            rendition.themes.default({
                [`.${className}`]: {
                    'fill': newHighlight.color,
                    'fill-opacity': '0.3',
                    'mix-blend-mode': 'multiply',
                    ...(newHighlight.style === 'underline' ? {
                        'fill': 'transparent',
                        'border-bottom': `2px solid ${newHighlight.color}`
                    } : {})
                }
            });
            rendition.annotations.add('highlight', newHighlight.cfiRange, {}, null, className);
            renderedRef.current.add(`${selection.bookIndex}-${newHighlight.id}`);

            // Clear browser selection
            try {
                const contents = rendition.getContents()[0];
                contents?.window.getSelection()?.removeAllRanges();
            } catch (e) { console.error("Could not clear selection", e); }
        }

        // Persist
        fetch('/api/highlights', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHighlight)
        }).catch(err => console.error("Failed to save", err));

        // Reset
        setSelection(null);
        setMenuOpen(false);
    };

    const handleCancelSelection = () => {
        // Clear browser selection
        if (selection) {
            const rendition = renditionRefs.current[selection.bookIndex];
            try {
                const contents = rendition?.getContents()[0];
                contents?.window.getSelection()?.removeAllRanges();
            } catch (e) { }
        }
        setSelection(null);
        setMenuOpen(false);
    };

    const handleLocationChange = (index: number, newLocation: LocationType) => {
        const newLocations = [...locations];
        newLocations[index] = newLocation;
        setLocations(newLocations);
        if (urls[index]) debouncedSave(urls[index], newLocation);
    };

    const updateUrl = (index: number, newUrl: string) => {
        const newUrls = [...urls];
        newUrls[index] = newUrl;
        setUrls(newUrls);
    };

    const deleteHighlight = async (id: string, cfiRange: string, bookIndex: number) => {
        setHighlights(prev => prev.filter(h => h.id !== id));
        const rendition = renditionRefs.current[bookIndex];
        if (rendition) {
            rendition.annotations.remove(cfiRange, 'highlight');
            renderedRef.current.delete(`${bookIndex}-${id}`);
        }
        await fetch('/api/highlights', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, bookUrl: urls[bookIndex] })
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {onBack && (
                        <button onClick={onBack} className={styles.backButton} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
                            ← Back
                        </button>
                    )}
                    <h1>Parallel Reader</h1>
                </div>
                <div className={styles.controls}>
                    <button onClick={() => setShowSettings(!showSettings)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.2rem', marginRight: '0.5rem' }}>⚙️</button>
                    {showSettings && (
                        <div className={styles.settingsPanel}>
                            <h3>Display Settings</h3>
                            <div className={styles.settingGroup}>
                                <label>Font Size: {settings.fontSize}%</label>
                                <input type="range" min="80" max="200" step="10" value={settings.fontSize} onChange={(e) => setSettings({ ...settings, fontSize: Number(e.target.value) })} />
                            </div>
                            <div className={styles.settingGroup}>
                                <label>Font Family</label>
                                <select value={settings.fontFamily} onChange={(e) => setSettings({ ...settings, fontFamily: e.target.value })}>
                                    <option value="Helvetica, sans-serif">Helvetica</option>
                                    <option value="Georgia, serif">Georgia</option>
                                    <option value="Courier New, monospace">Monospace</option>
                                    <option value="Times New Roman, serif">Original</option>
                                </select>
                            </div>
                            <div className={styles.settingGroup}>
                                <label>Line Height</label>
                                <select value={settings.lineHeight} onChange={(e) => setSettings({ ...settings, lineHeight: Number(e.target.value) })}>
                                    <option value={1.2}>Compact (1.2)</option>
                                    <option value={1.6}>Normal (1.6)</option>
                                    <option value={2.0}>Loose (2.0)</option>
                                </select>
                            </div>
                        </div>
                    )}
                    <div className={styles.buttonGroup}>
                        <button onClick={() => setShowHighlights(!showHighlights)} className={showHighlights ? styles.active : styles.inactive}>
                            {showHighlights ? 'Hide Notes' : 'Show Notes'}
                        </button>
                    </div>
                    <div className={styles.buttonGroup}>
                        {[1, 2, 3].map(num => (
                            <button key={num} onClick={() => setCount(num)} className={count === num ? styles.active : styles.inactive}>
                                {num} Panel{num > 1 && 's'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
                <div className={styles.grid} style={{ flex: showHighlights ? '0 0 75%' : '1' }}>
                    {Array.from({ length: count }).map((_, index) => (
                        <div key={index} className={styles.panel} ref={el => { panelRefs.current[index] = el; }} style={{ maxWidth: `${100 / count}%` }}>
                            <div className={styles.inputWrapper}>
                                <input type="text" placeholder="Paste EPUB URL here..." value={urls[index] || ''} onChange={(e) => updateUrl(index, e.target.value)} />
                            </div>
                            <div className={styles.readerWrapper}>
                                <ReactReader
                                    url={urls[index]}
                                    location={locations[index] || 0}
                                    locationChanged={(loc) => handleLocationChange(index, loc)}
                                    getRendition={(rendition: any) => getRendition(index, rendition)}
                                    epubOptions={{ flow: "scrolled", manager: "continuous" }}
                                    swipeable={false}
                                    readerStyles={{ ...ReactReaderStyle, arrow: { ...ReactReaderStyle.arrow, display: 'none' } }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {showHighlights && (
                    <div className={styles.sidebar}>
                        <h2>Annotations</h2>
                        {highlights.length === 0 && <p className={styles.emptyState}>Select text to highlight.</p>}
                        {highlights.map(h => (
                            <div key={h.id} className={styles.annotationCard} style={{ borderLeft: `4px solid ${h.color}` }}>
                                <p>"{h.text}"</p>
                                {h.note && <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#555' }}>{h.note}</p>}
                                <div className={styles.footer}>
                                    <span>{urls.findIndex(u => u === h.bookUrl) > -1 ? `Panel ${urls.findIndex(u => u === h.bookUrl) + 1}` : 'Other Book'}</span>
                                    <div className={styles.actions}>
                                        <button className={styles.jump} onClick={() => {
                                            const idx = urls.indexOf(h.bookUrl);
                                            if (idx !== -1 && renditionRefs.current[idx]) {
                                                renditionRefs.current[idx]?.display(h.cfiRange);
                                            }
                                        }}>Jump</button>
                                        <button className={styles.delete} onClick={() => deleteHighlight(h.id, h.cfiRange, urls.indexOf(h.bookUrl))}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Popover UI */}
                {selection && (
                    <div className={styles.popoverContainer} style={{ top: selection.position.top - 40, left: selection.position.left }}>
                        {!menuOpen ? (
                            <button className={styles.popoverButton} onClick={() => setMenuOpen(true)}>
                                +
                            </button>
                        ) : (
                            <SelectionMenu
                                isEditing={false} // Creating new
                                onSave={handleSaveHighlight}
                                onCancel={handleCancelSelection}
                            />
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}