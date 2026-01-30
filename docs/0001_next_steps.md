
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