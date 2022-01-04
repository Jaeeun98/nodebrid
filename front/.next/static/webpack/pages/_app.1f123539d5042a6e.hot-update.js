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

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginAction\": function() { return /* binding */ loginAction; },\n/* harmony export */   \"logoutAction\": function() { return /* binding */ logoutAction; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n//store = store + reducer\nvar initialState = {\n    user: {\n        isLoggedIn: false,\n        user: null,\n        signUpData: {\n        },\n        loginData: {\n        }\n    },\n    post: {\n        mainPosts: []\n    }\n};\n//action creator\nvar loginAction = function(data) {\n    return {\n        type: 'LOG_IN',\n        //객체에서 key와 변수가 같으면 생략 가능\n        data: data\n    };\n};\nvar logoutAction = function() {\n    return {\n        type: 'LOG_OUT'\n    };\n};\n//reducer = 이전상태와 액션을 받아서 다음 상태를 만들어내는 함수\nvar rootReducer = function(param, action) {\n    var state = param === void 0 ? initialState : param;\n    switch(action.type){\n        case 'LOG_IN':\n            return _objectSpread({\n            }, state, {\n                user: _objectSpread({\n                }, state.user, {\n                    isLoggedIn: true,\n                    user: action.data\n                })\n            });\n        case 'LOG_OUT':\n            return _objectSpread({\n            }, state, {\n                user: _objectSpread({\n                }, state.user, {\n                    isLoggedIn: false,\n                    user: null\n                })\n            });\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQXlCO0FBQ3pCLEdBQUssQ0FBQ0EsWUFBWSxHQUFHLENBQUM7SUFDbEJDLElBQUksRUFBRSxDQUFDO1FBQ0hDLFVBQVUsRUFBRyxLQUFLO1FBQ2xCRCxJQUFJLEVBQUcsSUFBSTtRQUNYRSxVQUFVLEVBQUcsQ0FBQztRQUFBLENBQUM7UUFDZkMsU0FBUyxFQUFHLENBQUM7UUFBQSxDQUFDO0lBQ2xCLENBQUM7SUFDREMsSUFBSSxFQUFFLENBQUM7UUFDSEMsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0FBQ0wsQ0FBQztBQUVELEVBQWdCO0FBQ1QsR0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7SUFDaEMsTUFBTSxDQUFDLENBQUM7UUFDSkMsSUFBSSxFQUFHLENBQVE7UUFDZixFQUF5QjtRQUNLRCxJQUExQixFQUFKQSxJQUFJO0lBQ1IsQ0FBQztBQUNMLENBQUM7QUFFTSxHQUFLLENBQUNFLFlBQVksR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUMvQixNQUFNLENBQUMsQ0FBQztRQUNKRCxJQUFJLEVBQUcsQ0FBUztJQUNwQixDQUFDO0FBQ0wsQ0FBQztBQUVELEVBQXlDO0FBQ3pDLEdBQUssQ0FBQ0UsV0FBVyxHQUFHLFFBQVEsUUFBZUMsTUFBTSxFQUFLLENBQUM7UUFBbENDLEtBQUssc0JBQUdiLFlBQVk7SUFDckMsTUFBTSxDQUFFWSxNQUFNLENBQUNILElBQUk7UUFDZixJQUFJLENBQUMsQ0FBUTtZQUNULE1BQU07ZUFDQ0ksS0FBSztnQkFDUlosSUFBSTttQkFDR1ksS0FBSyxDQUFDWixJQUFJO29CQUNiQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEJELElBQUksRUFBRVcsTUFBTSxDQUFDSixJQUFJOzs7UUFHN0IsSUFBSSxDQUFDLENBQVM7WUFDVixNQUFNO2VBQ0NLLEtBQUs7Z0JBQ1JaLElBQUk7bUJBQ0dZLEtBQUssQ0FBQ1osSUFBSTtvQkFDYkMsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCRCxJQUFJLEVBQUUsSUFBSTs7OztBQUk5QixDQUFDO0FBRUQsK0RBQWVVLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanM/YjliNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3N0b3JlID0gc3RvcmUgKyByZWR1Y2VyXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBpc0xvZ2dlZEluIDogZmFsc2UsXHJcbiAgICAgICAgdXNlciA6IG51bGwsXHJcbiAgICAgICAgc2lnblVwRGF0YSA6IHt9LFxyXG4gICAgICAgIGxvZ2luRGF0YSA6IHt9XHJcbiAgICB9LFxyXG4gICAgcG9zdDoge1xyXG4gICAgICAgIG1haW5Qb3N0czpbXSxcclxuICAgIH1cclxufVxyXG5cclxuLy9hY3Rpb24gY3JlYXRvclxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSBkYXRhID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6ICdMT0dfSU4nLFxyXG4gICAgICAgIC8v6rCd7LK07JeQ7IScIGtleeyZgCDrs4DsiJjqsIAg6rCZ7Jy866m0IOyDneuetSDqsIDriqVcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiAnTE9HX09VVCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vcmVkdWNlciA9IOydtOyghOyDge2DnOyZgCDslaHshZjsnYQg67Cb7JWE7IScIOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsInBvc3QiLCJtYWluUG9zdHMiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwicm9vdFJlZHVjZXIiLCJhY3Rpb24iLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ })

});