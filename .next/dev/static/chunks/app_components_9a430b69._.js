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
  "panel": "ParallelReader-module-scss-module__rbxfja__panel",
  "readerWrapper": "ParallelReader-module-scss-module__rbxfja__readerWrapper",
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "780d16cabf44861fb0836101b976855bb74bcd7f37c79665845026983a0620cb") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "780d16cabf44861fb0836101b976855bb74bcd7f37c79665845026983a0620cb";
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
    if ($[5] !== locations) {
        t4 = ({
            "ParallelReader[handleLocationChange]": (index_0, newLocation)=>{
                const newLocations = [
                    ...locations
                ];
                newLocations[index_0] = newLocation;
                setLocations(newLocations);
            }
        })["ParallelReader[handleLocationChange]"];
        $[5] = locations;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleLocationChange = t4;
    let t5;
    if ($[7] !== urls) {
        t5 = ({
            "ParallelReader[updateUrl]": (index_1, newUrl)=>{
                const newUrls = [
                    ...urls
                ];
                newUrls[index_1] = newUrl;
                setUrls(newUrls);
            }
        })["ParallelReader[updateUrl]"];
        $[7] = urls;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const updateUrl = t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Parallel Reader"
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            1,
            2,
            3
        ];
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== count) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 113,
                                    columnNumber: 53
                                }, this)
                        }["ParallelReader[(anonymous)()]"])
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 112,
                        columnNumber: 78
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/ParallelReader.tsx",
                    lineNumber: 112,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[11] = count;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== count) {
        t9 = Array.from({
            length: count
        });
        $[13] = count;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== count || $[16] !== handleLocationChange || $[17] !== locations || $[18] !== t9 || $[19] !== updateUrl || $[20] !== urls) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            children: t9.map({
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
                                    lineNumber: 137,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 137,
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
                                    lineNumber: 139,
                                    columnNumber: 114
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 139,
                                columnNumber: 76
                            }, this)
                        ]
                    }, index_2, true, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 135,
                        columnNumber: 58
                    }, this)
            }["ParallelReader[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[15] = count;
        $[16] = handleLocationChange;
        $[17] = locations;
        $[18] = t9;
        $[19] = updateUrl;
        $[20] = urls;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t8;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    return t11;
}
_s(ParallelReader, "QcsyH4YMNvJTOijrq4bggnXjy+8=");
_c = ParallelReader;
var _c;
__turbopack_context__.k.register(_c, "ParallelReader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_9a430b69._.js.map