(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5722:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(657);
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_dark_mode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1190);
/* harmony import */ var _helpers_useBreakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7102);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9166);
/* harmony import */ var _theme_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2446);











const getServerSideProps = async () => {
  const top = await (0,_lib_player__WEBPACK_IMPORTED_MODULE_5__/* .getTopPlayers */ .jQ)();
  return {
    props: {
      top: JSON.parse(JSON.stringify(top))
    }
  };
};

const Home = ({
  top
}) => {
  const {
    value: isDark
  } = use_dark_mode__WEBPACK_IMPORTED_MODULE_2___default()(false);
  const {
    lteSmall
  } = (0,_helpers_useBreakpoints__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)();
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_styles__WEBPACK_IMPORTED_MODULE_8__/* .StyledSegment */ .og, {
      inverted: isDark,
      raised: true,
      padded: lteSmall ? true : 'very',
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Header, {
        as: "h1",
        children: "LEADER BOARD"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(top) ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table, {
          inverted: isDark,
          basic: "very",
          celled: true,
          collapsing: true,
          unstackable: true,
          striped: true,
          children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Header, {
            children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {
              children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {
                children: "Player"
              }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {
                children: "Score"
              }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {
                children: "Questions"
              })]
            })
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Body, {
            children: top === null || top === void 0 ? void 0 : top.map((player, index) => {
              var _player$preferences, _player$preferences2, _player$statistics, _player$statistics2, _player$statistics3, _player$statistics4;

              return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {
                children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell, {
                  children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Header, {
                    as: "h4",
                    image: true,
                    children: player !== null && player !== void 0 && (_player$preferences = player.preferences) !== null && _player$preferences !== void 0 && _player$preferences.gender ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {
                      alt: player === null || player === void 0 ? void 0 : player.name,
                      src: (player === null || player === void 0 ? void 0 : (_player$preferences2 = player.preferences) === null || _player$preferences2 === void 0 ? void 0 : _player$preferences2.gender) === 'female' ? 'female.png' : 'male.png',
                      rounded: true,
                      size: "mini"
                    }) : _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {
                      alt: player === null || player === void 0 ? void 0 : player.name,
                      src: 'default.png',
                      rounded: true,
                      size: "mini"
                    })
                  }), player === null || player === void 0 ? void 0 : player.name]
                }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell, {
                  textAlign: "right",
                  children: (player === null || player === void 0 ? void 0 : (_player$statistics = player.statistics) === null || _player$statistics === void 0 ? void 0 : _player$statistics.points) > 0 ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Label, {
                    color: "blue",
                    children: player === null || player === void 0 ? void 0 : (_player$statistics2 = player.statistics) === null || _player$statistics2 === void 0 ? void 0 : _player$statistics2.points
                  }) : _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Label, {
                    color: "yellow",
                    children: player === null || player === void 0 ? void 0 : (_player$statistics3 = player.statistics) === null || _player$statistics3 === void 0 ? void 0 : _player$statistics3.points
                  })
                }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell, {
                  textAlign: "right",
                  children: player === null || player === void 0 ? void 0 : (_player$statistics4 = player.statistics) === null || _player$statistics4 === void 0 ? void 0 : _player$statistics4.questionsAnswered
                })]
              }, index);
            })
          })]
        })
      }) : null]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 5136:
/***/ (function(module) {

"use strict";
module.exports = require("@artsy/fresnel");;

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ 4554:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");;

/***/ }),

/***/ 4617:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/styled/base");;

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

/***/ 223:
/***/ (function(module) {

"use strict";
module.exports = require("lodash/debounce");;

/***/ }),

/***/ 8718:
/***/ (function(module) {

"use strict";
module.exports = require("lodash/isEmpty");;

/***/ }),

/***/ 7548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 1347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ }),

/***/ 657:
/***/ (function(module) {

"use strict";
module.exports = require("use-dark-mode");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,102,940,190,271], function() { return __webpack_exec__(5722); });
module.exports = __webpack_exports__;

})();