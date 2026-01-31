

## How to Use

### Adding Books (Dynamic Bookshelf)

The app connects to the `public/books/` directory. Typically, you will create a subfolder for each "collection" or "comparison set".

1.  **Create a folder**: `public/books/my-comparison/`
2.  **Add EPUBs**: Drop your `.epub` files into that folder.
3.  **Refresh**: Reload the page. Your new collection will appear in the Bookshelf list.

### Reading

- Click a collection card to open the **Parallel Reader**.
- Use the **Panel Controls** (1, 2, 3) to adjust the number of visible panels.
- Paste a URL or let the bookshelf autoload your files.
- Click **← Back** to return to the library.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Customization

### Editing Highlight Styles

Highlights are rendered as SVG overlays on top of the text.

1.  **Base Styles (Opacity, Blending):**
    *   Edit `app/globals.css`.
    *   Look for `.hl-highlight` and `.hl-underline` classes at the bottom of the file.
    *   Here you can change `fill-opacity` and `mix-blend-mode`.

2.  **Highlight Colors:**
    *   Colors are defined in the `HighlightMenu` component and applied dynamically.
    *   The application logic for applying these colors is in `app/components/ParallelReader.tsx`.
