
# Engineering Handoff: Immediate Action Items
**Priority:** High
**Context:** Preparing the codebase for Alpha release and strict type compliance.

## Action Item 1: Strict Typing Implementation
**Status:** ✅ Complete
**Objective:** Eliminate `any` usage in `ParallelReader.tsx` to ensure stability during `epub.js` interaction.

Create a definitions file at `types/epub.d.ts` (or within the component folder) to handle the `epub.js` specific structures that `react-reader` exposes.

```typescript
// types/epub.d.ts


export type LocationChanged = {
  start: {
    index: number;
    href: string;
    cfi: string;
    percentage: number;
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
  display: {
    (target?: string): Promise<void>;
    (target?: number): Promise<void>;
  };
  location: {
    start: {
      percentage: number;
      cfi: string;
    };
  };
};
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
**Status:** ✅ Complete
**Objective:** Decommission the current percentage-based sync logic ("Scrap it").
**Reasoning:** The current `percentage` based sync is inaccurate and buggy. It provides a poor user experience.
**Tasks:**
1. Remove `isLocked` state and UI toggle from `ParallelReader.tsx`.
2. Remove `handleLocationChange` sync logic (keep local state updates).
3. Clean up unused styling related to the sync button.
4. **Research:** Investigate `epubjs` CFI comparison or Chapter-based index matching for future sync implementation.

## Action Item 5: Consistent Styling
**Status:** ✅ Complete
**Objective:** Enforce consistent visual rhythm (font, size, spacing) across all open books, overriding their internal styles.
**Implementation Plan:**
1. **Global Style Config:** Create a state object for reader preferences (e.g., `{ fontSize: '100%', fontFamily: 'Helvetica', lineHeight: '1.6' }`).
2. **Injection:** Use the `rendition.themes.default` or `rendition.themes.register` method to inject these styles into the iframe.
   - *Note:* We may need to use `!important` or specific selectors (`p`, `h1`, `div`) to override book defaults.
3. **UI Controls:** Add a settings toolbar (separate from the book inputs) to adjust these values globally.

## Action Item 6: Annotations & Highlights
**Status:** ✅ Complete
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

## Action Item 7: Dynamic Book Discovery (Bookshelf)
**Status:** ✅ Complete
**Objective:** Replace hardcoded files with a dynamic folder scanning system.
**User Story:** "As a user, I want to create arbitrary folders in `books/` (e.g., `books/comparison-a/`) and drop EPUBs there. The app should list these folders as collections."

**Implementation Plan:**
1. **API Route (`app/api/books/route.ts`)**:
   - Use `fs.readdir` to scan `public/books/`.
   - Return a JSON tree structure.
   - Ignore `.DS_Store` and non-epub files.
2. **Frontend ("Bookshelf" View)**:
   - Create a new component `Bookshelf.tsx` or update `page.tsx` conditional rendering.
   - On load, fetch `/api/books`.
   - Display a grid of "Collections" (folders).
   - Clicking a collection loads those specific URLs into the `ParallelReader`.
3. **Update `ParallelReader`**:
   - Accept `initialUrls` as a prop (optional) to override defaults.

## Action Item 8: Persistent Reading Progress
**Status:** ✅ Complete
**Objective:** Automatically save and restore the user's reading position for each book.
**User Story:** "When I close the app and reopen a collection, my books should open exactly where I left off."

**Strategy & Trade-offs:**
We have two main options for triggering the save:
1.  **Manual Save** (Button): User clicks "Save Progress".
    *   *Pro:* Predictable, no performance overhead.
    *   *Con:* High risk of data loss (user forgets). Disrupted flow.
2.  **Auto-Save** (On Scroll): Updates as user reads.
    *   *Pro:* Seamless, "magical" experience. Native app feel.
    *   *Con:* High write frequency if not handled correctly.
    *   *Decision:* **Auto-Save with Debouncing**. We will save the position automatically but debounce the writes (e.g., wait for 1000ms of inactivity) to prevent performance degradation or filesystem/storage thrashing.

**Implementation Plan:**
1.  **Storage Mechanism**: `localStorage` (Browser).
    *   Key: `parallel-reader-progress`
    *   Value: `Record<string, string>` where key is the **Book URL** and value is the **CFI** (Canonical Fragment Identifier).
    *   *Rationale*: Fast, synchronous, device-specific. Matches the "single user developer tool" architecture.
2.  **`ParallelReader` Updates**:
    *   **Hydration**: On component mount (or when `initialUrls` change), check `localStorage` for each URL. If a saved CFI exists, set the initial `location` state for that panel.
    *   **Saving**: Modify `handleLocationChange`. Create a `debouncedSave` function that updates `localStorage` only after the user stops scrolling for 1000ms.
    *   *Note*: The state `locations` will still update instantly to ensure the UI is responsive; only the persistence is debounced.

## Action Item 9: Advanced Annotation Features
**Objective:** Expand the basic highlighting system into a robust note-taking and cross-referencing tool.
**Tasks:**

### 9.1 Storage Refactor (Priority 1)
**Status:** ✅ Complete
**Reasoning:** Move from global `public/highlights.json` to collection-specific storage to support multiple libraries/folders separately.
- [x] **API Update**: Modify `app/api/highlights/route.ts` to determine storage path dynamically based on `bookUrl`.
- [x] **Frontend Update**: Update `ParallelReader.tsx` to fetch highlights for specific open books only (pass `urls` query param).
- [x] **Data Migration**: (Optional for MVP) Ensure new system gracefully handles empty states for new collections.

### 9.2 Rich Metadata highlights
- [ ] **Data Model**: Update `Highlight` interface to include:
    - `color`: string (hex code)
    - `style`: 'highlight' | 'underline'
    - `note`: string (user commentary)
- [ ] **UI/UX**:
    - Add color picker to the highlight popover (if possible) or sidebar.
    - Add text area for notes in the sidebar card.

### 9.3 Organization & Display
- [ ] **Sorting**: Ensure highlights are displayed in reading order (compare CFIs).
- [ ] **Grouping**: Display headers in the sidebar (e.g., "Chapter 1") and group highlights under them.
    - *Depedency*: Requires mapping CFIs to TOC items.

### 9.4 Cross-Linking (Deferred)
- [ ] Allow users to "connect" a highlight in Book A to a highlight in Book B.
- [ ] Visualize these connections (e.g., drawing lines or showing a "Related" badge).
## Action Item 10: Smooth Scrolling & Navigation Logic
**Objective:** Fix "finicky" scrolling behavior and improve jump-to-location accuracy.
**Context:** Users report scrolling fights back (stickiness) and jumps land inexactly.
**Investigation Strategy:**
1.  **`epub.js` Manager:** Experiment with `flow: "paginated"` vs `scrolled-continuous`. The current `manager: "continuous"` might be aggressively snapping.
2.  **Pre-rendering:** `epub.js` lazily renders. Jumping to a simplified CFI (like a chapter start) works, but a specific sentence CFI might fail if the chapter isn't fully rendered.
    -   *Solution:* Pre-load surrounding chapters? Use `display().then(() => render)`.
3.  **Debounce Tuning:** Ensure our `debouncedSave` isn't causing re-renders that reset scroll position.

## Action Item 12: Fix Duplicate Highlights Bug
**Status:** ✅ Complete
**Objective:** Prevent highlights from stacking visually, which prevents proper deletion.

**Issue:** Current `useEffect` re-adds existing highlights every time the state changes, causing duplicates in the `epub.js` rendition. Deleting allows one layer to remain.
**Plan:**
1. Refactor `ParallelReader.tsx` to track rendered highlight IDs.
2. Only add highlights that haven't been rendered yet.
3. Ensure deleted highlights are removed visually.

## Action Item 11: Consistent Styling Fix & Original Font Option

**Objective:** Fix "left book not updating" bug and add "Original Font" option.
**Context:** In current testing, the left book retains original font while the right one updates.
**Plan:**
1. Investigate `applyStyles` targeting (is it hitting all renditions?).
2. Add "Original" option to font family dropdown.

## Action Item 13: Refactor Text Selection & Highlights
**Priority:** High
**Objective:** Refactor the text selection behavior to prevent accidental highlighting ("trigger happy" behavior) and implement rich metadata.
**Context:** The current "Selection = Immediate Save" flow is poor UX. We need a deliberate "Add Highlight" flow.

**Interaction Flow:**
1. User selects text.
2. A popover button (+) appears near the selection.
3. User clicks (+) to open the Annotation Menu.
4. Menu allows selecting:
   - **Style:** Highlight vs Underline.
   - **Color:** Hex picker.
   - **Note:** Text input.
5. Actions: Save, Edit, Jump, Delete.
6. Persistence happens *only* on "Save".

**Data Model Updates:**
- Update `Highlight` interface to include `color`, `style`, `note`.
- Migrate/Update API to handle these fields.
