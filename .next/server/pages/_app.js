(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3471:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "use-dark-mode"
var external_use_dark_mode_ = __webpack_require__(657);
var external_use_dark_mode_default = /*#__PURE__*/__webpack_require__.n(external_use_dark_mode_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
// EXTERNAL MODULE: ./helpers/usePlayerContext.tsx
var usePlayerContext = __webpack_require__(6212);
// EXTERNAL MODULE: ./helpers/useHydrationRender.tsx
var useHydrationRender = __webpack_require__(8440);
// EXTERNAL MODULE: ./helpers/useNotificationsContext.tsx
var useNotificationsContext = __webpack_require__(4456);
;// CONCATENATED MODULE: ./components/hacky-flash-solution/index.tsx




const HackyFlashSolution = ({
  children
}) => {
  const isHydrationRender = (0,useHydrationRender/* default */.ZP)();

  if (isHydrationRender) {
    return jsx_runtime_.jsx("div", {
      style: {
        visibility: 'hidden'
      },
      children: children
    });
  }

  return children;
};

/* harmony default export */ var hacky_flash_solution = (HackyFlashSolution);
// EXTERNAL MODULE: ./theme/styles.tsx + 4 modules
var styles = __webpack_require__(2446);
;// CONCATENATED MODULE: ./helpers/Providers.tsx











const Providers = ({
  children
}) => {
  const {
    value
  } = external_use_dark_mode_default()(false);
  const theme = value ? styles/* DARK_THEME */.$J : styles/* LIGHT_THEME */.f8;
  return jsx_runtime_.jsx(react_.ThemeProvider, {
    theme: theme,
    children: jsx_runtime_.jsx(useHydrationRender/* HydrationRenderProvider */.ll, {
      children: jsx_runtime_.jsx(usePlayerContext/* PlayerContextProvider */.QM, {
        children: (0,jsx_runtime_.jsxs)(useNotificationsContext/* NotificationContextProvider */.l4, {
          children: [jsx_runtime_.jsx(styles/* StyledToastContainer */.FG, {
            hideProgressBar: true
          }), jsx_runtime_.jsx(hacky_flash_solution, {
            children: children
          })]
        })
      })
    })
  });
};

/* harmony default export */ var helpers_Providers = (Providers);
;// CONCATENATED MODULE: ./components/error-boundary/ErrorBoundary.js



class ErrorBoundary extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return jsx_runtime_.jsx("h1", {
        children: "Something went wrong."
      });
    }

    return this.props.children;
  }

}

/* harmony default export */ var error_boundary_ErrorBoundary = (ErrorBoundary);
;// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const App = ({
  Component,
  pageProps
}) => (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [styles/* globalStyles */.W0, jsx_runtime_.jsx(error_boundary_ErrorBoundary, {
    children: jsx_runtime_.jsx(helpers_Providers, {
      children: jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  })]
});

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 8819:
/***/ (function() {



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
var __webpack_exports__ = __webpack_require__.X(0, [102,456], function() { return __webpack_exec__(3471); });
module.exports = __webpack_exports__;

})();