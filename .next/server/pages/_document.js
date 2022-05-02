(function() {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E_": function() { return /* binding */ mediaStyle; },
/* harmony export */   "pU": function() { return /* binding */ Media; },
/* harmony export */   "C1": function() { return /* binding */ MediaContextProvider; },
/* harmony export */   "Xi": function() { return /* binding */ findBreakpointAtWidth; }
/* harmony export */ });
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5136);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__);

const AppMedia = (0,_artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__.createMedia)({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1200,
    xl: 1440
  }
}); // Generate CSS to be injected into the head

const mediaStyle = AppMedia.createMediaStyle();
const {
  Media,
  MediaContextProvider,
  findBreakpointAtWidth
} = AppMedia;

/***/ }),

/***/ 6715:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6859);
/* harmony import */ var _components_media_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(146);






class AppDocument extends next_document__WEBPACK_IMPORTED_MODULE_2__.default {
  render() {
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
      lang: "en",
      children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "description",
          content: "Quiz Game"
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
          type: "text/css",
          dangerouslySetInnerHTML: {
            __html: _components_media_Media__WEBPACK_IMPORTED_MODULE_3__/* .mediaStyle */ .E_
          }
        })]
      }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AppDocument);

/***/ }),

/***/ 5136:
/***/ (function(module) {

"use strict";
module.exports = require("@artsy/fresnel");;

/***/ }),

/***/ 4554:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");;

/***/ }),

/***/ 227:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ 3932:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ 816:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 6171:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ 5105:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 1168:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [859], function() { return __webpack_exec__(6715); });
module.exports = __webpack_exports__;

})();