import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const highlightPath = path.join(process.cwd(), 'public/highlights.json');

// Interface matching the front-end structure we will use
interface Highlight {
    id: string;
    cfiRange: string;
    text: string;
    bookUrl: string;
    color?: string;
    created: number;
}

// GET: Retrieve all highlights
export async function GET() {
    try {
        if (!fs.existsSync(highlightPath)) {
            return NextResponse.json([]);
        }
        const fileContent = fs.readFileSync(highlightPath, 'utf-8');
        const highlights = JSON.parse(fileContent);
        return NextResponse.json(highlights);
    } catch (error) {
        console.error('Error reading highlights:', error);
        return NextResponse.json([]);
    }
}

// POST: Save a new highlight
export async function POST(req: Request) {
    try {
        const newHighlight: Highlight = await req.json();

        let highlights: Highlight[] = [];
        if (fs.existsSync(highlightPath)) {
            const fileContent = fs.readFileSync(highlightPath, 'utf-8');
            highlights = JSON.parse(fileContent);
        }

        highlights.push(newHighlight);
        fs.writeFileSync(highlightPath, JSON.stringify(highlights, null, 2));

        return NextResponse.json({ success: true, highlights });
    } catch (error) {
        console.error('Error saving highlight:', error);
        return NextResponse.json({ error: 'Failed to save highlight' }, { status: 500 });
    }
}

// DELETE: Remove a highlight
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();

        if (!fs.existsSync(highlightPath)) {
            return NextResponse.json({ success: false, message: "No file" });
        }

        const fileContent = fs.readFileSync(highlightPath, 'utf-8');
        let highlights: Highlight[] = JSON.parse(fileContent);

        highlights = highlights.filter(h => h.id !== id);

        fs.writeFileSync(highlightPath, JSON.stringify(highlights, null, 2));
        return NextResponse.json({ success: true, highlights });

    } catch (error) {
        console.error('Error deleting highlight:', error);
        return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
    }
}
