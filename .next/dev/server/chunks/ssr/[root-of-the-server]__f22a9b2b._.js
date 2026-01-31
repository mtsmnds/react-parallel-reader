module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/ParallelReader.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
  "popoverButton": "ParallelReader-module-scss-module__rbxfja__popoverButton",
  "popoverContainer": "ParallelReader-module-scss-module__rbxfja__popoverContainer",
  "readerWrapper": "ParallelReader-module-scss-module__rbxfja__readerWrapper",
  "settingGroup": "ParallelReader-module-scss-module__rbxfja__settingGroup",
  "settingsPanel": "ParallelReader-module-scss-module__rbxfja__settingsPanel",
  "sidebar": "ParallelReader-module-scss-module__rbxfja__sidebar",
});
}),
"[project]/app/components/HighlightMenu.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "HighlightMenu-module-scss-module__7iUREq__actions",
  "active": "HighlightMenu-module-scss-module__7iUREq__active",
  "closeBtn": "HighlightMenu-module-scss-module__7iUREq__closeBtn",
  "colorSwatches": "HighlightMenu-module-scss-module__7iUREq__colorSwatches",
  "fadeIn": "HighlightMenu-module-scss-module__7iUREq__fadeIn",
  "highlightMenu": "HighlightMenu-module-scss-module__7iUREq__highlightMenu",
  "iconBtn": "HighlightMenu-module-scss-module__7iUREq__iconBtn",
  "menuHeader": "HighlightMenu-module-scss-module__7iUREq__menuHeader",
  "menuHeaderSimple": "HighlightMenu-module-scss-module__7iUREq__menuHeaderSimple",
  "noteParams": "HighlightMenu-module-scss-module__7iUREq__noteParams",
  "row": "HighlightMenu-module-scss-module__7iUREq__row",
  "saveBtn": "HighlightMenu-module-scss-module__7iUREq__saveBtn",
  "spacer": "HighlightMenu-module-scss-module__7iUREq__spacer",
  "swatch": "HighlightMenu-module-scss-module__7iUREq__swatch",
  "toggleGroup": "HighlightMenu-module-scss-module__7iUREq__toggleGroup",
});
}),
"[project]/app/components/HighlightMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HighlightMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/HighlightMenu.module.scss [app-ssr] (css module)");
;
;
;
function HighlightMenu({ initialData, onSave, onCancel, onDelete, onJump, isEditing }) {
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.color || '#ffeb3b');
    const [style, setStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.style || 'underline');
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.note || '');
    const colors = [
        '#ffeb3b',
        '#58e5f5ff',
        '#58f68fff',
        '#f59bceff',
        '#a457f7ff' // Purple
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highlightMenu,
        children: [
            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuHeader,
                children: [
                    onJump && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onJump,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn,
                        title: "Jump to location",
                        children: "📍"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 32,
                        columnNumber: 32
                    }, this),
                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDelete,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn,
                        title: "Delete",
                        children: "🗑️"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 33,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spacer
                    }, void 0, false, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 34,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HighlightMenu.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, this),
            !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuHeaderSimple,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Add Annotation"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HighlightMenu.tsx",
                lineNumber: 40,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].row,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Style:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: style === 'highlight' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : '',
                                onClick: ()=>setStyle('highlight'),
                                children: "Highlight"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HighlightMenu.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: style === 'underline' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : '',
                                onClick: ()=>setStyle('underline'),
                                children: "Underline"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HighlightMenu.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HighlightMenu.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].row,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Color:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorSwatches,
                        children: colors.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    backgroundColor: c,
                                    border: color === c ? '2px solid #555' : '1px solid #ddd'
                                },
                                onClick: ()=>setColor(c),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].swatch
                            }, c, false, {
                                fileName: "[project]/app/components/HighlightMenu.tsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/HighlightMenu.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HighlightMenu.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noteParams,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    placeholder: "Add a note...",
                    value: note,
                    onChange: (e)=>setNote(e.target.value),
                    rows: 3
                }, void 0, false, {
                    fileName: "[project]/app/components/HighlightMenu.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/HighlightMenu.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveBtn,
                    onClick: ()=>onSave({
                            color,
                            style,
                            note
                        }),
                    children: isEditing ? 'Update' : 'Save'
                }, void 0, false, {
                    fileName: "[project]/app/components/HighlightMenu.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/HighlightMenu.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HighlightMenu.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/HighlightMenu.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function ParallelReader({ initialUrls, onBack }) {
    // --- State ---
    const [urls, setUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialUrls);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialUrls.length || 2);
    // NEW: We must track the location of each book individually
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialUrls.map(()=>0));
    // Highlights State
    const [highlights, setHighlights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showHighlights, setShowHighlights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Selection / Popover State
    const [selection, setSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingHighlight, setEditingHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Styling State
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fontSize: 100,
        fontFamily: 'Helvetica, sans-serif',
        lineHeight: 1.6
    });
    const renditionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Track rendered highlights per panel to prevent duplicates
    const renderedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Panel refs to calculate offsets for popovers
    const panelRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Load highlights on mount or when URLs change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (urls.length > 0) {
            const searchParams = new URLSearchParams();
            searchParams.set('urls', urls.join(','));
            fetch(`/api/highlights?${searchParams.toString()}`).then((res)=>res.json()).then((data)=>setHighlights(data)).catch((err)=>console.error("Error loading highlights:", err));
        }
    }, [
        urls
    ]);
    // Style Injection Helper
    const applyStyles = (rendition)=>{
        rendition.themes.default({
            'body': {
                'font-family': `${settings.fontFamily} !important`,
                'font-size': `${settings.fontSize}% !important`,
                'line-height': `${settings.lineHeight} !important`
            },
            'p': {
                'font-family': `${settings.fontFamily} !important`,
                'font-size': `${settings.fontSize}% !important`,
                'line-height': `${settings.lineHeight} !important`
            },
            'div': {
                'padding-bottom': '20px'
            }
        });
    };
    // Update active renditions when settings change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        renditionRefs.current.forEach((rendition)=>{
            if (rendition) {
                applyStyles(rendition);
            }
        });
    }, [
        settings
    ]);
    // --- Handlers ---
    const getRendition = (index, rendition)=>{
        renditionRefs.current[index] = rendition;
        // Initial styles
        applyStyles(rendition);
        // CLEANUP
        const keysToRemove = [];
        renderedRef.current.forEach((key)=>{
            if (key.startsWith(`${index}-`)) keysToRemove.push(key);
        });
        keysToRemove.forEach((k)=>renderedRef.current.delete(k));
        // INITIAL RENDER
        const bookHighlights = highlights.filter((h)=>h.bookUrl === urls[index]);
        bookHighlights.forEach((h)=>{
            // Pass styles directly as attributes for SVG overlays (fill, stroke, etc)
            // The 5th argument 'styles' in annotations.add() maps to SVG attributes in marks-pane
            const styles = {
                fill: h.color
            };
            if (h.style === 'underline') {
                styles.fill = 'transparent';
                styles.stroke = h.color;
                styles['stroke-width'] = '2';
            }
            // Use generic class (hl-highlight/hl-underline) plus generic styling
            const type = h.style === 'underline' ? 'underline' : 'highlight';
            const className = type === 'underline' ? 'hl-underline' : 'hl-highlight';
            rendition.annotations.add(type, h.cfiRange, {}, null, className, styles);
            renderedRef.current.add(`${index}-${h.id}`);
        });
        // SELECTION HANDLER
        rendition.on('selected', (cfiRange, contents)=>{
            const range = contents.window.getSelection().getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const text = range.toString();
            // Calculate absolute position
            // Use frameElement from the specific contents where selection happened
            const iframe = contents.window.frameElement;
            if (iframe) {
                const iframeRect = iframe.getBoundingClientRect();
                setSelection({
                    cfiRange,
                    text,
                    bookIndex: index,
                    position: {
                        top: iframeRect.top + rect.top,
                        left: iframeRect.left + rect.right
                    }
                });
                setMenuOpen(false); // Start with just the button
            }
        });
    };
    // Re-apply highlights + Custom Color Injection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        renditionRefs.current.forEach((rendition, index)=>{
            if (!rendition) return;
            const url = urls[index];
            const bookHighlights = highlights.filter((h)=>h.bookUrl === url);
            // Inject styles for specific highlight colors
            // Inject styles for specific highlight colors
            bookHighlights.forEach((h)=>{
                const key = `${index}-${h.id}`;
                if (!renderedRef.current.has(key)) {
                    const styles = {
                        fill: h.color
                    };
                    if (h.style === 'underline') {
                        styles.fill = 'transparent';
                        styles.stroke = h.color;
                        styles['stroke-width'] = '2';
                    }
                    const type = h.style === 'underline' ? 'underline' : 'highlight';
                    const className = type === 'underline' ? 'hl-underline' : 'hl-highlight';
                    rendition.annotations.add(type, h.cfiRange, {}, null, className, styles);
                    renderedRef.current.add(key);
                }
            });
            // Cleanup removed highlights
            const bookHighlightIds = new Set(bookHighlights.map((h)=>h.id));
            const keysToRemove = [];
            renderedRef.current.forEach((key)=>{
                const [pIdx, hId] = key.split('-');
                if (parseInt(pIdx) === index && !bookHighlightIds.has(hId)) {
                    keysToRemove.push(key);
                }
            });
            keysToRemove.forEach((k)=>renderedRef.current.delete(k));
        });
    }, [
        highlights,
        urls
    ]);
    const handleSaveHighlight = (data)=>{
        if (!selection) return;
        const newHighlight = {
            id: Date.now().toString(),
            cfiRange: selection.cfiRange,
            text: selection.text,
            bookUrl: urls[selection.bookIndex],
            created: Date.now(),
            color: data.color,
            style: data.style,
            note: data.note
        };
        // Optimistic UI
        setHighlights((prev)=>[
                ...prev,
                newHighlight
            ]);
        // Render Immediately
        const rendition = renditionRefs.current[selection.bookIndex];
        if (rendition) {
            const styles = {
                fill: newHighlight.color
            };
            if (newHighlight.style === 'underline') {
                styles.fill = 'transparent';
                styles.stroke = newHighlight.color;
                styles['stroke-width'] = '2';
            }
            const type = newHighlight.style === 'underline' ? 'underline' : 'highlight';
            const className = type === 'underline' ? 'hl-underline' : 'hl-highlight';
            rendition.annotations.add(type, newHighlight.cfiRange, {}, null, className, styles);
            renderedRef.current.add(`${selection.bookIndex}-${newHighlight.id}`);
            // Clear browser selection
            try {
                const contents = rendition.getContents()[0];
                contents?.window.getSelection()?.removeAllRanges();
            } catch (e) {
                console.error("Could not clear selection", e);
            }
        }
        // Persist
        fetch('/api/highlights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newHighlight)
        }).catch((err)=>console.error("Failed to save", err));
        // Reset
        setSelection(null);
        setMenuOpen(false);
    };
    const handleCancelSelection = ()=>{
        // Clear browser selection
        if (selection) {
            const rendition = renditionRefs.current[selection.bookIndex];
            try {
                const contents = rendition?.getContents()[0];
                contents?.window.getSelection()?.removeAllRanges();
            } catch (e) {}
        }
        setSelection(null);
        setMenuOpen(false);
    };
    const handleLocationChange = (index, newLocation)=>{
        const newLocations = [
            ...locations
        ];
        newLocations[index] = newLocation;
        setLocations(newLocations);
        if (urls[index]) {
        // Location update logic could go here
        }
    };
    const updateUrl = (index, newUrl)=>{
        const newUrls = [
            ...urls
        ];
        newUrls[index] = newUrl;
        setUrls(newUrls);
    };
    const deleteHighlight = async (id, cfiRange, bookIndex)=>{
        setHighlights((prev)=>prev.filter((h)=>h.id !== id));
        const rendition = renditionRefs.current[bookIndex];
        if (rendition) {
            // Try removing both types as we don't know for sure which one passed here (though we could lookup)
            rendition.annotations.remove(cfiRange, 'highlight');
            rendition.annotations.remove(cfiRange, 'underline');
            renderedRef.current.delete(`${bookIndex}-${id}`);
        }
        await fetch('/api/highlights', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                bookUrl: urls[bookIndex]
            })
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        },
                        children: [
                            onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backButton,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1.2rem'
                                },
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 304,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Parallel Reader"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 308,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 302,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSettings(!showSettings),
                                style: {
                                    border: 'none',
                                    background: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1.2rem',
                                    marginRight: '0.5rem'
                                },
                                children: "⚙️"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 311,
                                columnNumber: 21
                            }, this),
                            showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingsPanel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Display Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                        lineNumber: 314,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Font Size: ",
                                                    settings.fontSize,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/ParallelReader.tsx",
                                                lineNumber: 316,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "80",
                                                max: "200",
                                                step: "10",
                                                value: settings.fontSize,
                                                onChange: (e)=>setSettings({
                                                        ...settings,
                                                        fontSize: Number(e.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ParallelReader.tsx",
                                                lineNumber: 317,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                        lineNumber: 315,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Font Family"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ParallelReader.tsx",
                                                lineNumber: 320,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: settings.fontFamily,
                                                onChange: (e)=>setSettings({
                                                        ...settings,
                                                        fontFamily: e.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Helvetica, sans-serif",
                                                        children: "Helvetica"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Georgia, serif",
                                                        children: "Georgia"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Courier New, monospace",
                                                        children: "Monospace"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Times New Roman, serif",
                                                        children: "Original"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/ParallelReader.tsx",
                                                lineNumber: 321,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                        lineNumber: 319,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Line Height"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ParallelReader.tsx",
                                                lineNumber: 329,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: settings.lineHeight,
                                                onChange: (e)=>setSettings({
                                                        ...settings,
                                                        lineHeight: Number(e.target.value)
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 1.2,
                                                        children: "Compact (1.2)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 1.6,
                                                        children: "Normal (1.6)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 2.0,
                                                        children: "Loose (2.0)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/ParallelReader.tsx",
                                                lineNumber: 330,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                        lineNumber: 328,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 313,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonGroup,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowHighlights(!showHighlights),
                                    className: showHighlights ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inactive,
                                    children: showHighlights ? 'Hide Notes' : 'Show Notes'
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                    lineNumber: 339,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 338,
                                columnNumber: 21
                            }, this),
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
                                        lineNumber: 345,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 343,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 310,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParallelReader.tsx",
                lineNumber: 301,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flex: 1,
                    overflow: 'hidden',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                        style: {
                            flex: showHighlights ? '0 0 75%' : '1'
                        },
                        children: Array.from({
                            length: count
                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
                                ref: (el)=>{
                                    panelRefs.current[index] = el;
                                },
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
                                            lineNumber: 358,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                        lineNumber: 357,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].readerWrapper,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reader$2f$dist$2f$react$2d$reader$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactReader"], {
                                            url: urls[index],
                                            location: locations[index] || 0,
                                            locationChanged: (loc)=>handleLocationChange(index, loc),
                                            getRendition: (rendition)=>getRendition(index, rendition),
                                            epubOptions: {
                                                flow: "scrolled",
                                                manager: "continuous"
                                            },
                                            swipeable: false,
                                            readerStyles: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reader$2f$dist$2f$react$2d$reader$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactReaderStyle"],
                                                arrow: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reader$2f$dist$2f$react$2d$reader$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactReaderStyle"].arrow,
                                                    display: 'none'
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ParallelReader.tsx",
                                            lineNumber: 361,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ParallelReader.tsx",
                                        lineNumber: 360,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 356,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 354,
                        columnNumber: 17
                    }, this),
                    showHighlights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Annotations"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 377,
                                columnNumber: 25
                            }, this),
                            highlights.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                                children: "Select text to highlight."
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParallelReader.tsx",
                                lineNumber: 378,
                                columnNumber: 53
                            }, this),
                            highlights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].annotationCard,
                                    style: {
                                        borderLeft: `4px solid ${h.color}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                '"',
                                                h.text,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ParallelReader.tsx",
                                            lineNumber: 381,
                                            columnNumber: 33
                                        }, this),
                                        h.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontStyle: 'italic',
                                                fontSize: '0.85rem',
                                                color: '#555'
                                            },
                                            children: h.note
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ParallelReader.tsx",
                                            lineNumber: 382,
                                            columnNumber: 44
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: urls.findIndex((u)=>u === h.bookUrl) > -1 ? `Panel ${urls.findIndex((u)=>u === h.bookUrl) + 1}` : 'Other Book'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].jump,
                                                            onClick: ()=>{
                                                                const idx = urls.indexOf(h.bookUrl);
                                                                if (idx !== -1 && renditionRefs.current[idx]) {
                                                                    renditionRefs.current[idx]?.display(h.cfiRange);
                                                                }
                                                            },
                                                            children: "Jump"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ParallelReader.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].delete,
                                                            onClick: ()=>deleteHighlight(h.id, h.cfiRange, urls.indexOf(h.bookUrl)),
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ParallelReader.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ParallelReader.tsx",
                                            lineNumber: 383,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, h.id, true, {
                                    fileName: "[project]/app/components/ParallelReader.tsx",
                                    lineNumber: 380,
                                    columnNumber: 29
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 376,
                        columnNumber: 21
                    }, this),
                    selection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].popoverContainer,
                        style: {
                            top: selection.position.top - 40,
                            left: selection.position.left
                        },
                        children: !menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].popoverButton,
                            onClick: ()=>setMenuOpen(true),
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ParallelReader.tsx",
                            lineNumber: 404,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HighlightMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isEditing: false,
                            onSave: handleSaveHighlight,
                            onCancel: handleCancelSelection
                        }, void 0, false, {
                            fileName: "[project]/app/components/ParallelReader.tsx",
                            lineNumber: 408,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParallelReader.tsx",
                        lineNumber: 402,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParallelReader.tsx",
                lineNumber: 353,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ParallelReader.tsx",
        lineNumber: 300,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/components/Bookshelf.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/app/components/Bookshelf.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Bookshelf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Bookshelf.module.scss [app-ssr] (css module)");
'use client';
;
;
;
function Bookshelf({ onSelectCollection }) {
    const [collections, setCollections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/books').then((res)=>res.json()).then((data)=>{
            setCollections(data);
            setLoading(false);
        }).catch((err)=>{
            console.error('Failed to load books:', err);
            setLoading(false);
        });
    }, []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
        children: "Loading library..."
    }, void 0, false, {
        fileName: "[project]/app/components/Bookshelf.tsx",
        lineNumber: 28,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "My Collections"
            }, void 0, false, {
                fileName: "[project]/app/components/Bookshelf.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            collections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "No collections found in ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "public/books/"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Bookshelf.tsx",
                                lineNumber: 36,
                                columnNumber: 48
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Bookshelf.tsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: [
                            "Create a subfolder (e.g., ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "public/books/classics/"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Bookshelf.tsx",
                                lineNumber: 37,
                                columnNumber: 78
                            }, this),
                            ") and add EPUB files to start."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Bookshelf.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Bookshelf.tsx",
                lineNumber: 35,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                children: collections.map((collection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        onClick: ()=>onSelectCollection(collection.files),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].collectionName,
                                            children: collection.name.replace(/-/g, ' ')
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Bookshelf.tsx",
                                            lineNumber: 49,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bookCount,
                                            children: [
                                                collection.files.length,
                                                " book",
                                                collection.files.length !== 1 && 's'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Bookshelf.tsx",
                                            lineNumber: 52,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Bookshelf.tsx",
                                    lineNumber: 48,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrow,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.5rem'
                                        },
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Bookshelf.tsx",
                                        lineNumber: 57,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Bookshelf.tsx",
                                    lineNumber: 56,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Bookshelf.tsx",
                            lineNumber: 47,
                            columnNumber: 29
                        }, this)
                    }, collection.name, false, {
                        fileName: "[project]/app/components/Bookshelf.tsx",
                        lineNumber: 42,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/Bookshelf.tsx",
                lineNumber: 40,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Bookshelf.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ParallelReader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Bookshelf.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Home() {
    const [selectedBooks, setSelectedBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50",
        children: selectedBooks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParallelReader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            initialUrls: selectedBooks,
            onBack: ()=>setSelectedBooks(null)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bookshelf$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onSelectCollection: setSelectedBooks
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f22a9b2b._.js.map