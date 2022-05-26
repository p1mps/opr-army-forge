"use strict";
(() => {
var exports = {};
exports.id = 732;
exports.ids = [732];
exports.modules = {

/***/ 9987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameSystem)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_armySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5876);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_components_NotificationBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(511);
/* harmony import */ var _views_components_MenuBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3795);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_armySlice__WEBPACK_IMPORTED_MODULE_1__]);
_data_armySlice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function selectGameSystem(dispatch, router, gameSystem) {
  dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_1__/* .setGameSystem */ .zi)(gameSystem));
  router === null || router === void 0 ? void 0 : router.push({
    pathname: "/armyBookSelection",
    query: _objectSpread(_objectSpread({}, router.query), {}, {
      gameSystem: gameSystem
    })
  });
}

function GameSystem() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (router.query) {
      console.log(router.query);
      const gameSystem = router.query.gameSystem;
      if (gameSystems.includes(gameSystem)) selectGameSystem(dispatch, router, gameSystem);
    }
  }, []);
  const gameSystems = ["gf", "gff", "aof", "aofs"];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_views_components_NotificationBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_views_components_MenuBar__WEBPACK_IMPORTED_MODULE_6__/* .MenuBar */ .j, {
      title: "Create a new list",
      onBackClick: () => router.push("/")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "mx-auto p-4",
        style: {
          maxWidth: "480px"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
          className: "is-size-4 has-text-centered mb-4",
          children: "Select Game System"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "columns is-multiline is-mobile",
          children: gameSystems.map(gameSystem => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(GameSystemTile, {
            gameSystem: gameSystem
          }, gameSystem))
        })]
      })
    })]
  });
}

function GameSystemTile({
  gameSystem
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    className: "column is-half",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
        onClick: () => selectGameSystem(dispatch, router, gameSystem),
        src: `img/${gameSystem}_cover.jpg`,
        className: "game-system-tile interactable",
        style: {
          borderRadius: "4px",
          display: "block"
        }
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NotificationBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function NotificationBanner() {
  const displayError = false;
  if (!displayError) return null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "notification is-danger is-radiusless mb-0",
    children: "The save file format is changing on Friday - all existing saved/exported lists will need to be recreated!"
  });
}

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIosNew");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 420:
/***/ ((module) => {

module.exports = require("pluralize");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [876,795], () => (__webpack_exec__(9987)));
module.exports = __webpack_exports__;

})();