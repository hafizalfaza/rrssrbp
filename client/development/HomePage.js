webpackJsonp([2],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_components_Flexbox__ = __webpack_require__(166);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Newsfeed_NewsfeedItem__ = __webpack_require__(353);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\nvar HomePage = function (_Component) {\n    _inherits(HomePage, _Component);\n\n    function HomePage() {\n        _classCallCheck(this, HomePage);\n\n        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));\n    }\n\n    _createClass(HomePage, [{\n        key: 'render',\n        value: function render() {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Newsfeed_NewsfeedItem__[\"a\" /* default */], null)\n            );\n        }\n    }]);\n\n    return HomePage;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar _default = HomePage;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n    if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n        return;\n    }\n\n    __REACT_HOT_LOADER__.register(HomePage, 'HomePage', '/Users/hafizalfaza/practice/react/instaclone/source/universal/pages/HomePage/HomePage.js');\n\n    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/hafizalfaza/practice/react/instaclone/source/universal/pages/HomePage/HomePage.js');\n}();\n\n;\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/universal/pages/HomePage/HomePage.js\n// module id = 169\n// module chunks = 2\n\n//# sourceURL=webpack:///./source/universal/pages/HomePage/HomePage.js?");

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_plugin_universal_import_importCss__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_plugin_universal_import_importCss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_plugin_universal_import_importCss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_plugin_universal_import_universalImport__ = __webpack_require__(18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_plugin_universal_import_universalImport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_plugin_universal_import_universalImport__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_universal_component__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_universal_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_universal_component__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_universal_pages_LoadingPage_LoadingPage__ = __webpack_require__(19);\n\n\n\n\n\n\n\nvar _default = __WEBPACK_IMPORTED_MODULE_3_react_universal_component___default()(function () {\n  return __WEBPACK_IMPORTED_MODULE_2_babel_plugin_universal_import_universalImport___default()({\n    id: './NewsfeedItem',\n    file: '/Users/hafizalfaza/practice/react/instaclone/source/universal/pages/HomePage/Newsfeed/NewsfeedItem/index.js',\n    load: function load() {\n      return Promise.all([__webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 352)), __WEBPACK_IMPORTED_MODULE_1_babel_plugin_universal_import_importCss___default()('NewsfeedItem', {})]).then(function (proms) {\n        return proms[0];\n      });\n    },\n    path: function path() {\n      return __WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, './NewsfeedItem');\n    },\n    resolve: function resolve() {\n      return /*require.resolve*/(352);\n    },\n    chunkName: function chunkName() {\n      return 'NewsfeedItem';\n    }\n  });\n}, { loading: __WEBPACK_IMPORTED_MODULE_4_universal_pages_LoadingPage_LoadingPage__[\"LoadingPage\"] });\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/hafizalfaza/practice/react/instaclone/source/universal/pages/HomePage/Newsfeed/NewsfeedItem/index.js');\n}();\n\n;\n/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, \"/\"))\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/universal/pages/HomePage/Newsfeed/NewsfeedItem/index.js\n// module id = 353\n// module chunks = 2\n\n//# sourceURL=webpack:///./source/universal/pages/HomePage/Newsfeed/NewsfeedItem/index.js?");

/***/ })

});