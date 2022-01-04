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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar configureStore = function() {\n    //middleware를 사용해야 Redux에서 action이 실행되는 것을 확인할 수 있음\n    //npm i redux-devtools-extension가 있어야 개발자 도구랑 연동됨\n    var enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)([]));\n    var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], enhancer);\n    return store;\n};\nvar Wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {\n    debug: \"development\" === 'development'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper); /*\r\nredux → 코드량이 매우 많아짐 / action이 정렬되서 출력되기 때문에 error를 잡기 쉬움\r\n\r\n데이터 중앙 저장소 { name:je, age:25 }\r\n→ 각 컴포넌트가 필요할 때 데이터를 사용할 수 있음.\r\n\r\naction : 데이터를 바꿀 때 사용\r\nex) type : 'CHANGE_NICKNAME', data:'jaeeun'\r\n\r\ndispatch : action을 적용시킬 때 사용\r\n→ action을 dispatch 하는 순간 닉네임이 change됨\r\n\r\nreducer : 어떻게 change해야 하는지(action 타입에 따라 이렇게 행동해라)\r\nex) Swtich(action.type){ case 'CHANGE_NICKNAME':return{ ...state, name:action.data, } }\r\n→ action type이 'CHANGE_NICKNAME'면, action의 data를 바꿔라\r\n\r\n*왜 객체를 항상 새로 만드는 가*\r\nconst prev = { name : 'jaeeun' };\r\nconst next = { name : 'jaeeun2' };\r\n\r\n\r\n\r\n\r\n{} === {}  //false\r\nconst a = {};\r\nconst b = a;\r\na === b //true;\r\n\r\n객체를 새로 만드는 것은 false이지만, 참조면 true가 됨\r\n\r\n\r\n*/ \n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDVztBQUN4QjtBQUN5QjtBQUU5RCxHQUFLLENBQUNNLGNBQWMsR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUMxQixFQUFtRDtJQUNYLEVBQVM7SUFDdkIsR0FBckIsQ0FBQ0MsUUFBUSxHQVJsQixNQVEwRCxHQUFHTCxDQUE0QixHQUFHRyw2RUFBbUIsQ0FBQ0osc0RBQWUsQ0FBQyxDQUFDLENBQUM7SUFDOUgsR0FBSyxDQUFDTyxLQUFLLEdBQUdMLGtEQUFXLENBQUNDLGlEQUFXLEVBQUVHLFFBQVE7SUFDL0MsTUFBTSxDQUFDQyxLQUFLO0FBQ2hCLENBQUM7QUFFRCxHQUFLLENBQUNDLE9BQU8sR0FBR1QsaUVBQWEsQ0FBQ00sY0FBYyxFQUFFLENBQUM7SUFDM0NJLEtBQUssRUFkVCxDQUFhLGlCQWNzQixDQUFhO0FBQ2hELENBQUM7QUFFRCwrREFBZUQsT0FBTyxFQUd0QixDQStCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz9mMjAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgLy9taWRkbGV3YXJl66W8IOyCrOyaqe2VtOyVvCBSZWR1eOyXkOyEnCBhY3Rpb27snbQg7Iuk7ZaJ65CY64qUIOqyg+ydhCDtmZXsnbjtlaAg7IiYIOyeiOydjFxyXG4gICAgLy9ucG0gaSByZWR1eC1kZXZ0b29scy1leHRlbnNpb27qsIAg7J6I7Ja07JW8IOqwnOuwnOyekCDrj4TqtazrnpEg7Jew64+Z65CoXHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZShbXSkpIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoW10pKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IFxyXG4gICAgZGVidWc6cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjtcclxuXHJcblxyXG4vKlxyXG5yZWR1eCDihpIg7L2U65Oc65+J7J20IOunpOyasCDrp47slYTsp5AgLyBhY3Rpb27snbQg7KCV66Cs65CY7IScIOy2nOugpeuQmOq4sCDrlYzrrLjsl5AgZXJyb3Lrpbwg7J6h6riwIOyJrOybgFxyXG5cclxu642w7J207YSwIOykkeyVmSDsoIDsnqXshowgeyBuYW1lOmplLCBhZ2U6MjUgfVxyXG7ihpIg6rCBIOy7tO2PrOuEjO2KuOqwgCDtlYTsmpTtlaAg65WMIOuNsOydtO2EsOulvCDsgqzsmqntlaAg7IiYIOyeiOydjC5cclxuXHJcbmFjdGlvbiA6IOuNsOydtO2EsOulvCDrsJTqv4Ag65WMIOyCrOyaqVxyXG5leCkgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLCBkYXRhOidqYWVldW4nXHJcblxyXG5kaXNwYXRjaCA6IGFjdGlvbuydhCDsoIHsmqnsi5ztgqwg65WMIOyCrOyaqVxyXG7ihpIgYWN0aW9u7J2EIGRpc3BhdGNoIO2VmOuKlCDsiJzqsIQg64uJ64Sk7J6E7J20IGNoYW5nZeuQqFxyXG5cclxucmVkdWNlciA6IOyWtOuWu+qyjCBjaGFuZ2XtlbTslbwg7ZWY64qU7KeAKGFjdGlvbiDtg4DsnoXsl5Ag65Sw6528IOydtOugh+qyjCDtlonrj5ntlbTrnbwpXHJcbmV4KSBTd3RpY2goYWN0aW9uLnR5cGUpeyBjYXNlICdDSEFOR0VfTklDS05BTUUnOnJldHVybnsgLi4uc3RhdGUsIG5hbWU6YWN0aW9uLmRhdGEsIH0gfVxyXG7ihpIgYWN0aW9uIHR5cGXsnbQgJ0NIQU5HRV9OSUNLTkFNRSfrqbQsIGFjdGlvbuydmCBkYXRh66W8IOuwlOq/lOudvFxyXG5cclxuKuyZnCDqsJ3ssrTrpbwg7ZWt7IOBIOyDiOuhnCDrp4zrk5zripQg6rCAKlxyXG5jb25zdCBwcmV2ID0geyBuYW1lIDogJ2phZWV1bicgfTtcclxuY29uc3QgbmV4dCA9IHsgbmFtZSA6ICdqYWVldW4yJyB9O1xyXG5cclxuXHJcblxyXG5cclxue30gPT09IHt9ICAvL2ZhbHNlXHJcbmNvbnN0IGEgPSB7fTtcclxuY29uc3QgYiA9IGE7XHJcbmEgPT09IGIgLy90cnVlO1xyXG5cclxu6rCd7LK066W8IOyDiOuhnCDrp4zrk5zripQg6rKD7J2AIGZhbHNl7J207KeA66eMLCDssLjsobDrqbQgdHJ1ZeqwgCDrkKhcclxuXHJcblxyXG4qLyJdLCJuYW1lcyI6WyJjcmVhdGVXcmFwcGVyIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiY29uZmlndXJlU3RvcmUiLCJlbmhhbmNlciIsInN0b3JlIiwiV3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar compose = (__webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\").compose);\n\nexports.__esModule = true;\nexports.composeWithDevTools =\n  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__\n    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__\n    : function () {\n        if (arguments.length === 0) return undefined;\n        if (typeof arguments[0] === 'object') return compose;\n        return compose.apply(null, arguments);\n      };\n\nexports.devToolsEnhancer =\n  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__\n    ? window.__REDUX_DEVTOOLS_EXTENSION__\n    : function () {\n        return function (noop) {\n          return noop;\n        };\n      };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGNBQWMsOEVBQXdCOztBQUV0QyxrQkFBa0I7QUFDbEIsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2luZGV4LmpzPzMyOTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29tcG9zZSA9IHJlcXVpcmUoJ3JlZHV4JykuY29tcG9zZTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29tcG9zZVdpdGhEZXZUb29scyA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX19cbiAgICA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX19cbiAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JykgcmV0dXJuIGNvbXBvc2U7XG4gICAgICAgIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG5leHBvcnRzLmRldlRvb2xzRW5oYW5jZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fX1xuICAgID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX19cbiAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChub29wKSB7XG4gICAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICAgIH07XG4gICAgICB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/redux-devtools-extension/index.js\n");

/***/ })

});