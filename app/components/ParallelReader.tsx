'use client';

import React, { useState, useRef } from 'react';
import { ReactReader } from 'react-reader';
import styles from './ParallelReader.module.scss';

// Define a type for the location (can be a string CFI or integer 0)
type LocationType = string | number;

export default function ParallelReader() {
    // --- State ---
    const [urls, setUrls] = useState<string[]>(['/books/alice.epub', '/books/moby-dick.epub']);
    const [count, setCount] = useState(2);
    const [isLocked, setIsLocked] = useState(false);

    // NEW: We must track the location of each book individually
    const [locations, setLocations] = useState<LocationType[]>([0, 0, 0]);

    const renditionRefs = useRef<(any | null)[]>([]);

    // --- Handlers ---

    const getRendition = (index: number, rendition: any) => {
        renditionRefs.current[index] = rendition;

        // Inject styles INSIDE the iframe (SASS cannot reach here)
        rendition.themes.default({
            'p': {
                'font-family': 'Helvetica, sans-serif',
                'font-size': '1.1rem',
                'line-height': '1.6'
            },
            'div': { 'padding-bottom': '20px' }
        });
    };

    const handleLocationChange = (index: number, newLocation: LocationType) => {
        // 1. Update the state for THIS book so it doesn't get "stuck"
        const newLocations = [...locations];
        newLocations[index] = newLocation;
        setLocations(newLocations);

        // 2. The Sync Logic (If locked)
        if (isLocked) {
            // We need to access the "internal" epub location object to get percentage
            // The 'newLocation' argument is just a CFI string, which isn't enough for math.
            // So we ask the current rendition instance for its current percentage.
            const currentRendition = renditionRefs.current[index];
            const currentLocationObj = currentRendition?.location?.start;

            const percentage = currentLocationObj?.percentage;

            if (percentage >= 0) {
                renditionRefs.current.forEach((ref, refIndex) => {
                    // Sync everyone ELSE
                    if (refIndex !== index && ref) {
                        // We use .display(percentage) to jump them
                        ref.display(percentage);

                        // Note: We generally do NOT update the 'locations' state for the 
                        // passive books here to avoid race conditions. 
                        // We let the engine move them.
                    }
                });
            }
        }
    };

    const updateUrl = (index: number, newUrl: string) => {
        const newUrls = [...urls];
        newUrls[index] = newUrl;
        setUrls(newUrls);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Parallel Reader</h1>
                <div className={styles.controls}>
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
                    <button
                        onClick={() => setIsLocked(!isLocked)}
                        className={`${styles.syncButton} ${isLocked ? styles.locked : styles.unlocked}`}
                    >
                        {isLocked ? '🔓 Sync Locked' : '🔒 Sync Unlocked'}
                    </button>
                </div>
            </div>

            <div className={styles.grid}>
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
                                location={locations[index]}

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
        </div>
    );
}