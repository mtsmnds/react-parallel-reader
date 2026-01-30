(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/ParallelReader.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/app/components/ParallelReader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParallelReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reader$2f$dist$2f$react$2d$reader$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-reader/dist/react-reader.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/ParallelReader.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ParallelReader() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "867413517b11631e04f541fbf7b885e38c142db7746610aa4116908046353d53") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "867413517b11631e04f541fbf7b885e38c142db7746610aa4116908046353d53";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "/books/alice.epub",
            "/books/moby-dick.epub"
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [urls, setUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [isLocked, setIsLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            0,
            0,
            0
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const renditionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ParallelReader[getRendition]": (index, rendition)=>{
                renditionRefs.current[index] = rendition;
                rendition.themes.default({
                    "p": {
                        "font-family": "Helvetica, sans-serif",
                        "font-size": "1.1rem",
                        "line-height": "1.6"
                    },
                    "div": {
                        "padding-bottom": "20px"
                    }
                });
            }
        })["ParallelReader[getRendition]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const getRendition = t3;
    let t4;
    if ($[5] !== isLocked || $[6] !== locations) {
        t4 = ({
            "ParallelReader[handleLocationChange]": (index_0, newLocation)=>{
                const newLocations = [
                    ...locations
                ];
                newLocations[index_0] = newLocation;
                setLocations(newLocations);
                if (isLocked) {
                    const currentRendition = renditionRefs.current[index_0];
                    const currentLocationObj = currentRendition?.location?.start;
                    const percentage = currentLocationObj?.percentage;
                    if (percentage >= 0) {
                        renditionRefs.current.forEach({
                            "ParallelReader[handleLocationChange > renditionRefs.current.forEach()]": (ref, refIndex)=>{
                                if (refIndex !== index_0 && ref) {
                                    ref.display(percentage);
                                }
                            }
                        }["ParallelReader[handleLocationChange > renditionRefs.current.forEach()]"]);
                    }
                }
            }
        })["ParallelReader[handleLocationChange]"];
        $[5] = isLocked;
        $[6] = locations;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleLocationChange = t4;
    let t5;
    if ($[8] !== urls) {
        t5 = ({
            "ParallelReader[updateUrl]": (index_1, newUrl)=>{
                const newUrls = [
                    ...urls
                ];
                newUrls[index_1] = newUrl;
                setUrls(newUrls);
            }
        })["ParallelReader[updateUrl]"];
        $[8] = urls;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const updateUrl = t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Parallel Reader"
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            1,
            2,
            3
        ];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== count) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGroup,
            children: t7.map({
                "ParallelReader[(anonymous)()]": (num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ParallelReader[(anonymous)() > <button>.onClick]": ()=>setCount(num)
                        }["ParallelReader[(anonymous)() > <button>.onClick]"],
                        className: count === num ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inactive,
                        children: [
                            num,
                            " Panel",
                            num > 1 && "s"
                        ]
                    }, num, true, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 128,
                        columnNumber: 49
                    }, this)
            }["ParallelReader[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[12] = count;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== isLocked) {
        t9 = ({
            "ParallelReader[<button>.onClick]": ()=>setIsLocked(!isLocked)
        })["ParallelReader[<button>.onClick]"];
        $[14] = isLocked;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const t10 = `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].syncButton} ${isLocked ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].locked : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unlocked}`;
    const t11 = isLocked ? "\uD83D\uDD13 Sync Locked" : "\uD83D\uDD12 Sync Unlocked";
    let t12;
    if ($[16] !== t10 || $[17] !== t11 || $[18] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
        $[18] = t9;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t12 || $[21] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                    children: [
                        t8,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ParallelReader.tsx",
                    lineNumber: 161,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t8;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== count) {
        t14 = Array.from({
            length: count
        });
        $[23] = count;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== count || $[26] !== handleLocationChange || $[27] !== locations || $[28] !== t14 || $[29] !== updateUrl || $[30] !== urls) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            children: t14.map({
                "ParallelReader[(anonymous)()]": (_, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        style: {
                            maxWidth: `${100 / count}%`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Paste EPUB URL here...",
                                    value: urls[index_2] || "",
                                    onChange: {
                                        "ParallelReader[(anonymous)() > <input>.onChange]": (e)=>updateUrl(index_2, e.target.value)
                                    }["ParallelReader[(anonymous)() > <input>.onChange]"]
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                    lineNumber: 183,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 183,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readerWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reader$2f$dist$2f$react$2d$reader$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReader"], {
                                    url: urls[index_2],
                                    location: locations[index_2],
                                    locationChanged: {
                                        "ParallelReader[(anonymous)() > <ReactReader>.locationChanged]": (loc)=>handleLocationChange(index_2, loc)
                                    }["ParallelReader[(anonymous)() > <ReactReader>.locationChanged]"],
                                    getRendition: {
                                        "ParallelReader[(anonymous)() > <ReactReader>.getRendition]": (rendition_0)=>getRendition(index_2, rendition_0)
                                    }["ParallelReader[(anonymous)() > <ReactReader>.getRendition]"],
                                    epubOptions: {
                                        flow: "scrolled",
                                        manager: "continuous"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                    lineNumber: 185,
                                    columnNumber: 114
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 185,
                                columnNumber: 76
                            }, this)
                        ]
                    }, index_2, true, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 181,
                        columnNumber: 58
                    }, this)
            }["ParallelReader[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[25] = count;
        $[26] = handleLocationChange;
        $[27] = locations;
        $[28] = t14;
        $[29] = updateUrl;
        $[30] = urls;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t13 || $[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[32] = t13;
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    return t16;
}
_s(ParallelReader, "C4YS8WV7CX2XK4PTzbKge7dnkCM=");
_c = ParallelReader;
var _c;
__turbopack_context__.k.register(_c, "ParallelReader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_9a430b69._.js.map