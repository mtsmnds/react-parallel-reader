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
function ParallelReader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "d683e1d6440b34da0f4d083262db4e048851ebd596a43924c991fd0dc64971e8") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d683e1d6440b34da0f4d083262db4e048851ebd596a43924c991fd0dc64971e8";
    }
    const { initialUrls, onBack } = t0;
    const [urls, setUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialUrls);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialUrls.length || 2);
    let t1;
    if ($[1] !== initialUrls) {
        t1 = initialUrls.map(_ParallelReaderInitialUrlsMap);
        $[1] = initialUrls;
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
        t6 = {
            display: "flex",
            alignItems: "center",
            gap: "1rem"
        };
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== onBack) {
        t7 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
            style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.2rem"
            },
            children: "← Back"
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 111,
            columnNumber: 20
        }, this);
        $[10] = onBack;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Parallel Reader"
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t6,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [
            1,
            2,
            3
        ];
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== count) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGroup,
                children: t10.map({
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
                            lineNumber: 147,
                            columnNumber: 51
                        }, this)
                }["ParallelReader[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/app/components/ParallelReader.tsx",
                lineNumber: 146,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[16] = count;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11 || $[19] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t9;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== count) {
        t13 = Array.from({
            length: count
        });
        $[21] = count;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== count || $[24] !== handleLocationChange || $[25] !== locations || $[26] !== t13 || $[27] !== updateUrl || $[28] !== urls) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            children: t13.map({
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
                                    lineNumber: 180,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 180,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readerWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reader$2f$dist$2f$react$2d$reader$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReader"], {
                                    url: urls[index_2],
                                    location: locations[index_2] || 0,
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
                                    lineNumber: 182,
                                    columnNumber: 114
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 182,
                                columnNumber: 76
                            }, this)
                        ]
                    }, index_2, true, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 178,
                        columnNumber: 58
                    }, this)
            }["ParallelReader[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[23] = count;
        $[24] = handleLocationChange;
        $[25] = locations;
        $[26] = t13;
        $[27] = updateUrl;
        $[28] = urls;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t12 || $[31] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[30] = t12;
        $[31] = t14;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    return t15;
}
_s(ParallelReader, "LGG1oquQl1mZEYg8uBHliAiQQeA=");
_c = ParallelReader;
function _ParallelReaderInitialUrlsMap() {
    return 0;
}
var _c;
__turbopack_context__.k.register(_c, "ParallelReader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_9a430b69._.js.map