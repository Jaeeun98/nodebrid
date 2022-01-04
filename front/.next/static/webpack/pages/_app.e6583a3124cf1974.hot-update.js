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

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar configureStore = function() {\n    var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    return store;\n};\nvar Wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {\n    debug: \"development\" === 'development'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper); /*\r\nredux → 코드량이 매우 많아짐 / action이 정렬되서 출력되기 때문에 error를 잡기 쉬움\r\n\r\n데이터 중앙 저장소 { name:je, age:25 }\r\n→ 각 컴포넌트가 필요할 때 데이터를 사용할 수 있음.\r\n\r\naction : 데이터를 바꿀 때 사용\r\nex) type : 'CHANGE_NICKNAME', data:'jaeeun'\r\n\r\ndispatch : action을 적용시킬 때 사용\r\n→ action을 dispatch 하는 순간 닉네임이 change됨\r\n\r\nreducer : 어떻게 change해야 하는지(action 타입에 따라 이렇게 행동해라)\r\nex) Swtich(action.type){ case 'CHANGE_NICKNAME':return{ ...state, name:action.data, } }\r\n→ action type이 'CHANGE_NICKNAME'면, action의 data를 바꿔라\r\n\r\n*왜 객체를 항상 새로 만드는 가*\r\nconst prev = { name : 'jaeeun' };\r\nconst next = { name : 'jaeeun2' };\r\n\r\n\r\n\r\n\r\n{} === {}  //false\r\nconst a = {};\r\nconst b = a;\r\na === b //true;\r\n\r\n객체를 새로 만드는 것은 false이지만, 참조면 true가 됨\r\n\r\n\r\n*/ \n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRDtBQUNmO0FBQ0U7QUFFckMsR0FBSyxDQUFDRyxjQUFjLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDMUIsR0FBSyxDQUFDQyxLQUFLLEdBQUdILGtEQUFXLENBQUNDLGlEQUFXO0lBQ3JDLE1BQU0sQ0FBQ0UsS0FBSztBQUNoQixDQUFDO0FBRUQsR0FBSyxDQUFDQyxPQUFPLEdBQUdMLGlFQUFhLENBQUNHLGNBQWMsRUFBRSxDQUFDO0lBQzNDRyxLQUFLLEVBVlQsQ0FBYSxpQkFVc0IsQ0FBYTtBQUNoRCxDQUFDO0FBRUQsK0RBQWVELE9BQU8sRUFHdEIsQ0ErQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanM/ZjIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcik7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwgeyBcclxuICAgIGRlYnVnOnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XHJcblxyXG5cclxuLypcclxucmVkdXgg4oaSIOy9lOuTnOufieydtCDrp6TsmrAg66eO7JWE7KeQIC8gYWN0aW9u7J20IOygleugrOuQmOyEnCDstpzroKXrkJjquLAg65WM66y47JeQIGVycm9y66W8IOyeoeq4sCDsiazsm4BcclxuXHJcbuuNsOydtO2EsCDspJHslZkg7KCA7J6l7IaMIHsgbmFtZTpqZSwgYWdlOjI1IH1cclxu4oaSIOqwgSDsu7Ttj6zrhIztirjqsIAg7ZWE7JqU7ZWgIOuVjCDrjbDsnbTthLDrpbwg7IKs7Jqp7ZWgIOyImCDsnojsnYwuXHJcblxyXG5hY3Rpb24gOiDrjbDsnbTthLDrpbwg67CU6r+AIOuVjCDsgqzsmqlcclxuZXgpIHR5cGUgOiAnQ0hBTkdFX05JQ0tOQU1FJywgZGF0YTonamFlZXVuJ1xyXG5cclxuZGlzcGF0Y2ggOiBhY3Rpb27snYQg7KCB7Jqp7Iuc7YKsIOuVjCDsgqzsmqlcclxu4oaSIGFjdGlvbuydhCBkaXNwYXRjaCDtlZjripQg7Iic6rCEIOuLieuEpOyehOydtCBjaGFuZ2XrkKhcclxuXHJcbnJlZHVjZXIgOiDslrTrlrvqsowgY2hhbmdl7ZW07JW8IO2VmOuKlOyngChhY3Rpb24g7YOA7J6F7JeQIOuUsOudvCDsnbTroIfqsowg7ZaJ64+Z7ZW06528KVxyXG5leCkgU3d0aWNoKGFjdGlvbi50eXBlKXsgY2FzZSAnQ0hBTkdFX05JQ0tOQU1FJzpyZXR1cm57IC4uLnN0YXRlLCBuYW1lOmFjdGlvbi5kYXRhLCB9IH1cclxu4oaSIGFjdGlvbiB0eXBl7J20ICdDSEFOR0VfTklDS05BTUUn66m0LCBhY3Rpb27snZggZGF0YeulvCDrsJTqv5TrnbxcclxuXHJcbirsmZwg6rCd7LK066W8IO2VreyDgSDsg4jroZwg66eM65Oc64qUIOqwgCpcclxuY29uc3QgcHJldiA9IHsgbmFtZSA6ICdqYWVldW4nIH07XHJcbmNvbnN0IG5leHQgPSB7IG5hbWUgOiAnamFlZXVuMicgfTtcclxuXHJcblxyXG5cclxuXHJcbnt9ID09PSB7fSAgLy9mYWxzZVxyXG5jb25zdCBhID0ge307XHJcbmNvbnN0IGIgPSBhO1xyXG5hID09PSBiIC8vdHJ1ZTtcclxuXHJcbuqwneyytOulvCDsg4jroZwg66eM65Oc64qUIOqyg+ydgCBmYWxzZeydtOyngOunjCwg7LC47KGw66m0IHRydWXqsIAg65CoXHJcblxyXG5cclxuKi8iXSwibmFtZXMiOlsiY3JlYXRlV3JhcHBlciIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwiV3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ })

});