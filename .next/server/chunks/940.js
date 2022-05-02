exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 9166:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout_Layout; }
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/media/Media.ts
var Media = __webpack_require__(146);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/layout/document-head/index.tsx





const DocumentHead = () => (0,jsx_runtime_.jsxs)((head_default()), {
  children: [jsx_runtime_.jsx("title", {
    children: "Quiz Game"
  }), jsx_runtime_.jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })]
});

/* harmony default export */ var document_head = (DocumentHead);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./helpers/usePlayerContext.tsx
var usePlayerContext = __webpack_require__(6212);
// EXTERNAL MODULE: ./helpers/useHydrationRender.tsx
var useHydrationRender = __webpack_require__(8440);
// EXTERNAL MODULE: external "use-dark-mode"
var external_use_dark_mode_ = __webpack_require__(657);
var external_use_dark_mode_default = /*#__PURE__*/__webpack_require__.n(external_use_dark_mode_);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
;// CONCATENATED MODULE: ./components/dark-mode-toggle/toggle/styles.ts


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const Wrapper = base_default()("span",  true ? {
  target: "e1vr2ned1"
} : 0)( true ? {
  name: "ssiym2",
  styles: "position:relative;display:flex;align-items:center;padding:0 0.4rem"
} : 0);
const StyledInput = base_default()("input",  true ? {
  target: "e1vr2ned0"
} : 0)( true ? {
  name: "radjrp",
  styles: "position:relative;width:4rem;height:1rem;background:#555;border-radius:0.5rem;outline:none;cursor:pointer;appearance:none;&+label{position:absolute;left:0.2rem;display:inline-block;width:1.8rem;height:1.8rem;background-color:#f0cd6e;border-radius:50%;cursor:pointer;opacity:0.9;transition:all 0.3s ease;}&:checked+label{left:3rem;}&:focus-visible{outline:solid 0.2rem #f7ead7;}"
} : 0);
;// CONCATENATED MODULE: ./components/dark-mode-toggle/toggle/index.tsx





const Toggle = ({
  checked,
  onChange
}) => (0,jsx_runtime_.jsxs)(Wrapper, {
  className: "toggle-control",
  children: [jsx_runtime_.jsx(StyledInput, {
    id: "dmcheck",
    className: "dmcheck",
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }), jsx_runtime_.jsx("label", {
    htmlFor: "dmcheck"
  })]
});

/* harmony default export */ var dark_mode_toggle_toggle = (Toggle);
// EXTERNAL MODULE: ./theme/custom-media.ts
var custom_media = __webpack_require__(2852);
;// CONCATENATED MODULE: ./components/dark-mode-toggle/styles.ts


const styles_Wrapper = base_default()("div",  true ? {
  target: "egwopn40"
} : 0)("position:absolute;top:50%;right:0;display:flex;justify-content:flex-end;margin:0 auto;transform:translateY(-50%);&>button{color:#ffe600;font-size:1.2rem;background:none;border:none;cursor:pointer;transition:color 0.3s ease;&:last-child{color:#666;}&:focus{outline:none;}}", custom_media/* gteSmallMedia */.My, "{position:static;}" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./components/dark-mode-toggle/index.tsx







const DarkModeToggle = () => {
  const {
    value,
    disable,
    enable,
    toggle
  } = external_use_dark_mode_default()(false);
  return (0,jsx_runtime_.jsxs)(styles_Wrapper, {
    children: [jsx_runtime_.jsx("button", {
      type: "button",
      onClick: disable,
      children: "\u2600"
    }), jsx_runtime_.jsx(dark_mode_toggle_toggle, {
      checked: value,
      onChange: toggle
    }), jsx_runtime_.jsx("button", {
      type: "button",
      onClick: enable,
      children: "\u263E"
    })]
  });
};

/* harmony default export */ var dark_mode_toggle = (DarkModeToggle);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
;// CONCATENATED MODULE: ./theme/layers.ts
const nav = 30;
const burger = 20;
const above = 10;
const background = -1;
;// CONCATENATED MODULE: ./components/layout/navigation/mobile/burger-icon/styles.ts




const getCommonSpinnerStyle = theme => /*#__PURE__*/(0,react_.css)("box-sizing:border-box;width:100%;height:0.3rem;background-color:", theme.text.primary, ";transition:all 0.3s;" + ( true ? "" : 0),  true ? "" : 0);

const Icon = base_default()("div",  true ? {
  target: "e17f7gvm3"
} : 0)("position:absolute;top:50%;left:1.5rem;z-index:", burger, ";box-sizing:border-box;width:2.2rem;transform:translateY(-50%);cursor:pointer;transition:all 0.3s;" + ( true ? "" : 0));
const Horizontal = base_default()("div",  true ? {
  target: "e17f7gvm2"
} : 0)(({
  theme
}) => getCommonSpinnerStyle(theme), ";position:relative;float:left;margin-top:0.3rem;opacity:", ({
  isOpen
}) => isOpen ? 0 : 1, ";" + ( true ? "" : 0));
const DiagonalPart1 = base_default()("div",  true ? {
  target: "e17f7gvm1"
} : 0)(({
  theme
}) => getCommonSpinnerStyle(theme), ";position:relative;float:left;margin-top:", ({
  isOpen
}) => isOpen ? '0.8rem' : '0', ";transform:", ({
  isOpen
}) => isOpen ? 'rotate(135deg)' : 'rotate(0)', ";" + ( true ? "" : 0));
const DiagonalPart2 = base_default()("div",  true ? {
  target: "e17f7gvm0"
} : 0)(({
  theme
}) => getCommonSpinnerStyle(theme), ";position:relative;float:left;margin-top:", ({
  isOpen
}) => isOpen ? '-0.9rem' : '0.3rem', ";transform:", ({
  isOpen
}) => isOpen ? 'rotate(-135deg)' : 'rotate(0)', ";" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./components/layout/navigation/mobile/burger-icon/index.tsx





const Burger = /*#__PURE__*/(0,external_react_.forwardRef)(({
  isOpen,
  onOpen
}, ref) => {
  const isHydrationRender = (0,useHydrationRender/* default */.ZP)();
  return !isHydrationRender ? (0,jsx_runtime_.jsxs)(Icon, {
    ref: ref,
    onClick: onOpen,
    children: [jsx_runtime_.jsx(DiagonalPart1, {
      isOpen: isOpen
    }), jsx_runtime_.jsx(Horizontal, {
      isOpen: isOpen
    }), jsx_runtime_.jsx(DiagonalPart2, {
      isOpen: isOpen
    })]
  }) : null;
});
Burger.displayName = 'Burger';
/* harmony default export */ var burger_icon = (Burger);
// EXTERNAL MODULE: ./theme/colors.ts
var colors = __webpack_require__(1871);
// EXTERNAL MODULE: ./theme/styles.tsx + 4 modules
var styles = __webpack_require__(2446);
;// CONCATENATED MODULE: ./components/layout/navigation/mobile/styles.ts




const Header = base_default()("header",  true ? {
  target: "e1w5hzr2"
} : 0)("position:fixed;top:0;left:0;z-index:", nav, ";width:100%;height:var(--header-height);color:", ({
  theme
}) => {
  var _theme$text;

  return (_theme$text = theme.text) === null || _theme$text === void 0 ? void 0 : _theme$text.primary;
}, ";background-color:", ({
  theme
}) => {
  var _theme$bg;

  return (_theme$bg = theme.bg) === null || _theme$bg === void 0 ? void 0 : _theme$bg.primary;
}, ";" + ( true ? "" : 0));
const Nav = base_default()("nav",  true ? {
  target: "e1w5hzr1"
} : 0)(styles/* shadow */.AF, ";position:fixed;top:0;left:0;z-index:", above, ";width:30rem;height:calc(100% + 6rem);margin:0;padding:var(--header-height) 0 6rem 0;overflow-y:auto;color:", ({
  theme
}) => {
  var _theme$text2;

  return (_theme$text2 = theme.text) === null || _theme$text2 === void 0 ? void 0 : _theme$text2.primary;
}, ";background-color:", ({
  theme
}) => {
  var _theme$bg2;

  return (_theme$bg2 = theme.bg) === null || _theme$bg2 === void 0 ? void 0 : _theme$bg2.primary;
}, ";transform:", ({
  isOpen
}) => isOpen ? 'translateX(0)' : 'translateX(-100vw)', ";transition:transform 0.5s ease,opacity ease 0.2s;will-change:transform;ul{margin:0;padding:0;}li{list-style:none;a{", ({
  theme
}) => (0,styles/* getNavLinkStyle */.td)(theme), " display:block;padding:1.6rem;}}" + ( true ? "" : 0));
const Overlay = base_default()("div",  true ? {
  target: "e1w5hzr0"
} : 0)("position:fixed;top:0;right:0;bottom:0;left:0;z-index:", ({
  isOpen
}) => isOpen ? above : background, ";background-color:", colors/* black */.Sn, ";opacity:", ({
  isOpen
}) => isOpen ? 0.5 : 0, ";transition:opacity ease 1s;" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./components/layout/navigation/mobile/index.tsx












const MobileNavigation = () => {
  const router = (0,router_.useRouter)();
  const isHydrationRender = (0,useHydrationRender/* default */.ZP)();
  const {
    data
  } = (0,usePlayerContext/* default */.ZP)();
  const burgerRef = (0,external_react_.useRef)(null);
  const sideMenuRef = (0,external_react_.useRef)(null);
  const {
    0: isSideMenuOpen,
    1: setIsSideMenuOpen
  } = (0,external_react_.useState)(false);
  const toggleSideMenu = (0,external_react_.useCallback)(() => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }, [isSideMenuOpen]);
  const handleClick = (0,external_react_.useCallback)(e => {
    var _sideMenuRef$current, _burgerRef$current;

    if ((_sideMenuRef$current = sideMenuRef.current) !== null && _sideMenuRef$current !== void 0 && _sideMenuRef$current.contains(e.target) || (_burgerRef$current = burgerRef.current) !== null && _burgerRef$current !== void 0 && _burgerRef$current.contains(e.target)) {
      return;
    }

    setIsSideMenuOpen(false);
  }, []);
  (0,external_react_.useEffect)(() => {
    document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'auto';
  }, [isSideMenuOpen]);
  (0,external_react_.useEffect)(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (0,jsx_runtime_.jsxs)(Media/* Media */.pU, {
    at: "xs",
    children: [(0,jsx_runtime_.jsxs)(Header, {
      children: [jsx_runtime_.jsx(burger_icon, {
        ref: burgerRef,
        isOpen: isSideMenuOpen,
        onOpen: toggleSideMenu
      }), jsx_runtime_.jsx(dark_mode_toggle, {})]
    }), jsx_runtime_.jsx(Overlay, {
      isOpen: isSideMenuOpen
    }), jsx_runtime_.jsx(Nav, {
      ref: sideMenuRef,
      isOpen: isSideMenuOpen,
      children: (0,jsx_runtime_.jsxs)("ul", {
        children: [!isHydrationRender ? jsx_runtime_.jsx("li", {
          children: data !== null && data !== void 0 && data.player ? jsx_runtime_.jsx(next_link.default, {
            href: '/account',
            children: "\uD83D\uDD13 Account"
          }) : jsx_runtime_.jsx(next_link.default, {
            href: '/signin',
            children: "\uD83D\uDD10 Enter Game"
          })
        }) : null, jsx_runtime_.jsx("li", {
          children: jsx_runtime_.jsx(next_link.default, {
            href: '/',
            children: "Home"
          })
        }), jsx_runtime_.jsx("li", {
          children: jsx_runtime_.jsx(next_link.default, {
            href: '/about',
            children: "About"
          })
        }), (data === null || data === void 0 ? void 0 : data.player) && router.pathname !== '/game' && jsx_runtime_.jsx("li", {
          children: jsx_runtime_.jsx(next_link.default, {
            href: '/game',
            children: "New Game"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ var mobile = (MobileNavigation);
;// CONCATENATED MODULE: ./components/layout/navigation/desktop/styles.ts



const styles_Nav = base_default()("nav",  true ? {
  target: "e1b80j0l1"
} : 0)("position:fixed;top:0;left:0;z-index:", nav, ";display:flex;align-items:center;width:100%;height:6.4rem;padding:1rem;color:", ({
  theme
}) => {
  var _theme$text;

  return (_theme$text = theme.text) === null || _theme$text === void 0 ? void 0 : _theme$text.primary;
}, ";line-height:6.4rem;background-color:", ({
  theme
}) => {
  var _theme$bg;

  return (_theme$bg = theme.bg) === null || _theme$bg === void 0 ? void 0 : _theme$bg.primary;
}, ";", styles/* shadow */.AF, ">div{flex:1 0;}" + ( true ? "" : 0));
const StyledLink = base_default()("a",  true ? {
  target: "e1b80j0l0"
} : 0)(({
  theme
}) => (0,styles/* getNavLinkStyle */.td)(theme), ";" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./components/layout/navigation/desktop/nav-link/NavLink.tsx





const NavLink = ({
  href,
  children
}) => jsx_runtime_.jsx(next_link.default, {
  href: href,
  passHref: true,
  children: jsx_runtime_.jsx(StyledLink, {
    children: children
  })
});

/* harmony default export */ var nav_link_NavLink = (NavLink);
;// CONCATENATED MODULE: ./components/layout/navigation/desktop/index.tsx











const DesktopNavigation = () => {
  const router = (0,router_.useRouter)();
  const isHydrationRender = (0,useHydrationRender/* default */.ZP)();
  const {
    data
  } = (0,usePlayerContext/* default */.ZP)();
  return jsx_runtime_.jsx(Media/* Media */.pU, {
    greaterThan: "xs",
    children: (0,jsx_runtime_.jsxs)(styles_Nav, {
      children: [!isHydrationRender ? data !== null && data !== void 0 && data.player ? jsx_runtime_.jsx(nav_link_NavLink, {
        href: '/account',
        children: "My Account"
      }) : jsx_runtime_.jsx(nav_link_NavLink, {
        href: '/signin',
        children: "Enter Game"
      }) : null, jsx_runtime_.jsx(nav_link_NavLink, {
        href: '/',
        children: "Home"
      }), jsx_runtime_.jsx(nav_link_NavLink, {
        href: '/about',
        children: "About"
      }), (data === null || data === void 0 ? void 0 : data.player) && router.pathname !== '/game' && jsx_runtime_.jsx(nav_link_NavLink, {
        href: '/game',
        children: "Start a new Game"
      }), jsx_runtime_.jsx(dark_mode_toggle, {})]
    })
  });
};

/* harmony default export */ var desktop = (DesktopNavigation);
;// CONCATENATED MODULE: ./components/layout/footer/index.tsx




const StyledFooter = base_default()("footer",  true ? {
  target: "e2e5icg0"
} : 0)("padding:1rem;color:", ({
  theme
}) => `${theme.text.primary} !important`, ";font-weight:bold;text-align:right;margin-bottom:0px;" + ( true ? "" : 0));

const Footer = () => jsx_runtime_.jsx(StyledFooter, {
  children: "Group 21, CMPE 272"
});

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/layout/Layout.styles.ts


function Layout_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const Main = base_default()("main",  true ? {
  target: "e5mpgka1"
} : 0)( true ? {
  name: "1azakc",
  styles: "text-align:center"
} : 0);
const Background = base_default()("div",  true ? {
  target: "e5mpgka0"
} : 0)("position:fixed;top:0;left:0;z-index:", background, ";width:100%;min-height:100%;background:url('https://img.freepik.com/free-photo/separation-coin-bank-note-puzzle-green-background_23-2148207339.jpg?w=2000') no-repeat center center fixed;background-size:cover;" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./components/layout/Layout.tsx










const Layout = ({
  children
}) => {
  return (0,jsx_runtime_.jsxs)(Main, {
    children: [jsx_runtime_.jsx(document_head, {}), (0,jsx_runtime_.jsxs)(Media/* MediaContextProvider */.C1, {
      children: [jsx_runtime_.jsx(desktop, {}), jsx_runtime_.jsx(mobile, {})]
    }), jsx_runtime_.jsx(Background, {}), children, jsx_runtime_.jsx(footer, {})]
  });
};

/* harmony default export */ var layout_Layout = (Layout);

/***/ }),

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

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;