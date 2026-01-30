'use client';

import React, { useEffect, useState } from 'react';
import type { BookCollection } from '../../types/epub';
import styles from './Bookshelf.module.scss';

interface BookshelfProps {
    onSelectCollection: (files: string[]) => void;
}

export default function Bookshelf({ onSelectCollection }: BookshelfProps) {
    const [collections, setCollections] = useState<BookCollection[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/books')
            .then((res) => res.json())
            .then((data) => {
                setCollections(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to load books:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className={styles.loading}>Loading library...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Collections</h1>

            {collections.length === 0 ? (
                <div className={styles.emptyState}>
                    <p>No collections found in <code>public/books/</code>.</p>
                    <p className={styles.subtitle}>Create a subfolder (e.g., <code>public/books/classics/</code>) and add EPUB files to start.</p>
                </div>
            ) : (
                <div className={styles.list}>
                    {collections.map((collection) => (
                        <div
                            key={collection.name}
                            className={styles.card}
                            onClick={() => onSelectCollection(collection.files)}
                        >
                            <div className={styles.cardContent}>
                                <div>
                                    <h3 className={styles.collectionName}>
                                        {collection.name.replace(/-/g, ' ')}
                                    </h3>
                                    <p className={styles.bookCount}>
                                        {collection.files.length} book{collection.files.length !== 1 && 's'}
                                    </p>
                                </div>
                                <div className={styles.arrow}>
                                    <span style={{ fontSize: '1.5rem' }}>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
