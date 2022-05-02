(function() {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 9547:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1470);
/* harmony import */ var _lib_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1190);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const handler = async (req, res) => {
  const {
    name,
    password
  } = JSON.parse(req.body);

  if (!name || !password) {
    res.statusCode = 422;
    return res.json(_objectSpread({}, _utils_errors__WEBPACK_IMPORTED_MODULE_0__/* .default.LOGIN_FORM_DATA_MISSING */ .Z.LOGIN_FORM_DATA_MISSING));
  }

  try {
    const result = await (0,_lib_player__WEBPACK_IMPORTED_MODULE_1__/* .login */ .x4)(name, password);
    return res.json(result);
  } catch (error) {
    res.statusCode = 500;
    return res.json(error === null || error === void 0 ? void 0 : error.message);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 6552:
/***/ (function(module) {

"use strict";
module.exports = require("bcrypt");;

/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ 7548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [190], function() { return __webpack_exec__(9547); });
module.exports = __webpack_exports__;

})();