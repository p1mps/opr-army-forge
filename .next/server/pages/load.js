"use strict";
(() => {
var exports = {};
exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 2896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Load)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3744);
/* harmony import */ var _views_components_ArmyImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(176);
/* harmony import */ var _views_components_MenuBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3795);
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9358);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7849);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5327);
/* harmony import */ var _mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var use_long_press__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4176);
/* harmony import */ var use_long_press__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(use_long_press__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9621);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _views_icons_DownloadFile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5071);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__]);
_services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function Load() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: localSaves,
    1: setLocalSaves
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: forceLoad,
    1: setForceLoad
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: forceSelectMode,
    1: setForceSelectMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: selections,
    1: setSelections
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const isSelected = save => selections.some(x => x === save.list.creationTime);

  const parsedSaves = localSaves.map(key => JSON.parse(localStorage[key]));
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const ua = window.navigator.userAgent;
    const uaResult = new (ua_parser_js__WEBPACK_IMPORTED_MODULE_13___default())(ua);
    const device = uaResult.getDevice();
    setIsMobile(device.type === "mobile");
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getSaves = () => Object.keys(localStorage).filter(k => k.startsWith("AF_Save"));

    for (let save of getSaves()) {
      if (localStorage.getItem(save).indexOf('"listPoints":0') >= 0) delete localStorage[save];
    }

    setLocalSaves(getSaves());
  }, [forceLoad]);

  const importFile = () => {
    var fileInput = document.getElementById("file-input");
    fileInput.dispatchEvent(new MouseEvent("click"));
  };

  const onItemClick = save => {
    console.log("Item clicked");

    if (selections.length === 0 && !forceSelectMode) {
      loadSave(save);
    } else {
      selectSave(save);
    }
  };

  const loadSave = save => {
    setLoading(true);
    _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].load */ .Z.load(dispatch, save, armyData => {
      router.push({
        pathname: "/list",
        query: {
          listId: save.list.creationTime
        }
      });
      setLoading(false);
    });
  };

  const forEachSelection = callback => {
    for (var selection of selections) {
      const actualKey = Object.keys(localStorage).find(x => x.endsWith(selection));
      callback(JSON.parse(localStorage.getItem(actualKey)));
    }

    setForceLoad(forceLoad + 1);
    setLocalSaves([]);
    setForceSelectMode(false);
  };

  const selectSave = save => {
    setSelections(prev => isSelected(save) ? prev.filter(x => x !== save.list.creationTime) : prev.concat(save.list.creationTime));
  };

  const deleteSave = save => {
    _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__/* ["default"]["delete"] */ .Z["delete"](save.list);
  };

  const selectionIsFavourite = key => {
    var _parsedSaves$find;

    return (_parsedSaves$find = parsedSaves.find(x => x.list.creationTime === key)) === null || _parsedSaves$find === void 0 ? void 0 : _parsedSaves$find.favourite;
  };

  const toggleFavourite = save => {
    // True when any are not favourite (= favourite all selections)
    const targetState = selections.some(x => !selectionIsFavourite(x));
    _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].toggleFavourite */ .Z.toggleFavourite(save, targetState);
  };

  const readSingleFile = e => {
    var file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();

    reader.onload = function (event) {
      try {
        const json = event.target.result;
        const saveData = JSON.parse(json);
        const creationTime = new Date().getTime().toString();
        saveData.list.creationTime = creationTime;
        _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].load */ .Z.load(dispatch, saveData, _ => {
          router.push("/list");
          _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].saveImport */ .Z.saveImport(creationTime, JSON.stringify(saveData));
          setLoading(false);
        });
      } catch (e) {
        setLoading(false);
      }
    };

    reader.readAsText(file);
  };

  const SaveList = ({
    saves
  }) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
      square: true,
      elevation: 0,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {
        className: "p-0",
        children: lodash__WEBPACK_IMPORTED_MODULE_4___default().sortBy(saves, save => save.modified).reverse().map(save => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(SaveListItem, {
          save: save,
          selected: isSelected(save),
          onSelect: selectSave,
          onItemClick: onItemClick,
          showCheckbox: (selections === null || selections === void 0 ? void 0 : selections.length) > 0 || !isMobile || forceSelectMode,
          isMobile: isMobile
        }, save.list.creationTime))
      })
    });
  };

  const favourites = parsedSaves.filter(s => s.favourite);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [selections.length === 0 && !forceSelectMode ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_views_components_MenuBar__WEBPACK_IMPORTED_MODULE_8__/* .MenuBar */ .j, {
      title: "Open a List",
      onBackClick: () => (0,_services_Helpers__WEBPACK_IMPORTED_MODULE_16__/* .tryBack */ .kh)(() => router.replace("/")),
      right: isMobile && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
        color: "inherit",
        onClick: () => setForceSelectMode(x => !x),
        children: "Select"
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
      elevation: 2,
      square: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {
        color: "transparent",
        position: "static",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
            size: "large",
            edge: "start",
            color: "primary",
            "aria-label": "menu",
            sx: {
              mr: 2
            },
            onClick: () => {
              setSelections([]);
              setForceSelectMode(false);
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default()), {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variant: "h6",
            component: "div",
            sx: {
              flexGrow: 1
            },
            children: [selections.length, " selected lists"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
            disabled: !selections.length,
            color: "primary",
            onClick: () => forEachSelection(toggleFavourite),
            children: selections.some(x => !selectionIsFavourite(x)) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_9___default()), {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_10___default()), {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
            color: "primary",
            disabled: !selections.length,
            onClick: () => {
              if (confirm(`Are you sure you want to delete ${selections.length} list(s)?`)) {
                forEachSelection(deleteSave);
                setSelections([]);
              }
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__.Delete, {})
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("input", {
        type: "file",
        id: "file-input",
        style: {
          display: "none"
        },
        onChange: readSingleFile
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "mx-auto",
        style: {
          maxWidth: "480px"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: "is-flex is-justify-content-center p-4 my-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "contained",
            color: "primary",
            onClick: () => importFile(),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_views_icons_DownloadFile__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              fill: "white"
            }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
              className: "ml-2",
              children: "Upload Army Forge File"
            })]
          })
        }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "is-flex is-flex-direction-column is-align-items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
            children: "Loading army data..."
          })]
        }), favourites.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
            className: "px-4 mb-2",
            style: {
              fontWeight: 600
            },
            children: "Favourite Lists"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(SaveList, {
            saves: favourites
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
          className: "px-4 my-2",
          style: {
            fontWeight: 600
          },
          children: "Saved Lists"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(SaveList, {
          saves: parsedSaves.filter(s => !s.favourite)
        })]
      })]
    })]
  });
}

function SaveListItem({
  save,
  selected,
  onItemClick,
  onSelect,
  showCheckbox,
  isMobile
}) {
  var _save$gameSystem;

  const bindLongPress = (0,use_long_press__WEBPACK_IMPORTED_MODULE_12__.useLongPress)(() => onSelect(save), {
    onCancel: (_, {
      reason
    }) => {
      console.log("reason", reason);
      return reason === "canceled-by-timeout" && onItemClick(save);
    },
    detect: isMobile ? "touch" : "mouse",
    cancelOnMovement: 5
  }); //const selected = selections.some((x) => x === save.list.creationTime);

  const modified = new Date(save.modified);
  const time = modified.getHours() + ":" + modified.getMinutes();
  const points = save.listPoints;

  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
      style: {
        fontWeight: 600
      },
      children: [(_save$gameSystem = save.gameSystem) === null || _save$gameSystem === void 0 ? void 0 : _save$gameSystem.toUpperCase(), " - ", save.list.name]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
      style: {
        color: "#656565"
      },
      children: [" \u2022 ", points, "pts"]
    })]
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
    disablePadding: true,
    secondaryAction: showCheckbox && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
      checked: selected,
      onClick: () => onSelect(save)
    }),
    style: {
      backgroundColor: selected ? "#F9FDFF" : null
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemButton, _objectSpread(_objectSpread({}, bindLongPress()), {}, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemAvatar, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_views_components_ArmyImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          name: save.armyFaction || save.armyName,
          armyData: {
            gameSystem: save.gameSystem
          },
          size: "32px"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {
        className: "ml-2" + (save.saveVersion >= 2 ? "" : " has-text-danger"),
        primary: title,
        secondary: save.saveVersion >= 2 ? "Modified " + modified.toLocaleDateString() + " " + time : "Outdated save format!"
      })]
    }))
  }, save.list.creationTime);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DownloadFileIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function DownloadFileIcon({
  fill = "rgba(0,0,0,.38)"
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: fill,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M13 10.925H11V15.125L9.39999 13.525L7.99999 14.925L12 18.95L16 14.925L14.575 13.55L13 15.125V10.925ZM17.925 22.2H6.07499C5.44165 22.2 4.90432 21.9793 4.46299 21.538C4.02099 21.096 3.79999 20.5583 3.79999 19.925V4.07499C3.79999 3.44165 4.02099 2.90399 4.46299 2.46199C4.90432 2.02065 5.44165 1.79999 6.07499 1.79999H14.075L20.2 7.92499V19.925C20.2 20.5583 19.9793 21.096 19.538 21.538C19.096 21.9793 18.5583 22.2 17.925 22.2ZM12.925 9.07499V4.07499H6.07499V19.925H17.925V9.07499H12.925ZM6.07499 4.07499V9.07499V19.925V4.07499Z"
    })
  });
}

/***/ }),

/***/ 7915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIosNew");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7849:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Star");

/***/ }),

/***/ 5327:
/***/ ((module) => {

module.exports = require("@mui/icons-material/StarBorder");

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

/***/ 9621:
/***/ ((module) => {

module.exports = require("ua-parser-js");

/***/ }),

/***/ 4176:
/***/ ((module) => {

module.exports = require("use-long-press");

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
var __webpack_exports__ = __webpack_require__.X(0, [876,650,795,176], () => (__webpack_exec__(2896)));
module.exports = __webpack_exports__;

})();