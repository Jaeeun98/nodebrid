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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar configureStore = function() {\n    var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    store.dispatch({\n        type: 'CHANGE_NICKNAME',\n        data: 'jaeeunPassword22'\n    });\n    return store;\n};\nvar Wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {\n    debug: \"development\" === 'development'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper); /*\r\nredux → 코드량이 매우 많아짐 / action이 정렬되서 출력되기 때문에 error를 잡기 쉬움\r\n\r\n데이터 중앙 저장소 { name:je, age:25 }\r\n→ 각 컴포넌트가 필요할 때 데이터를 사용할 수 있음.\r\n\r\naction : 데이터를 바꿀 때 사용\r\nex) type : 'CHANGE_NICKNAME', data:'jaeeun'\r\n\r\ndispatch : action을 적용시킬 때 사용\r\n→ action을 dispatch 하는 순간 닉네임이 change됨\r\n\r\nreducer : 어떻게 change해야 하는지(action 타입에 따라 이렇게 행동해라)\r\nex) Swtich(action.type){ case 'CHANGE_NICKNAME':return{ ...state, name:action.data, } }\r\n→ action type이 'CHANGE_NICKNAME'면, action의 data를 바꿔라\r\n\r\n*왜 객체를 항상 새로 만드는 가*\r\nconst prev = { name : 'jaeeun' };\r\nconst next = { name : 'jaeeun2' };\r\n\r\n\r\n\r\n\r\n{} === {}  //false\r\nconst a = {};\r\nconst b = a;\r\na === b //true;\r\n\r\n객체를 새로 만드는 것은 false이지만, 참조면 true가 됨\r\n\r\n\r\n*/ \n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRDtBQUNmO0FBQ0Y7QUFFakMsR0FBSyxDQUFDRyxjQUFjLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDMUIsR0FBSyxDQUFDQyxLQUFLLEdBQUdILGtEQUFXLENBQUNDLGlEQUFPO0lBQ2pDRSxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1FBQ1pDLElBQUksRUFBQyxDQUFpQjtRQUN0QkMsSUFBSSxFQUFDLENBQWtCO0lBQzNCLENBQUM7SUFDRCxNQUFNLENBQUNILEtBQUs7QUFDaEIsQ0FBQztBQUVELEdBQUssQ0FBQ0ksT0FBTyxHQUFHUixpRUFBYSxDQUFDRyxjQUFjLEVBQUUsQ0FBQztJQUMzQ00sS0FBSyxFQWRULENBQWEsaUJBY3NCLENBQWE7QUFDaEQsQ0FBQztBQUVELCtEQUFlRCxPQUFPLEVBR3RCLENBK0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzP2YyMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOidDSEFOR0VfTklDS05BTUUnLFxyXG4gICAgICAgIGRhdGE6J2phZWV1blBhc3N3b3JkMjInXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgXHJcbiAgICBkZWJ1Zzpwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyBcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xyXG5cclxuXHJcbi8qXHJcbnJlZHV4IOKGkiDsvZTrk5zrn4nsnbQg66ek7JqwIOunjuyVhOynkCAvIGFjdGlvbuydtCDsoJXroKzrkJjshJwg7Lac66Cl65CY6riwIOuVjOusuOyXkCBlcnJvcuulvCDsnqHquLAg7Ims7JuAXHJcblxyXG7rjbDsnbTthLAg7KSR7JWZIOyggOyepeyGjCB7IG5hbWU6amUsIGFnZToyNSB9XHJcbuKGkiDqsIEg7Lu07Y+s64SM7Yq46rCAIO2VhOyalO2VoCDrlYwg642w7J207YSw66W8IOyCrOyaqe2VoCDsiJgg7J6I7J2MLlxyXG5cclxuYWN0aW9uIDog642w7J207YSw66W8IOuwlOq/gCDrlYwg7IKs7JqpXHJcbmV4KSB0eXBlIDogJ0NIQU5HRV9OSUNLTkFNRScsIGRhdGE6J2phZWV1bidcclxuXHJcbmRpc3BhdGNoIDogYWN0aW9u7J2EIOyggeyaqeyLnO2CrCDrlYwg7IKs7JqpXHJcbuKGkiBhY3Rpb27snYQgZGlzcGF0Y2gg7ZWY64qUIOyInOqwhCDri4nrhKTsnoTsnbQgY2hhbmdl65CoXHJcblxyXG5yZWR1Y2VyIDog7Ja065a76rKMIGNoYW5nZe2VtOyVvCDtlZjripTsp4AoYWN0aW9uIO2DgOyeheyXkCDrlLDrnbwg7J2066CH6rKMIO2WieuPme2VtOudvClcclxuZXgpIFN3dGljaChhY3Rpb24udHlwZSl7IGNhc2UgJ0NIQU5HRV9OSUNLTkFNRSc6cmV0dXJueyAuLi5zdGF0ZSwgbmFtZTphY3Rpb24uZGF0YSwgfSB9XHJcbuKGkiBhY3Rpb24gdHlwZeydtCAnQ0hBTkdFX05JQ0tOQU1FJ+uptCwgYWN0aW9u7J2YIGRhdGHrpbwg67CU6r+U6528XHJcblxyXG4q7JmcIOqwneyytOulvCDtla3sg4Eg7IOI66GcIOunjOuTnOuKlCDqsIAqXHJcbmNvbnN0IHByZXYgPSB7IG5hbWUgOiAnamFlZXVuJyB9O1xyXG5jb25zdCBuZXh0ID0geyBuYW1lIDogJ2phZWV1bjInIH07XHJcblxyXG5cclxuXHJcblxyXG57fSA9PT0ge30gIC8vZmFsc2VcclxuY29uc3QgYSA9IHt9O1xyXG5jb25zdCBiID0gYTtcclxuYSA9PT0gYiAvL3RydWU7XHJcblxyXG7qsJ3ssrTrpbwg7IOI66GcIOunjOuTnOuKlCDqsoPsnYAgZmFsc2XsnbTsp4Drp4wsIOywuOyhsOuptCB0cnVl6rCAIOuQqFxyXG5cclxuXHJcbiovIl0sIm5hbWVzIjpbImNyZWF0ZVdyYXBwZXIiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZGF0YSIsIldyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ })

});