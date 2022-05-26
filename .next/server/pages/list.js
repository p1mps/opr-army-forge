(() => {
var exports = {};
exports.id = 34;
exports.ids = [34];
exports.modules = {

/***/ 8989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 373:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_listBuilder_MobileView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6242);
/* harmony import */ var _views_listBuilder_DesktopView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9281);
/* harmony import */ var _data_armySlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5876);
/* harmony import */ var _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3744);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views_listBuilder_MobileView__WEBPACK_IMPORTED_MODULE_5__, _views_listBuilder_DesktopView__WEBPACK_IMPORTED_MODULE_6__, _data_armySlice__WEBPACK_IMPORTED_MODULE_7__, _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__]);
([_views_listBuilder_MobileView__WEBPACK_IMPORTED_MODULE_5__, _views_listBuilder_DesktopView__WEBPACK_IMPORTED_MODULE_6__, _data_armySlice__WEBPACK_IMPORTED_MODULE_7__, _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function List() {
  const armyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.army);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(); // Load army list file

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Redirect to game selection screen if no army selected
    if (!armyState.loaded) {
      const listId = router.query["listId"];

      if (listId) {
        _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__/* ["default"].loadFromKey */ .Z.loadFromKey(dispatch, listId, _ => {});
        return;
      }

      router.push({
        pathname: "/gameSystem",
        query: router.query
      }, null, {
        shallow: true
      });
      return;
    } else {
      dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_7__/* .getGameRules */ .Ty)(armyState.gameSystem));
    }
  }, []); // Break from mobile to desktop layout at 1024px wide

  const isBigScreen = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
    query: "(min-width: 1024px)"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("title", {
        children: "OPR Army Forge"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), armyState.loaded ? isBigScreen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_views_listBuilder_DesktopView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_views_listBuilder_MobileView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}) : null]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ValidationService)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UpgradeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9224);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UpgradeService__WEBPACK_IMPORTED_MODULE_1__]);
_UpgradeService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const unitPointThresholds = {
  "gf": 200,
  "gff": 30,
  "aof": 165,
  "aofs": 25
};
const heroPointThresholds = {
  "gf": 500,
  "gff": 150,
  "aof": 500,
  "aofs": 150
};
const duplicateUnitThresholds = {
  "gf": 1000,
  "gff": 150,
  "aof": 1000,
  "aofs": 150
};
class ValidationService {
  static getErrors(army, list) {
    if (!army || !list) return [];
    const errors = [];
    if (list.pointsLimit > 0 && list.points > list.pointsLimit) errors.push(`Points limit exceeded: ${list.points}/${list.pointsLimit}`);
    const system = army.gameSystem;
    const points = list.pointsLimit || list.points;
    const units = list.units;
    const unitCount = units.filter(u => !u.joinToUnit).length;
    const heroes = units.filter(u => u.specialRules.some(rule => rule.name === "Hero"));
    const heroCount = heroes.length;
    const joinedHeroes = heroes.filter(u => u.joinToUnit && units.some(t => t.selectionId === u.joinToUnit));
    const joinedIds = joinedHeroes.map(u => u.joinToUnit);
    const duplicateUnitLimit = 1 + Math.floor(points / duplicateUnitThresholds[system]);

    const nonCombinedUnitsGrouped = lodash__WEBPACK_IMPORTED_MODULE_0___default().groupBy(units.filter(u => !(u.combined && !u.joinToUnit)), u => u.id);

    const unitsOverDuplicateLimit = Object.keys(nonCombinedUnitsGrouped).map(key => ({
      unitName: units.find(u => u.id === key).name,
      count: nonCombinedUnitsGrouped[key].length
    })).filter(grp => grp.count > duplicateUnitLimit); //#region All Game Systems

    if (heroCount > Math.floor(points / heroPointThresholds[system])) errors.push(`Max 1 hero per full ${heroPointThresholds[system]}pts.`);

    if (unitCount > Math.floor(points / unitPointThresholds[system])) {
      const combinedMsg = system === "gf" || system === "aof" ? ` (combined units count as just 1 unit)` : "";
      errors.push(`Max 1 unit per full ${unitPointThresholds[system]}pts${combinedMsg}.`);
    }

    if (unitsOverDuplicateLimit.length > 0) errors.push(`Cannot have more than ${duplicateUnitLimit} copies of a particular unit (${unitsOverDuplicateLimit.map(x => x.unitName).join(", ")}).`); // combined units still count as one
    //#endregion

    if (army.gameSystem === "gf" || army.gameSystem === "aof") {
      if (units.some(u => u.combined && u.size === 1)) errors.push(`Cannot combine units of unit size [1].`);
      if (units.some(u => u.size === 1 && joinedIds.includes(u.selectionId))) errors.push(`Heroes cannot join units that only contain a single model.`);
      if (new Set(joinedIds).size < joinedIds.length) errors.push(`A unit can only have a maximum of one Hero attached.`);
    }

    if (army.loadedArmyBooks.length > 2) {
      errors.push("Players may bring units from up to two factions in the same list.");
    }

    const unitsByArmy = lodash__WEBPACK_IMPORTED_MODULE_0___default().groupBy(units, x => x.armyId);

    const pointsByArmy = Object.keys(unitsByArmy).map(key => unitsByArmy[key].reduce((pts, unit) => pts + _UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(unit), 0));

    if (list.points > 0 && army.loadedArmyBooks.length > 1 && !pointsByArmy.some(x => x / points * 100 >= 60)) {
      errors.push("Mixed armies must consist of at least 60% worth of units from their primary faction.");
    }

    return errors;
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ MainList)
/* harmony export */ });
/* unused harmony export DuplicateButton */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1653);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6843);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7622);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9224);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_UnitService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8449);
/* harmony import */ var _mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7190);
/* harmony import */ var _mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_DropMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2426);
/* harmony import */ var _components_ArmyBookGroupHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(335);
/* harmony import */ var _components_UnitListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(743);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_listSlice__WEBPACK_IMPORTED_MODULE_4__, _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__, _components_UnitListItem__WEBPACK_IMPORTED_MODULE_12__]);
([_data_listSlice__WEBPACK_IMPORTED_MODULE_4__, _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__, _components_UnitListItem__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function MainList({
  onSelected,
  onUnitRemoved
}) {
  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const loadedArmyBooks = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army.loadedArmyBooks);

  const rootUnits = lodash__WEBPACK_IMPORTED_MODULE_9___default().orderBy(list.units.filter(u => !(u.joinToUnit && list.units.some(t => t.selectionId === u.joinToUnit))), x => x.sortId);

  const unitGroups = lodash__WEBPACK_IMPORTED_MODULE_9___default().groupBy(rootUnits, x => x.armyId);

  const unitGroupKeys = Object.keys(unitGroups);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: unitGroupKeys.map(key => {
      const armyBook = loadedArmyBooks.find(book => book.uid === key);
      const points = list.units.filter(u => u.armyId === key).reduce((total, unit) => total + _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(unit), 0);
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(MainListSection, {
        army: armyBook,
        showTitle: loadedArmyBooks.length > 1,
        group: unitGroups[key],
        onSelected: onSelected,
        onUnitRemoved: onUnitRemoved,
        points: points
      }, key);
    })
  });
}

function MainListSection({
  group,
  army,
  showTitle,
  onSelected,
  onUnitRemoved,
  points
}) {
  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
    elevation: 2,
    sx: {
      backgroundColor: "#FAFAFA",
      marginBottom: "1rem"
    },
    square: true,
    children: [showTitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_ArmyBookGroupHeader__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      army: army,
      collapsed: collapsed,
      setCollapsed: setCollapsed,
      points: points
    }), !collapsed && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
      children: group.map((s, index) => {
        // TODO: REFACTOR!
        const attachedUnits = _services_UnitService__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAttachedUnits */ .Z.getAttachedUnits(list, s);

        const [heroes, otherJoined] = lodash__WEBPACK_IMPORTED_MODULE_9___default().partition(attachedUnits, u => u.specialRules.some(r => r.name === "Hero"));

        const hasJoined = attachedUnits.length > 0;
        const hasHeroes = hasJoined && heroes.length > 0;
        const unitSize = otherJoined.reduce((size, u) => {
          return size + _services_UnitService__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getSize */ .Z.getSize(u);
        }, _services_UnitService__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getSize */ .Z.getSize(s));
        const unitPoints = attachedUnits.reduce((cost, u) => {
          return cost + _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(u);
        }, _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(s));

        const handleClick = unit => {
          onSelected(unit);
        };

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: hasJoined ? "my-2" : "",
          style: {
            backgroundColor: hasJoined ? "rgba(0,0,0,.12)" : ""
          },
          children: [hasJoined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "is-flex px-4 py-2 is-align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_8___default()), {
              style: {
                fontSize: "24px",
                color: "rgba(0,0,0,.38)"
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("h3", {
              className: "ml-2",
              style: {
                fontWeight: 400,
                flexGrow: 1
              },
              children: [hasHeroes && `${heroes[0].customName || heroes[0].name} & `, s.customName || s.name, ` [${unitSize}]`]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("p", {
              className: "mr-2",
              children: [unitPoints, "pts"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_DropMenu__WEBPACK_IMPORTED_MODULE_10__/* .DropMenu */ .m, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(DuplicateButton, {
                units: [s, ...attachedUnits].filter(u => u),
                text: "Duplicate"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: hasJoined ? "ml-1" : "",
            children: [heroes.map(h => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(MainListItem, {
              list: list,
              unit: h,
              onSelected: handleClick,
              onUnitRemoved: onUnitRemoved
            }, h.selectionId)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(MainListItem, {
              list: list,
              unit: s,
              onSelected: handleClick,
              onUnitRemoved: onUnitRemoved
            }), otherJoined.map(u => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(MainListItem, {
              list: list,
              unit: u,
              onSelected: handleClick,
              onUnitRemoved: onUnitRemoved
            }, u.selectionId))]
          })]
        }, index);
      })
    })]
  });
}

function MainListItem({
  list,
  unit,
  onSelected,
  onUnitRemoved
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  const handleSelectUnit = unit => {
    if (list.selectedUnitId !== unit.selectionId) {
      dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_4__/* .selectUnit */ .WZ)(unit.selectionId));
    }

    onSelected(unit);
  };

  const handleRemove = unit => {
    onUnitRemoved(unit);
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_4__/* .removeUnit */ .ZQ)(unit.selectionId));
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_UnitListItem__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    unit: unit,
    selected: list.selectedUnitId === unit.selectionId,
    onClick: () => {
      handleSelectUnit(unit);
    },
    rightControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_DropMenu__WEBPACK_IMPORTED_MODULE_10__/* .DropMenu */ .m, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(DuplicateButton, {
        units: [unit],
        text: "Duplicate"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
        color: "primary",
        onClick: e => {
          handleRemove(unit);
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.ListItemIcon, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_2___default()), {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
          children: "Remove"
        })]
      })]
    })
  });
}

function DuplicateButton({
  units,
  text = ""
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  const duplicateUnits = units => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_4__/* .addUnits */ .KR)(units));
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
    color: "primary",
    onClick: e => {
      duplicateUnits(units);
    },
    children: text ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.ListItemIcon, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_3___default()), {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
        children: text
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_3___default()), {})
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SpellsTable)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function SpellsTable({
  unit
}, {
  unit: ISelectedUnit
}) {
  const loadedArmyBooks = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army.loadedArmyBooks);
  const army = loadedArmyBooks.find(book => book.uid === unit.armyId);
  const spells = army === null || army === void 0 ? void 0 : army.spells;
  const cellStyle = {
    paddingLeft: "8px",
    paddingRight: "8px",
    borderBottom: "none"
  };

  const headerStyle = _objectSpread(_objectSpread({}, cellStyle), {}, {
    fontWeight: 600,
    whiteSpace: "nowrap"
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableContainer, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper,
    elevation: 0,
    style: {
      border: "1px solid rgba(0,0,0,.12)"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Table, {
      size: "small",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableHead, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableRow, {
          style: {
            backgroundColor: "#EBEBEB",
            fontWeight: 600
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
            style: headerStyle,
            children: "Spell"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
            style: headerStyle,
            children: "Description"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableBody, {
        children: spells && spells.map(spell => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableRow, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
            style: headerStyle,
            children: [spell.name, " (", spell.threshold, "+)"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
            style: cellStyle,
            children: spell.effect
          })]
        }, spell.name))
      })]
    })
  });
}

/***/ }),

/***/ 6680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ UnitSelection)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ArmyBookGroupHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(335);
/* harmony import */ var _components_UnitListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(743);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7622);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_UnitListItem__WEBPACK_IMPORTED_MODULE_5__, _data_listSlice__WEBPACK_IMPORTED_MODULE_6__]);
([_components_UnitListItem__WEBPACK_IMPORTED_MODULE_5__, _data_listSlice__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function UnitSelection() {
  const loadedArmyBooks = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.army.loadedArmyBooks);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: loadedArmyBooks.map(book => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(UnitSelectionForArmy, {
      army: book,
      showTitle: loadedArmyBooks.length > 1
    }, book.uid))
  });
}

function UnitSelectionForArmy({
  army,
  showTitle
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.list);
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleAddClick = unit => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_6__/* .addUnit */ .Nn)(_objectSpread(_objectSpread({}, unit), {}, {
      armyId: army.uid
    })));
  };

  const handleSelectClick = unit => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_6__/* .previewUnit */ .Xx)(_objectSpread(_objectSpread({}, unit), {}, {
      armyId: army.uid
    })));
    router.push({
      query: _objectSpread(_objectSpread({}, router.query), {}, {
        upgradesOpen: true
      })
    });
  };

  const unitGroups = getUnitCategories(army.units);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
    elevation: 2,
    sx: {
      backgroundColor: "#FAFAFA",
      marginBottom: "1rem"
    },
    square: true,
    children: [showTitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ArmyBookGroupHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      army: army,
      collapsed: collapsed,
      setCollapsed: setCollapsed
    }), !collapsed && Object.keys(unitGroups).map((key, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [key !== "undefined" && unitGroups[key].length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "menu-label my-2 px-4 " + (i > 0 ? "pt-3" : ""),
        children: key
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {}), unitGroups[key].map((u, index) => {
        var _list$unitPreview;

        const countInList = list === null || list === void 0 ? void 0 : list.units.filter(listUnit => listUnit.name === u.name && listUnit.armyId === army.uid && !listUnit.joinToUnit).length;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_UnitListItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          unit: u,
          countInList: countInList,
          selected: countInList > 0 || ((_list$unitPreview = list.unitPreview) === null || _list$unitPreview === void 0 ? void 0 : _list$unitPreview.id) === u.id,
          onClick: () => {
            handleSelectClick(u);
          },
          rightControl: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
            color: "primary",
            onClick: e => {
              e.stopPropagation();
              handleAddClick(u);
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3___default()), {})
          })
        }, u.id);
      })]
    }, key))]
  });
}

function getUnitCategories(units) {
  // Group army units by category
  const isTough = (u, threshold) => u.specialRules.some(r => {
    if (r.name !== "Tough") return false;
    const toughness = parseInt(r.rating);
    return toughness >= threshold;
  });

  const hasRule = (u, rule) => u.specialRules.some(r => r.name === rule);

  const unitGroups = {
    Heroes: [],
    "Core Units": [],
    "Vehicles / Monsters": [],
    Artillery: [],
    Titans: [],
    Aircraft: []
  };

  for (let unit of units) {
    if (hasRule(unit, "Hero")) unitGroups["Heroes"].push(unit);else if (hasRule(unit, "Aircraft")) unitGroups["Aircraft"].push(unit);else if (hasRule(unit, "Artillery")) unitGroups["Artillery"].push(unit);else if (isTough(unit, 18) && unit.defense == "2" && unit.size === 1 && hasRule(unit, "Fear")) unitGroups["Titans"].push(unit);else if (isTough(unit, 6) && unit.defense == "2" && unit.size === 1) unitGroups["Vehicles / Monsters"].push(unit);else unitGroups["Core Units"].push(unit);
  }

  return unitGroups;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ValidationErrors)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ValidationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4765);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_ValidationService__WEBPACK_IMPORTED_MODULE_2__]);
_services_ValidationService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ValidationErrors({
  open,
  setOpen
}) {
  const army = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army);
  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const errors = _services_ValidationService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getErrors */ .Z.getErrors(army, list);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Dialog, {
    onClose: () => setOpen(false),
    open: open,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.DialogTitle, {
      children: "Competitive List Validation"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.List, {
      children: errors.map((error, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
        divider: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
          children: error
        })
      }, index))
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArmyBookGroupHeader)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9881);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function ArmyBookGroupHeader(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `px-4 py-2 is-flex is-align-items-center`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3", {
      className: "is-flex-grow-1",
      style: {
        fontWeight: 600
      },
      children: [props.army.name, " - ", props.army.versionString]
    }), props.points && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      children: [props.points, "pts"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
      onClick: () => props.setCollapsed(prev => !prev),
      color: "primary",
      children: props.collapsed ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1___default()), {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2___default()), {})
    })]
  });
}

/***/ }),

/***/ 2426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ DropMenu)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6952);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function DropMenu({
  children
}) {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: anchorEl,
    1: setAnchorEl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const close = e => {
    setOpen(false);
    setAnchorEl(null);
    e.stopPropagation();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
      onClick: e => {
        setOpen(!open);
        setAnchorEl(e.target);
        e.stopPropagation();
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_2___default()), {
        color: "primary"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Menu, {
      open: open,
      anchorEl: anchorEl,
      onClose: close,
      onClick: close,
      children: children
    })]
  });
}

/***/ }),

/***/ 6898:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6952);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(773);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_NotificationImportant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7505);
/* harmony import */ var _mui_icons_material_NotificationImportant__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NotificationImportant__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3744);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7622);
/* harmony import */ var _ValidationErrors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1069);
/* harmony import */ var _services_ValidationService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4765);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_appSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8989);
/* harmony import */ var _mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5365);
/* harmony import */ var _mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_EditOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2489);
/* harmony import */ var _mui_icons_material_EditOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_EditOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1598);
/* harmony import */ var _mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_FolderOpen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2681);
/* harmony import */ var _mui_icons_material_FolderOpen__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FolderOpen__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_icons_material_DashboardOutlined__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8215);
/* harmony import */ var _mui_icons_material_DashboardOutlined__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DashboardOutlined__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _icons_DownloadFile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5071);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__, _data_listSlice__WEBPACK_IMPORTED_MODULE_9__, _ValidationErrors__WEBPACK_IMPORTED_MODULE_10__, _services_ValidationService__WEBPACK_IMPORTED_MODULE_11__]);
([_services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__, _data_listSlice__WEBPACK_IMPORTED_MODULE_9__, _ValidationErrors__WEBPACK_IMPORTED_MODULE_10__, _services_ValidationService__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























function MainMenu() {
  const army = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.army);
  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.list);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: menuAnchorElement,
    1: setMenuAnchorElement
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: validationAnchorElement,
    1: setValidationAnchorElement
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: showTextCopiedAlert,
    1: setShowTextCopiedAlert
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const errors = _services_ValidationService__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getErrors */ .Z.getErrors(army, list);

  const handleLoad = () => {
    router.push("/load");
  };

  const handleDelete = () => {
    const confirmMsg = "Are you sure you want to delete this list?";

    if (confirm(confirmMsg)) {
      _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__/* ["default"]["delete"] */ .Z["delete"](list);
      router.replace("/");
    }
  };

  const handleSave = () => {
    const creationTime = _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__/* ["default"].createSave */ .Z.createSave(army, list.name, list);
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_9__/* .updateCreationTime */ .hg)(creationTime));
    return creationTime;
  };

  const handleShare = () => {
    if (!list.creationTime) {
      const creationTime = handleSave();
      _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__/* ["default"].download */ .Z.download(_objectSpread(_objectSpread({}, list), {}, {
        creationTime
      }));
    } else {
      _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__/* ["default"].download */ .Z.download(list);
    }
  };

  const handleShareTTS = () => {
    if (!list.creationTime) {
      const creationTime = handleSave();
      _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__/* ["default"].downloadTTS */ .Z.downloadTTS(_objectSpread(_objectSpread({}, list), {}, {
        creationTime
      }));
    } else {
      _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__/* ["default"].downloadTTS */ .Z.downloadTTS(list);
    }
  };

  const handleTextExport = () => {
    _services_PersistenceService__WEBPACK_IMPORTED_MODULE_8__/* ["default"].copyAsText */ .Z.copyAsText(list);
    setShowTextCopiedAlert(true);
  };

  const navigateToListConfig = () => {
    router.push({
      pathname: "/listConfiguration",
      query: _objectSpread(_objectSpread({}, router.query), {}, {
        edit: true
      })
    });
  };

  const openOprWebapp = () => {
    window.open("https://webapp.onepagerules.com", "_blank");
  };

  const goBack = () => {
    const confirmMsg = "Going back will leave your current list and go back home. Continue?";

    if (list.creationTime || confirm(confirmMsg)) {
      //router.back();
      router.replace("/");
    }
  };

  const isBigScreen = (0,react_responsive__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery)({
    query: "(min-width: 1024px)"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
      elevation: 0,
      style: {
        position: "sticky",
        top: 0,
        zIndex: 1
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
        className: "p-0",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
          size: "large",
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          onClick: goBack,
          style: {
            marginLeft: "0"
          },
          className: "mr-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4___default()), {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
          variant: "h6",
          component: "div",
          sx: {
            flexGrow: 1
          },
          children: list.name
        }), errors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
            size: "large",
            color: "inherit",
            title: "Validation warnings",
            style: {
              backgroundColor: Boolean(validationAnchorElement) ? "#6EAAE7" : null
            },
            onClick: e => setValidationAnchorElement(e.currentTarget),
            className: "mr-2 p-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_icons_material_NotificationImportant__WEBPACK_IMPORTED_MODULE_7___default()), {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Popper, {
            placement: "bottom-end",
            anchorEl: validationAnchorElement,
            open: Boolean(validationAnchorElement) && isBigScreen // onClose={_ => setValidationAnchorElement(null)}
            ,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ClickAwayListener, {
              onClickAway: _ => setValidationAnchorElement(null),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.List, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    divider: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
                        style: {
                          fontWeight: 600
                        },
                        children: "Competitive List Validation"
                      })
                    })
                  }), errors.map((error, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    className: "mx-4 Ppx-0",
                    style: {
                      width: "auto"
                    },
                    divider: index < errors.length - 1,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
                      children: error
                    })
                  }, index))]
                })
              })
            })
          })]
        }), isBigScreen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
          size: "large",
          color: "inherit",
          "aria-label": "menu",
          title: "View list",
          onClick: () => router.push("/view"),
          className: "mr-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3___default()), {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
          size: "large",
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          onClick: e => setMenuAnchorElement(e.currentTarget),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_2___default()), {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Menu, {
          id: "menu-appbar",
          anchorEl: menuAnchorElement,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          keepMounted: true,
          transformOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          open: Boolean(menuAnchorElement),
          onClose: _ => setMenuAnchorElement(null),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: navigateToListConfig,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_icons_material_EditOutlined__WEBPACK_IMPORTED_MODULE_15___default()), {
                sx: {
                  color: "#9E9E9E"
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
              children: "Edit Details"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: () => router.push("/view"),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_icons_material_DashboardOutlined__WEBPACK_IMPORTED_MODULE_18___default()), {
                sx: {
                  color: "#9E9E9E"
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
              children: "View Cards"
            })]
          }), !list.creationTime && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: handleSave,
            children: "Save"
          }), list.creationTime && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: handleDelete,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                sx: {
                  color: "#9E9E9E"
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
              children: "Delete List"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: handleLoad,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_icons_material_FolderOpen__WEBPACK_IMPORTED_MODULE_17___default()), {
                sx: {
                  color: "#9E9E9E"
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
              children: "Open a List"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: handleShare,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_icons_DownloadFile__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
              children: "Export as Army Forge File"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: handleShareTTS,
            children: "Export as TTS File"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: handleTextExport,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_16___default()), {
                sx: {
                  color: "#9E9E9E"
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
              children: "Export as Text"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: openOprWebapp,
            children: "Open OPR Webapp"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            onClick: () => dispatch((0,_data_appSlice__WEBPACK_IMPORTED_MODULE_13__/* .setOpenReleaseNotes */ .jp)(true)),
            children: "See Release Notes"
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_ValidationErrors__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      open: Boolean(validationAnchorElement) && !isBigScreen,
      setOpen: setValidationAnchorElement
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Snackbar, {
      open: showTextCopiedAlert,
      onClose: () => setShowTextCopiedAlert(false),
      message: "Army list copied to your clipboard.",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      autoHideDuration: 4000
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UndoRemoveUnit)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7622);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_listSlice__WEBPACK_IMPORTED_MODULE_3__]);
_data_listSlice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function UndoRemoveUnit({
  open,
  setOpen
}) {
  var _unit$customName;

  const remove = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.list.undoUnitRemove);
  const unit = remove && Array.isArray(remove) ? remove[0] : null;
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  const handleUndo = () => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_3__/* .undoRemoveUnit */ .i)());
    setOpen(false);
  };

  const action = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {
      color: "primary",
      size: "small",
      onClick: handleUndo,
      children: "UNDO"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
      size: "small",
      "aria-label": "close",
      color: "inherit",
      onClick: () => setOpen(false),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default()), {
        fontSize: "small"
      })
    })]
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Snackbar, {
    message: `${(_unit$customName = unit === null || unit === void 0 ? void 0 : unit.customName) !== null && _unit$customName !== void 0 ? _unit$customName : unit === null || unit === void 0 ? void 0 : unit.name} has been removed`,
    autoHideDuration: 4000,
    action: action,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    open: open,
    onClose: () => setOpen(false)
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 743:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UnitListItem)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_EquipmentService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9674);
/* harmony import */ var _services_UnitService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8449);
/* harmony import */ var _RuleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6503);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9224);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__]);
_services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function UnitListItem(props) {
  const unit = props.unit;
  const loadout = unit.loadout || unit.equipment;

  const weaponGroups = lodash__WEBPACK_IMPORTED_MODULE_4___default().groupBy(loadout, x => x.name);

  const unitSize = _services_UnitService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getSize */ .Z.getSize(unit);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper, {
      className: "p-4",
      elevation: 0,
      style: {
        backgroundColor: props.selected ? "#F9FDFF" : null,
        borderLeft: props.countInList > 0 ? "2px solid #0F71B4" : null,
        cursor: "pointer"
      },
      square: true,
      onClick: props.onClick,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "is-flex is-flex-grow-1 is-align-items-center mb-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "is-flex-grow-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            className: "mb-1",
            children: [props.countInList > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              style: {
                color: "#0F71B4"
              },
              children: [props.countInList, "x "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              children: [unit.customName || unit.name, " "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              style: {
                color: "#656565"
              },
              children: ["[", unitSize, "]"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "is-flex",
            style: {
              fontSize: "14px",
              color: "rgba(0,0,0,0.6)"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              children: ["Qua ", unit.quality, "+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              className: "ml-2",
              children: ["Def ", unit.defense, "+"]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          children: [_services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(unit), "pts"]
        }), props.rightControl]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        style: {
          fontSize: "14px",
          color: "rgba(0,0,0,0.6)"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          children: Object.values(weaponGroups).map((group, i) => {
            const count = group.reduce((c, next) => c + next.count, 0);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              children: [i > 0 ? ", " : "", count > 1 ? `${count}x ` : "", _services_EquipmentService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].formatString */ .Z.formatString(group[0])]
            }, i);
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_RuleList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          specialRules: unit.specialRules.concat(_services_UnitService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getAllUpgradedRules */ .Z.getAllUpgradedRules(unit))
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Divider, {})]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UnitNotes)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7622);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7261);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_listSlice__WEBPACK_IMPORTED_MODULE_3__, throttle_debounce__WEBPACK_IMPORTED_MODULE_4__]);
([_data_listSlice__WEBPACK_IMPORTED_MODULE_3__, throttle_debounce__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UnitNotes({
  selectedUnit
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    0: unitNotes,
    1: setUnitNotesState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setUnitNotesState(selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.notes);
  }, [selectedUnit]);
  const debounceSetNotes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,throttle_debounce__WEBPACK_IMPORTED_MODULE_4__.debounce)(750, notes => dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_3__/* .setUnitNotes */ .RQ)({
    unitId: selectedUnit.selectionId,
    notes
  }))), [selectedUnit]);

  const handleNotesChanged = evt => {
    console.log(evt.target.value);
    const notes = evt.target.value;
    setUnitNotesState(notes);
    debounceSetNotes(notes);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField, {
    multiline: true,
    label: "Notes",
    fullWidth: true,
    value: unitNotes,
    onChange: handleNotesChanged
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6467:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpgradePanelHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9520);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9224);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7622);
/* harmony import */ var _services_UnitService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8449);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7261);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_4__, _data_listSlice__WEBPACK_IMPORTED_MODULE_5__, throttle_debounce__WEBPACK_IMPORTED_MODULE_7__]);
([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_4__, _data_listSlice__WEBPACK_IMPORTED_MODULE_5__, throttle_debounce__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function UpgradePanelHeader() {
  var _list$unitPreview;

  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    0: editMode,
    1: setEditMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: customName,
    1: setCustomName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const selectedUnit = (_list$unitPreview = list.unitPreview) !== null && _list$unitPreview !== void 0 ? _list$unitPreview : _services_UnitService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getSelected */ .Z.getSelected(list);
  const previewMode = !!list.unitPreview;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _ref, _selectedUnit$customN;

    setCustomName((_ref = (_selectedUnit$customN = selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.customName) !== null && _selectedUnit$customN !== void 0 ? _selectedUnit$customN : selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.name) !== null && _ref !== void 0 ? _ref : "");
  }, [selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.selectionId]);
  const debounceSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,throttle_debounce__WEBPACK_IMPORTED_MODULE_7__.debounce)(1000, name => dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_5__/* .renameUnit */ .Ah)({
    unitId: selectedUnit.selectionId,
    name
  }))), [list]);
  if (!selectedUnit) return null;

  const toggleEditMode = () => {
    const toggleTo = !editMode;
    setEditMode(toggleTo);

    if (toggleTo) {// Focus
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "is-flex is-align-items-center",
      children: [editMode ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
        autoFocus: true,
        variant: "standard",
        className: "",
        value: customName,
        onChange: e => {
          setCustomName(e.target.value);
          debounceSave(e.target.value);
        }
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "is-flex",
        style: {
          maxWidth: "calc(100% - 7rem)"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h3", {
          className: "is-size-4 has-text-left unitName",
          children: [selectedUnit.customName || selectedUnit.name, " ", `[${_services_UnitService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getSize */ .Z.getSize(selectedUnit)}]`]
        })
      }), !previewMode && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        color: "primary",
        className: "ml-2",
        onClick: () => toggleEditMode(),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_3___default()), {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
        className: "ml-4 is-flex-grow-1",
        style: {
          textAlign: "right"
        },
        children: [_services_UpgradeService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(selectedUnit), "pts"]
      })]
    }), previewMode && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "contained",
      className: "mt-2",
      style: {
        width: "100%"
      },
      onClick: () => dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_5__/* .addUnit */ .Nn)(list.unitPreview)),
      children: "Add to My List"
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 9281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DesktopView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UnitSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6680);
/* harmony import */ var _MainList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(429);
/* harmony import */ var _upgrades_Upgrades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9314);
/* harmony import */ var _components_MainMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6898);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_UpgradePanelHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6467);
/* harmony import */ var _ValidationErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1069);
/* harmony import */ var _components_UndoRemoveUnit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2161);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UnitSelection__WEBPACK_IMPORTED_MODULE_2__, _MainList__WEBPACK_IMPORTED_MODULE_3__, _upgrades_Upgrades__WEBPACK_IMPORTED_MODULE_4__, _components_MainMenu__WEBPACK_IMPORTED_MODULE_5__, _components_UpgradePanelHeader__WEBPACK_IMPORTED_MODULE_7__, _ValidationErrors__WEBPACK_IMPORTED_MODULE_8__, _components_UndoRemoveUnit__WEBPACK_IMPORTED_MODULE_9__]);
([_UnitSelection__WEBPACK_IMPORTED_MODULE_2__, _MainList__WEBPACK_IMPORTED_MODULE_3__, _upgrades_Upgrades__WEBPACK_IMPORTED_MODULE_4__, _components_MainMenu__WEBPACK_IMPORTED_MODULE_5__, _components_UpgradePanelHeader__WEBPACK_IMPORTED_MODULE_7__, _ValidationErrors__WEBPACK_IMPORTED_MODULE_8__, _components_UndoRemoveUnit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function DesktopView() {
  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const loadedArmyBooks = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army.loadedArmyBooks);
  const {
    0: validationOpen,
    1: setValidationOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showUndoRemove,
    1: setShowUndoRemove
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const armyData = loadedArmyBooks === null || loadedArmyBooks === void 0 ? void 0 : loadedArmyBooks[0];
  const columnStyle = {
    overflowY: "scroll",
    maxHeight: "100%"
  };

  const setScrolled = e => {
    let elem = e.target;

    if (elem.scrollTop) {
      elem.classList.add("scrolled");
    } else {
      elem.classList.remove("scrolled");
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Paper, {
      elevation: 1,
      color: "primary",
      square: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_MainMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "columns my-0",
      style: {
        height: "calc(100vh - 64px)"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "column py-0 pr-0",
        style: columnStyle,
        onScroll: setScrolled,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
          square: true,
          elevation: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h3", {
            className: "p-4 is-size-4 is-hidden-mobile",
            children: loadedArmyBooks.length > 1 ? "Army Books" : `${armyData.name} - ${armyData.versionString}`
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_UnitSelection__WEBPACK_IMPORTED_MODULE_2__/* .UnitSelection */ .w, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "column p-0",
        style: columnStyle,
        onScroll: setScrolled,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
          square: true,
          elevation: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h3", {
            className: "p-4 is-size-4 is-hidden-mobile",
            children: `My List - ${list.points}` + (list.pointsLimit ? `/${list.pointsLimit}` : "") + "pts"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_MainList__WEBPACK_IMPORTED_MODULE_3__/* .MainList */ .L, {
          onSelected: () => {},
          onUnitRemoved: () => setShowUndoRemove(true)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "column py-0 px-0 mr-4",
        style: columnStyle,
        onScroll: setScrolled,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
          square: true,
          elevation: 1,
          className: "px-4 pt-4 pb-2 sticky",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_UpgradePanelHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_upgrades_Upgrades__WEBPACK_IMPORTED_MODULE_4__/* .Upgrades */ .R, {})]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ValidationErrors__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      open: validationOpen,
      setOpen: setValidationOpen
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_UndoRemoveUnit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      open: showUndoRemove,
      setOpen: setShowUndoRemove
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MobileView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UnitSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6680);
/* harmony import */ var _MainList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(429);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring_bottom_sheet_dist_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7830);
/* harmony import */ var react_spring_bottom_sheet_dist_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spring_bottom_sheet_dist_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _upgrades_Upgrades__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9314);
/* harmony import */ var react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1759);
/* harmony import */ var react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7622);
/* harmony import */ var _components_UpgradePanelHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6467);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_MainMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6898);
/* harmony import */ var _ValidationErrors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1069);
/* harmony import */ var _components_UndoRemoveUnit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2161);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UnitSelection__WEBPACK_IMPORTED_MODULE_2__, _MainList__WEBPACK_IMPORTED_MODULE_3__, _upgrades_Upgrades__WEBPACK_IMPORTED_MODULE_6__, _data_listSlice__WEBPACK_IMPORTED_MODULE_9__, _components_UpgradePanelHeader__WEBPACK_IMPORTED_MODULE_10__, _components_MainMenu__WEBPACK_IMPORTED_MODULE_12__, _ValidationErrors__WEBPACK_IMPORTED_MODULE_13__, _components_UndoRemoveUnit__WEBPACK_IMPORTED_MODULE_14__]);
([_UnitSelection__WEBPACK_IMPORTED_MODULE_2__, _MainList__WEBPACK_IMPORTED_MODULE_3__, _upgrades_Upgrades__WEBPACK_IMPORTED_MODULE_6__, _data_listSlice__WEBPACK_IMPORTED_MODULE_9__, _components_UpgradePanelHeader__WEBPACK_IMPORTED_MODULE_10__, _components_MainMenu__WEBPACK_IMPORTED_MODULE_12__, _ValidationErrors__WEBPACK_IMPORTED_MODULE_13__, _components_UndoRemoveUnit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function MobileView() {
  var _army$loadedArmyBooks;

  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const army = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
  const sheetOpen = router.query["upgradesOpen"] == "true";
  const armyData = army === null || army === void 0 ? void 0 : (_army$loadedArmyBooks = army.loadedArmyBooks) === null || _army$loadedArmyBooks === void 0 ? void 0 : _army$loadedArmyBooks[0];
  const {
    0: slider,
    1: setSlider
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: slideIndex,
    1: setSlideIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: validationOpen,
    1: setValidationOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showUndoRemove,
    1: setShowUndoRemove
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Open bottom sheet when unit is selected

  const onUnitSelected = unit => {
    router.push({
      query: _objectSpread(_objectSpread({}, router.query), {}, {
        upgradesOpen: true
      })
    });
  }; // Reset selected unit when sheet is closed


  function onDismissSheet() {
    delete router.query.upgradesOpen;
    router.push({
      query: _objectSpread({}, router.query)
    });
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_9__/* .selectUnit */ .WZ)(null));
  } // Keep Tab bar and carousel in sync


  const handleSlideChange = (event, newValue) => {
    setSlideIndex(newValue);
    slider.slickGoTo(newValue);
  }; // Slick carousel settings


  const sliderSettings = {
    dots: false,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    initialSlide: 1,
    beforeChange: (current, next) => handleSlideChange(null, next)
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Paper, {
      elevation: 1,
      color: "primary",
      square: true,
      style: {
        position: "sticky",
        top: 0,
        zIndex: 1
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_MainMenu__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.AppBar, {
        elevation: 0,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 1
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Tabs, {
          value: slideIndex,
          onChange: handleSlideChange,
          centered: true,
          variant: "fullWidth",
          textColor: "inherit",
          indicatorColor: "primary",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Tab, {
            sx: {
              fontWeight: 600
            },
            label: (army === null || army === void 0 ? void 0 : army.loadedArmyBooks.length) > 1 ? "Army Books" : `${armyData === null || armyData === void 0 ? void 0 : armyData.name} ${armyData === null || armyData === void 0 ? void 0 : armyData.versionString}`
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Tab, {
            sx: {
              fontWeight: 600
            },
            label: `My List - ${list.points}pts`
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), _objectSpread(_objectSpread({}, sliderSettings), {}, {
      ref: slider => setSlider(slider),
      style: {
        maxHeight: "100%"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_UnitSelection__WEBPACK_IMPORTED_MODULE_2__/* .UnitSelection */ .w, {}), list.units.length > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_MainList__WEBPACK_IMPORTED_MODULE_3__/* .MainList */ .L, {
        onSelected: onUnitSelected,
        onUnitRemoved: () => setShowUndoRemove(true)
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: "p-4 has-text-centered",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("h3", {
          className: "is-size-3 mb-4",
          children: "Your list is empty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
          variant: "outlined",
          onClick: () => handleSlideChange(null, 0),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11___default()), {}), " Add Units"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
          className: "is-flex mt-6",
          style: {
            height: "160px",
            width: "100%",
            backgroundImage: `url("img/gf_armies/${armyData === null || armyData === void 0 ? void 0 : armyData.name}.png")`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "relative",
            zIndex: 1,
            opacity: 0.5
          }
        })]
      })]
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.BottomSheet, {
      open: sheetOpen,
      onDismiss: onDismissSheet,
      initialFocusRef: false,
      expandOnContentDrag: true,
      onScrollCapture: e => e.preventDefault(),
      defaultSnap: ({
        snapPoints,
        lastSnap
      }) => lastSnap !== null && lastSnap !== void 0 ? lastSnap : Math.min(...snapPoints),
      snapPoints: ({
        minHeight,
        maxHeight
      }) => [minHeight, maxHeight * 0.9],
      header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_UpgradePanelHeader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_upgrades_Upgrades__WEBPACK_IMPORTED_MODULE_6__/* .Upgrades */ .R, {
        mobile: true
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ValidationErrors__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      open: validationOpen,
      setOpen: setValidationOpen
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_UndoRemoveUnit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      open: showUndoRemove,
      setOpen: setShowUndoRemove
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CampaignUpgrades)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9881);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4631);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7622);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_RuleList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6503);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_campaign__WEBPACK_IMPORTED_MODULE_4__, _data_listSlice__WEBPACK_IMPORTED_MODULE_5__]);
([_data_campaign__WEBPACK_IMPORTED_MODULE_4__, _data_listSlice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function CampaignUpgrades({
  unit
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const isHero = unit.specialRules.some(r => r.name === "Hero");
  const allTraitDefinitions = (0,_data_campaign__WEBPACK_IMPORTED_MODULE_4__/* .getTraitDefinitions */ .y)();
  const traitDefinitions = allTraitDefinitions[isHero ? "heroes" : "units"];
  const injuryDefinitions = allTraitDefinitions["injuries"];
  const talentDefinitions = allTraitDefinitions["talents"];
  const level = unit.xp ? Math.floor(unit.xp / 5) : 0;

  const isInjury = trait => !!injuryDefinitions.find(x => x.name === trait);

  const isTalent = trait => !!injuryDefinitions.find(x => x.name === trait);

  let traitCount = 0,
      injuryCount = 0,
      talentCount = 0;

  for (let trait of unit.traits) {
    if (isInjury(trait)) injuryCount++;else if (isTalent(trait)) talentCount++;else traitCount++;
  }

  const adjustUnitXp = xp => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_5__/* .adjustXp */ .Ke)({
      unitId: unit.selectionId,
      xp
    }));
  };

  const toggleUnitTrait = trait => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_5__/* .toggleTrait */ .v$)({
      unitId: unit.selectionId,
      trait: trait.name
    }));
  };

  const traitControls = (traits, requireLevels = false) => {
    return traits.map(trait => {
      var _unit$traits;

      const checked = !!((_unit$traits = unit.traits) !== null && _unit$traits !== void 0 && _unit$traits.find(t => t === trait.name));
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "is-flex is-align-items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "is-flex-grow-1 pr-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_RuleList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            specialRules: [trait]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
          checked: checked,
          onClick: () => toggleUnitTrait(trait),
          value: trait.name,
          disabled: requireLevels ? unit.xp < 5 : false
        })]
      }, trait.name);
    });
  };

  const displayCount = count => count > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
    className: "ml-1",
    style: {
      color: "#9E9E9E"
    },
    children: [" ", "[", count, "]"]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: "px-4 mt-4 is-flex is-align-items-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "pt-0",
        style: {
          fontWeight: 600,
          lineHeight: 1.7
        },
        children: "Campaign Traits"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Card, {
      elevation: 0,
      square: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "pt-2 pb-4 px-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "is-flex is-align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "is-flex-grow-1 pr-2",
            children: ["Unit XP ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              style: {
                color: "rgba(0,0,0,0.6)"
              },
              children: ["(Level ", level, ")"]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
            disabled: unit.xp === 0,
            color: unit.xp > 0 ? "primary" : "default",
            onClick: () => adjustUnitXp(-1),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1___default()), {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            style: {
              color: "#000000"
            },
            children: [unit.xp, "XP"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
            disabled: unit.xp >= 30,
            color: "primary",
            onClick: () => adjustUnitXp(1),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2___default()), {})
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Accordion, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AccordionSummary, {
              expandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default()), {}),
              children: [isHero ? "Skill Sets " : "Traits ", displayCount(traitCount)]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AccordionDetails, {
              children: isHero ? traitDefinitions.map(skillSet => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Accordion, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AccordionSummary, {
                  expandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                  children: skillSet.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AccordionDetails, {
                  children: traitControls(skillSet.traits, true)
                })]
              }, skillSet.name)) : traitControls(traitDefinitions, true)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "mt-4",
          children: [isHero && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Accordion, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AccordionSummary, {
              expandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default()), {}),
              children: ["Injuries ", displayCount(injuryCount)]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AccordionDetails, {
              children: traitControls(injuryDefinitions)
            })]
          }), isHero && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Accordion, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AccordionSummary, {
              expandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default()), {}),
              children: ["Talents ", displayCount(talentCount)]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AccordionDetails, {
              children: traitControls(talentDefinitions)
            })]
          })]
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpgradeGroup)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_EquipmentService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9674);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9224);
/* harmony import */ var _components_CustomTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3987);
/* harmony import */ var _UpgradeItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6243);
/* harmony import */ var _mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7190);
/* harmony import */ var _mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_2__, _UpgradeItem__WEBPACK_IMPORTED_MODULE_4__]);
([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_2__, _UpgradeItem__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function UpgradeGroup({
  unit,
  upgrade,
  previewMode
}) {
  const controlType = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getControlType */ .Z.getControlType(unit, upgrade); // TODO: #177

  const getProfile = target => {
    var e = unit.equipment.find(e => _services_EquipmentService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].compareEquipment */ .Z.compareEquipment(e, target));
    return e ? _services_EquipmentService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].formatString */ .Z.formatString(e) : "";
  };

  const defaultItemLabel = upgrade.type === "replace" ? "Default" // - ${upgrade.replaceWhat?.map((what) => getProfile(what) || "...").join(", ")}`
  : "None";

  const defaultItem = controlType === "radio" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_UpgradeItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    selectedUnit: unit,
    upgrade: upgrade,
    option: null,
    previewMode: previewMode,
    controlType: controlType,
    label: defaultItemLabel
  });

  let groupTitle = upgrade.label;

  for (let what of (_upgrade$replaceWhat = upgrade.replaceWhat) !== null && _upgrade$replaceWhat !== void 0 ? _upgrade$replaceWhat : []) {
    var _upgrade$replaceWhat;

    const profile = getProfile(what);
    if (profile) groupTitle = groupTitle.replace(what, profile);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "mt-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "px-4 is-flex is-align-items-center",
      children: [unit.combined && upgrade.affects === "all" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_CustomTooltip__WEBPACK_IMPORTED_MODULE_3__/* .CustomTooltip */ .W, {
        title: "This option will be the same on both combined units.",
        arrow: true,
        enterTouchDelay: 0,
        leaveTouchDelay: 5000,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
          sx: {
            fontSize: 22
          },
          className: "mr-2"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        className: "pt-0",
        style: {
          fontWeight: "600",
          lineHeight: 1.7
        },
        children: [groupTitle, " ", upgrade.type === "replace" && controlType !== "radio" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          style: {
            color: "rgba(0,0,0,0.6)"
          },
          children: ["[", _services_UpgradeService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].countAvailable */ .Z.countAvailable(unit, upgrade), "]"]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper, {
      className: "px-4 py-2",
      square: true,
      elevation: 0,
      children: [defaultItem, upgrade.options.map((opt, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_UpgradeItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        selectedUnit: unit,
        upgrade: upgrade,
        option: opt,
        controlType: controlType,
        previewMode: previewMode
      }, i))]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpgradeItem)
/* harmony export */ });
/* harmony import */ var _UpgradeItem_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4451);
/* harmony import */ var _UpgradeItem_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_UpgradeItem_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9224);
/* harmony import */ var _controls_UpgradeRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9370);
/* harmony import */ var _controls_UpgradeCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2853);
/* harmony import */ var _controls_UpgradeUpDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6559);
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9358);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(420);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_RuleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__, _controls_UpgradeRadio__WEBPACK_IMPORTED_MODULE_1__, _controls_UpgradeCheckbox__WEBPACK_IMPORTED_MODULE_2__, _controls_UpgradeUpDown__WEBPACK_IMPORTED_MODULE_3__]);
([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__, _controls_UpgradeRadio__WEBPACK_IMPORTED_MODULE_1__, _controls_UpgradeCheckbox__WEBPACK_IMPORTED_MODULE_2__, _controls_UpgradeUpDown__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function UpgradeItem({
  selectedUnit,
  upgrade,
  option,
  previewMode,
  label,
  controlType
}) {
  // Somehow display the count?
  const gainsGroups = option ? (0,_services_Helpers__WEBPACK_IMPORTED_MODULE_8__/* .groupBy */ .vM)(option.gains, "name") : null;
  const isValid = option ? _services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isValid */ .Z.isValid(selectedUnit, upgrade, option) : true;

  const control = (() => {
    switch (controlType) {
      case "check":
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_controls_UpgradeCheckbox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          selectedUnit: selectedUnit,
          upgrade: upgrade,
          option: option
        });

      case "radio":
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_controls_UpgradeRadio__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          selectedUnit: selectedUnit,
          upgrade: upgrade,
          option: option,
          isValid: isValid
        });

      case "updown":
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_controls_UpgradeUpDown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          selectedUnit: selectedUnit,
          upgrade: upgrade,
          option: option
        });
    }
  })();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "is-flex is-align-items-center mb-1",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "is-flex-grow-1 pr-2",
      children: gainsGroups ? Object.keys(gainsGroups).map((key, i) => {
        const group = gainsGroups[key];
        const e = group[0];
        const count = group.reduce((c, next) => c + (next.count || 1), 0);
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(UpgradeItemDisplay, {
          eqp: e,
          count: count,
          isValid: isValid
        }, key);
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
        style: {
          color: "rgba(0,0,0,0.8)"
        },
        children: label
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      style: {
        color: isValid ? null : "rgba(0,0,0,.5)"
      },
      children: [option !== null && option !== void 0 && option.cost ? `${option.cost}pts` : "Free", "\xA0"]
    }), !previewMode && control]
  });
}

function UpgradeItemDisplay({
  eqp,
  count,
  isValid
}) {
  const name = count > 1 ? pluralize__WEBPACK_IMPORTED_MODULE_4___default().plural(eqp.name || eqp.label) : eqp.name || eqp.label;
  const invalidColour = "rgba(0,0,0,.5)";
  const colour = isValid ? "#000000" : invalidColour;
  const subtextColour = isValid ? "#656565" : invalidColour;

  switch (eqp.type) {
    case "ArmyBookDefense":
    case "ArmyBookRule":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(UpgradeItemRule, {
        rule: eqp,
        colour: colour
      });

    case "ArmyBookWeapon":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(UpgradeItemWeapon, {
        weapon: eqp,
        name: name,
        count: count,
        colour: colour,
        subtextColour: subtextColour
      });

    case "ArmyBookItem":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(UpgradeItemItem, {
        item: eqp,
        name: name,
        count: count,
        colour: colour,
        subtextColour: subtextColour,
        isValid: isValid
      });

    default:
      {
        console.log("Cannot display upgrade: ", eqp);
      }
  }
}

function UpgradeItemRule(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
    style: {
      color: props.colour
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_RuleList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      specialRules: [props.rule]
    })
  });
}

function UpgradeItemWeapon(props) {
  const weapon = props.weapon;
  const range = weapon && weapon.range ? `${weapon.range}"` : null;
  const attacks = weapon && weapon.attacks ? `A${weapon.attacks}` : null;
  const weaponRules = weapon.specialRules;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [props.count > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      children: [props.count, "x "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      className: (_UpgradeItem_module_css__WEBPACK_IMPORTED_MODULE_9___default().upgradeName),
      style: {
        color: props.colour
      },
      children: [props.name, " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      className: (_UpgradeItem_module_css__WEBPACK_IMPORTED_MODULE_9___default().upgradeRules),
      style: {
        color: props.subtextColour
      },
      children: ["(", [range, attacks].filter(r => r).join(", ") + ((weaponRules === null || weaponRules === void 0 ? void 0 : weaponRules.length) > 0 ? ", " : ""), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_RuleList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        specialRules: weaponRules
      }), ")"]
    })]
  });
}

function UpgradeItemItem(props) {
  const {
    item,
    count,
    name,
    colour,
    subtextColour,
    isValid
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [count > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      children: [count, "x "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      className: (_UpgradeItem_module_css__WEBPACK_IMPORTED_MODULE_9___default().upgradeName),
      style: {
        color: colour
      },
      children: [name, " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      className: (_UpgradeItem_module_css__WEBPACK_IMPORTED_MODULE_9___default().upgradeRules),
      style: {
        color: subtextColour
      },
      children: ["(", item.content.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          children: i === 0 ? "" : ", "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(UpgradeItemDisplay, {
          eqp: c,
          count: count,
          isValid: isValid
        })]
      }, i)), ")"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Upgrades)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Upgrades_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4586);
/* harmony import */ var _styles_Upgrades_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Upgrades_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _UpgradeGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _UnitEquipmentTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8052);
/* harmony import */ var _components_RuleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6503);
/* harmony import */ var _services_UnitService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8449);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7622);
/* harmony import */ var _mui_icons_material_InfoOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6878);
/* harmony import */ var _mui_icons_material_InfoOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_InfoOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SpellsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9405);
/* harmony import */ var _components_CustomTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3987);
/* harmony import */ var _CampaignUpgrades__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3835);
/* harmony import */ var _components_UnitNotes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(717);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UpgradeGroup__WEBPACK_IMPORTED_MODULE_2__, _data_listSlice__WEBPACK_IMPORTED_MODULE_6__, _CampaignUpgrades__WEBPACK_IMPORTED_MODULE_10__, _components_UnitNotes__WEBPACK_IMPORTED_MODULE_11__]);
([_UpgradeGroup__WEBPACK_IMPORTED_MODULE_2__, _data_listSlice__WEBPACK_IMPORTED_MODULE_6__, _CampaignUpgrades__WEBPACK_IMPORTED_MODULE_10__, _components_UnitNotes__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Upgrades({
  mobile = false
}) {
  var _list$unitPreview;

  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const {
    gameSystem,
    loadedArmyBooks,
    rules
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const competitive = false;
  const previewMode = !!list.unitPreview;
  const selectedUnit = (_list$unitPreview = list.unitPreview) !== null && _list$unitPreview !== void 0 ? _list$unitPreview : _services_UnitService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getSelected */ .Z.getSelected(list);
  const army = selectedUnit && (loadedArmyBooks === null || loadedArmyBooks === void 0 ? void 0 : loadedArmyBooks.find(book => book.uid === selectedUnit.armyId));
  const armyRules = loadedArmyBooks.flatMap(x => x.specialRules);
  const ruleDefinitions = rules.concat(armyRules);

  const getUpgradeSet = id => army.upgradePackages.filter(s => s.uid === id)[0];

  const equipmentSpecialRules = selectedUnit && selectedUnit.equipment.filter(e => {
    var _e$specialRules;

    return !e.attacks && ((_e$specialRules = e.specialRules) === null || _e$specialRules === void 0 ? void 0 : _e$specialRules.length);
  }) // No weapons, and only equipment with special rules
  .reduce((value, e) => value.concat(e.specialRules), []); // Flatten array of special rules arrays

  const unitUpgradeRules = selectedUnit && _services_UnitService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAllUpgradedRules */ .Z.getAllUpgradedRules(selectedUnit);
  const specialRules = selectedUnit && (selectedUnit.specialRules || []).concat(equipmentSpecialRules).concat(unitUpgradeRules).filter(r => r.name !== "-");
  const isSkirmish = gameSystem !== "gf" && gameSystem !== "aof";
  const isHero = selectedUnit ? selectedUnit.specialRules.findIndex(sr => sr.name === "Hero") > -1 : false;

  const isPsychic = (() => {
    let result = false;

    for (let r of specialRules !== null && specialRules !== void 0 ? specialRules : []) {
      result ||= r.name === "Psychic" || r.name === "Wizard";
      const ruleDef = ruleDefinitions.find(rd => rd.name === r.name);
      console.log(r.name, ruleDef);
      const ruleDesc = ruleDef === null || ruleDef === void 0 ? void 0 : ruleDef.description;
      result ||= ruleDesc && /(?:Psychic|Wizard)\(\d\)/i.test(ruleDesc);
    }

    return result;
  })();

  const joinToUnit = e => {
    const joinToUnitId = e.target.value; // if I have any heroes joined to *me*, I need to point them to the new unit instead

    if (unitsWithAttachedHeroes.indexOf(selectedUnit.selectionId) !== -1) {
      let attachedHeroes = list.units.filter(u => u.specialRules.some(rule => rule.name === "Hero") && u.joinToUnit == selectedUnit.selectionId);
      attachedHeroes.forEach(u => {
        dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_6__/* .joinUnit */ .lN)({
          unitId: u.selectionId,
          joinToUnitId: joinToUnitId
        }));
      });
    }

    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_6__/* .joinUnit */ .lN)({
      unitId: selectedUnit.selectionId,
      joinToUnitId: joinToUnitId
    }));

    if (!!joinToUnitId) {
      dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_6__/* .moveUnit */ .Qh)({
        from: list.units.findIndex(t => t.selectionId == selectedUnit.selectionId),
        to: list.units.findIndex(t => t.selectionId == joinToUnitId)
      }));
    }
  };

  const originalUpgradeSets = ((selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.upgrades) || []).map(setId => getUpgradeSet(setId)).filter(s => !!s); // remove empty sets?

  const upgradeSets = isHero ? originalUpgradeSets : [...originalUpgradeSets.splice(1), originalUpgradeSets[0]].filter(s => !!s);

  const toggleCombined = () => {
    if (selectedUnit.combined) {
      if (selectedUnit.joinToUnit) {
        let me = selectedUnit.selectionId;
        dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_6__/* .selectUnit */ .WZ)(selectedUnit.joinToUnit));
        dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_6__/* .removeUnit */ .ZQ)(me));
      } else {
        let childId = list.units.find(u => u.combined && u.joinToUnit === selectedUnit.selectionId).selectionId;
        dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_6__/* .removeUnit */ .ZQ)(childId));
      }
    } else {
      dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_6__/* .addCombinedUnit */ .iQ)(selectedUnit.selectionId));
    }
  };

  const unitsWithAttachedHeroes = list.units.filter(u => u.specialRules.some(rule => rule.name === "Hero")).filter(u => u.joinToUnit).map(u => u.joinToUnit);

  const combineUnitControl = () => !previewMode && (!competitive || selectedUnit.size > 1) && !isHero && !isSkirmish && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormGroup, {
    className: "px-4 pt-2 is-flex-direction-row is-align-items-center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControlLabel, {
      control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
        checked: selectedUnit.combined,
        onClick: () => toggleCombined()
      }),
      label: "Combined Unit",
      className: "mr-2"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_CustomTooltip__WEBPACK_IMPORTED_MODULE_9__/* .CustomTooltip */ .W, {
      title: "When preparing your army you may merge units by deploying two copies of the same unit as a single big unit, as long as any upgrades that are applied to all models are bought for both.",
      arrow: true,
      enterTouchDelay: 0,
      leaveTouchDelay: 5000,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((_mui_icons_material_InfoOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {
        color: "primary"
      })
    })]
  });

  const joinCandidates = list.units.filter(u => (!competitive || u.size > 1) && !u.joinToUnit).filter(u => !competitive || unitsWithAttachedHeroes.indexOf(u.selectionId) === -1 || u.selectionId == (selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.joinToUnit));

  const joinToUnitControl = () => !previewMode && !isSkirmish && isHero && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormGroup, {
    className: "px-4 pt-2 pb-3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      fullWidth: true,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.InputLabel, {
        id: "demo-simple-select-label",
        sx: {
          zIndex: "unset"
        },
        children: "Join To Unit"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Select, {
        value: (selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.joinToUnit) || "",
        label: "Join To Unit",
        onChange: joinToUnit,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
          value: null,
          children: "None"
        }), joinCandidates.filter(t => t != selectedUnit).map((u, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
          value: u.selectionId,
          children: [u.customName || u.name, " [", u.size * (u.combined ? 2 : 1), "]"]
        }, index))]
      })]
    })
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: mobile ? (_styles_Upgrades_module_css__WEBPACK_IMPORTED_MODULE_13___default()["upgrade-panel-mobile"]) : (_styles_Upgrades_module_css__WEBPACK_IMPORTED_MODULE_13___default()["upgrade-panel"]),
    children: [selectedUnit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper, {
      square: true,
      elevation: 0,
      className: "pb-4",
      children: [combineUnitControl(), joinToUnitControl(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "px-4 pt-4 pb-2",
        children: ["Qua ", selectedUnit.quality, "+ Def ", selectedUnit.defense, "+"]
      }), (specialRules === null || specialRules === void 0 ? void 0 : specialRules.length) > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "px-4 pb-4",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_RuleList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          specialRules: specialRules
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "px-4 pb-4",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_UnitEquipmentTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          unit: selectedUnit,
          square: true
        })
      }), isPsychic && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "px-4 pt-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_SpellsTable__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          unit: selectedUnit
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "mx-4",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_UnitNotes__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          selectedUnit: selectedUnit
        })
      })]
    }), list.campaignMode && selectedUnit && !previewMode && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_CampaignUpgrades__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      unit: selectedUnit
    }), upgradeSets.map(pkg => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
      children: pkg.sections.filter(section => selectedUnit.disabledUpgradeSections.indexOf(section.uid) === -1).map((u, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_UpgradeGroup__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        unit: selectedUnit,
        upgrade: u,
        previewMode: previewMode
      }, u.uid))
    }, pkg.uid))]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpgradeCheckbox)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7622);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9224);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_listSlice__WEBPACK_IMPORTED_MODULE_2__, _services_UpgradeService__WEBPACK_IMPORTED_MODULE_3__]);
([_data_listSlice__WEBPACK_IMPORTED_MODULE_2__, _services_UpgradeService__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function UpgradeCheckbox({
  selectedUnit,
  upgrade,
  option
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  const isApplied = option => _services_UpgradeService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].isApplied */ .Z.isApplied(selectedUnit, upgrade, option);

  const isValid = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].isValid */ .Z.isValid(selectedUnit, upgrade, option);

  const handleCheck = option => {
    const applied = isApplied(option);

    if (!applied) {
      // Apply the selected upgrade
      dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_2__/* .applyUpgrade */ .Y5)({
        unitId: selectedUnit.selectionId,
        upgrade,
        option
      }));
    } else {
      // Deselecting the already selected option in the group
      dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_2__/* .removeUpgrade */ .CB)({
        unitId: selectedUnit.selectionId,
        upgrade,
        option
      }));
    }
  }; // #endregion


  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
    checked: isApplied(option),
    onClick: () => handleCheck(option),
    value: option.label,
    disabled: !isValid
  }); //return ({ upgrade.options.map((opt, i) => (<p></p>)});
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpgradeRadio)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7622);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9224);
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1569);
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_listSlice__WEBPACK_IMPORTED_MODULE_2__, _services_UpgradeService__WEBPACK_IMPORTED_MODULE_3__]);
([_data_listSlice__WEBPACK_IMPORTED_MODULE_2__, _services_UpgradeService__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UpgradeRadio({
  selectedUnit,
  upgrade,
  option,
  isValid
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  const isApplied = option => option ? _services_UpgradeService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].isApplied */ .Z.isApplied(selectedUnit, upgrade, option) // This option is applied
  : !upgrade.options.reduce((prev, current) => prev || isApplied(current), false); // Option is null, check no other options are applied


  const handleRadio = option => {
    const applied = option ? isApplied(option) : false;

    if (!applied) {
      // Remove any other selections from group
      for (let opt of upgrade.options) if (isApplied(opt)) dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_2__/* .removeUpgrade */ .CB)({
        unitId: selectedUnit.selectionId,
        upgrade,
        option: opt
      }));

      if (option) // Apply the selected upgrade
        dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_2__/* .applyUpgrade */ .Y5)({
          unitId: selectedUnit.selectionId,
          upgrade,
          option
        }));
    }
  }; // #endregion


  const thisApplied = isApplied(option);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Radio, {
    checked: thisApplied,
    onClick: () => handleRadio(option),
    disabled: !isValid && !thisApplied,
    name: object_hash__WEBPACK_IMPORTED_MODULE_4___default()(upgrade),
    color: "primary",
    value: (option === null || option === void 0 ? void 0 : option.label) || "None"
  }); //return ({ upgrade.options.map((opt, i) => (<p></p>)});
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpgradeUpDown)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9881);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7622);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9224);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_listSlice__WEBPACK_IMPORTED_MODULE_4__, _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__]);
([_data_listSlice__WEBPACK_IMPORTED_MODULE_4__, _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function UpgradeUpDown({
  selectedUnit,
  upgrade,
  option
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  const incrementUpgrade = (unit, upgrade, option) => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_4__/* .applyUpgrade */ .Y5)({
      unitId: unit.selectionId,
      upgrade,
      option
    }));
  };

  const decrementUpgrade = (unit, upgrade, option) => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_4__/* .removeUpgrade */ .CB)({
      unitId: unit.selectionId,
      upgrade,
      option
    }));
  };

  try {
    const countApplied = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].countApplied */ .Z.countApplied(selectedUnit, upgrade, option);
    const isValid = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].isValid */ .Z.isValid(selectedUnit, upgrade, option); // #endregion

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
        disabled: countApplied === 0,
        color: countApplied > 0 ? "primary" : "default",
        onClick: () => decrementUpgrade(selectedUnit, upgrade, option),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_1___default()), {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        style: {
          color: isValid ? "#000000" : "rgba(0,0,0,.5)"
        },
        children: countApplied
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
        disabled: !isValid,
        color: "primary",
        onClick: () => incrementUpgrade(selectedUnit, upgrade, option),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2___default()), {})
      })]
    });
  } catch (e) {
    console.log(selectedUnit);
    console.log(upgrade);
    console.log(option);
  } //return ({ upgrade.options.map((opt, i) => (<p></p>)});

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4586:
/***/ ((module) => {

// Exports
module.exports = {
	"upgrade-panel": "Upgrades_upgrade-panel__e_Xz2",
	"upgrade-panel-mobile": "Upgrades_upgrade-panel-mobile__hbg1a"
};


/***/ }),

/***/ 4451:
/***/ ((module) => {

// Exports
module.exports = {
	"upgradeName": "UpgradeItem_upgradeName___iRB1",
	"upgradeRules": "UpgradeItem_upgradeRules__CFyIv"
};


/***/ }),

/***/ 7830:
/***/ (() => {



/***/ }),

/***/ 6146:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 1598:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AssignmentOutlined");

/***/ }),

/***/ 1653:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Clear");

/***/ }),

/***/ 4173:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 6843:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ContentCopy");

/***/ }),

/***/ 9520:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Create");

/***/ }),

/***/ 8215:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/DashboardOutlined");

/***/ }),

/***/ 5365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/DeleteOutlined");

/***/ }),

/***/ 2489:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/EditOutlined");

/***/ }),

/***/ 8148:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 2681:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/FolderOpen");

/***/ }),

/***/ 3467:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 6878:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/InfoOutlined");

/***/ }),

/***/ 4845:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 9881:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/KeyboardArrowUp");

/***/ }),

/***/ 7190:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Link");

/***/ }),

/***/ 6952:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/MoreVert");

/***/ }),

/***/ 7505:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/NotificationImportant");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Visibility");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 7229:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 7133:
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 1569:
/***/ ((module) => {

"use strict";
module.exports = require("object-hash");

/***/ }),

/***/ 420:
/***/ ((module) => {

"use strict";
module.exports = require("pluralize");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 6666:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 1759:
/***/ ((module) => {

"use strict";
module.exports = require("react-spring-bottom-sheet");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5611:
/***/ ((module) => {

"use strict";
module.exports = import("nanoid");;

/***/ }),

/***/ 7261:
/***/ ((module) => {

"use strict";
module.exports = import("throttle-debounce");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [876,650,797], () => (__webpack_exec__(373)));
module.exports = __webpack_exports__;

})();