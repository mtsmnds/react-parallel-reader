'use client';

import React, { useState, useRef } from 'react';
import { ReactReader } from 'react-reader';
import styles from './ParallelReader.module.scss'; // Import the SASS module

export default function ParallelReader() {
    // --- State ---
    const [urls, setUrls] = useState<string[]>(['/alice.epub', '/moby-dick.epub']);
    const [count, setCount] = useState(2);
    const [isLocked, setIsLocked] = useState(false);

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

    const handleLocationChange = (index: number, location: any) => {
        if (!isLocked) return;

        const currentPercentage = location?.start?.percentage;

        if (currentPercentage >= 0) {
            renditionRefs.current.forEach((ref, refIndex) => {
                if (refIndex !== index && ref) {
                    ref.display(currentPercentage);
                }
            });
        }
    };

    const updateUrl = (index: number, newUrl: string) => {
        const newUrls = [...urls];
        newUrls[index] = newUrl;
        setUrls(newUrls);
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <h1>Parallel Reader</h1>

                <div className={styles.controls}>
                    {/* Panel Count */}
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

                    {/* Sync Toggle */}
                    <button
                        onClick={() => setIsLocked(!isLocked)}
                        className={`${styles.syncButton} ${isLocked ? styles.locked : styles.unlocked}`}
                    >
                        {isLocked ? '🔓 Sync Locked' : '🔒 Sync Unlocked'}
                    </button>
                </div>
            </div>

            {/* Grid */}
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

                        {/* Reader Container */}
                        <div className={styles.readerWrapper}>
                            <ReactReader
                                url={urls[index]}
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