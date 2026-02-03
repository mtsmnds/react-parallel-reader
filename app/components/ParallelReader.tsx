import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';

import styles from './ParallelReader.module.scss';
import type { Rendition, Highlight } from '../../types/epub';
import HighlightMenu from './HighlightMenu';

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

    // Linking State
    const [linkingSourceId, setLinkingSourceId] = useState<string | null>(null);
    const [selectedForLink, setSelectedForLink] = useState<Set<string>>(new Set());

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
            'div': { 'padding-bottom': '20px' }
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
            // Pass styles directly as attributes for SVG overlays (fill, stroke, etc)
            // The 5th argument 'styles' in annotations.add() maps to SVG attributes in marks-pane
            const styles: any = { fill: h.color };
            if (h.style === 'underline') {
                styles.fill = 'transparent';
                styles.stroke = h.color;
                styles['stroke-width'] = '2';
            }

            // Use generic class (hl-highlight/hl-underline) plus generic styling
            const type = h.style === 'underline' ? 'underline' : 'highlight';
            const className = type === 'underline' ? 'hl-underline' : 'hl-highlight';

            rendition.annotations.add(type, h.cfiRange, {}, null, className, styles);
            renderedRef.current.add(`${index}-${h.id}`);
        });

        // SELECTION HANDLER
        rendition.on('selected', (cfiRange: string, contents: any) => {
            const range = contents.window.getSelection().getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const text = range.toString();

            // Calculate absolute position
            // Use frameElement from the specific contents where selection happened
            const iframe = contents.window.frameElement as HTMLElement;

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
            }
        });



    };

    // Re-apply highlights + Custom Color Injection
    useEffect(() => {
        renditionRefs.current.forEach((rendition, index) => {
            if (!rendition) return;

            const url = urls[index];
            const bookHighlights = highlights.filter(h => h.bookUrl === url);

            // Inject styles for specific highlight colors
            // Inject styles for specific highlight colors
            bookHighlights.forEach(h => {
                const key = `${index}-${h.id}`;
                if (!renderedRef.current.has(key)) {
                    const styles: any = { fill: h.color };
                    if (h.style === 'underline') {
                        styles.fill = 'transparent';
                        styles.stroke = h.color;
                        styles['stroke-width'] = '2';
                    }
                    const type = h.style === 'underline' ? 'underline' : 'highlight';
                    const className = type === 'underline' ? 'hl-underline' : 'hl-highlight';

                    rendition.annotations.add(type, h.cfiRange, {}, null, className, styles);
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
            const styles: any = { fill: newHighlight.color };
            if (newHighlight.style === 'underline') {
                styles.fill = 'transparent';
                styles.stroke = newHighlight.color;
                styles['stroke-width'] = '2';
            }

            const type = newHighlight.style === 'underline' ? 'underline' : 'highlight';
            const className = type === 'underline' ? 'hl-underline' : 'hl-highlight';

            rendition.annotations.add(type, newHighlight.cfiRange, {}, null, className, styles);
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
        if (urls[index]) {
            // Location update logic could go here
        }
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
            // Try removing both types as we don't know for sure which one passed here (though we could lookup)
            rendition.annotations.remove(cfiRange, 'highlight');
            rendition.annotations.remove(cfiRange, 'underline');
            renderedRef.current.delete(`${bookIndex}-${id}`);
        }
        await fetch('/api/highlights', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, bookUrl: urls[bookIndex] })
        });
    };

    // --- Linking Logic ---

    const enterLinkingMode = (sourceId: string) => {
        setLinkingSourceId(sourceId);
        setSelectedForLink(new Set());
    };

    const toggleSelection = (id: string) => {
        const newSet = new Set(selectedForLink);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setSelectedForLink(newSet);
    };

    const cancelLinking = () => {
        setLinkingSourceId(null);
        setSelectedForLink(new Set());
    };

    const confirmLinking = async () => {
        if (!linkingSourceId) return;

        // 1. Gather all IDs involved: source + selected
        const involvedIds = new Set([linkingSourceId, ...Array.from(selectedForLink)]);

        // 2. Find their existing groups (transitive closure)
        // If A is linked to B, and we link A to C, then A, B, C are now 1 group
        const finalGroupIds = new Set<string>();
        const queue = Array.from(involvedIds);

        const visited = new Set<string>();

        while (queue.length > 0) {
            const currentId = queue.shift()!;
            if (visited.has(currentId)) continue;
            visited.add(currentId);
            finalGroupIds.add(currentId);

            const highlight = highlights.find(h => h.id === currentId);
            if (highlight && highlight.linkedIds) {
                highlight.linkedIds.forEach(linkedId => {
                    if (!visited.has(linkedId)) {
                        queue.push(linkedId);
                    }
                });
            }
        }

        // 3. Update all highlights in the final group
        const groupArray = Array.from(finalGroupIds);
        const updates: Highlight[] = [];

        groupArray.forEach(id => {
            const h = highlights.find(highlight => highlight.id === id);
            if (h) {
                // Link to everyone else in the group
                const newLinkedIds = groupArray.filter(gid => gid !== id);
                updates.push({ ...h, linkedIds: newLinkedIds });
            }
        });

        // 4. Send batch update
        try {
            const res = await fetch('/api/highlights', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates)
            });
            if (res.ok) {
                // 5. Optimistic Update
                setHighlights(prev => prev.map(h => {
                    const update = updates.find(u => u.id === h.id);
                    return update ? update : h;
                }));
            }
        } catch (e) {
            console.error("Failed to link highlights", e);
        }

        cancelLinking();
    };

    // Helper to group highlights for rendering
    const groupHighlightsForRender = (list: Highlight[]): Highlight[][] => {
        const visited = new Set<string>();
        const groups: Highlight[][] = [];

        // Sort by created time first to ensure stability
        const sortedList = [...list].sort((a, b) => a.created - b.created);

        sortedList.forEach(h => {
            if (visited.has(h.id)) return;

            const group: Highlight[] = [h];
            visited.add(h.id);

            // Traverse connected
            if (h.linkedIds && h.linkedIds.length > 0) {
                const queue = [...h.linkedIds];
                while (queue.length > 0) {
                    const nid = queue.shift()!;
                    if (!visited.has(nid)) {
                        visited.add(nid);
                        const neighbor = list.find(item => item.id === nid);
                        if (neighbor) group.push(neighbor);
                    }
                }
            }

            // Sort within group by creation time
            group.sort((a, b) => a.created - b.created);
            groups.push(group);
        });

        return groups;
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
                        <h2>Annotations</h2>
                        {linkingSourceId && (
                            <div className={styles.linkingControls}>
                                <span>Select highlights to link</span>
                                <div className={styles.linkingButtons}>
                                    <button onClick={confirmLinking} className={styles.confirmBtn} disabled={selectedForLink.size === 0}>Done</button>
                                    <button onClick={cancelLinking} className={styles.cancelBtn}>Cancel</button>
                                </div>
                            </div>
                        )}

                        {highlights.length === 0 && <p className={styles.emptyState}>Select text to highlight.</p>}

                        {groupHighlightsForRender(highlights).map((group, gIdx) => (
                            <div key={gIdx} className={`${styles.annotationGroup} ${group.length > 1 ? styles.linkedGroup : ''}`}>
                                {group.map(h => {
                                    const isSource = linkingSourceId === h.id;
                                    const isSelected = selectedForLink.has(h.id);
                                    const isLinked = group.length > 1;

                                    return (
                                        <div key={h.id}
                                            className={`
                                            ${styles.annotationCard} 
                                            ${isSource ? styles.linkingSource : ''}
                                            ${isSelected ? styles.linkingSelected : ''}
                                        `}
                                            style={{ borderLeft: `4px solid ${h.color}` }}
                                        >
                                            {linkingSourceId && !isSource && (
                                                <div className={styles.cardHeader}>
                                                    <input
                                                        type="checkbox"
                                                        checked={isSelected}
                                                        onChange={() => toggleSelection(h.id)}
                                                        className={styles.linkCheckbox}
                                                    />
                                                </div>
                                            )}
                                            <p>"{h.text}"</p>
                                            {h.note && <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#555' }}>{h.note}</p>}
                                            <div className={styles.footer}>
                                                <span>{urls.findIndex(u => u === h.bookUrl) > -1 ? `Panel ${urls.findIndex(u => u === h.bookUrl) + 1}` : 'Other Book'}</span>
                                                <div className={styles.actions}>
                                                    {!linkingSourceId && <button className={styles.link} onClick={() => enterLinkingMode(h.id)}>Link</button>}
                                                    <button className={styles.jump} onClick={() => {
                                                        // 1. Identify Cluster
                                                        const cluster = new Set<string>([h.id]);
                                                        const queue = [h.id];
                                                        const visited = new Set<string>();

                                                        // Re-use logic or helper if we extract it, but for now inline BFS for clarity
                                                        // (Ideally we would have a 'getCluster(h.id)' helper)
                                                        while (queue.length > 0) {
                                                            const currentId = queue.shift()!;
                                                            if (visited.has(currentId)) continue;
                                                            visited.add(currentId);
                                                            cluster.add(currentId);

                                                            const currentH = highlights.find(item => item.id === currentId);
                                                            if (currentH && currentH.linkedIds) {
                                                                currentH.linkedIds.forEach(lid => {
                                                                    if (!visited.has(lid)) queue.push(lid);
                                                                });
                                                            }
                                                        }

                                                        // 2. Iterate cluster and jump each panel
                                                        cluster.forEach(cid => {
                                                            const targetH = highlights.find(item => item.id === cid);
                                                            if (targetH) {
                                                                // Find if this book is open in any panel
                                                                // (Handle duplicate opens? For now, jump first match or all matches?)
                                                                // Let's matching all panels displaying this book
                                                                urls.forEach((url, uIdx) => {
                                                                    if (url === targetH.bookUrl) {
                                                                        renditionRefs.current[uIdx]?.display(targetH.cfiRange);
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }}>Jump</button>
                                                    {!linkingSourceId && <button className={styles.delete} onClick={() => deleteHighlight(h.id, h.cfiRange, urls.indexOf(h.bookUrl))}>Delete</button>}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
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
                            <HighlightMenu
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