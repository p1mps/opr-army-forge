"use strict";
(() => {
var exports = {};
exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 5109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArmyBookSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_armySlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5876);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1653);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7622);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _views_components_MenuBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3795);
/* harmony import */ var _views_armyBookSelection_ArmyBookList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3523);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_armySlice__WEBPACK_IMPORTED_MODULE_2__, _data_listSlice__WEBPACK_IMPORTED_MODULE_7__]);
([_data_armySlice__WEBPACK_IMPORTED_MODULE_2__, _data_listSlice__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function ArmyBookSelection() {
  var _armyState$armyBooks, _armyBooks$filter;

  const armyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const appendMode = !!router.query["append"];
  const {
    0: searchText,
    1: setSearchText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const search = armies => armies === null || armies === void 0 ? void 0 : armies.filter(a => {
    var _a$username;

    return a.name.toLowerCase().includes(searchText.toLowerCase()) || ((_a$username = a.username) === null || _a$username === void 0 ? void 0 : _a$username.toLowerCase().includes(searchText.toLowerCase()));
  });

  const allArmyBooks = (_armyState$armyBooks = armyState.armyBooks) !== null && _armyState$armyBooks !== void 0 ? _armyState$armyBooks : [];
  const armyBooks = search(allArmyBooks);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function loadApiArmyBooks() {
      // Redirect to game selection screen if no army selected
      if (!armyState.gameSystem) {
        router.push({
          pathname: "gameSystem/",
          query: router.query
        }, null, {
          shallow: true
        });
        return;
      }

      if (!appendMode) {
        dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_2__/* .resetLoadedBooks */ .nW)()); // Clear any existing units?

        dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_7__/* .resetList */ .cU)());
      }

      if (armyState.armyBooks.length < 1) dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_2__/* .getArmyBooks */ .V4)(armyState.gameSystem));
    }

    loadApiArmyBooks();
  }, [armyState.gameSystem, armyState.armyBooks]);

  const officialFactions = lodash__WEBPACK_IMPORTED_MODULE_8___default().groupBy((_armyBooks$filter = armyBooks === null || armyBooks === void 0 ? void 0 : armyBooks.filter(ca => ca.official && ca.factionName)) !== null && _armyBooks$filter !== void 0 ? _armyBooks$filter : [], a => a.factionName);

  const officialArmies = armyBooks === null || armyBooks === void 0 ? void 0 : armyBooks.filter(ca => ca.official && !ca.factionName).concat(Object.keys(officialFactions).map(key => {
    const rootArmy = officialFactions[key].find(x => !x.factionRelation) || officialFactions[key][0];
    return {
      uid: rootArmy.uid,
      name: key,
      factionName: key,
      //factionRelation: officialFactions[key][0].factionRelation,
      official: true,
      // Live if any are live
      isLive: officialFactions[key].reduce((live, next) => live || next.isLive, false)
    };
  }));
  const officialActiveArmies = officialArmies === null || officialArmies === void 0 ? void 0 : officialArmies.filter(ca => ca.isLive);

  async function selectArmy(army) {
    const uid = army.uid;

    const navigateToConfig = () => {
      const target = {
        pathname: "/listConfiguration",
        query: _objectSpread({}, router.query)
      };

      if (appendMode) {
        router.replace(target);
      } else {
        router.push(target);
      }
    };

    dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_2__/* .getArmyBookData */ .zK)({
      armyUid: uid,
      gameSystem: armyState.gameSystem,
      reset: !appendMode
    })).then(res => {
      navigateToConfig();
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_views_components_MenuBar__WEBPACK_IMPORTED_MODULE_9__/* .MenuBar */ .j, {
      title: "Create a new list",
      onBackClick: () => router.push("/gameSystem"),
      right: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SearchBox, {
        searchText: searchText,
        setSearchText: setSearchText
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "mx-auto p-4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          className: "mb-4 has-text-centered is-clearfix",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("h3", {
            className: "is-size-4 pt-4",
            children: ["Choose ", appendMode ? "another" : "an", " Army Book"]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_views_armyBookSelection_ArmyBookList__WEBPACK_IMPORTED_MODULE_10__/* .ArmyBookList */ .K, {
          armyBooks: officialActiveArmies,
          onSelect: selectArmy
        })]
      })
    })]
  });
}

function SearchBox({
  searchText,
  setSearchText
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Input, {
    className: "mt-1",
    sx: {
      flexBasis: "5em",
      flexGrow: 0.25,
      alignSelf: "center",
      color: "white",
      textAlign: "right"
    },
    id: "searchfield",
    size: "small",
    margin: "none",
    autoComplete: "off",
    disableUnderline: true,
    onChange: e => {
      setSearchText(e.target.value);
    },
    value: searchText,
    inputProps: {
      style: {
        textAlign: "right"
      }
    },
    endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputAdornment, {
      position: "end",
      sx: {
        width: "2rem",
        color: "white"
      },
      children: searchText ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
        size: "small",
        onClick: () => {
          setSearchText(document.getElementById("searchfield").value = "");
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_5___default()), {
          sx: {
            color: "white"
          }
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6___default()), {
        onClick: () => {
          document.getElementById("searchfield").focus();
        }
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* binding */ ArmyBookList)
});

;// CONCATENATED MODULE: external "@mui/material/CircularProgress"
const CircularProgress_namespaceObject = require("@mui/material/CircularProgress");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_namespaceObject);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./views/components/ArmyImage.tsx
var ArmyImage = __webpack_require__(176);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./views/armyBookSelection/ArmyBookTile.tsx




function ArmyBookTile({
  army,
  enabled,
  onSelect
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "column is-half-mobile is-one-third-tablet is-one-quarter-desktop",
    style: {
      filter: enabled ? null : "saturate(0.25)"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(material_.Card, {
      elevation: 2,
      className: enabled ? "interactable" : null,
      onClick: () => enabled ? onSelect(army) : null,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-2 is-flex is-flex-direction-column is-flex-grow-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ArmyImage/* default */.Z, {
          name: army.name,
          armyData: army
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "is-flex is-flex-grow-1 is-align-items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "is-flex-grow-1",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "my-2",
              style: {
                fontWeight: 600,
                textAlign: "center",
                fontSize: "14px"
              },
              children: army.name
            })
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./views/armyBookSelection/ArmyBookList.tsx







function ArmyBookList({
  armyBooks,
  onSelect
}) {
  const sortedArmies = external_lodash_default().sortBy(armyBooks, a => a.name);

  const armyState = (0,external_react_redux_.useSelector)(state => state.army);
  const loadedArmyBooks = armyState.loadedArmyBooks;
  const loadedFactions = armyState.selectedFactions;

  const isLoaded = name => {
    return loadedArmyBooks.some(book => book.name === name) || loadedFactions.some(faction => faction === name);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [!((armyBooks === null || armyBooks === void 0 ? void 0 : armyBooks.length) > 0) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "column is-flex is-flex-direction-column is-align-items-center\t",
      children: [/*#__PURE__*/jsx_runtime_.jsx((CircularProgress_default()), {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Loading armies..."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "columns is-mobile is-multiline",
      children: sortedArmies.map((army, index) => /*#__PURE__*/jsx_runtime_.jsx(ArmyBookTile, {
        army: army,
        onSelect: onSelect,
        enabled: !isLoaded(army.name)
      }, index))
    })]
  });
}

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIosNew");

/***/ }),

/***/ 1653:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Clear");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

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
var __webpack_exports__ = __webpack_require__.X(0, [876,650,795,176], () => (__webpack_exec__(5109)));
module.exports = __webpack_exports__;

})();