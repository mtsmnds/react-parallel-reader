(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/ParallelReader.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "ParallelReader-module-scss-module__rbxfja__actions",
  "active": "ParallelReader-module-scss-module__rbxfja__active",
  "annotationCard": "ParallelReader-module-scss-module__rbxfja__annotationCard",
  "buttonGroup": "ParallelReader-module-scss-module__rbxfja__buttonGroup",
  "container": "ParallelReader-module-scss-module__rbxfja__container",
  "controls": "ParallelReader-module-scss-module__rbxfja__controls",
  "delete": "ParallelReader-module-scss-module__rbxfja__delete",
  "emptyState": "ParallelReader-module-scss-module__rbxfja__emptyState",
  "footer": "ParallelReader-module-scss-module__rbxfja__footer",
  "grid": "ParallelReader-module-scss-module__rbxfja__grid",
  "header": "ParallelReader-module-scss-module__rbxfja__header",
  "inactive": "ParallelReader-module-scss-module__rbxfja__inactive",
  "inputWrapper": "ParallelReader-module-scss-module__rbxfja__inputWrapper",
  "jump": "ParallelReader-module-scss-module__rbxfja__jump",
  "panel": "ParallelReader-module-scss-module__rbxfja__panel",
  "readerWrapper": "ParallelReader-module-scss-module__rbxfja__readerWrapper",
  "sidebar": "ParallelReader-module-scss-module__rbxfja__sidebar",
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
;
;
;
;
function ParallelReader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "55c269111477f0c11dcb6461d4003efe60ac89cafeca14dd8541fa13e41fe29d") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "55c269111477f0c11dcb6461d4003efe60ac89cafeca14dd8541fa13e41fe29d";
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
    const [highlights, setHighlights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [showHighlights, setShowHighlights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const renditionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t3);
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ParallelReader[useEffect()]": ()=>{
                fetch("/api/highlights").then(_ParallelReaderUseEffectAnonymous).then({
                    "ParallelReader[useEffect() > (anonymous)()]": (data)=>setHighlights(data)
                }["ParallelReader[useEffect() > (anonymous)()]"]).catch(_ParallelReaderUseEffectAnonymous2);
            }
        })["ParallelReader[useEffect()]"];
        t5 = [];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] !== highlights || $[8] !== urls) {
        t6 = ({
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
                    },
                    "::selection": {
                        "background": "rgba(255, 255, 0, 0.3)"
                    },
                    ".hl-class": {
                        "fill": "yellow",
                        "fill-opacity": "0.3",
                        "mix-blend-mode": "multiply"
                    }
                });
                const bookHighlights = highlights.filter({
                    "ParallelReader[getRendition > highlights.filter()]": (h)=>h.bookUrl === urls[index]
                }["ParallelReader[getRendition > highlights.filter()]"]);
                bookHighlights.forEach({
                    "ParallelReader[getRendition > bookHighlights.forEach()]": (h_0)=>{
                        rendition.annotations.add("highlight", h_0.cfiRange, {}, null, "hl-class");
                    }
                }["ParallelReader[getRendition > bookHighlights.forEach()]"]);
                rendition.on("selected", {
                    "ParallelReader[getRendition > rendition.on()]": (cfiRange, contents)=>{
                        const range = rendition.getRange(cfiRange);
                        const text = range.toString();
                        const newHighlight = {
                            id: Date.now().toString(),
                            cfiRange,
                            text,
                            bookUrl: urls[index],
                            color: "#ffeb3b",
                            created: Date.now()
                        };
                        fetch("/api/highlights", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(newHighlight)
                        }).then(_ParallelReaderGetRenditionRenditionOnAnonymous).then({
                            "ParallelReader[getRendition > rendition.on() > (anonymous)()]": ()=>{
                                setHighlights({
                                    "ParallelReader[getRendition > rendition.on() > (anonymous)() > setHighlights()]": (prev)=>[
                                            ...prev,
                                            newHighlight
                                        ]
                                }["ParallelReader[getRendition > rendition.on() > (anonymous)() > setHighlights()]"]);
                                rendition.annotations.add("highlight", cfiRange, {}, null, "hl-class");
                                const selection = contents.window.getSelection();
                                selection?.removeAllRanges();
                            }
                        }["ParallelReader[getRendition > rendition.on() > (anonymous)()]"]);
                    }
                }["ParallelReader[getRendition > rendition.on()]"]);
            }
        })["ParallelReader[getRendition]"];
        $[7] = highlights;
        $[8] = urls;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const getRendition = t6;
    let t7;
    let t8;
    if ($[10] !== highlights || $[11] !== urls) {
        t7 = ({
            "ParallelReader[useEffect()]": ()=>{
                renditionRefs.current.forEach({
                    "ParallelReader[useEffect() > renditionRefs.current.forEach()]": (rendition_0, index_0)=>{
                        if (rendition_0) {
                            const bookHighlights_0 = highlights.filter({
                                "ParallelReader[useEffect() > renditionRefs.current.forEach() > highlights.filter()]": (h_1)=>h_1.bookUrl === urls[index_0]
                            }["ParallelReader[useEffect() > renditionRefs.current.forEach() > highlights.filter()]"]);
                            bookHighlights_0.forEach({
                                "ParallelReader[useEffect() > renditionRefs.current.forEach() > bookHighlights_0.forEach()]": (h_2)=>{
                                    rendition_0.annotations.add("highlight", h_2.cfiRange, {}, null, "hl-class");
                                }
                            }["ParallelReader[useEffect() > renditionRefs.current.forEach() > bookHighlights_0.forEach()]"]);
                        }
                    }
                }["ParallelReader[useEffect() > renditionRefs.current.forEach()]"]);
            }
        })["ParallelReader[useEffect()]"];
        t8 = [
            highlights,
            urls
        ];
        $[10] = highlights;
        $[11] = urls;
        $[12] = t7;
        $[13] = t8;
    } else {
        t7 = $[12];
        t8 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[14] !== locations) {
        t9 = ({
            "ParallelReader[handleLocationChange]": (index_1, newLocation)=>{
                const newLocations = [
                    ...locations
                ];
                newLocations[index_1] = newLocation;
                setLocations(newLocations);
            }
        })["ParallelReader[handleLocationChange]"];
        $[14] = locations;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const handleLocationChange = t9;
    let t10;
    if ($[16] !== urls) {
        t10 = ({
            "ParallelReader[updateUrl]": (index_2, newUrl)=>{
                const newUrls = [
                    ...urls
                ];
                newUrls[index_2] = newUrl;
                setUrls(newUrls);
            }
        })["ParallelReader[updateUrl]"];
        $[16] = urls;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    const updateUrl = t10;
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "ParallelReader[deleteHighlight]": async (id, cfiRange_0, bookIndex)=>{
                setHighlights({
                    "ParallelReader[deleteHighlight > setHighlights()]": (prev_0)=>prev_0.filter({
                            "ParallelReader[deleteHighlight > setHighlights() > prev_0.filter()]": (h_3)=>h_3.id !== id
                        }["ParallelReader[deleteHighlight > setHighlights() > prev_0.filter()]"])
                }["ParallelReader[deleteHighlight > setHighlights()]"]);
                const rendition_1 = renditionRefs.current[bookIndex];
                if (rendition_1) {
                    rendition_1.annotations.remove(cfiRange_0, "highlight");
                }
                await fetch("/api/highlights", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id
                    })
                });
            }
        })["ParallelReader[deleteHighlight]"];
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    const deleteHighlight = t11;
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            display: "flex",
            alignItems: "center",
            gap: "1rem"
        };
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== onBack) {
        t13 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            lineNumber: 244,
            columnNumber: 21
        }, this);
        $[20] = onBack;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Parallel Reader"
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t12,
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== showHighlights) {
        t16 = ({
            "ParallelReader[<button>.onClick]": ()=>setShowHighlights(!showHighlights)
        })["ParallelReader[<button>.onClick]"];
        $[25] = showHighlights;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    const t17 = showHighlights ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inactive;
    const t18 = showHighlights ? "Hide Notes" : "Show Notes";
    let t19;
    if ($[27] !== t16 || $[28] !== t17 || $[29] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGroup,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t16,
                className: t17,
                children: t18
            }, void 0, false, {
                fileName: "[project]/app/components/ParallelReader.tsx",
                lineNumber: 284,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[27] = t16;
        $[28] = t17;
        $[29] = t18;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = [
            1,
            2,
            3
        ];
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== count) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGroup,
            children: t20.map({
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
                        lineNumber: 302,
                        columnNumber: 49
                    }, this)
            }["ParallelReader[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[32] = count;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    let t22;
    if ($[34] !== t19 || $[35] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[34] = t19;
        $[35] = t21;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    let t23;
    if ($[37] !== t15 || $[38] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                t15,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[37] = t15;
        $[38] = t22;
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            display: "flex",
            flex: 1,
            overflow: "hidden"
        };
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    const t25 = showHighlights ? "0 0 75%" : "1";
    let t26;
    if ($[41] !== t25) {
        t26 = {
            flex: t25
        };
        $[41] = t25;
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== count) {
        t27 = Array.from({
            length: count
        });
        $[43] = count;
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    let t28;
    if ($[45] !== count || $[46] !== getRendition || $[47] !== handleLocationChange || $[48] !== locations || $[49] !== t27 || $[50] !== updateUrl || $[51] !== urls) {
        t28 = t27.map({
            "ParallelReader[(anonymous)()]": (_, index_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                value: urls[index_3] || "",
                                onChange: {
                                    "ParallelReader[(anonymous)() > <input>.onChange]": (e)=>updateUrl(index_3, e.target.value)
                                }["ParallelReader[(anonymous)() > <input>.onChange]"]
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 366,
                                columnNumber: 47
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ParallelReader.tsx",
                            lineNumber: 366,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readerWrapper,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reader$2f$dist$2f$react$2d$reader$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReader"], {
                                url: urls[index_3],
                                location: locations[index_3] || 0,
                                locationChanged: {
                                    "ParallelReader[(anonymous)() > <ReactReader>.locationChanged]": (loc)=>handleLocationChange(index_3, loc)
                                }["ParallelReader[(anonymous)() > <ReactReader>.locationChanged]"],
                                getRendition: {
                                    "ParallelReader[(anonymous)() > <ReactReader>.getRendition]": (rendition_2)=>getRendition(index_3, rendition_2)
                                }["ParallelReader[(anonymous)() > <ReactReader>.getRendition]"],
                                epubOptions: {
                                    flow: "scrolled",
                                    manager: "continuous"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 368,
                                columnNumber: 112
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ParallelReader.tsx",
                            lineNumber: 368,
                            columnNumber: 74
                        }, this)
                    ]
                }, index_3, true, {
                    fileName: "[project]/app/components/ParallelReader.tsx",
                    lineNumber: 364,
                    columnNumber: 56
                }, this)
        }["ParallelReader[(anonymous)()]"]);
        $[45] = count;
        $[46] = getRendition;
        $[47] = handleLocationChange;
        $[48] = locations;
        $[49] = t27;
        $[50] = updateUrl;
        $[51] = urls;
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    let t29;
    if ($[53] !== t26 || $[54] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            style: t26,
            children: t28
        }, void 0, false, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[53] = t26;
        $[54] = t28;
        $[55] = t29;
    } else {
        t29 = $[55];
    }
    let t30;
    if ($[56] !== highlights || $[57] !== showHighlights || $[58] !== urls) {
        t30 = showHighlights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Annotations"
                }, void 0, false, {
                    fileName: "[project]/app/components/ParallelReader.tsx",
                    lineNumber: 399,
                    columnNumber: 61
                }, this),
                highlights.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                    children: "Select text to highlight."
                }, void 0, false, {
                    fileName: "[project]/app/components/ParallelReader.tsx",
                    lineNumber: 399,
                    columnNumber: 109
                }, this),
                highlights.map({
                    "ParallelReader[highlights.map()]": (h_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].annotationCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        '"',
                                        h_4.text,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                    lineNumber: 400,
                                    columnNumber: 104
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: urls.findIndex({
                                                "ParallelReader[highlights.map() > urls.findIndex()]": (u_0)=>u_0 === h_4.bookUrl
                                            }["ParallelReader[highlights.map() > urls.findIndex()]"]) > -1 ? `Panel ${urls.findIndex({
                                                "ParallelReader[highlights.map() > urls.findIndex()]": (u)=>u === h_4.bookUrl
                                            }["ParallelReader[highlights.map() > urls.findIndex()]"]) + 1}` : "Other Book"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ParallelReader.tsx",
                                            lineNumber: 400,
                                            columnNumber: 154
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].jump,
                                                    onClick: {
                                                        "ParallelReader[highlights.map() > <button>.onClick]": ()=>{
                                                            const idx = urls.indexOf(h_4.bookUrl);
                                                            if (idx !== -1 && renditionRefs.current[idx]) {
                                                                renditionRefs.current[idx]?.display(h_4.cfiRange);
                                                            }
                                                        }
                                                    }["ParallelReader[highlights.map() > <button>.onClick]"],
                                                    children: "Jump"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 133
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].delete,
                                                    onClick: {
                                                        "ParallelReader[highlights.map() > <button>.onClick]": ()=>deleteHighlight(h_4.id, h_4.cfiRange, urls.indexOf(h_4.bookUrl))
                                                    }["ParallelReader[highlights.map() > <button>.onClick]"],
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 86
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ParallelReader.tsx",
                                            lineNumber: 404,
                                            columnNumber: 101
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                    lineNumber: 400,
                                    columnNumber: 123
                                }, this)
                            ]
                        }, h_4.id, true, {
                            fileName: "[project]/app/components/ParallelReader.tsx",
                            lineNumber: 400,
                            columnNumber: 52
                        }, this)
                }["ParallelReader[highlights.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 399,
            columnNumber: 29
        }, this);
        $[56] = highlights;
        $[57] = showHighlights;
        $[58] = urls;
        $[59] = t30;
    } else {
        t30 = $[59];
    }
    let t31;
    if ($[60] !== t29 || $[61] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t24,
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[60] = t29;
        $[61] = t30;
        $[62] = t31;
    } else {
        t31 = $[62];
    }
    let t32;
    if ($[63] !== t23 || $[64] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t23,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ParallelReader.tsx",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[63] = t23;
        $[64] = t31;
        $[65] = t32;
    } else {
        t32 = $[65];
    }
    return t32;
}
_s(ParallelReader, "F03a1Ilx22puuYChco4rpWp5kCo=");
_c = ParallelReader;
function _ParallelReaderGetRenditionRenditionOnAnonymous(res_0) {
    return res_0.json();
}
function _ParallelReaderUseEffectAnonymous2(err) {
    return console.error("Error loading highlights:", err);
}
function _ParallelReaderUseEffectAnonymous(res) {
    return res.json();
}
function _ParallelReaderInitialUrlsMap() {
    return 0;
}
var _c;
__turbopack_context__.k.register(_c, "ParallelReader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Bookshelf.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "Bookshelf-module-scss-module__3Di2QW__arrow",
  "bookCount": "Bookshelf-module-scss-module__3Di2QW__bookCount",
  "card": "Bookshelf-module-scss-module__3Di2QW__card",
  "cardContent": "Bookshelf-module-scss-module__3Di2QW__cardContent",
  "collectionName": "Bookshelf-module-scss-module__3Di2QW__collectionName",
  "container": "Bookshelf-module-scss-module__3Di2QW__container",
  "emptyState": "Bookshelf-module-scss-module__3Di2QW__emptyState",
  "list": "Bookshelf-module-scss-module__3Di2QW__list",
  "loading": "Bookshelf-module-scss-module__3Di2QW__loading",
  "subtitle": "Bookshelf-module-scss-module__3Di2QW__subtitle",
  "title": "Bookshelf-module-scss-module__3Di2QW__title",
});
}),
"[project]/app/components/Bookshelf.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Bookshelf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Bookshelf.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Bookshelf(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2a831ed1de1bb4f2d4d6d373e9ea2d98832935e7400011baac1de6ba41b09e54") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a831ed1de1bb4f2d4d6d373e9ea2d98832935e7400011baac1de6ba41b09e54";
    }
    const { onSelectCollection } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [collections, setCollections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Bookshelf[useEffect()]": ()=>{
                fetch("/api/books").then(_BookshelfUseEffectAnonymous).then({
                    "Bookshelf[useEffect() > (anonymous)()]": (data)=>{
                        setCollections(data);
                        setLoading(false);
                    }
                }["Bookshelf[useEffect() > (anonymous)()]"]).catch({
                    "Bookshelf[useEffect() > (anonymous)()]": (err)=>{
                        console.error("Failed to load books:", err);
                        setLoading(false);
                    }
                }["Bookshelf[useEffect() > (anonymous)()]"]);
            }
        })["Bookshelf[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (loading) {
        let t4;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading library..."
            }, void 0, false, {
                fileName: "[project]/app/components/Bookshelf.tsx",
                lineNumber: 59,
                columnNumber: 12
            }, this);
            $[4] = t4;
        } else {
            t4 = $[4];
        }
        return t4;
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: "My Collections"
        }, void 0, false, {
            fileName: "[project]/app/components/Bookshelf.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== collections || $[7] !== onSelectCollection) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t4,
                collections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "No collections found in ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    children: "public/books/"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Bookshelf.tsx",
                                    lineNumber: 75,
                                    columnNumber: 138
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Bookshelf.tsx",
                            lineNumber: 75,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                            children: [
                                "Create a subfolder (e.g., ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    children: "public/books/classics/"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Bookshelf.tsx",
                                    lineNumber: 75,
                                    columnNumber: 226
                                }, this),
                                ") and add EPUB files to start."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Bookshelf.tsx",
                            lineNumber: 75,
                            columnNumber: 169
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Bookshelf.tsx",
                    lineNumber: 75,
                    columnNumber: 76
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                    children: collections.map({
                        "Bookshelf[collections.map()]": (collection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                onClick: {
                                    "Bookshelf[collections.map() > <div>.onClick]": ()=>onSelectCollection(collection.files)
                                }["Bookshelf[collections.map() > <div>.onClick]"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionName,
                                                    children: collection.name.replace(/-/g, " ")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Bookshelf.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 103
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookCount,
                                                    children: [
                                                        collection.files.length,
                                                        " book",
                                                        collection.files.length !== 1 && "s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Bookshelf.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 182
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Bookshelf.tsx",
                                            lineNumber: 78,
                                            columnNumber: 98
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "1.5rem"
                                                },
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Bookshelf.tsx",
                                                lineNumber: 78,
                                                columnNumber: 322
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Bookshelf.tsx",
                                            lineNumber: 78,
                                            columnNumber: 292
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Bookshelf.tsx",
                                    lineNumber: 78,
                                    columnNumber: 62
                                }, this)
                            }, collection.name, false, {
                                fileName: "[project]/app/components/Bookshelf.tsx",
                                lineNumber: 76,
                                columnNumber: 57
                            }, this)
                    }["Bookshelf[collections.map()]"])
                }, void 0, false, {
                    fileName: "[project]/app/components/Bookshelf.tsx",
                    lineNumber: 75,
                    columnNumber: 304
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Bookshelf.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[6] = collections;
        $[7] = onSelectCollection;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s(Bookshelf, "3VvsVyKIaKS1zTEvmYajoHt6dm8=");
_c = Bookshelf;
function _BookshelfUseEffectAnonymous(res) {
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "Bookshelf");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ParallelReader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Bookshelf.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "3523a8277501529aca4691aa507fefcc5a7dbbbdbcca58d636e0fdf14a461c26") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3523a8277501529aca4691aa507fefcc5a7dbbbdbcca58d636e0fdf14a461c26";
    }
    const [selectedBooks, setSelectedBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== selectedBooks) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gray-50",
            children: selectedBooks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                initialUrls: selectedBooks,
                onBack: {
                    "Home[<ParallelReader>.onBack]": ()=>setSelectedBooks(null)
                }["Home[<ParallelReader>.onBack]"]
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 18,
                columnNumber: 69
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSelectCollection: setSelectedBooks
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 20,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = selectedBooks;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
}
_s(Home, "xFfKMcZturzu1X/nwHSfazadEgg=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_9e466c4b._.js.map