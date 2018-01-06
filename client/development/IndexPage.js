webpackJsonp([1],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IndexPage\", function() { return IndexPage; });\n/* harmony export (immutable) */ __webpack_exports__[\"loadData\"] = loadData;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(47);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(58);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersAction__ = __webpack_require__(351);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_universal_components_Page__ = __webpack_require__(126);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_universal_components_Center__ = __webpack_require__(164);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_universal_components_Text__ = __webpack_require__(165);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_universal_components_Flexbox__ = __webpack_require__(163);\n\n\n\n\n\n\n\n\n\n\n\n\nvar IndexPage = function IndexPage(props) {\n  // console.log(window)\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    __WEBPACK_IMPORTED_MODULE_5_universal_components_Page__[\"a\" /* default */],\n    { backgroundColor: '#03A9F4' },\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_2_react_helmet__[\"Helmet\"],\n      null,\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'title',\n        null,\n        'Index Page'\n      )\n    ),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_6_universal_components_Center__[\"a\" /* default */],\n      null,\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_7_universal_components_Text__[\"a\" /* default */],\n        { fontSize: '10vw' },\n        'Index Page'\n      )\n    ),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_6_universal_components_Center__[\"a\" /* default */],\n      null,\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__[\"Link\"],\n        { to: '/not-found' },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_7_universal_components_Text__[\"a\" /* default */],\n          { fontSize: '5vw' },\n          'Go to Not Found Page'\n        )\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'button',\n        { onClick: function onClick() {\n            return props.usersAction();\n          } },\n        'click me'\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        null,\n        props.users.test\n      )\n    ),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_universal_components_Flexbox__[\"a\" /* default */], { backgroundColor: 'red' })\n  );\n};\n\nfunction loadData(store) {\n  console.log('LOAD DATA');\n  store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_usersAction__[\"a\" /* loadUser */])());\n}\n\nfunction mapStateToProps(state) {\n  return {\n    users: state.users\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    usersAction: function usersAction() {\n      dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_usersAction__[\"b\" /* usersAction */])());\n    }\n  };\n}\n\nvar _default = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(IndexPage);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(IndexPage, 'IndexPage', '/Users/hafizalfaza/practice/react/instaclone/source/universal/pages/IndexPage/IndexPage.js');\n\n  __REACT_HOT_LOADER__.register(loadData, 'loadData', '/Users/hafizalfaza/practice/react/instaclone/source/universal/pages/IndexPage/IndexPage.js');\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/hafizalfaza/practice/react/instaclone/source/universal/pages/IndexPage/IndexPage.js');\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/hafizalfaza/practice/react/instaclone/source/universal/pages/IndexPage/IndexPage.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/hafizalfaza/practice/react/instaclone/source/universal/pages/IndexPage/IndexPage.js');\n}();\n\n;\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/universal/pages/IndexPage/IndexPage.js\n// module id = 169\n// module chunks = 1\n\n//# sourceURL=webpack:///./source/universal/pages/IndexPage/IndexPage.js?");

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return usersAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return loadUser; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(59);\n\n\nvar usersAction = function usersAction() {\n    return {\n        type: __WEBPACK_IMPORTED_MODULE_0__constants__[\"c\" /* TEST */],\n        payload: { test: 'test' }\n    };\n};\n\nvar loadUser = function loadUser() {\n    return {\n        type: __WEBPACK_IMPORTED_MODULE_0__constants__[\"b\" /* LOAD_USER */],\n        payload: { test: 'hehehehe' }\n    };\n};\n;\n\nvar _temp = function () {\n    if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n        return;\n    }\n\n    __REACT_HOT_LOADER__.register(usersAction, 'usersAction', '/Users/hafizalfaza/practice/react/instaclone/source/universal/actions/usersAction.js');\n\n    __REACT_HOT_LOADER__.register(loadUser, 'loadUser', '/Users/hafizalfaza/practice/react/instaclone/source/universal/actions/usersAction.js');\n}();\n\n;\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/universal/actions/usersAction.js\n// module id = 351\n// module chunks = 1\n\n//# sourceURL=webpack:///./source/universal/actions/usersAction.js?");

/***/ })

});