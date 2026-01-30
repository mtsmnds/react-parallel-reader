
# Project Status: React Parallel Reader

**Date:** 2026-01-30
**Version:** 0.1.0 (Alpha)
**Owner:** Engineering (Feature Team A)

## 1. Executive Summary
**React Parallel Reader** is a specialized web application designed to render multiple EPUB files side-by-side in a single viewport. Unlike standard readers that prioritize single-stream paginated reading, this tool focuses on **comparative analysis** (e.g., translations, versions) using a **continuous scroll** paradigm.


## 2. Technical Architecture

### Core Stack
* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript
* **Styling:** SASS Modules (`.module.scss`) for scoped, conflict-free styling.
* **Rendering Engine:** `react-reader` (wrapper for `epub.js` v0.3).

### Key Components
* **`ParallelReader.tsx`**: The orchestrator. It manages the state for $N$ reader instances, handles the synchronization logic, and controls the DOM layout.
* **Sync Engine**: A custom logic layer that intercepts `locationChanged` events from the active "driver" panel and programmatically forces "passenger" panels to a matching percentage (`rendition.display(percentage)`). (will be scraped/changed)

## 3. Current Feature Set
| Feature | Status | Notes |
| :--- | :--- | :--- |
| **Multi-Panel Layout** | ✅ Production | Supports 1, 2, or 3 dynamic panels. |
| **Continuous Scroll** | ✅ Production | Overrides default pagination for "web-like" scrolling. |
| **Sync Locking** | ⚠️ Beta | Percentage-based sync. Functional but approximate (drift occurs in chapters with high variance in length). |
| **Styling** | ✅ Production | Custom SASS injection into shadow DOM/Iframes. |
| **Local Loading** | ❌ Pending | Currently relies on `public/` URL paths. Drag-and-drop needed. |

## 4. Known Issues / Debt
1.  **Type Safety**: The `rendition` object is currently typed as `any`.
2.  **Performance**: Syncing 3 panels simultaneously can cause minor frame drops on lower-end devices due to multiple DOM reflows inside the iframes.
3.  **Security**: Current implementation requires files to be hosted in `public/`. Local file streaming is the next priority.