exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 4456:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l4": function() { return /* binding */ NotificationContextProvider; },
/* harmony export */   "nw": function() { return /* binding */ useNotificationContext; }
/* harmony export */ });
/* unused harmony export NOTIFICATION_CATEGORIES */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const NotificationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
  notifications: [],

  clear() {},

  filterByCategory(c) {},

  // eslint-disable-line no-unused-vars
  remove(id) {},

  // eslint-disable-line no-unused-vars
  add(n) {} // eslint-disable-line no-unused-vars


});
const AUTOCLOSE_TOAST = 1000;
const NOTIFICATION_CATEGORIES = {
  error: 'ERROR',
  success: 'SUCCESS'
};
const NotificationContextProvider = props => {
  const {
    0: notifications,
    1: setNotifications
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const uid = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const remove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(uid => {
    setNotifications(oldNotifications => {
      const filteredNotifications = oldNotifications.filter(notification => notification.uid !== uid);
      return filteredNotifications;
    });
  }, []);
  const add = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(notification => {
    const id = ++uid.current;
    setNotifications(notifications => [...notifications, _objectSpread(_objectSpread({}, notification), {}, {
      uid: id
    })]);
    return () => remove(id);
  }, [remove]);
  const clear = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setNotifications([]);
  }, []);
  const filterByCategory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(category => {
    setNotifications(oldNotifications => {
      const filteredNotifications = oldNotifications.filter(notification => notification.category === category);
      return filteredNotifications;
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    notifications.forEach(notification => {
      var _notification$message, _notification$message2, _notification$message3;

      switch (notification.category) {
        case NOTIFICATION_CATEGORIES.error:
          return (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)((_notification$message = notification.message) !== null && _notification$message !== void 0 ? _notification$message : 'Error', {
            className: 'Toastify__toast--error'
          });

        case NOTIFICATION_CATEGORIES.success:
          return (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)((_notification$message2 = notification.message) !== null && _notification$message2 !== void 0 ? _notification$message2 : 'Success', {
            className: 'Toastify__toast--success',
            onClose: notification === null || notification === void 0 ? void 0 : notification.onClose,
            autoClose: AUTOCLOSE_TOAST
          });

        default:
          return (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)((_notification$message3 = notification.message) !== null && _notification$message3 !== void 0 ? _notification$message3 : 'Message without category');
      }
    });
  }, [notifications]);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    notifications,
    add,
    remove,
    clear,
    filterByCategory
  }), [notifications, add, remove, clear, filterByCategory]);
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationContext.Provider, _objectSpread({
    value: context
  }, props));
};
const useNotificationContext = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationContext);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (NotificationContext)));

/***/ })

};
;