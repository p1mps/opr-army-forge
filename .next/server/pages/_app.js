"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "jp": () => (/* binding */ setOpenReleaseNotes)
/* harmony export */ });
/* unused harmony export appSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  openReleaseNotes: false
};
const appSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'app',
  initialState,
  reducers: {
    setOpenReleaseNotes(state, action) {
      state.openReleaseNotes = action.payload;
    }

  }
}); // Action creators are generated for each case reducer function

const {
  setOpenReleaseNotes
} = appSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appSlice.reducer);

/***/ }),

/***/ 6327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _armySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5876);
/* harmony import */ var _listSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7622);
/* harmony import */ var _appSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8989);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_armySlice__WEBPACK_IMPORTED_MODULE_1__, _listSlice__WEBPACK_IMPORTED_MODULE_2__]);
([_armySlice__WEBPACK_IMPORTED_MODULE_1__, _listSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    army: _armySlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
    list: _listSlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
    app: _appSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP
  }
}); // Infer the `RootState` and `AppDispatch` types from the store itself
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6327);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(420);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_components_ReleaseNotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2639);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_store__WEBPACK_IMPORTED_MODULE_1__]);
_data_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // TODO: Better place for global generic things to go?




pluralize__WEBPACK_IMPORTED_MODULE_3___default().addSingularRule(/Fuses$/i, "Fuse"); // Spear-Fuses -> Spear-Fuse

pluralize__WEBPACK_IMPORTED_MODULE_3___default().addSingularRule(/Axes$/i, "Axe"); // Axes -> Axe

const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.createTheme)({
  typography: {
    fontFamily: "Source Sans Pro"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "1.25px"
        }
      }
    }
  }
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _data_store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("title", {
        children: "OPR Army Forge Beta"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        name: "description",
        content: "OPR Army Forge List Builder"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
        rel: "manifest",
        href: "/manifest.json"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@600&&family=Source+Sans+Pro:wght@400;500;600;900&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_views_components_ReleaseNotes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})]
      })
    })]
  });
}

MyApp.getInitialProps = async ctx => {
  //console.log("Force disable pre-rendering?");
  return {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ReleaseNotes)
/* harmony export */ });
/* unused harmony export APP_VERSION */
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_appSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8989);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const APP_VERSION = "0.6.4";
function ReleaseNotes() {
  const open = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.app.openReleaseNotes);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  const setOpen = x => dispatch((0,_data_appSlice__WEBPACK_IMPORTED_MODULE_4__/* .setOpenReleaseNotes */ .jp)(x));

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const lastVersion = localStorage["lastVersion"];
    const latestVersion = releaseNotes[0].version;
    localStorage["lastVersion"] = latestVersion; // Don't show the popup if the user hasn't visited the app before
    // But - show the popup anyway if the latest version was the version release notes were added...

    if (!lastVersion) return;

    if (isVersionGreaterThan(latestVersion, lastVersion)) {
      setOpen(true);
    }
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    open: open,
    onClose: () => setOpen(false),
    style: {
      overflowY: "auto"
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "m-4",
      style: {
        outline: "none"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Card, {
        className: "mx-auto",
        style: {
          maxWidth: "480px"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.CardContent, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "is-flex",
            style: {
              alignItems: "center"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
              className: "mb-2",
              style: {
                flex: 1,
                fontWeight: "600",
                fontSize: "20px"
              },
              children: "Release Notes"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
              onClick: () => setOpen(false),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {})
            })]
          }), releaseNotes.map(release => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
              className: "mb-2",
              style: {
                fontWeight: "600"
              },
              children: ["v", release.version, " - ", release.date]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("ul", {
              className: "mb-4",
              children: release.notes.map((note, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: note
              }, index))
            })]
          }, release.version))]
        })
      })
    })
  });
}
const releaseNotes = [{
  version: "0.7.1",
  date: "04/05/22",
  notes: ["Campaign fixes!", "- AoF/AoFS", "- Fixed XP cost for GFF/AoFS", "- Fixed injury/talents requiring 5XP before enabling"]
}, {
  version: "0.7.0",
  date: "04/05/22",
  notes: ["Campaign lists!", "- Track unit's XP/level", "- Track unit's Traits, Injuries and Talents", "- Unit's traits displayed in card view", "- Added campaign traits rule text/descriptions", "Add custom notes to unit", "Added quality / defense to upgrade window"]
}, {
  version: "0.6.5",
  date: "01/05/22",
  notes: ["Webapp integration fix for auto-selecting first detachment on list creation.", "Fixed card view point calculation when hero is joined to combined unit.", "Imported lists now have an updated creationTime to avoid clashing with existing saved lists."]
}, {
  version: "0.6.4",
  date: "29/04/22",
  notes: ["Open a list screen mobile UX."]
}, {
  version: "0.6.3",
  date: "28/04/22",
  notes: ["Unit card combination fixed"]
}, {
  version: "0.6.2",
  date: "28/04/22",
  notes: ["Added main menu option to delete list.", "Re-enabled PWA"]
}, {
  version: "0.6.1",
  date: "28/04/22",
  notes: ["Fixed rule text display on hover on desktop."]
}, {
  version: "0.6.0",
  date: "28/04/22",
  notes: ["Added tabular list view as alternative to cards."]
}, {
  version: "0.5.0",
  date: "28/04/22",
  notes: ["Unit Cards - now merge combined units.", "Unit Cards - Unit equipment moved to rules to avoid rule duplication.", "'Open a List' screen UX.", "Competitive army list validation rules added for mixed armies", "Fixed mobile scroll behaviour when dragging rules text.", "Added release notes!"]
}, {
  version: "0.1.0",
  date: "",
  notes: ["All current content!"]
}];

function isVersionGreaterThan(a, b) {
  const splitA = a.split(".");
  const splitB = b.split(".");
  if (parseInt(splitA[0]) > parseInt(splitB[0])) return true;
  if (parseInt(splitA[1]) > parseInt(splitB[1])) return true;
  if (parseInt(splitA[2]) > parseInt(splitB[2])) return true;
  return false;
}

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 7133:
/***/ ((module) => {

module.exports = require("immer");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ }),

/***/ 7261:
/***/ ((module) => {

module.exports = import("throttle-debounce");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [876,650], () => (__webpack_exec__(9613)));
module.exports = __webpack_exports__;

})();