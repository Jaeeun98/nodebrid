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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": function() { return /* binding */ addPost; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n//초기값을 기준으로 리듀서를 쪼갬\n//초기값\n//대문자 소문자는 서버에서 데이터 받아오는 영향에 따라 \nvar initialState = {\n    mainPosts: [\n        {\n            id: 1,\n            User: {\n                id: 1,\n                nickname: 'jaeeun'\n            },\n            Content: '첫 번째 게시글 #해시태그 #node',\n            Images: [\n                {\n                    src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'\n                },\n                {\n                    src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'\n                },\n                {\n                    src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'\n                }\n            ],\n            Comments: [\n                {\n                    User: {\n                        nickname: 'nero'\n                    },\n                    content: '우와 개정판이 나왔군요~'\n                },\n                {\n                    User: {\n                        nickname: 'hero'\n                    },\n                    content: '얼른 사고싶어요~'\n                }\n            ]\n        }\n    ],\n    imagePaths: [],\n    postAdded: false\n};\n//게시글 작성 action\nvar ADD_POST = 'ADD_POST';\nvar addPost = {\n    type: ADD_POST\n};\n//바꿀 포스트\nvar dummyPost = {\n    id: 2,\n    content: '더미데이터입니다.',\n    User: {\n        id: 1,\n        nickname: 'jaeeun'\n    },\n    Images: [],\n    Comments: []\n};\n//이전 상태를 받아서 다음 상태를 만들어내는 함수\nvar reducer = function(param, action) {\n    var state = param === void 0 ? initialState : param;\n    switch(action.type){\n        case ADD_POST:\n            return _objectSpread({\n            }, state, {\n                //dummypost =  새로운 글\n                //새로운 글을 쓰면, 앞으로 추가되기 때문에 mainPosts 앞에 dummyPost 작성\n                //...state = 깊은 복사는 안되기 때문\n                mainPosts: [\n                    dummyPost\n                ].concat(_toConsumableArray(state.mainPosts)),\n                postAdded: true\n            });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQW1CO0FBRVMsRUFBdkI7QUFDQyxFQUEwQjtBQUNjLEdBQXpDLENBQUNBLFlBQVksR0FBRyxDQUFDO0lBQ2xCQyxTQUFTLEVBQUUsQ0FBQztRQUFBLENBQUM7WUFDVEMsRUFBRSxFQUFDLENBQUM7WUFDSkMsSUFBSSxFQUFHLENBQUM7Z0JBQ0pELEVBQUUsRUFBQyxDQUFDO2dCQUNKRSxRQUFRLEVBQUMsQ0FBUTtZQUNyQixDQUFDO1lBQ0RDLE9BQU8sRUFBRyxDQUFzQjtZQUNaQyxNQUFkLEVBQUMsQ0FBQztnQkFBQSxDQUFDO29CQUNMQyxHQUFHLEVBQUUsQ0FBK0U7Z0JBQ3RGLENBQUM7Z0JBQUUsQ0FBQztvQkFDRkEsR0FBRyxFQUFFLENBQThEO2dCQUNyRSxDQUFDO2dCQUFFLENBQUM7b0JBQ0ZBLEdBQUcsRUFBRSxDQUE4RDtnQkFDckUsQ0FBQztZQUFBLENBQUM7WUFDRkMsUUFBUSxFQUFFLENBQUM7Z0JBQUEsQ0FBQztvQkFDVkwsSUFBSSxFQUFFLENBQUM7d0JBQ0xDLFFBQVEsRUFBRSxDQUFNO29CQUNsQixDQUFDO29CQUNESyxPQUFPLEVBQUUsQ0FBZTtnQkFDTixDQUFuQjtnQkFBRSxDQUFDO29CQUNGTixJQUFJLEVBQUUsQ0FBQzt3QkFDTEMsUUFBUSxFQUFFLENBQU07b0JBQ2xCLENBQUM7b0JBQ0RLLE9BQU8sRUFBRSxDQUFXO2dCQUNSLENBQWI7WUFBQSxDQUFDO1FBQ0osQ0FBQztJQUFBLENBQUM7SUFDRkMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNkQyxTQUFTLEVBQUUsS0FBSztBQUN4QixDQUFDO0FBRUQsRUFBZTtBQUNMLEdBQUwsQ0FBQ0MsUUFBUSxHQUFHLENBQVU7QUFDcEIsR0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNwQkMsSUFBSSxFQUFHRixRQUFRO0FBQ25CLENBQUM7QUFFRCxFQUFRO0FBQ0UsR0FBTCxDQUFDRyxTQUFTLEdBQUcsQ0FBQztJQUNmYixFQUFFLEVBQUUsQ0FBQztJQUNMTyxPQUFPLEVBQUUsQ0FBVztJQUNKTixJQUFaLEVBQUUsQ0FBQztRQUNMRCxFQUFFLEVBQUUsQ0FBQztRQUNMRSxRQUFRLEVBQUUsQ0FBUTtJQUNwQixDQUFDO0lBQ0RFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDVkUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNkLENBQUM7QUFHSCxFQUE0QjtBQUNZLEdBQW5DLENBQUNRLE9BQU8sR0FBRyxRQUFRLFFBQWVDLE1BQU0sRUFBSyxDQUFDO1FBQWxDQyxLQUFLLHNCQUFHbEIsWUFBWTtJQUNqQyxNQUFNLENBQUVpQixNQUFNLENBQUNILElBQUk7UUFDZixJQUFJLENBQUNGLFFBQVE7WUFDVCxNQUFNO2VBQ0NNLEtBQUs7Z0JBQ1IsRUFBb0I7Z0JBQ1osRUFBMkM7Z0JBQ1QsRUFBaEI7Z0JBQzFCakIsU0FBUyxFQUFHLENBQUNjO29CQUFBQSxTQUFTO2dCQUFvQixDQUFDLENBQS9CLE1BQStCLG9CQUFoQkcsS0FBSyxDQUFDakIsU0FBUztnQkFDMUNVLFNBQVMsRUFBRyxJQUFJOzs7WUFHcEIsTUFBTSxDQUFDTyxLQUFLOztBQUV4QixDQUFDO0FBSUQsK0RBQWVGLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzPzZmZjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy/stIjquLDqsJLsnYQg6riw7KSA7Jy866GcIOumrOuTgOyEnOulvCDsqrzqsKxcclxuXHJcbi8v7LSI6riw6rCSXHJcbi8v64yA66y47J6QIOyGjOusuOyekOuKlCDshJzrsoTsl5DshJwg642w7J207YSwIOuwm+yVhOyYpOuKlCDsmIHtlqXsl5Ag65Sw6528IFxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTonamFlZXVuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIENvbnRlbnQgOiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAjbm9kZScsXHJcbiAgICAgICAgSW1hZ2VzOlt7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+JyxcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiAnaGVybycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfslrzrpbgg7IKs6rOg7Iu27Ja07JqUficsXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbn1cclxuXHJcbi8v6rKM7Iuc6riAIOyekeyEsSBhY3Rpb25cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGUgOiBBRERfUE9TVCxcclxufVxyXG5cclxuLy/rsJTqv4Ag7Y+s7Iqk7Yq4XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsOyeheuLiOuLpC4nLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmlja25hbWU6ICdqYWVldW4nLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbiAgfTtcclxuXHJcblxyXG4vL+ydtOyghCDsg4Htg5zrpbwg67Cb7JWE7IScIOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUIDogXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vZHVtbXlwb3N0ID0gIOyDiOuhnOyatCDquIBcclxuICAgICAgICAgICAgICAgIC8v7IOI66Gc7Jq0IOq4gOydhCDsk7DrqbQsIOyVnuycvOuhnCDstpTqsIDrkJjquLAg65WM66y47JeQIG1haW5Qb3N0cyDslZ7sl5AgZHVtbXlQb3N0IOyekeyEsVxyXG4gICAgICAgICAgICAgICAgLy8uLi5zdGF0ZSA9IOq5iuydgCDrs7XsgqzripQg7JWI65CY6riwIOuVjOusuFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzIDogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZCA6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJDb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJjb250ZW50IiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwiYWN0aW9uIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

});