/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/AppContextFolder/AppContext.tsx":
/*!****************************************************!*\
  !*** ./components/AppContextFolder/AppContext.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLFVBQVUsaUJBQUdELG9EQUFhLENBQUMsSUFBSSxDQUFDO0FBRXRDLGlFQUFlQyxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vY29tcG9uZW50cy9BcHBDb250ZXh0Rm9sZGVyL0FwcENvbnRleHQudHN4P2VkYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiQXBwQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppContextFolder/AppContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\n/* harmony import */ var _components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppContextFolder/AppContext */ \"./components/AppContextFolder/AppContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__]);\n_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const timerCookie = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const windowSizeTrackerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const mousePositionRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const { 0: sharedState , 1: setSharedState  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        portfolio: {\n            NavBar: {\n                IntervalEvent: null,\n                scrolling: null,\n                scrollSizeY: null\n            },\n            Scrolling: {\n                IntervalEvent: null\n            }\n        },\n        userdata: {\n            timerCookieRef: timerCookie,\n            windowSizeTracker: windowSizeTrackerRef,\n            mousePositionTracker: mousePositionRef\n        },\n        typing: {\n            keyboardEvent: null,\n            eventInputLostFocus: null\n        },\n        finishedLoading: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            sharedState,\n            setSharedState\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/akru/Learning Material/Mywebsite/pages/_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__.Analytics, {}, void 0, false, {\n                fileName: \"/Users/akru/Learning Material/Mywebsite/pages/_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akru/Learning Material/Mywebsite/pages/_app.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNxQjtBQUNlO0FBQzFCO0FBRXpDLFNBQVNJLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLE1BQU1DLFdBQVcsR0FBR0wsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEMsTUFBTU0sb0JBQW9CLEdBQUdOLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3pDLE1BQU1PLGdCQUFnQixHQUFHUCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUNyQyxNQUFNLEtBQUNRLFdBQVcsTUFBRUMsY0FBYyxNQUFJUiwrQ0FBUSxDQUFDO1FBQzdDUyxTQUFTLEVBQUU7WUFDVEMsTUFBTSxFQUFFO2dCQUNOQyxhQUFhLEVBQUUsSUFBSTtnQkFDbkJDLFNBQVMsRUFBRSxJQUFJO2dCQUNmQyxXQUFXLEVBQUUsSUFBSTthQUNsQjtZQUNEQyxTQUFTLEVBQUM7Z0JBQ1JILGFBQWEsRUFBQyxJQUFJO2FBQ25CO1NBQ0Y7UUFDREksUUFBUSxFQUFFO1lBQ1JDLGNBQWMsRUFBRVosV0FBVztZQUMzQmEsaUJBQWlCLEVBQUVaLG9CQUFvQjtZQUN2Q2Esb0JBQW9CLEVBQUVaLGdCQUFnQjtTQUN2QztRQUNEYSxNQUFNLEVBQUU7WUFDTkMsYUFBYSxFQUFFLElBQUk7WUFDbkJDLG1CQUFtQixFQUFFLElBQUk7U0FDMUI7UUFDREMsZUFBZSxFQUFFLEtBQUs7S0FDdkIsQ0FBQztJQUNGLHFCQUNFLDhEQUFDeEIsd0ZBQW1CO1FBQUMwQixLQUFLLEVBQUU7WUFBRWpCLFdBQVc7WUFBRUMsY0FBYztTQUFFOzswQkFDekQsOERBQUNOLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7MEJBQzVCLDhEQUFDTiw4REFBUzs7OztvQkFBRzs7Ozs7O1lBQ08sQ0FDdEI7Q0FDSDtBQUVELGlFQUFlSSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEFuYWx5dGljcyB9IGZyb20gJ0B2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0JztcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgdGltZXJDb29raWUgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHdpbmRvd1NpemVUcmFja2VyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBtb3VzZVBvc2l0aW9uUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc2hhcmVkU3RhdGUsIHNldFNoYXJlZFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBwb3J0Zm9saW86IHtcbiAgICAgIE5hdkJhcjoge1xuICAgICAgICBJbnRlcnZhbEV2ZW50OiBudWxsLFxuICAgICAgICBzY3JvbGxpbmc6IG51bGwsXG4gICAgICAgIHNjcm9sbFNpemVZOiBudWxsLFxuICAgICAgfSxcbiAgICAgIFNjcm9sbGluZzp7XG4gICAgICAgIEludGVydmFsRXZlbnQ6bnVsbFxuICAgICAgfVxuICAgIH0sXG4gICAgdXNlcmRhdGE6IHtcbiAgICAgIHRpbWVyQ29va2llUmVmOiB0aW1lckNvb2tpZSxcbiAgICAgIHdpbmRvd1NpemVUcmFja2VyOiB3aW5kb3dTaXplVHJhY2tlclJlZixcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFja2VyOiBtb3VzZVBvc2l0aW9uUmVmLFxuICAgIH0sXG4gICAgdHlwaW5nOiB7XG4gICAgICBrZXlib2FyZEV2ZW50OiBudWxsLFxuICAgICAgZXZlbnRJbnB1dExvc3RGb2N1czogbnVsbCxcbiAgICB9LFxuICAgIGZpbmlzaGVkTG9hZGluZzogZmFsc2UsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNoYXJlZFN0YXRlLCBzZXRTaGFyZWRTdGF0ZSB9fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxBbmFseXRpY3MgLz5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFuYWx5dGljcyIsIkFwcENvbnRleHQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGltZXJDb29raWUiLCJ3aW5kb3dTaXplVHJhY2tlclJlZiIsIm1vdXNlUG9zaXRpb25SZWYiLCJzaGFyZWRTdGF0ZSIsInNldFNoYXJlZFN0YXRlIiwicG9ydGZvbGlvIiwiTmF2QmFyIiwiSW50ZXJ2YWxFdmVudCIsInNjcm9sbGluZyIsInNjcm9sbFNpemVZIiwiU2Nyb2xsaW5nIiwidXNlcmRhdGEiLCJ0aW1lckNvb2tpZVJlZiIsIndpbmRvd1NpemVUcmFja2VyIiwibW91c2VQb3NpdGlvblRyYWNrZXIiLCJ0eXBpbmciLCJrZXlib2FyZEV2ZW50IiwiZXZlbnRJbnB1dExvc3RGb2N1cyIsImZpbmlzaGVkTG9hZGluZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();