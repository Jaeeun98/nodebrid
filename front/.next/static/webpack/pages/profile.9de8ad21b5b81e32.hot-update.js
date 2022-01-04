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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar FollowList = function(param) {\n    var header = param.header, data = param.data;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.List, {\n        style: {\n            marginBottom: '20px'\n        },\n        grid: {\n            gutter: 4,\n            xs: 2,\n            md: 3\n        },\n        size: \"small\",\n        header: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            children: header\n        }),\n        loadMore: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            style: {\n                textAlign: 'center',\n                margin: '10px 0'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                children: \"더 보기\"\n            })\n        }),\n        bordered: true,\n        dataSource: data,\n        renderItem: function(item) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {\n                style: {\n                    marginTop: '20px'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.StopOutlined, {\n                        }, \"stop\")\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {\n                        description: item.nickname\n                    })\n                })\n            });\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\wodms\\\\Documents\\\\GitHub\\\\nodebrid\\\\front\\\\components\\\\FollowList.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        },\n        __self: _this\n    }));\n};\n_c = FollowList;\nFollowList.prototype = {\n    header: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.toString.isRequired,\n    data: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFDVTs7QUFFaEQsR0FBSyxDQUFDSyxVQUFVLEdBQUcsUUFBUSxRQUFjLENBQUM7UUFBcEJDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7SUFDOUIsTUFBTSxzRUFDREwsc0NBQUk7UUFDRE0sS0FBSyxFQUFFLENBQUNDO1lBQUFBLFlBQVksRUFBQyxDQUFNO1FBQUEsQ0FBQztRQUM1QkMsSUFBSSxFQUFFLENBQUNDO1lBQUFBLE1BQU0sRUFBQyxDQUFDO1lBQUVDLEVBQUUsRUFBQyxDQUFDO1lBQUVDLEVBQUUsRUFBQyxDQUFDO1FBQUEsQ0FBQztRQUM1QkMsSUFBSSxFQUFDLENBQU87UUFDWlIsTUFBTSx1RUFBR1MsQ0FBRztzQkFBRVQsTUFBTTs7UUFDcEJVLFFBQVEsdUVBQUdELENBQUc7WUFBQ1AsS0FBSyxFQUFFLENBQUNTO2dCQUFBQSxTQUFTLEVBQUMsQ0FBUTtnQkFBRUMsTUFBTSxFQUFDLENBQVE7WUFBQSxDQUFDOzJGQUFHbEIsd0NBQU07MEJBQUMsQ0FBSTs7O1FBQ3pFbUIsUUFBUTtRQUNSQyxVQUFVLEVBQUViLElBQUk7UUFDaEJjLFVBQVUsRUFBRSxRQUFRLENBQVBDLElBQUk7MEJBQ2IsTUFBTUMsQ0FBQUEsc0RBQUFBLENBQUxyQiwyQ0FBUztnQkFBQ00sS0FBSyxFQUFFLENBQUNnQjtvQkFBQUEsU0FBUyxFQUFDLENBQU07Z0JBQUEsQ0FBQzsrRkFDL0J2QixzQ0FBSTtvQkFBQ3dCLE9BQU8sRUFBRSxDQUFDOzZGQUFDckIsMkRBQVk7MkJBQUssQ0FBTTtvQkFBRyxDQUFDO21HQUN2Q0gsMkNBQVM7d0JBQUMwQixXQUFXLEVBQUVMLElBQUksQ0FBQ00sUUFBUTs7Ozs7Ozs7Ozs7O0FBTTdELENBQUM7S0FuQkt2QixVQUFVO0FBcUJoQkEsVUFBVSxDQUFDd0IsU0FBUyxHQUFHLENBQUM7SUFDcEJ2QixNQUFNLEVBQUNILHFFQUE2QjtJQUNwQ0ksSUFBSSxFQUFDSixrRUFBMEI7QUFDbkMsQ0FBQztBQUVELCtEQUFlRSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzPzg0MzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBMaXN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTonMjBweCd9fVxyXG4gICAgICAgICAgICBncmlkPXt7Z3V0dGVyOjQsIHhzOjIsIG1kOjN9fVxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XHJcbiAgICAgICAgICAgIGxvYWRNb3JlPXs8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW46JzEwcHggMCd9fT48QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj48L2Rpdj59XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7bWFyZ2luVG9wOicyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiAvPl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvbGxvd0xpc3QucHJvdG90eXBlID0ge1xyXG4gICAgaGVhZGVyOlByb3BUeXBlcy50b1N0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGF0YTpQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJuYW1lcyI6WyJCdXR0b24iLCJDYXJkIiwiTGlzdCIsIlByb3BUeXBlcyIsIlN0b3BPdXRsaW5lZCIsIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJncmlkIiwiZ3V0dGVyIiwieHMiLCJtZCIsInNpemUiLCJkaXYiLCJsb2FkTW9yZSIsInRleHRBbGlnbiIsIm1hcmdpbiIsImJvcmRlcmVkIiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiSXRlbSIsIm1hcmdpblRvcCIsImFjdGlvbnMiLCJNZXRhIiwiZGVzY3JpcHRpb24iLCJuaWNrbmFtZSIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

});