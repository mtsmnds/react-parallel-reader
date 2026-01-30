module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/ParallelReader.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "ParallelReader-module-scss-module__rbxfja__active",
  "buttonGroup": "ParallelReader-module-scss-module__rbxfja__buttonGroup",
  "container": "ParallelReader-module-scss-module__rbxfja__container",
  "controls": "ParallelReader-module-scss-module__rbxfja__controls",
  "grid": "ParallelReader-module-scss-module__rbxfja__grid",
  "header": "ParallelReader-module-scss-module__rbxfja__header",
  "inactive": "ParallelReader-module-scss-module__rbxfja__inactive",
  "inputWrapper": "ParallelReader-module-scss-module__rbxfja__inputWrapper",
  "locked": "ParallelReader-module-scss-module__rbxfja__locked",
  "panel": "ParallelReader-module-scss-module__rbxfja__panel",
  "readerWrapper": "ParallelReader-module-scss-module__rbxfja__readerWrapper",
  "syncButton": "ParallelReader-module-scss-module__rbxfja__syncButton",
  "unlocked": "ParallelReader-module-scss-module__rbxfja__unlocked",
});
}),
"[project]/app/components/ParallelReader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParallelReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reader$2f$dist$2f$react$2d$reader$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-reader/dist/react-reader.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/ParallelReader.module.scss [app-ssr] (css module)");
'use client';
;
;
;
;
function ParallelReader() {
    // --- State ---
    const [urls, setUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        '/books/alice.epub',
        '/books/moby-dick.epub'
    ]);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const [isLocked, setIsLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // NEW: We must track the location of each book individually
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0,
        0
    ]);
    const renditionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // --- Handlers ---
    const getRendition = (index, rendition)=>{
        renditionRefs.current[index] = rendition;
        // Inject styles INSIDE the iframe (SASS cannot reach here)
        rendition.themes.default({
            'p': {
                'font-family': 'Helvetica, sans-serif',
                'font-size': '1.1rem',
                'line-height': '1.6'
            },
            'div': {
                'padding-bottom': '20px'
            }
        });
    };
    const handleLocationChange = (index, newLocation)=>{
        // 1. Update the state for THIS book so it doesn't get "stuck"
        const newLocations = [
            ...locations
        ];
        newLocations[index] = newLocation;
        setLocations(newLocations);
        // 2. The Sync Logic (If locked)
        if (isLocked) {
            // We need to access the "internal" epub location object to get percentage
            // The 'newLocation' argument is just a CFI string, which isn't enough for math.
            // So we ask the current rendition instance for its current percentage.
            const currentRendition = renditionRefs.current[index];
            const currentLocationObj = currentRendition?.location?.start;
            const percentage = currentLocationObj?.percentage;
            if (percentage >= 0) {
                renditionRefs.current.forEach((ref, refIndex)=>{
                    // Sync everyone ELSE
                    if (refIndex !== index && ref) {
                        // We use .display(percentage) to jump them
                        ref.display(percentage);
                    // Note: We generally do NOT update the 'locations' state for the 
                    // passive books here to avoid race conditions. 
                    // We let the engine move them.
                    }
                });
            }
        }
    };
    const updateUrl = (index, newUrl)=>{
        const newUrls = [
            ...urls
        ];
        newUrls[index] = newUrl;
        setUrls(newUrls);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Parallel Reader"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonGroup,
                                children: [
                                    1,
                                    2,
                                    3
                                ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCount(num),
                                        className: count === num ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inactive,
                                        children: [
                                            num,
                                            " Panel",
                                            num > 1 && 's'
                                        ]
                                    }, num, true, {
                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsLocked(!isLocked),
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].syncButton} ${isLocked ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].locked : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].unlocked}`,
                                children: isLocked ? '🔓 Sync Locked' : '🔒 Sync Unlocked'
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParallelReader.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: Array.from({
                    length: count
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
                        style: {
                            maxWidth: `${100 / count}%`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Paste EPUB URL here...",
                                    value: urls[index] || '',
                                    onChange: (e)=>updateUrl(index, e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].readerWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reader$2f$dist$2f$react$2d$reader$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactReader"], {
                                    url: urls[index],
                                    // REQUIRED PROP: Controls where the book is
                                    location: locations[index],
                                    // REQUIRED PROP: Updates the state when user scrolls
                                    locationChanged: (loc)=>handleLocationChange(index, loc),
                                    getRendition: (rendition)=>getRendition(index, rendition),
                                    epubOptions: {
                                        flow: "scrolled",
                                        manager: "continuous"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 102,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/ParallelReader.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ParallelReader.tsx",
        lineNumber: 76,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1fb4b2cd._.js.map