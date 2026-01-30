import React, { useState, useRef, useEffect } from 'react';
import { ReactReader } from 'react-reader';
import { useDebounce } from '../hooks/useDebounce';
import styles from './ParallelReader.module.scss';
import type { Rendition, Highlight } from '../../types/epub';

// Define a type for the location (can be a string CFI or integer 0)
type LocationType = string | number;

interface ParallelReaderProps {
    initialUrls: string[];
    onBack?: () => void;
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

    const renditionRefs = useRef<(Rendition | null)[]>([]);

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

    // Load highlights on mount
    useEffect(() => {
        fetch('/api/highlights')
            .then(res => res.json())
            .then(data => setHighlights(data))
            .catch(err => console.error("Error loading highlights:", err));
    }, []);

    // --- Handlers ---

    const getRendition = (index: number, rendition: Rendition) => {
        renditionRefs.current[index] = rendition;

        // Inject styles INSIDE the iframe (SASS cannot reach here)
        rendition.themes.default({
            'p': {
                'font-family': 'Helvetica, sans-serif',
                'font-size': '1.1rem',
                'line-height': '1.6'
            },
            'div': { 'padding-bottom': '20px' },
            '::selection': {
                'background': 'rgba(255, 255, 0, 0.3)'
            },
            '.hl-class': {
                'fill': 'yellow',
                'fill-opacity': '0.3',
                'mix-blend-mode': 'multiply'
            }
        });

        // Apply existing highlights for this book
        const bookHighlights = highlights.filter(h => h.bookUrl === urls[index]);
        bookHighlights.forEach(h => {
            rendition.annotations.add('highlight', h.cfiRange, {}, null, 'hl-class');
        });


        // Listen for new selections
        rendition.on('selected', (cfiRange: string, contents: any) => {
            const range = rendition.getRange(cfiRange);
            const text = range.toString();

            // Persist
            const newHighlight: Highlight = {
                id: Date.now().toString(),
                cfiRange,
                text,
                bookUrl: urls[index],
                color: '#ffeb3b',
                created: Date.now()
            };

            fetch('/api/highlights', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newHighlight)
            }).then(res => res.json())
                .then(() => {
                    setHighlights(prev => [...prev, newHighlight]);
                    rendition.annotations.add('highlight', cfiRange, {}, null, 'hl-class');
                    // Clear selection to avoid visual clutter
                    const selection = contents.window.getSelection();
                    selection?.removeAllRanges();
                });
        });
    };

    // Re-apply highlights if they change (e.g. added from another panel or loaded)
    useEffect(() => {
        renditionRefs.current.forEach((rendition, index) => {
            if (rendition) {
                const bookHighlights = highlights.filter(h => h.bookUrl === urls[index]);
                bookHighlights.forEach(h => {
                    // Adding same annotation twice is usually safe or ignored by epubjs, 
                    // but ideally we check. For MVP, simply adding is okay.
                    rendition.annotations.add('highlight', h.cfiRange, {}, null, 'hl-class');
                });
            }
        });
    }, [highlights, urls]);


    const handleLocationChange = (index: number, newLocation: LocationType) => {
        // 1. Update the state for THIS book so it doesn't get "stuck"
        const newLocations = [...locations];
        newLocations[index] = newLocation;
        setLocations(newLocations);

        // 2. Persist
        if (urls[index]) {
            debouncedSave(urls[index], newLocation);
        }
    };

    const updateUrl = (index: number, newUrl: string) => {
        const newUrls = [...urls];
        newUrls[index] = newUrl;
        setUrls(newUrls);
    };

    const deleteHighlight = async (id: string, cfiRange: string, bookIndex: number) => {
        // Optimistic update
        setHighlights(prev => prev.filter(h => h.id !== id));

        // Remove from rendition
        const rendition = renditionRefs.current[bookIndex];
        if (rendition) {
            rendition.annotations.remove(cfiRange, 'highlight');
        }

        await fetch('/api/highlights', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {onBack && (
                        <button
                            onClick={onBack}
                            className={styles.backButton}
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem'
                            }}
                        >
                            ← Back
                        </button>
                    )}
                    <h1>Parallel Reader</h1>
                </div>
                <div className={styles.controls}>
                    <div className={styles.buttonGroup}>
                        <button
                            onClick={() => setShowHighlights(!showHighlights)}
                            className={showHighlights ? styles.active : styles.inactive}
                        >
                            {showHighlights ? 'Hide Notes' : 'Show Notes'}
                        </button>
                    </div>

                    <div className={styles.buttonGroup}>
                        {[1, 2, 3].map(num => (
                            <button
                                key={num}
                                onClick={() => setCount(num)}
                                className={count === num ? styles.active : styles.inactive}
                            >
                                {num} Panel{num > 1 && 's'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {/* Main Reader Grid */}
                <div className={styles.grid} style={{ flex: showHighlights ? '0 0 75%' : '1' }}>
                    {Array.from({ length: count }).map((_, index) => (
                        <div
                            key={index}
                            className={styles.panel}
                            style={{ maxWidth: `${100 / count}%` }}
                        >
                            <div className={styles.inputWrapper}>
                                <input
                                    type="text"
                                    placeholder="Paste EPUB URL here..."
                                    value={urls[index] || ''}
                                    onChange={(e) => updateUrl(index, e.target.value)}
                                />
                            </div>

                            <div className={styles.readerWrapper}>
                                <ReactReader
                                    url={urls[index]}

                                    // REQUIRED PROP: Controls where the book is
                                    location={locations[index] || 0}

                                    // REQUIRED PROP: Updates the state when user scrolls
                                    locationChanged={(loc) => handleLocationChange(index, loc)}

                                    getRendition={(rendition) => getRendition(index, rendition)}
                                    epubOptions={{
                                        flow: "scrolled",
                                        manager: "continuous",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Highlights Sidebar */}
                {showHighlights && (
                    <div className={styles.sidebar}>
                        <h2>Annotations</h2>
                        {highlights.length === 0 && <p className={styles.emptyState}>Select text to highlight.</p>}

                        {highlights.map(h => (
                            <div key={h.id} className={styles.annotationCard}>
                                <p>"{h.text}"</p>
                                <div className={styles.footer}>
                                    <span>
                                        {/* Try to find which book this belongs to for display */}
                                        {urls.findIndex(u => u === h.bookUrl) > -1 ? `Panel ${urls.findIndex(u => u === h.bookUrl) + 1}` : 'Other Book'}
                                    </span>
                                    <div className={styles.actions}>
                                        <button
                                            className={styles.jump}
                                            onClick={() => {
                                                const idx = urls.indexOf(h.bookUrl);
                                                if (idx !== -1 && renditionRefs.current[idx]) {
                                                    renditionRefs.current[idx]?.display(h.cfiRange);
                                                }
                                            }}
                                        >
                                            Jump
                                        </button>
                                        <button
                                            className={styles.delete}
                                            onClick={() => deleteHighlight(h.id, h.cfiRange, urls.indexOf(h.bookUrl))}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}