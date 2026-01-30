
# Engineering Handoff: Immediate Action Items
**Priority:** High
**Context:** Preparing the codebase for Alpha release and strict type compliance.

## Action Item 1: Strict Typing Implementation
**Objective:** Eliminate `any` usage in `ParallelReader.tsx` to ensure stability during `epub.js` interaction.

Create a definitions file at `types/epub.d.ts` (or within the component folder) to handle the `epub.js` specific structures that `react-reader` exposes.

```typescript
// types/index.ts

export type LocationChanged = {
  start: {
    index: number;
    href: string;
    cfi: string;
    percentage: number; // Critical for our Sync Logic
  };
  end: {
    index: number;
    href: string;
    cfi: string;
    percentage: number;
  };
};

export type Rendition = {
  themes: {
    default: (styles: Record<string, any>) => void;
  };
  display: (target?: string | number) => Promise<void>;
  location: {
    start: {
      percentage: number;
      cfi: string;
    };
  };
};

// Update ParallelReader.tsx refs with:
// const renditionRefs = useRef<(Rendition | null)[]>([]);

```

## Action Item 2: Route Implementation
**Status:** ✅ Complete
Objective: Mount the component in the Next.js App Router.

We are utilizing a clean page.tsx to keep the logic isolated in the component.

File: app/page.tsx

```TypeScript
import ParallelReader from "./components/ParallelReader";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* The ParallelReader handles its own layout and height.
        We simply mount it as the root element.
      */}
      <ParallelReader />
    </main>
  );
}

```

## Action Item 3: Asset Structure
**Status:** ✅ Complete
Objective: Verify the environment for local testing before the File Upload feature is built.

Since browsers block file:// protocol requests for security, epub.js cannot read files from your hard drive unless they are served via HTTP or converted to Blobs. For Phase 1 (MVP), we serve them statically.

Required Directory Structure:

```Plaintext
/
├── app/
│   ├── components/
│   │   ├── ParallelReader.tsx
│   │   └── ParallelReader.module.scss
│   └── page.tsx
├── public/                 <-- ACTION REQUIRED
│   ├── books/              <-- Create this folder
│   │   ├── alice.epub      <-- Place test file 1 here
│   │   └── moby-dick.epub  <-- Place test file 2 here
└── package.json
```

Testing: Once the folder is created and files are added, update the default state in ParallelReader.tsx to test the load:

```TypeScript
const [urls, setUrls] = useState<string[]>([
  '/books/alice.epub', 
  '/books/moby-dick.epub'
]);

```

## Action Item 4: Remove Legacy Sync Engine
**Objective:** Decommission the current percentage-based sync logic ("Scrap it").
**Reasoning:** The current `percentage` based sync is inaccurate and buggy. It provides a poor user experience.
**Tasks:**
1. Remove `isLocked` state and UI toggle from `ParallelReader.tsx`.
2. Remove `handleLocationChange` sync logic (keep local state updates).
3. Clean up unused styling related to the sync button.
4. **Research:** Investigate `epubjs` CFI comparison or Chapter-based index matching for future sync implementation.

## Action Item 5: Unified Styling System
**Objective:** Enforce consistent visual rhythm (font, size, spacing) across all open books, overriding their internal styles.
**Implementation Plan:**
1. **Global Style Config:** Create a state object for reader preferences (e.g., `{ fontSize: '100%', fontFamily: 'Helvetica', lineHeight: '1.6' }`).
2. **Injection:** Use the `rendition.themes.default` or `rendition.themes.register` method to inject these styles into the iframe.
   - *Note:* We may need to use `!important` or specific selectors (`p`, `h1`, `div`) to override book defaults.
3. **UI Controls:** Add a settings toolbar (separate from the book inputs) to adjust these values globally.

## Action Item 6: Annotations & Highlights
**Objective:** Allow users to highlight text and persist these highlights locally.
**Implementation Plan:**
1. **Interaction:** Enable selection in `react-reader` (ensure `epubjs` default selection behavior is active).
2. **Event Handling:** Listen for the `selected` event on the rendition object.
   - Extract the `CFI Range` and the selected text.
3. **Persistence (MVP - Local File):**
   - Create a Next.js API Route (`app/api/highlights/route.ts`) to read/write to `public/highlights.json`.
   - *Warning:* Writing to `public` in production is ephemeral/read-only in Vercel. This is strictly for local dev/MVP.
4. **UI:**
   - Display a list of highlights in a sidebar or drawer.
   - Clicking a highlight uses `rendition.display(cfiRange)` to jump to location.
   - Add delete functionality.