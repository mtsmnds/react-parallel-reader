import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
    const booksDirectory = path.join(process.cwd(), 'public/books');

    try {
        // Ensure directory exists
        if (!fs.existsSync(booksDirectory)) {
            return NextResponse.json([]);
        }

        const items = fs.readdirSync(booksDirectory);

        // We look for subdirectories that act as "collections"
        const collections = items
            .filter((item) => {
                const fullPath = path.join(booksDirectory, item);
                return fs.statSync(fullPath).isDirectory();
            })
            .map((dirName) => {
                const dirPath = path.join(booksDirectory, dirName);
                const files = fs.readdirSync(dirPath)
                    .filter((file) => file.endsWith('.epub'))
                    .map((file) => `/books/${dirName}/${file}`);

                return {
                    name: dirName,
                    files,
                };
            })
            .filter((collection) => collection.files.length > 0);

        return NextResponse.json(collections);
    } catch (error) {
        console.error('Error reading books directory:', error);
        return NextResponse.json({ error: 'Failed to read books' }, { status: 500 });
    }
}
