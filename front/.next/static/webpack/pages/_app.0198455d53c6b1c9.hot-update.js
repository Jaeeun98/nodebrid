"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n//초기값을 기준으로 리듀서를 쪼갬\n//초기값\nvar initialState = {\n    mainPost: [\n        {\n            id: 1,\n            User: {\n                id: 1,\n                nickname: 'jaeeun'\n            },\n            Content: '첫 번째 게시글 #해시태그 #node',\n            Images: [\n                {\n                    src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'\n                },\n                {\n                    src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'\n                },\n                {\n                    src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'\n                }\n            ]\n        }\n    ]\n};\n//이전 상태를 받아서 다음 상태를 만들어내는 함수\nvar reducer = function(param, action) {\n    var state = param === void 0 ? initialState : param;\n    switch(action.type){\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUEsRUFBbUI7QUFFUyxFQUF2QjtBQUNDLEdBQUQsQ0FBQ0EsWUFBWSxHQUFHLENBQUM7SUFDbEJDLFFBQVEsRUFBRSxDQUFDO1FBQUEsQ0FBQztZQUNSQyxFQUFFLEVBQUMsQ0FBQztZQUNKQyxJQUFJLEVBQUcsQ0FBQztnQkFDSkQsRUFBRSxFQUFDLENBQUM7Z0JBQ0pFLFFBQVEsRUFBQyxDQUFRO1lBQ3JCLENBQUM7WUFDREMsT0FBTyxFQUFHLENBQXNCO1lBQ1pDLE1BQWQsRUFBQyxDQUFDO2dCQUFBLENBQUM7b0JBQ0xDLEdBQUcsRUFBRSxDQUErRTtnQkFDdEYsQ0FBQztnQkFBRSxDQUFDO29CQUNGQSxHQUFHLEVBQUUsQ0FBOEQ7Z0JBQ3JFLENBQUM7Z0JBQUUsQ0FBQztvQkFDRkEsR0FBRyxFQUFFLENBQThEO2dCQUNyRSxDQUFDO1lBQUEsQ0FBQztRQUNSLENBQUM7SUFBQSxDQUFDO0FBRU4sQ0FBQztBQUlELEVBQTRCO0FBQzVCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQVEsUUFBZUMsTUFBTSxFQUFLLENBQUM7UUFBbENDLEtBQUssc0JBQUdWLFlBQVk7SUFDakMsTUFBTSxDQUFFUyxNQUFNLENBQUNFLElBQUk7O1lBR1gsTUFBTSxDQUFDRCxLQUFLOztBQUV4QixDQUFDO0FBSUQsK0RBQWVGLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzPzZmZjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy/stIjquLDqsJLsnYQg6riw7KSA7Jy866GcIOumrOuTgOyEnOulvCDsqrzqsKxcclxuXHJcbi8v7LSI6riw6rCSXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0OiBbe1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgbmlja25hbWU6J2phZWV1bicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBDb250ZW50IDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI25vZGUnLFxyXG4gICAgICAgIEltYWdlczpbe1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXHJcbiAgICAgICAgICB9XSxcclxuICAgIH1dXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8v7J207KCEIOyDge2DnOulvCDrsJvslYTshJwg64uk7J2MIOyDge2DnOulvCDrp4zrk6TslrTrgrTripQg7ZWo7IiYXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0IiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJDb250ZW50IiwiSW1hZ2VzIiwic3JjIiwicmVkdWNlciIsImFjdGlvbiIsInN0YXRlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

});