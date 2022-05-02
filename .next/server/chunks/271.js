exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 7102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(223);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_media_Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(146);
/* harmony import */ var _useHydrationRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8440);





const useBreakpoints = () => {
  const isHydrationRender = (0,_useHydrationRender__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)();
  const {
    0: windowWidth,
    1: setWindowWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(() => setWindowWidth(window.innerWidth), 200);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isHydrationRender) {
      return {};
    }

    const currentBreakpoint = (0,_components_media_Media__WEBPACK_IMPORTED_MODULE_2__/* .findBreakpointAtWidth */ .Xi)(windowWidth);
    const isExtraSmall = currentBreakpoint === 'xs';
    const isSmall = currentBreakpoint === 'sm';
    const isMedium = currentBreakpoint === 'md';
    const isLarge = currentBreakpoint === 'lg';
    const isExtraLarge = currentBreakpoint === 'xl';
    return {
      isExtraSmall,
      isSmall,
      isMedium,
      isLarge,
      isExtraLarge,
      gteSmall: isSmall || isMedium || isLarge || isExtraLarge,
      gteMedium: isMedium || isLarge || isExtraLarge,
      lteSmall: isExtraSmall || isSmall,
      lteMedium: isExtraSmall || isSmall || isMedium
    };
  }, [isHydrationRender, windowWidth]);
};

/* harmony default export */ __webpack_exports__["Z"] = (useBreakpoints);

/***/ })

};
;