"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar FollowList = function(param) {\n    var header = param.header, data = param.data;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.List, {\n        style: {\n            marginBottom: '20px'\n        },\n        grid: {\n            gutter: 4,\n            xs: 2,\n            md: 3\n        },\n        size: \"middle\",\n        header: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            children: header\n        }),\n        loadMore: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            style: {\n                textAlign: 'center',\n                margin: '10px 0'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                children: \"더 보기\"\n            })\n        }),\n        bordered: true,\n        dataSource: data,\n        renderItem: function(item) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {\n                style: {\n                    marginTop: '20px'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.StopOutlined, {\n                        }, \"stop\")\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {\n                        description: item.nickname\n                    })\n                })\n            });\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\wodms\\\\Documents\\\\GitHub\\\\nodebrid\\\\front\\\\components\\\\FollowList.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        },\n        __self: _this\n    }));\n};\n_c = FollowList;\nFollowList.prototype = {\n    header: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.toString.isRequired,\n    data: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFDVTs7QUFFaEQsR0FBSyxDQUFDSyxVQUFVLEdBQUcsUUFBUSxRQUFjLENBQUM7UUFBcEJDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7SUFDOUIsTUFBTSxzRUFDREwsc0NBQUk7UUFDRE0sS0FBSyxFQUFFLENBQUNDO1lBQUFBLFlBQVksRUFBQyxDQUFNO1FBQUEsQ0FBQztRQUM1QkMsSUFBSSxFQUFFLENBQUM7WUFBQ0MsTUFBTSxFQUFFLENBQUM7WUFBRUMsRUFBRSxFQUFFLENBQUM7WUFBRUMsRUFBRSxFQUFFLENBQUM7UUFBQyxDQUFDO1FBQ2pDQyxJQUFJLEVBQUMsQ0FBUTtRQUNiUixNQUFNLHVFQUFHUyxDQUFHO3NCQUFFVCxNQUFNOztRQUNwQlUsUUFBUSx1RUFBR0QsQ0FBRztZQUFDUCxLQUFLLEVBQUUsQ0FBQztnQkFBQ1MsU0FBUyxFQUFFLENBQVE7Z0JBQUVDLE1BQU0sRUFBRSxDQUFRO1lBQUEsQ0FBQzsyRkFBR2xCLHdDQUFNOzBCQUFDLENBQUk7OztRQUM1RW1CLFFBQVE7UUFDUkMsVUFBVSxFQUFFYixJQUFJO1FBQ2hCYyxVQUFVLEVBQUUsUUFBUSxDQUFQQyxJQUFJOzBCQUNiLE1BQU1DLENBQUFBLHNEQUFBQSxDQUFMckIsMkNBQVM7Z0JBQUNNLEtBQUssRUFBRSxDQUFDZ0I7b0JBQUFBLFNBQVMsRUFBQyxDQUFNO2dCQUFBLENBQUM7K0ZBQy9CdkIsc0NBQUk7b0JBQUN3QixPQUFPLEVBQUUsQ0FBQzs2RkFBQ3JCLDJEQUFZOzJCQUFLLENBQU07b0JBQUcsQ0FBQzttR0FDdkNILDJDQUFTO3dCQUFDMEIsV0FBVyxFQUFFTCxJQUFJLENBQUNNLFFBQVE7Ozs7Ozs7Ozs7OztBQU03RCxDQUFDO0tBbkJLdkIsVUFBVTtBQXFCaEJBLFVBQVUsQ0FBQ3dCLFNBQVMsR0FBRyxDQUFDO0lBQ3BCdkIsTUFBTSxFQUFDSCxxRUFBNkI7SUFDcENJLElBQUksRUFBQ0osa0VBQTBCO0FBQ25DLENBQUM7QUFFRCwrREFBZUUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcz84NDM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgTGlzdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzIwcHgnfX1cclxuICAgICAgICAgICAgZ3JpZD17eyBndXR0ZXI6IDQsIHhzOiAyLCBtZDogMyB9fVxyXG4gICAgICAgICAgICBzaXplPVwibWlkZGxlXCJcclxuICAgICAgICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgICAgICAgICBsb2FkTW9yZT17PGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnfX0+PEJ1dHRvbj7rjZQg67O06riwPC9CdXR0b24+PC9kaXY+fVxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17e21hcmdpblRvcDonMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgLz5dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5Gb2xsb3dMaXN0LnByb3RvdHlwZSA9IHtcclxuICAgIGhlYWRlcjpQcm9wVHlwZXMudG9TdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRhdGE6UHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDsiXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZCIsIkxpc3QiLCJQcm9wVHlwZXMiLCJTdG9wT3V0bGluZWQiLCJGb2xsb3dMaXN0IiwiaGVhZGVyIiwiZGF0YSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiZ3JpZCIsImd1dHRlciIsInhzIiwibWQiLCJzaXplIiwiZGl2IiwibG9hZE1vcmUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJib3JkZXJlZCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJtYXJnaW5Ub3AiLCJhY3Rpb25zIiwiTWV0YSIsImRlc2NyaXB0aW9uIiwibmlja25hbWUiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

});