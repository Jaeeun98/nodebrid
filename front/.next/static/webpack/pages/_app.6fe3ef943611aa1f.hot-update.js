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

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginAction\": function() { return /* binding */ loginAction; },\n/* harmony export */   \"logoutAction\": function() { return /* binding */ logoutAction; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n//초기값을 기준으로 리듀서를 쪼갬\n//초기값\nvar initialState = {\n    user: {\n        isLoggedIn: false,\n        me: null,\n        signUpData: {\n        },\n        loginData: {\n        }\n    }\n};\n//action creator\nvar loginAction = function(data) {\n    return {\n        type: 'LOG_IN',\n        //객체에서 key와 변수가 같으면 생략 가능\n        data: data\n    };\n};\nvar logoutAction = function() {\n    return {\n        type: 'LOG_OUT'\n    };\n};\n//이전 상태를 받아서 다음 상태를 만들어내는 함수\nvar reducer = function(param, action) {\n    var state = param === void 0 ? initialState : param;\n    switch(action.type){\n        case 'LOG_IN':\n            return _objectSpread({\n            }, state, {\n                isLoggedIn: true,\n                me: action.data\n            });\n        case 'LOG_OUT':\n            return _objectSpread({\n            }, state, {\n                isLoggedIn: false,\n                me: null\n            });\n        default:\n            return state;\n    }\n};\n//export default한건 import 할 때 원하는 이름 지어서 자유롭게 가져올 수 있음\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBbUI7QUFFUyxFQUF2QjtBQUNDLEdBQUQsQ0FBQ0EsWUFBWSxHQUFHLENBQUM7SUFDbEJDLElBQUksRUFBRSxDQUFDO1FBQ0hDLFVBQVUsRUFBRyxLQUFLO1FBQ2xCQyxFQUFFLEVBQUcsSUFBSTtRQUNUQyxVQUFVLEVBQUcsQ0FBQztRQUFBLENBQUM7UUFDZkMsU0FBUyxFQUFHLENBQUM7UUFBQSxDQUFDO0lBQ2xCLENBQUM7QUFDTCxDQUFDO0FBRUQsRUFBZ0I7QUFDVCxHQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztJQUNoQyxNQUFNLENBQUMsQ0FBQztRQUNKQyxJQUFJLEVBQUcsQ0FBUTtRQUNmLEVBQXlCO1FBQ0tELElBQTFCLEVBQUpBLElBQUk7SUFDUixDQUFDO0FBQ0wsQ0FBQztBQUVNLEdBQUssQ0FBQ0UsWUFBWSxHQUFHLFFBQVEsR0FBRixDQUFDO0lBQy9CLE1BQU0sQ0FBQyxDQUFDO1FBQ0pELElBQUksRUFBRyxDQUFTO0lBQ3BCLENBQUM7QUFDTCxDQUFDO0FBR0QsRUFBNEI7QUFDWSxHQUFuQyxDQUFDRSxPQUFPLEdBQUcsUUFBUSxRQUFlQyxNQUFNLEVBQUssQ0FBQztRQUFsQ0MsS0FBSyxzQkFBR1osWUFBWTtJQUNqQyxNQUFNLENBQUVXLE1BQU0sQ0FBQ0gsSUFBSTtRQUVmLElBQUksQ0FBQyxDQUFRO1lBQ1QsTUFBTTtlQUNDSSxLQUFLO2dCQUNSVixVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLEVBQUUsRUFBRVEsTUFBTSxDQUFDSixJQUFJOztRQUd2QixJQUFJLENBQUMsQ0FBUztZQUNWLE1BQU07ZUFDQ0ssS0FBSztnQkFDUlYsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCQyxFQUFFLEVBQUUsSUFBSTs7O1lBSVosTUFBTSxDQUFDUyxLQUFLOztBQUV4QixDQUFDO0FBR0QsRUFBc0Q7QUFDdEQsK0RBQWVGLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyLmpzPzBkZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy/stIjquLDqsJLsnYQg6riw7KSA7Jy866GcIOumrOuTgOyEnOulvCDsqrzqsKxcclxuXHJcbi8v7LSI6riw6rCSXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBpc0xvZ2dlZEluIDogZmFsc2UsXHJcbiAgICAgICAgbWUgOiBudWxsLFxyXG4gICAgICAgIHNpZ25VcERhdGEgOiB7fSxcclxuICAgICAgICBsb2dpbkRhdGEgOiB7fVxyXG4gICAgfSxcclxufVxyXG5cclxuLy9hY3Rpb24gY3JlYXRvclxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSBkYXRhID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6ICdMT0dfSU4nLFxyXG4gICAgICAgIC8v6rCd7LK07JeQ7IScIGtleeyZgCDrs4DsiJjqsIAg6rCZ7Jy866m0IOyDneuetSDqsIDriqVcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiAnTE9HX09VVCcsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL+ydtOyghCDsg4Htg5zrpbwg67Cb7JWE7IScIOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICdMT0dfSU4nOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IGFjdGlvbi5kYXRhXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGxcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL2V4cG9ydCBkZWZhdWx07ZWc6rG0IGltcG9ydCDtlaAg65WMIOybkO2VmOuKlCDsnbTrpoQg7KeA7Ja07IScIOyekOycoOuhreqyjCDqsIDsoLjsmKwg7IiYIOyeiOydjFxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwiYWN0aW9uIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

});