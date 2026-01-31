import React, { useState } from 'react';
import styles from './HighlightMenu.module.scss';
import { Highlight } from '../../types/epub';

interface HighlightMenuProps {
    initialData?: Partial<Highlight>;
    onSave: (data: { color: string; style: 'highlight' | 'underline'; note: string }) => void;
    onCancel: () => void;
    onDelete?: () => void;
    onJump?: () => void;
    isEditing: boolean;
}

export default function HighlightMenu({ initialData, onSave, onCancel, onDelete, onJump, isEditing }: HighlightMenuProps) {
    const [color, setColor] = useState(initialData?.color || '#ffeb3b');
    const [style, setStyle] = useState<'highlight' | 'underline'>(initialData?.style || 'underline');
    const [note, setNote] = useState(initialData?.note || '');

    const colors = [
        '#ffeb3b', // Yellow
        '#58e5f5ff', // Cyan
        '#58f68fff', // Green
        '#f59bceff', // Pink
        '#a457f7ff'  // Purple
    ];

    return (
        <div className={styles.highlightMenu}>
            {/* Context Actions (only for existing) */}
            {isEditing && (
                <div className={styles.menuHeader}>
                    {onJump && <button onClick={onJump} className={styles.iconBtn} title="Jump to location">📍</button>}
                    {onDelete && <button onClick={onDelete} className={styles.iconBtn} title="Delete">🗑️</button>}
                    <span className={styles.spacer} />
                    <button onClick={onCancel} className={styles.closeBtn}>×</button>
                </div>
            )}

            {!isEditing && (
                <div className={styles.menuHeaderSimple}>
                    <strong>Add Annotation</strong>
                    <button onClick={onCancel} className={styles.closeBtn}>×</button>
                </div>
            )}

            <div className={styles.row}>
                <label>Style:</label>
                <div className={styles.toggleGroup}>
                    <button
                        className={style === 'highlight' ? styles.active : ''}
                        onClick={() => setStyle('highlight')}
                    >
                        Highlight
                    </button>
                    <button
                        className={style === 'underline' ? styles.active : ''}
                        onClick={() => setStyle('underline')}
                    >
                        Underline
                    </button>
                </div>
            </div>

            <div className={styles.row}>
                <label>Color:</label>
                <div className={styles.colorSwatches}>
                    {colors.map(c => (
                        <button
                            key={c}
                            style={{ backgroundColor: c, border: color === c ? '2px solid #555' : '1px solid #ddd' }}
                            onClick={() => setColor(c)}
                            className={styles.swatch}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.noteParams}>
                <textarea
                    placeholder="Add a note..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                />
            </div>

            <div className={styles.actions}>
                <button className={styles.saveBtn} onClick={() => onSave({ color, style, note })}>
                    {isEditing ? 'Update' : 'Save'}
                </button>
            </div>
        </div>
    );
}
