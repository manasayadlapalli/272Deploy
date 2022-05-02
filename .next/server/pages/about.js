(function() {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 8465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_about; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "use-dark-mode"
var external_use_dark_mode_ = __webpack_require__(657);
var external_use_dark_mode_default = /*#__PURE__*/__webpack_require__.n(external_use_dark_mode_);
// EXTERNAL MODULE: ./helpers/useBreakpoints.ts
var useBreakpoints = __webpack_require__(7102);
;// CONCATENATED MODULE: external "fs"
var external_fs_namespaceObject = require("fs");;
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
var external_path_namespaceObject = require("path");;
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "gray-matter"
var external_gray_matter_namespaceObject = require("gray-matter");;
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: external "remark"
var external_remark_namespaceObject = require("remark");;
var external_remark_default = /*#__PURE__*/__webpack_require__.n(external_remark_namespaceObject);
;// CONCATENATED MODULE: external "remark-html"
var external_remark_html_namespaceObject = require("remark-html");;
var external_remark_html_default = /*#__PURE__*/__webpack_require__.n(external_remark_html_namespaceObject);
;// CONCATENATED MODULE: ./lib/about.ts





const readmeDir = external_path_default().join(process.cwd());

const getAboutData = async () => {
  const fullPath = external_path_default().join(readmeDir, `README.md`);
  const fileContents = external_fs_default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

  const matterResult = external_gray_matter_default()(fileContents); // Use remark to convert markdown into HTML string

  const processedContent = await external_remark_default()().use((external_remark_html_default())).process(matterResult.content);
  return processedContent.toString();
};

/* harmony default export */ var about = (getAboutData);
// EXTERNAL MODULE: ./components/layout/Layout.tsx + 15 modules
var Layout = __webpack_require__(9166);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./theme/styles.tsx + 4 modules
var styles = __webpack_require__(2446);
;// CONCATENATED MODULE: ./theme/pages/About.styles.ts


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const StyledSegment = /*#__PURE__*/base_default()(styles/* StyledSegment */.og,  true ? {
  target: "e9iu1w0"
} : 0)( true ? {
  name: "9eneun",
  styles: "text-align:left;img{width:100%;}ul{list-style-type:none;}ul a{display:inline-block;padding:1.1rem 0;}"
} : 0);
;// CONCATENATED MODULE: ./pages/about/index.tsx







const getStaticProps = async () => {
  const aboutData = await about();
  return {
    props: {
      aboutData
    }
  };
};

const About = ({
  aboutData
}) => {
  const {
    value: isDark
  } = external_use_dark_mode_default()(false);
  const {
    lteSmall
  } = (0,useBreakpoints/* default */.Z)();
  return jsx_runtime_.jsx(Layout/* default */.Z, {
    children: jsx_runtime_.jsx(StyledSegment, {
      inverted: isDark,
      raised: true,
      padded: lteSmall ? true : 'very',
      children: jsx_runtime_.jsx("div", {
        dangerouslySetInnerHTML: {
          __html: aboutData
        }
      })
    })
  });
};

/* harmony default export */ var pages_about = (About);

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

/***/ 223:
/***/ (function(module) {

"use strict";
module.exports = require("lodash/debounce");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,102,940,271], function() { return __webpack_exec__(8465); });
module.exports = __webpack_exports__;

})();