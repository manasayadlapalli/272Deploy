(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{1129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Breakpoints=t.BreakpointConstraint=void 0;var r,o=n(6046);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.BreakpointConstraint=r,function(e){e.at="at",e.lessThan="lessThan",e.greaterThan="greaterThan",e.greaterThanOrEqual="greaterThanOrEqual",e.between="between"}(r||(t.BreakpointConstraint=r={}));var f=function(){function e(t){var n,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_sortedBreakpoints",void 0),s(this,"_breakpoints",void 0),s(this,"_mediaQueries",void 0),s(this,"findBreakpointsForWidths",(function(e,t){var n=o.findBreakpointAtWidth(e);if(n){var r=o.findBreakpointAtWidth(t);return r&&n!==r?o._sortedBreakpoints.slice(o._sortedBreakpoints.indexOf(n),o._sortedBreakpoints.indexOf(r)+1):[n]}})),s(this,"findBreakpointAtWidth",(function(e){return o._sortedBreakpoints.find((function(t,n){var r=o._sortedBreakpoints[n+1];return r?e>=o._breakpoints[t]&&e<o._breakpoints[r]:e>=o._breakpoints[t]}))})),s(this,"valuesWithBreakpointProps",(function(e){var t,n=e.length,r=[];return o._sortedBreakpoints.forEach((function(o,i){var a=e[i];i<n&&(!t||t[0]!==a)?(t=[a,[o]],r.push(t)):t[1].push(o)})),r.map((function(e,t){var n=a(e,2),o=n[0],i=n[1],u={};return t===r.length-1?u.greaterThanOrEqual=i[0]:1===i.length?u.at=i[0]:u.between=[i[0],r[t+1][1][0]],[o,u]}))})),this._breakpoints=t,this._sortedBreakpoints=Object.keys(t).map((function(e){return[e,t[e]]})).sort((function(e,t){return e[1]<t[1]?-1:1})).map((function(e){return e[0]}));var u=this._sortedBreakpoints.slice(0,-1).reduce((function(e,t,n){return i(e).concat(i(o._sortedBreakpoints.slice(n+1).map((function(e){return[t,e]}))))}),[]);this._mediaQueries=(s(n={},r.at,this._createBreakpointQueries(r.at,this._sortedBreakpoints)),s(n,r.lessThan,this._createBreakpointQueries(r.lessThan,this._sortedBreakpoints.slice(1))),s(n,r.greaterThan,this._createBreakpointQueries(r.greaterThan,this._sortedBreakpoints.slice(0,-1))),s(n,r.greaterThanOrEqual,this._createBreakpointQueries(r.greaterThanOrEqual,this._sortedBreakpoints)),s(n,r.between,this._createBreakpointQueries(r.between,u)),n)}return c(e,null,[{key:"validKeys",value:function(){return[r.at,r.lessThan,r.greaterThan,r.greaterThanOrEqual,r.between]}}]),c(e,[{key:"toVisibleAtBreakpointSet",value:function(e){if((e=this._normalizeProps(e)).lessThan){var t=this.sortedBreakpoints.findIndex((function(t){return t===e.lessThan}));return this.sortedBreakpoints.slice(0,t)}if(e.greaterThan){var n=this.sortedBreakpoints.findIndex((function(t){return t===e.greaterThan}));return this.sortedBreakpoints.slice(n+1)}if(e.greaterThanOrEqual){var r=this.sortedBreakpoints.findIndex((function(t){return t===e.greaterThanOrEqual}));return this.sortedBreakpoints.slice(r)}if(e.between){var o=e.between,i=this.sortedBreakpoints.findIndex((function(e){return e===o[0]})),a=this.sortedBreakpoints.findIndex((function(e){return e===o[1]}));return this.sortedBreakpoints.slice(i,a)}return[]}},{key:"toRuleSets",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.validKeys(),r=n.reduce((function(e,n){return e[n]=t._mediaQueries[n],e}),{});return Object.entries(r).reduce((function(e,t){var n=a(t,2),r=n[0];return n[1].forEach((function(t,n){e.push((0,o.createRuleSet)((0,o.createClassName)(r,n),"not all and ".concat(t)))})),e}),[])}},{key:"shouldRenderMediaQuery",value:function(e,t){var n=this;if((e=this._normalizeProps(e)).lessThan){var r=this._breakpoints[e.lessThan];return Math.min.apply(Math,i(t.map((function(e){return n._breakpoints[e]}))))<r}if(e.greaterThan){var o=this._breakpoints[this._findNextBreakpoint(e.greaterThan)];return Math.max.apply(Math,i(t.map((function(e){return n._breakpoints[e]}))))>=o}if(e.greaterThanOrEqual){var a=this._breakpoints[e.greaterThanOrEqual];return Math.max.apply(Math,i(t.map((function(e){return n._breakpoints[e]}))))>=a}if(e.between){var u=this._breakpoints[e.between[0]],c=this._breakpoints[e.between[1]],s=t.map((function(e){return n._breakpoints[e]}));return!(Math.max.apply(Math,i(s))<u||Math.min.apply(Math,i(s))>=c)}return!1}},{key:"_normalizeProps",value:function(e){if(e.at){var t=this._sortedBreakpoints.indexOf(e.at),n=this._sortedBreakpoints[t+1];return n?{between:[e.at,n]}:{greaterThanOrEqual:e.at}}return e}},{key:"_createBreakpointQuery",value:function(e){if((e=this._normalizeProps(e)).lessThan){var t=this._breakpoints[e.lessThan];return"(max-width:".concat(t-1,"px)")}if(e.greaterThan){var n=this._breakpoints[this._findNextBreakpoint(e.greaterThan)];return"(min-width:".concat(n,"px)")}if(e.greaterThanOrEqual){var r=this._breakpoints[e.greaterThanOrEqual];return"(min-width:".concat(r,"px)")}if(e.between){var o=this._breakpoints[e.between[0]],i=this._breakpoints[e.between[1]];return"(min-width:".concat(o,"px) and (max-width:").concat(i-1,"px)")}throw new Error("Unexpected breakpoint props: ".concat(JSON.stringify(e)))}},{key:"_createBreakpointQueries",value:function(e,t){var n=this;return t.reduce((function(t,r){return t.set(function(e){return Array.isArray(e)?e.join("-"):e}(r),n._createBreakpointQuery(s({},e,r))),t}),new Map)}},{key:"_findNextBreakpoint",value:function(e){var t=this._sortedBreakpoints[this._sortedBreakpoints.indexOf(e)+1];if(!t)throw new Error("There is no breakpoint larger than ".concat(e));return t}},{key:"sortedBreakpoints",get:function(){return this._sortedBreakpoints}},{key:"dynamicResponsiveMediaQueries",get:function(){return Array.from(this._mediaQueries[r.at].entries()).reduce((function(e,t){var n=a(t,2);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},e,s({},n[0],n[1]))}),{})}},{key:"largestBreakpoint",get:function(){return this._sortedBreakpoints[this._sortedBreakpoints.length-1]}}]),e}();t.Breakpoints=f},1211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createResponsiveComponents=function(){var e=o.default.createContext({});return e.displayName="Media.DynamicContext",{Consumer:e.Consumer,Provider:function(t){function n(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=function(e,t){if(t&&("object"===i(t)||"function"===typeof t))return t;return f(e)}(this,c(n).call(this,e)),l(f(f(t)),"isSupportedEnvironment",(function(){return"undefined"!==typeof window&&"undefined"!==typeof window.matchMedia})),l(f(f(t)),"setupMatchers",(function(e){return Object.keys(e).reduce((function(t,n){return a({},t,l({},n,window.matchMedia(e[n])))}),{})})),l(f(f(t)),"checkMatchers",(function(e){return Object.keys(e).reduce((function(t,n){return a({},t,l({},n,e[n].matches))}),{})})),l(f(f(t)),"mediaQueryStatusChangedCallback",(function(){var e=t.checkMatchers(t.state.mediaQueryMatchers);t.setState({mediaQueryMatches:e})}));var r,o=void 0;return t.isSupportedEnvironment()?(o=t.setupMatchers(e.mediaQueries),r=t.checkMatchers(o)):r=Object.keys(e.mediaQueries).reduce((function(t,n){return a({},t,l({},n,!!e.initialMatchingMediaQueries&&e.initialMatchingMediaQueries.includes(n)))}),{}),t.state={mediaQueryMatchers:o,mediaQueryMatches:r},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,t),function(e,t,n){t&&u(e.prototype,t);n&&u(e,n)}(n,[{key:"componentDidMount",value:function(){if(this.state.mediaQueryMatchers){var e=this.mediaQueryStatusChangedCallback;Object.values(this.state.mediaQueryMatchers).forEach((function(t){t.addListener(e)}))}}},{key:"componentWillUnmount",value:function(){if(this.state.mediaQueryMatchers){var e=this.mediaQueryStatusChangedCallback;Object.values(this.state.mediaQueryMatchers).forEach((function(t){return t.removeListener(e)}))}}},{key:"shouldComponentUpdate",value:function(e,t){return!!this.state.mediaQueryMatchers&&(e.children!==this.props.children||!function(e,t){for(var n in e)if(e[n]!==t[n])return!1;return!0}(this.state.mediaQueryMatches,t.mediaQueryMatches))}},{key:"render",value:function(){return o.default.createElement(e.Provider,{value:this.state.mediaQueryMatches},this.props.children)}}]),n}(o.default.Component)}};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},971:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Interactions=t.InteractionKey=void 0;var r,o=n(6046);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.InteractionKey=r,function(e){e.interaction="interaction"}(r||(t.InteractionKey=r={}));var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_interactions",void 0),this._interactions=t}return c(e,null,[{key:"validKeys",value:function(){return[r.interaction]}}]),c(e,[{key:"toRuleSets",value:function(){return Object.entries(this._interactions).reduce((function(e,t){var n=a(t,2),u=n[0],c=n[1];return i(e).concat([(0,o.createRuleSet)((0,o.createClassName)(r.interaction,u),c)])}),[])}},{key:"shouldRenderMediaQuery",value:function(e,t){return!(!t||!t.includes(e))}},{key:"interactions",get:function(){return Object.keys(this._interactions)}},{key:"dynamicResponsiveMediaQueries",get:function(){return Object.entries(this._interactions).reduce((function(e,t){var n=a(t,2);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},e,s({},n[0],n[1]))}),{})}}]),e}();t.Interactions=f},8603:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createMedia=function(e){var t,n,r=(0,u.castBreakpointsToIntegers)(e.breakpoints),m=new a.MediaQueries(r,e.interactions||{}),g=(0,i.createResponsiveComponents)(),k=o.default.createContext({});k.displayName="Media.Context";var O=o.default.createContext({hasParentMedia:!1,breakpointProps:{}});k.displayName="MediaParent.Context";return{Media:(n=t=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,h(t).call(this,e)),function(e){var t=Object.keys(e).filter((function(e){return v.includes(e)}));if(t.length<1)throw new Error("1 of ".concat(v.join(", ")," is required."));if(t.length>1)throw new Error("Only 1 of ".concat(t.join(", ")," is allowed at a time."))}(e),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),function(e,t,n){t&&d(e.prototype,t);n&&d(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.children,t.className),r=t.interaction,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["children","className","interaction"]);return o.default.createElement(O.Consumer,null,(function(a){return o.default.createElement(O.Provider,{value:{hasParentMedia:!0,breakpointProps:i}},o.default.createElement(k.Consumer,null,(function(){var c,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},f=s.onlyMatch;if(t.interaction)c=(0,u.createClassName)("interaction",t.interaction);else{if(t.at){var l=m.breakpoints.largestBreakpoint;if(t.at===l){var d=null;try{var h=e._reactInternalFiber._debugOwner.type;d=h.displayName||h.name}catch(k){}console.warn("[@artsy/fresnel] `at` is being used with the largest breakpoint. Consider using `<Media greaterThanOrEqual="+'"'.concat(l,'">` to account for future ')+"breakpoint definitions outside of this range.".concat(d?" It is being used in the ".concat(d," component."):""))}}var y=(0,u.propKey)(i),b=i[y];c=(0,u.createClassName)(y,b)}var v=!a.hasParentMedia||(0,u.intersection)(m.breakpoints.toVisibleAtBreakpointSet(a.breakpointProps),m.breakpoints.toVisibleAtBreakpointSet(i)).length>0,g=v&&(void 0===f||m.shouldRenderMediaQuery(p({},i,{interaction:r}),f));return t.children instanceof Function?t.children(c,g):o.default.createElement("div",{className:"fresnel-container ".concat(c," ").concat(n),suppressHydrationWarning:!g},g?t.children:null)})))}))}}]),t}(o.default.Component),b(t,"defaultProps",{className:""}),b(t,"contextType",O),n),MediaContextProvider:function(e){var t=e.disableDynamicMediaQueries,n=e.onlyMatch,r=e.children;return t?o.default.createElement(k.Provider,{value:{onlyMatch:n}},r):o.default.createElement(g.Provider,{mediaQueries:m.dynamicResponsiveMediaQueries,initialMatchingMediaQueries:(0,u.intersection)(m.mediaQueryTypes,n)},o.default.createElement(g.Consumer,null,(function(e){var t=Object.keys(e).filter((function(t){return e[t]}));return o.default.createElement(k.Provider,{value:{onlyMatch:(0,u.intersection)(t,n)}},r)})))},createMediaStyle:m.toStyle,SortedBreakpoints:(w=m.breakpoints.sortedBreakpoints,l(w)||f(w)||s()),findBreakpointAtWidth:m.breakpoints.findBreakpointAtWidth,findBreakpointsForWidths:m.breakpoints.findBreakpointsForWidths,valuesWithBreakpointProps:m.breakpoints.valuesWithBreakpointProps};var w};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(1211),a=n(6482),u=n(6046);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function l(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=a.MediaQueries.validKeys()},6482:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaQueries=void 0;var r=n(1129),o=n(971),i=n(6046);function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_breakpoints",void 0),f(this,"_interactions",void 0),f(this,"toStyle",(function(e){return[".fresnel-container{margin:0;padding:0;}"].concat(u(i._breakpoints.toRuleSets(e)),u(i._interactions.toRuleSets())).join("\n")})),this._breakpoints=new r.Breakpoints(t),this._interactions=new o.Interactions(n||{})}return s(e,null,[{key:"validKeys",value:function(){return u(r.Breakpoints.validKeys()).concat(u(o.Interactions.validKeys()))}}]),s(e,[{key:"shouldRenderMediaQuery",value:function(e,t){var n=e.interaction,r=a(e,["interaction"]);if(n)return this._interactions.shouldRenderMediaQuery(n,t);var o=(0,i.intersection)(t,this._breakpoints.sortedBreakpoints);return this._breakpoints.shouldRenderMediaQuery(r,o)}},{key:"breakpoints",get:function(){return this._breakpoints}},{key:"mediaQueryTypes",get:function(){return u(this._breakpoints.sortedBreakpoints).concat(u(this._interactions.interactions))}},{key:"dynamicResponsiveMediaQueries",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({},this._breakpoints.dynamicResponsiveMediaQueries,this._interactions.dynamicResponsiveMediaQueries)}}]),e}();t.MediaQueries=l},6046:function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.propKey=function(e){return Object.keys(e)[0]},t.intersection=function(e,t){return t?e.filter((function(e){return t.indexOf(e)>=0})):r(e)},t.createRuleSet=function(e,t){return"@media ".concat(t,"{.").concat(e,"{display:none!important;}}")},t.createClassName=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return["fresnel"].concat(r(t.reduce((function(e,t){return Array.isArray(t)?r(e).concat(r(t)):r(e).concat([t])}),[]))).join("-")},t.castBreakpointsToIntegers=function(e){var t=Object.keys(e);return t.reduce((function(r,o,i){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},r,n({},t[i],Number(e[o])))}),{})}},2082:function(e,t,n){"use strict";Object.defineProperty(t,"Wm",{enumerable:!0,get:function(){return r.createMedia}});var r=n(8603),o=n(1129)},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(c){}var o=a.call(e);return r&&(t?e[u]=n:delete e[u]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6071:function(e,t,n){"use strict";var r=n(3848),o=n(9448);t.default=void 0;var i=o(n(7294)),a=n(1689),u=n(2441),c=n(5749),s={};function f(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.asPath||"/",l=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],u=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):u||i}}),[o,e.href,e.as]),p=l.href,d=l.as,h=e.children,y=e.replace,b=e.shallow,v=e.scroll,m=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=i.Children.only(h),k=g&&"object"===typeof g&&g.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),w=r(O,2),_=w[0],j=w[1],M=i.default.useCallback((function(e){_(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,_]);(0,i.useEffect)((function(){var e=j&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=s[p+"%"+d+(r?"%"+r:"")];e&&!o&&f(n,p,d,{locale:r})}),[d,p,j,m,t,n]);var P={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:u}))}(e,n,p,d,y,b,v,m)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(n,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var S="undefined"!==typeof m?m:n&&n.locale,E=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,S,n&&n.locales,n&&n.domainLocales);P.href=E||(0,a.addBasePath)((0,a.addLocale)(d,S,n&&n.defaultLocale))}return i.default.cloneElement(g,P)};t.default=l},5749:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],p=f[1],d=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||l||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!a&&!l){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[l]),[d,l]};var o=n(7294),i=n(8391),a="undefined"!==typeof IntersectionObserver;var u=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},7947:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(i=n(617))&&i.__esModule?i:{default:i},c=n(3367),s=n(4287),f=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function y(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,s=h.length;c<s;c++){var f=h[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&a||!p.has(l)?(p.add(l),r[f]=p):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,a.default.cloneElement(e,u)}return a.default.cloneElement(e,{key:i})}))}function b(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:y,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)}b.rewind=function(){};var v=b;t.default=v},617:function(e,t,n){"use strict";var r=n(3115),o=n(2553),i=n(2012),a=(n(450),n(9807)),u=n(7690),c=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),i=n(3585),a=n(5725);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},1163:function(e,t,n){e.exports=n(2441)}}]);