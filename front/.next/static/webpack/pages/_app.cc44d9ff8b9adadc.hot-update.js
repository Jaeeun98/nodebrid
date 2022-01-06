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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": function() { return /* binding */ addPost; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n//초기값을 기준으로 리듀서를 쪼갬\n//초기값\n//대문자 소문자는 서버에서 데이터 받아오는 영향에 따라 \nvar initialState = {\n    mainPosts: [\n        {\n            id: 1,\n            User: {\n                id: 1,\n                nickname: 'jaeeun'\n            },\n            content: '첫 번째 게시글 #해시태그 #node',\n            Images: [\n                {\n                    src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'\n                },\n                {\n                    src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'\n                }, \n            ],\n            Comments: [\n                {\n                    User: {\n                        nickname: 'nero'\n                    },\n                    content: '우와 개정판이 나왔군요~'\n                },\n                {\n                    User: {\n                        nickname: 'hero'\n                    },\n                    content: '얼른 사고싶어요~'\n                }\n            ]\n        }\n    ],\n    imagePaths: [],\n    postAdded: false\n};\n//게시글 작성 action\nvar ADD_POST = 'ADD_POST';\nvar addPost = {\n    type: ADD_POST\n};\n//바꿀 포스트\nvar dummyPost = {\n    id: 2,\n    content: '더미데이터입니다.',\n    User: {\n        id: 1,\n        nickname: 'jaeeun222'\n    },\n    Images: [],\n    Comments: []\n};\n//이전 상태를 받아서 다음 상태를 만들어내는 함수\nvar reducer = function(param, action) {\n    var state = param === void 0 ? initialState : param;\n    switch(action.type){\n        case ADD_POST:\n            return _objectSpread({\n            }, state, {\n                //dummypost =  새로운 글\n                //새로운 글을 쓰면, 앞으로 추가되기 때문에 mainPosts 앞에 dummyPost 작성\n                //...state = 깊은 복사는 안되기 때문\n                mainPosts: [\n                    dummyPost\n                ].concat(_toConsumableArray(state.mainPosts)),\n                postAdded: true\n            });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQW1CO0FBRVMsRUFBdkI7QUFDQyxFQUEwQjtBQUNjLEdBQXpDLENBQUNBLFlBQVksR0FBRyxDQUFDO0lBQ2xCQyxTQUFTLEVBQUUsQ0FBQztRQUFBLENBQUM7WUFDVEMsRUFBRSxFQUFDLENBQUM7WUFDSkMsSUFBSSxFQUFHLENBQUM7Z0JBQ0pELEVBQUUsRUFBQyxDQUFDO2dCQUNKRSxRQUFRLEVBQUMsQ0FBUTtZQUNyQixDQUFDO1lBQ0RDLE9BQU8sRUFBRyxDQUFzQjtZQUNaQyxNQUFkLEVBQUMsQ0FBQztnQkFBQSxDQUFDO29CQUNMQyxHQUFHLEVBQUUsQ0FBK0U7Z0JBQ3RGLENBQUM7Z0JBQUUsQ0FBQztvQkFDRkEsR0FBRyxFQUFFLENBQThEO2dCQUNyRSxDQUFDO1lBQUUsQ0FBQztZQUNKQyxRQUFRLEVBQUUsQ0FBQztnQkFBQSxDQUFDO29CQUNWTCxJQUFJLEVBQUUsQ0FBQzt3QkFDTEMsUUFBUSxFQUFFLENBQU07b0JBQ2xCLENBQUM7b0JBQ0RDLE9BQU8sRUFBRSxDQUFlO2dCQUNOLENBQW5CO2dCQUFFLENBQUM7b0JBQ0ZGLElBQUksRUFBRSxDQUFDO3dCQUNMQyxRQUFRLEVBQUUsQ0FBTTtvQkFDbEIsQ0FBQztvQkFDREMsT0FBTyxFQUFFLENBQVc7Z0JBQ1IsQ0FBYjtZQUFBLENBQUM7UUFDSixDQUFDO0lBQUEsQ0FBQztJQUNGSSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2RDLFNBQVMsRUFBRSxLQUFLO0FBQ3hCLENBQUM7QUFFRCxFQUFlO0FBQ0wsR0FBTCxDQUFDQyxRQUFRLEdBQUcsQ0FBVTtBQUNwQixHQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO0lBQ3BCQyxJQUFJLEVBQUdGLFFBQVE7QUFDbkIsQ0FBQztBQUVELEVBQVE7QUFDRSxHQUFMLENBQUNHLFNBQVMsR0FBRyxDQUFDO0lBQ2ZaLEVBQUUsRUFBRSxDQUFDO0lBQ0xHLE9BQU8sRUFBRSxDQUFXO0lBQ0pGLElBQVosRUFBRSxDQUFDO1FBQ0xELEVBQUUsRUFBRSxDQUFDO1FBQ0xFLFFBQVEsRUFBRSxDQUFXO0lBQ3ZCLENBQUM7SUFDREUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNWRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ2QsQ0FBQztBQUdILEVBQTRCO0FBQ1ksR0FBbkMsQ0FBQ08sT0FBTyxHQUFHLFFBQVEsUUFBZUMsTUFBTSxFQUFLLENBQUM7UUFBbENDLEtBQUssc0JBQUdqQixZQUFZO0lBQ2pDLE1BQU0sQ0FBRWdCLE1BQU0sQ0FBQ0gsSUFBSTtRQUNmLElBQUksQ0FBQ0YsUUFBUTtZQUNULE1BQU07ZUFDQ00sS0FBSztnQkFDUixFQUFvQjtnQkFDWixFQUEyQztnQkFDVCxFQUFoQjtnQkFDMUJoQixTQUFTLEVBQUcsQ0FBQ2E7b0JBQUFBLFNBQVM7Z0JBQW9CLENBQUMsQ0FBL0IsTUFBK0Isb0JBQWhCRyxLQUFLLENBQUNoQixTQUFTO2dCQUMxQ1MsU0FBUyxFQUFHLElBQUk7OztZQUdwQixNQUFNLENBQUNPLEtBQUs7O0FBRXhCLENBQUM7QUFJRCwrREFBZUYsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QuanM/NmZmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL+y0iOq4sOqwkuydhCDquLDspIDsnLzroZwg66as65OA7ISc66W8IOyqvOqwrFxyXG5cclxuLy/stIjquLDqsJJcclxuLy/rjIDrrLjsnpAg7IaM66y47J6Q64qUIOyEnOuyhOyXkOyEnCDrjbDsnbTthLAg67Cb7JWE7Jik64qUIOyYge2WpeyXkCDrlLDrnbwgXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOidqYWVldW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICNub2RlJyxcclxuICAgICAgICBJbWFnZXM6W3tcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgICAgICAgfSwgXSxcclxuICAgICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUficsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7Ja866W4IOyCrOqzoOyLtuyWtOyalH4nLFxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XSxcclxuICAgICAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgICAgICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG59XHJcblxyXG4vL+qyjOyLnOq4gCDsnpHshLEgYWN0aW9uXHJcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgICB0eXBlIDogQUREX1BPU1QsXHJcbn1cclxuXHJcbi8v67CU6r+AIO2PrOyKpO2KuFxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuJyxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5pY2tuYW1lOiAnamFlZXVuMjIyJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG4gIH07XHJcblxyXG5cclxuLy/snbTsoIQg7IOB7YOc66W8IOuwm+yVhOyEnCDri6TsnYwg7IOB7YOc66W8IOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVCA6IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvL2R1bW15cG9zdCA9ICDsg4jroZzsmrQg6riAXHJcbiAgICAgICAgICAgICAgICAvL+yDiOuhnOyatCDquIDsnYQg7JOw66m0LCDslZ7snLzroZwg7LaU6rCA65CY6riwIOuVjOusuOyXkCBtYWluUG9zdHMg7JWe7JeQIGR1bW15UG9zdCDsnpHshLFcclxuICAgICAgICAgICAgICAgIC8vLi4uc3RhdGUgPSDquYrsnYAg67O17IKs64qUIOyViOuQmOq4sCDrlYzrrLhcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0cyA6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICBwb3N0QWRkZWQgOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwiYWN0aW9uIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

});