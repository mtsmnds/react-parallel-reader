import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

// Interface matching the front-end structure we will use
interface Highlight {
    id: string;
    cfiRange: string;
    text: string;
    bookUrl: string;
    color?: string;
    created: number;
    linkedIds?: string[];
}

// Helper to get highlight path from a book URL
// bookUrl example: "/books/alice.epub" or "/books/collection-a/book.epub"
function getHighlightPath(bookUrl: string): string | null {
    if (!bookUrl) return null;

    // Remove leading slash if present for path joining
    const safeUrl = bookUrl.startsWith('/') ? bookUrl.slice(1) : bookUrl;

    // Get the directory of the book
    // public/books/alice.epub -> public/books
    // public/books/collection/alice.epub -> public/books/collection
    const bookDir = path.dirname(safeUrl);

    return path.join(process.cwd(), 'public', bookDir, 'highlights.json');
}

// GET: Retrieve all highlights for the requested books
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const urlsParam = searchParams.get('urls');

        if (!urlsParam) {
            // Fallback to global if no urls provided, or return empty?
            // For backward compatibility during migration, we could check global, 
            // but let's stick to the plan of collection-based.
            // If no URLs, we can't know where to look, so return empty.
            return NextResponse.json([]);
        }

        const urls = urlsParam.split(',').filter(Boolean);
        let allHighlights: Highlight[] = [];

        // We need to deduplicate paths to avoid reading same file twice
        // (though unlikely if urls are distinct books in same dir)
        const pathsToCheck = new Set<string>();

        urls.forEach(url => {
            const p = getHighlightPath(url);
            if (p) pathsToCheck.add(p);
        });

        for (const highlightPath of pathsToCheck) {
            if (fs.existsSync(highlightPath)) {
                try {
                    const fileContent = fs.readFileSync(highlightPath, 'utf-8');
                    const fileHighlights: Highlight[] = JSON.parse(fileContent);
                    allHighlights = allHighlights.concat(fileHighlights);
                } catch (e) {
                    console.error(`Error reading highlights from ${highlightPath}:`, e);
                }
            }
        }

        return NextResponse.json(allHighlights);
    } catch (error) {
        console.error('Error reading highlights:', error);
        return NextResponse.json([]);
    }
}

// POST: Save a new highlight
export async function POST(req: Request) {
    try {
        const newHighlight: Highlight = await req.json();

        if (!newHighlight.bookUrl) {
            return NextResponse.json({ error: 'bookUrl is required' }, { status: 400 });
        }

        const highlightPath = getHighlightPath(newHighlight.bookUrl);

        if (!highlightPath) {
            return NextResponse.json({ error: 'Invalid bookUrl' }, { status: 400 });
        }

        let highlights: Highlight[] = [];

        // Ensure directory exists (it should, since the book exists there, but good practice)
        // actually we assume the book folders exist. 

        if (fs.existsSync(highlightPath)) {
            const fileContent = fs.readFileSync(highlightPath, 'utf-8');
            try {
                highlights = JSON.parse(fileContent);
            } catch (e) {
                // if corrupt, start fresh
                highlights = [];
            }
        }

        highlights.push(newHighlight);
        fs.writeFileSync(highlightPath, JSON.stringify(highlights, null, 2));

        return NextResponse.json({ success: true, highlights });
    } catch (error) {
        console.error('Error saving highlight:', error);
        return NextResponse.json({ error: 'Failed to save highlight' }, { status: 500 });
    }
}

// PUT: Batch update highlights (used for linking)
export async function PUT(req: Request) {
    try {
        const highlightsToUpdate: Highlight[] = await req.json();

        if (!Array.isArray(highlightsToUpdate) || highlightsToUpdate.length === 0) {
            return NextResponse.json({ error: 'Array of highlights required' }, { status: 400 });
        }

        // Group updates by file path
        const updatesByPath: Record<string, Highlight[]> = {};

        for (const h of highlightsToUpdate) {
            const p = getHighlightPath(h.bookUrl);
            if (p) {
                if (!updatesByPath[p]) updatesByPath[p] = [];
                updatesByPath[p].push(h);
            }
        }

        // Process each file
        for (const [filePath, updates] of Object.entries(updatesByPath)) {
            if (fs.existsSync(filePath)) {
                try {
                    const fileContent = fs.readFileSync(filePath, 'utf-8');
                    let storedHighlights: Highlight[] = JSON.parse(fileContent);

                    // Update existing highlights
                    const updateMap = new Map(updates.map(u => [u.id, u]));

                    storedHighlights = storedHighlights.map(h => {
                        if (updateMap.has(h.id)) {
                            // Merge updates (specifically linkedIds)
                            return { ...h, ...updateMap.get(h.id) };
                        }
                        return h;
                    });

                    fs.writeFileSync(filePath, JSON.stringify(storedHighlights, null, 2));
                } catch (e) {
                    console.error(`Error updating file ${filePath}:`, e);
                }
            }
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error updating highlights:', error);
        return NextResponse.json({ error: 'Failed to update highlights' }, { status: 500 });
    }
}

// DELETE: Remove a highlight
export async function DELETE(req: Request) {
    try {
        // We need bookUrl to know which file to modify
        const { id, bookUrl } = await req.json();

        if (!bookUrl) {
            return NextResponse.json({ error: 'bookUrl is required for deletion' }, { status: 400 });
        }

        const highlightPath = getHighlightPath(bookUrl);
        if (!highlightPath || !fs.existsSync(highlightPath)) {
            return NextResponse.json({ success: false, message: "No highlight file found" });
        }

        const fileContent = fs.readFileSync(highlightPath, 'utf-8');
        let highlights: Highlight[] = JSON.parse(fileContent);

        const initialLength = highlights.length;
        highlights = highlights.filter(h => h.id !== id);

        if (highlights.length === initialLength) {
            return NextResponse.json({ success: false, message: "Highlight not found" });
        }

        fs.writeFileSync(highlightPath, JSON.stringify(highlights, null, 2));
        return NextResponse.json({ success: true, highlights });

    } catch (error) {
        console.error('Error deleting highlight:', error);
        return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
    }
}
