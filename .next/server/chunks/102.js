exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 8440:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ll": function() { return /* binding */ HydrationRenderProvider; }
/* harmony export */ });
/* unused harmony exports HydrationRenderContext, useHydrationRender */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const HydrationRenderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(true);

function useHydrationRenderProviderValue() {
  const {
    0: isHydrationRender,
    1: setIsHydrationRender
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsHydrationRender(false);
  }, []);
  return isHydrationRender;
}

const HydrationRenderProvider = props => {
  const isHydrationRender = useHydrationRenderProviderValue();
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HydrationRenderContext.Provider, _objectSpread({
    value: isHydrationRender
  }, props));
};
function useHydrationRender() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(HydrationRenderContext);
}
/* harmony default export */ __webpack_exports__["ZP"] = (useHydrationRender);

/***/ }),

/***/ 6212:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QM": function() { return /* binding */ PlayerContextProvider; }
/* harmony export */ });
/* unused harmony export PlayerContext */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isLoading: false,
  initialEvaluation: false,
  error: null,
  data: null
};

const reducer = (state = initialState, action) => {
  var _action$payload;

  switch (action.type) {
    case 'START_USER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case 'SUCCESS_USER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        data: action.payload
      });

    case 'FAIL_USER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        data: {
          player: null
        },
        error: action.payload
      });

    case 'RESET_USER':
      return _objectSpread(_objectSpread({}, initialState), {}, {
        data: _objectSpread(_objectSpread({}, state.data), {}, {
          player: null
        })
      });

    case 'AUTO_USER':
      return _objectSpread(_objectSpread({}, initialState), {}, {
        data: _objectSpread(_objectSpread({}, state.data), {}, {
          player: (_action$payload = action.payload) !== null && _action$payload !== void 0 ? _action$payload : null
        })
      });

    default:
      return state;
  }
};

const PlayerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  isAuthenticated: false,
  isLoading: false,
  error: null,
  data: null
});

const updatePlayer = async (player, dispatch) => {
  await (0,swr__WEBPACK_IMPORTED_MODULE_2__.mutate)('/api/player', player, false);
  dispatch({
    type: 'AUTO_USER',
    payload: player
  });
};

const PlayerContextProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
  const isAuthenticated = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _state$data;

    return !!(state !== null && state !== void 0 && (_state$data = state.data) !== null && _state$data !== void 0 && _state$data.player);
  }, [state]);
  const loginPlayer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ({
    name,
    password
  }) => {
    try {
      dispatch({
        type: 'START_USER'
      });
      const result = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          name,
          password
        })
      });
      const data = await result.json();
      localStorage.setItem('player', JSON.stringify(data.player));
      localStorage.setItem('jwt', data.token);
      dispatch({
        type: 'SUCCESS_USER',
        payload: data
      });
    } catch (error) {
      localStorage.removeItem('player');
      localStorage.removeItem('jwt');
      return dispatch({
        type: 'FAIL_USER',
        payload: error
      });
    }
  }, []);
  const logout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    localStorage.removeItem('player');
    dispatch({
      type: 'RESET_USER',
      payload: null
    });
  }, [dispatch]);
  const updatePreferences = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (name, numQuestions, gender) => {
    try {
      dispatch({
        type: 'START_USER'
      });
      const result = await fetch('/api/preferences', {
        method: 'POST',
        body: JSON.stringify({
          name,
          numQuestions,
          gender
        })
      });
      const data = await result.json();
      localStorage.setItem('player', JSON.stringify(data === null || data === void 0 ? void 0 : data.player));
      dispatch({
        type: 'SUCCESS_USER',
        payload: data
      });
    } catch (error) {
      return dispatch({
        type: 'FAIL_USER',
        payload: error
      });
    }
  }, []);
  const updateScore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (name, points, questions) => {
    try {
      dispatch({
        type: 'START_USER'
      });
      const result = await fetch('/api/score', {
        method: 'POST',
        body: JSON.stringify({
          name,
          points,
          questions
        })
      });
      const data = await result.json();
      localStorage.setItem('player', JSON.stringify(data === null || data === void 0 ? void 0 : data.player));
      dispatch({
        type: 'SUCCESS_USER',
        payload: data
      });
    } catch (error) {
      return dispatch({
        type: 'FAIL_USER',
        payload: error
      });
    }
  }, []); // Automatic login when there is an user in local storage

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const player = JSON.parse(localStorage.getItem('player'));
    updatePlayer(player, dispatch); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlayerContext.Provider, {
    value: _objectSpread(_objectSpread({}, state), {}, {
      isAuthenticated,
      loginPlayer,
      logout,
      updatePreferences,
      updateScore
    }),
    children: children
  });
};

const usePlayerContext = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlayerContext);

/* harmony default export */ __webpack_exports__["ZP"] = (usePlayerContext);

/***/ }),

/***/ 1871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q6": function() { return /* binding */ red; },
/* harmony export */   "Sn": function() { return /* binding */ black; },
/* harmony export */   "BA": function() { return /* binding */ grey; },
/* harmony export */   "ix": function() { return /* binding */ white; }
/* harmony export */ });
const red = '#a41d23';
const black = '#131313';
const grey = '#c6c8ca';
const white = '#fff';

/***/ }),

/***/ 2852:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "My": function() { return /* binding */ gteSmallMedia; }
/* harmony export */ });
/* unused harmony exports extraSmall, small, medium, large, extraLarge, gteSmall, gteMedium, lteSmall, lteMedium, extraSmallMedia, smallMedia, mediumMedia, largeMedia, extraLargeMedia, gteMediumMedia, lteSmallMedia, lteMediumMedia */
/**
 * There are two type of constants exported here:
 * - simple media query strings (to use, for example, with window.matchMedia())
 * - media query strings prefixed with @media (for easier use on template literals)
 */

/* Simple */
const extraSmall = '(max-width: 47.94em)'; // <= 767px

const small = '(min-width: 48em) and (max-width: 63.94em)'; // >= 768px && <= 1023

const medium = '(min-width: 64em) and (max-width: 74.94em)'; // >= 1024 && <= 1199

const large = '(min-width: 75em) and (max-width: 89.94em)'; // >= 1200 && <= 1439

const extraLarge = '(min-width: 90em)'; // >= 1440px

const gteSmall = '(min-width: 48em)'; // >= 768px

const gteMedium = '(min-width: 75em)'; // >= 1200px

const lteSmall = '(max-width: 63.94em)'; // <= 1023px

const lteMedium = '(max-width: 74.94em)'; // <= 1199px

/* Prefixed with @media */

const extraSmallMedia = `@media ${extraSmall}`; // <= 767px

const smallMedia = `@media ${small}`; // >= 768px && <= 1023

const mediumMedia = `@media ${medium}`; // >= 1024 && <= 1199

const largeMedia = `@media ${large}`; // >= 1200 && <= 1439

const extraLargeMedia = `@media ${extraLarge}`; // >= 1440px

const gteSmallMedia = `@media ${gteSmall}`; // >= 768px

const gteMediumMedia = `@media ${gteMedium}`; // >= 1200px

const lteSmallMedia = `@media ${lteSmall}`; // <= 1023px

const lteMediumMedia = `@media ${lteMedium}`; // <= 1199px

/***/ }),

/***/ 2446:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$J": function() { return /* binding */ DARK_THEME; },
  "jj": function() { return /* binding */ Error; },
  "f8": function() { return /* binding */ LIGHT_THEME; },
  "og": function() { return /* binding */ StyledSegment; },
  "FG": function() { return /* binding */ StyledToastContainer; },
  "td": function() { return /* binding */ getNavLinkStyle; },
  "W0": function() { return /* binding */ globalStyles; },
  "AF": function() { return /* binding */ shadow; }
});

// UNUSED EXPORTS: Button, Section

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
// EXTERNAL MODULE: ./theme/custom-media.ts
var custom_media = __webpack_require__(2852);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
;// CONCATENATED MODULE: ./theme/normalize.ts
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const normalize =  true ? {
  name: "1w1vlua",
  styles: "html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{margin:0.67em 0;font-size:2em;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-size:1em;font-family:monospace;}a{background-color:transparent;}abbr[title]{text-decoration:underline dotted;border-bottom:none;}b,strong{font-weight:bolder;}code,kbd,samp{font-size:1em;font-family:monospace;}small{font-size:80%;}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{margin:0;font-size:100%;font-family:inherit;line-height:1.15;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{padding:0;border-style:none;}button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{display:table;box-sizing:border-box;max-width:100%;padding:0;color:inherit;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{outline-offset:-2px;-webkit-appearance:textfield;}[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}"
} : 0;
/* harmony default export */ var theme_normalize = (normalize);
;// CONCATENATED MODULE: ./theme/variables.ts

const headerHeightMobile = '4.8rem';
const headerHeightDesktop = '6.4rem';
/* harmony default export */ var variables = (/*#__PURE__*/(0,react_.css)(":root{--viewport-height:100vh;--viewport-width:100vw;--header-height:", headerHeightMobile, ";--header-height-desktop:", headerHeightDesktop, ";}" + ( true ? "" : 0)));
// EXTERNAL MODULE: ./theme/colors.ts
var colors = __webpack_require__(1871);
;// CONCATENATED MODULE: ./theme/typography.ts
function typography_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



const h1 =  true ? {
  name: "r5jjn6",
  styles: "font-size:2.4rem;line-height:1.35;letter-spacing:0"
} : 0;
const h2 =  true ? {
  name: "r5jjn6",
  styles: "font-size:2.4rem;line-height:1.35;letter-spacing:0"
} : 0;
const h3 =  true ? {
  name: "iypz6o",
  styles: "font-size:1.6rem;line-height:1.35;letter-spacing:0.08rem;text-transform:uppercase"
} : 0;
const p =  true ? {
  name: "1i771tw",
  styles: "font-size:1.6rem;line-height:1.35;letter-spacing:0"
} : 0;
const small =  true ? {
  name: "eb65vy",
  styles: "font-size:1.2rem;line-height:1.35;letter-spacing:0"
} : 0;
const label = /*#__PURE__*/(0,react_.css)("color:", colors/* black */.Sn, ";font-size:1rem;line-height:1.35;text-transform:capitalize;" + ( true ? "" : 0),  true ? "" : 0);
const textLink = /*#__PURE__*/(0,react_.css)("color:", colors/* red */.Q6, ";font-size:1.6rem;line-height:1.35;letter-spacing:0;text-decoration:underline;text-underline-position:under;" + ( true ? "" : 0),  true ? "" : 0);
;// CONCATENATED MODULE: ./theme/semantic-ui-overrides.ts


/* harmony default export */ var semantic_ui_overrides = (/*#__PURE__*/(0,react_.css)(":root{.ui{font-size:1.6rem;}h1.ui.header{", h1, ";}h3,h3.ui.header{", h3, ";}.ui.table{margin:0 auto;}.ui.big.button{font-size:1.6rem;text-transform:uppercase;}}" + ( true ? "" : 0)));
;// CONCATENATED MODULE: ./theme/styles.tsx



function styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const globalStyles = jsx_runtime_.jsx(react_.Global, {
  styles: /*#__PURE__*/(0,react_.css)(theme_normalize, " ", variables, " ", semantic_ui_overrides, " *,*::before,*::after{box-sizing:border-box;}html{font-size:62.5%;}body{min-height:100%;overflow-x:hidden;font-size:1.6rem;font-family:Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;}body,#root{display:flex;flex:1 0 auto;flex-direction:column;}#root{min-height:100%;}p{font-size:1.6rem;}" + ( true ? "" : 0),  true ? "" : 0)
});
const shadow =  true ? {
  name: "1l8euc4",
  styles: "box-shadow:0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.14),0 0.3rem 0.1rem -0.2rem rgba(0, 0, 0, 0.12),0 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.2)"
} : 0;
const Section = base_default()("section",  true ? {
  target: "e1vafd0b4"
} : 0)( true ? {
  name: "1dvcxr3",
  styles: "padding:1rem"
} : 0);
const Button = base_default()("button",  true ? {
  target: "e1vafd0b3"
} : 0)("height:3.6rem;padding:0 16px;font-size:1.4rem;line-height:3.6rem;letter-spacing:0.05rem;text-align:center;text-transform:uppercase;border:none;border-radius:0.2rem;cursor:pointer;transition:0.3s ease-out;", shadow, " &:hover{background-color:", colors/* grey */.BA, ";}" + ( true ? "" : 0));
const Error = base_default()("p",  true ? {
  target: "e1vafd0b2"
} : 0)("margin:0 0 1rem;color:", colors/* red */.Q6, ";font-size:1rem;text-align:left;" + ( true ? "" : 0));
const StyledToastContainer = /*#__PURE__*/base_default()(external_react_toastify_.ToastContainer,  true ? {
  target: "e1vafd0b1"
} : 0)(".Toastify__toast{color:", colors/* white */.ix, ";}" + ( true ? "" : 0));
const LIGHT_THEME = {
  bg: {
    primary: '#fff',
    secondary: '#ffffff',
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)'
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff'
  }
};
const DARK_THEME = {
  bg: {
    primary: '#050505',
    secondary: '#111111',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)'
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505'
  }
};
const getNavLinkStyle = theme => {
  var _theme$text;

  return /*#__PURE__*/(0,react_.css)("display:inline-block;padding:0 1.5rem;color:", (_theme$text = theme.text) === null || _theme$text === void 0 ? void 0 : _theme$text.primary, ";font-size:1.4rem;text-decoration:none;transition:background-color 0.3s;&:hover,&:active{color:", colors/* black */.Sn, ";background-color:", colors/* grey */.BA, ";}" + ( true ? "" : 0),  true ? "" : 0);
};
const StyledSegment = /*#__PURE__*/base_default()(external_semantic_ui_react_.Segment,  true ? {
  target: "e1vafd0b0"
} : 0)("&.ui.segment{margin-top:5.8rem!important;margin-left:15%;margin-right:15%;", custom_media/* gteSmallMedia */.My, "{margin-top:10.6rem!important;}}" + ( true ? "" : 0));

/***/ })

};
;