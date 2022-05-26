(() => {
var exports = {};
exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 4485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_ViewCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8024);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ViewAgenda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7234);
/* harmony import */ var _mui_icons_material_ViewAgenda__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ViewAgenda__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7235);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1653);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_PersistenceService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3744);
/* harmony import */ var _mui_icons_material_Print__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5375);
/* harmony import */ var _mui_icons_material_Print__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Print__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _views_ViewTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8841);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views_ViewCards__WEBPACK_IMPORTED_MODULE_3__, _services_PersistenceService__WEBPACK_IMPORTED_MODULE_10__, _views_ViewTable__WEBPACK_IMPORTED_MODULE_12__]);
([_views_ViewCards__WEBPACK_IMPORTED_MODULE_3__, _services_PersistenceService__WEBPACK_IMPORTED_MODULE_10__, _views_ViewTable__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function View() {
  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const defaultPrefs = {
    showFullRules: false,
    showPointCosts: true,
    combineSameUnits: true,
    showPsychic: listContainsPyschic(list)
  };
  const {
    0: preferences,
    1: setPreferenceState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPrefs);
  const {
    0: isCardView,
    1: setCardView
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: settingsOpen,
    1: setSettingsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const prefs = _services_PersistenceService__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getViewPreferences */ .Z.getViewPreferences() || {};
    setPreferenceState(prev => {
      var _showPsychic;

      return _objectSpread(_objectSpread(_objectSpread({}, prev), prefs), {}, {
        showPsychic: listContainsPyschic(list) || ((_showPsychic = prefs === null || prefs === void 0 ? void 0 : prefs.showPsychic) !== null && _showPsychic !== void 0 ? _showPsychic : false)
      });
    });
  }, []);

  function setPreferences(setFunc) {
    const newPrefs = setFunc(preferences);
    setPreferenceState(setFunc);
    _services_PersistenceService__WEBPACK_IMPORTED_MODULE_10__/* ["default"].saveViewPreferences */ .Z.saveViewPreferences(newPrefs);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {
      className: "no-print",
      elevation: 2,
      color: "primary",
      square: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.AppBar, {
        position: "static",
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
            size: "large",
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            sx: {
              mr: 2
            },
            onClick: () => router.back(),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5___default()), {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
            variant: "h6",
            component: "div",
            sx: {
              flexGrow: 1
            },
            children: [list.name, " \u2022 ", list.points, "pts"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
            className: "mr-4",
            size: "large",
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            onClick: () => window.print(),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_Print__WEBPACK_IMPORTED_MODULE_11___default()), {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
            size: "large",
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            onClick: () => setSettingsOpen(true),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6___default()), {})
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Drawer, {
      anchor: "right",
      open: settingsOpen,
      onClose: () => setSettingsOpen(false),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "is-flex p-4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("h3", {
          className: "is-size-4",
          style: {
            flex: 1
          },
          children: "Display Settings"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
          onClick: () => setSettingsOpen(false),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_9___default()), {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.List, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
            children: "Show Psychic/Spells"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Switch, {
            edge: "end",
            checked: preferences.showPsychic,
            onChange: () => setPreferences(prefs => _objectSpread(_objectSpread({}, prefs), {}, {
              showPsychic: !prefs.showPsychic
            }))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
            children: "Show full special rules text"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Switch, {
            edge: "end",
            checked: preferences.showFullRules,
            onChange: () => setPreferences(prefs => _objectSpread(_objectSpread({}, prefs), {}, {
              showFullRules: !prefs.showFullRules
            }))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
            children: "Show point costs"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Switch, {
            edge: "end",
            checked: preferences.showPointCosts,
            onChange: () => setPreferences(prefs => _objectSpread(_objectSpread({}, prefs), {}, {
              showPointCosts: !prefs.showPointCosts
            }))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
            children: "Combine Similar Units"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Switch, {
            edge: "end",
            checked: preferences.combineSameUnits,
            onChange: () => setPreferences(prefs => _objectSpread(_objectSpread({}, prefs), {}, {
              combineSameUnits: !prefs.combineSameUnits
            }))
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "is-flex px-4 py-2 no-print",
      style: {
        alignItems: "center"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
        className: "is-flex-grow-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: () => setCardView(!isCardView),
        children: [isCardView ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_8___default()), {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_icons_material_ViewAgenda__WEBPACK_IMPORTED_MODULE_7___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
          className: "pl-1 full-compact-text",
          children: isCardView ? "cards" : "list"
        })]
      })]
    }), isCardView ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_views_ViewCards__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      prefs: preferences
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_views_ViewTable__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      prefs: preferences
    })]
  });
} // TODO: extract these as global helper functions

function listContainsPyschic(list) {
  // TODO: get the special rule def from a well known location
  return listContainsSpecialRule(list, {
    key: "psychic",
    name: "Psychic",
    rating: "1"
  });
}

function listContainsSpecialRule(list, specialRule) {
  return list.units.some(({
    specialRules
  }) => Boolean(specialRules.find(({
    name
  }) => name === specialRule.name)));
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ViewCards)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2437);
/* harmony import */ var _styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _views_UnitEquipmentTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8052);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_RulesService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9605);
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9358);
/* harmony import */ var _services_UnitService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8449);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9224);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_RuleList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6503);
/* harmony import */ var _data_campaign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4631);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__, _data_campaign__WEBPACK_IMPORTED_MODULE_8__]);
([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__, _data_campaign__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function ViewCards({
  prefs
}) {
  var _list$units;

  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const army = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army);
  const gameRules = army.rules;
  const armyRules = army.loadedArmyBooks.flatMap(x => x.specialRules);
  const ruleDefinitions = gameRules.concat(armyRules);
  const traitDefinitions = (0,_data_campaign__WEBPACK_IMPORTED_MODULE_8__/* .getFlatTraitDefinitions */ .g)();
  const units = ((_list$units = list === null || list === void 0 ? void 0 : list.units) !== null && _list$units !== void 0 ? _list$units : []).map(u => (0,_services_Helpers__WEBPACK_IMPORTED_MODULE_10__/* .makeCopy */ .FM)(u));
  const usedRules = [];

  const unitAsKey = unit => {
    return {
      id: unit.id,
      customName: unit.customName,
      joinToUnit: unit.joinToUnit,
      upgrades: unit.selectedUpgrades.map(x => ({
        sectionId: x.upgrade.uid,
        optionId: x.option.id
      })),
      loadout: unit.loadout.map(x => ({
        id: x.id,
        count: x.count
      }))
    };
  };

  const getAttachedUnit = u => units.find(x => x.joinToUnit === u.selectionId && x.combined);

  const viewUnits = units.filter(u => !u.combined || !u.joinToUnit).map(u => u.combined ? _services_UnitService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].mergeCombinedUnit */ .Z.mergeCombinedUnit(u, getAttachedUnit(u)) : u);
  console.log(viewUnits);

  const unitGroups = lodash__WEBPACK_IMPORTED_MODULE_6___default().groupBy(viewUnits, u => JSON.stringify(unitAsKey(u)));

  const getUnitCard = (unit, unitCount) => {
    const rules = getRules(unit);
    usedRules.push(...rules.keys);
    usedRules.push(...rules.weaponRules.map(r => r.name));
    const originalUnit = units.find(x => x.selectionId === unit.selectionId);
    const attachedUnit = units.find(x => x.joinToUnit === unit.selectionId && x.id === unit.id);
    const originalUnitCost = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(originalUnit);
    const attachedUnitCost = attachedUnit ? _services_UpgradeService__WEBPACK_IMPORTED_MODULE_5__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(attachedUnit) : 0;
    const attachedTo = units.find(x => x.selectionId === unit.joinToUnit);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(UnitCard, {
      rules: rules,
      unit: unit,
      attachedTo: attachedTo,
      pointCost: originalUnitCost + attachedUnitCost,
      count: unitCount,
      prefs: prefs,
      ruleDefinitions: ruleDefinitions,
      traitDefinitions: traitDefinitions
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "mx-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_11___default().grid),
      children: [prefs.combineSameUnits ? Object.values(unitGroups).map((grp, i) => {
        const unit = grp[0];
        const count = grp.length;
        return getUnitCard(unit, count);
      }) : units.map((unit, i) => getUnitCard(unit, 1)), prefs.showPsychic && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(PsychicCard, {
        army: army
      })]
    }), !prefs.showFullRules && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(SpecialRulesCard, {
      usedRules: usedRules,
      ruleDefinitions: ruleDefinitions
    })]
  });
}

function UnitCard({
  unit,
  attachedTo,
  pointCost,
  count,
  prefs,
  ruleDefinitions,
  traitDefinitions
}) {
  var _unit$traits;

  const toughness = toughFromUnit(unit);
  const unitRules = unit.specialRules.filter(r => r.name != "-").concat(_services_UnitService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getUpgradeRules */ .Z.getUpgradeRules(unit));
  const items = unit.loadout.filter(x => x.type === "ArmyBookItem");

  const stats = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "is-flex mb-3",
    style: {
      justifyContent: "center"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_11___default().profileStat2),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
        children: "Quality"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "stat-break"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: [unit.quality, "+"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_11___default().profileStat2),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
        children: "Defense"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "stat-break"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: [unit.defense, "+"]
      })]
    }), toughness > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_11___default().profileStat2),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
        children: "Tough"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "stat-break"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
        children: toughness
      })]
    })]
  });

  const ruleGroups = lodash__WEBPACK_IMPORTED_MODULE_6___default().groupBy(unitRules, x => x.name);

  const ruleKeys = Object.keys(ruleGroups);

  const itemGroups = lodash__WEBPACK_IMPORTED_MODULE_6___default().groupBy(items, x => x.name);

  const itemKeys = Object.keys(itemGroups);

  const rulesSection = (unitRules === null || unitRules === void 0 ? void 0 : unitRules.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "px-2 mb-2",
    style: {
      fontSize: "14px"
    },
    children: [ruleKeys.map((key, index) => {
      const group = ruleGroups[key];
      if (!prefs.showFullRules) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
        children: [index === 0 ? "" : ", ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_RuleList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          specialRules: group
        })]
      }, index);
      const rule = group[0];
      const rating = group.reduce((total, next) => next.rating ? total + parseInt(next.rating) : total, 0);
      const ruleDefinition = ruleDefinitions.filter(r => /(.+?)(?:\(|$)/.exec(r.name)[0] === rule.name)[0];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
          style: {
            fontWeight: 600
          },
          children: [_services_RulesService__WEBPACK_IMPORTED_MODULE_12__/* ["default"].displayName */ .Z.displayName(_objectSpread(_objectSpread({}, rule), {}, {
            rating
          }), count), " -"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
          children: [" ", (ruleDefinition === null || ruleDefinition === void 0 ? void 0 : ruleDefinition.description) || ""]
        })]
      }, index);
    }), itemKeys.map((key, index) => {
      var _unit$selectedUpgrade;

      const group = itemGroups[key];
      const item = group[0];
      const count = group.reduce((total, x) => total + (x.count || 1), 0);
      const itemRules = item.content.filter(x => x.type === "ArmyBookRule" || x.type === "ArmyBookDefense");
      const itemHasRules = itemRules.length > 0;
      const upgrade = (_unit$selectedUpgrade = unit.selectedUpgrades.find(x => x.option.gains.some(y => y.name === item.name))) === null || _unit$selectedUpgrade === void 0 ? void 0 : _unit$selectedUpgrade.upgrade;
      const itemAffectsAll = (upgrade === null || upgrade === void 0 ? void 0 : upgrade.affects) === "all";
      const hasStackableRule = itemRules.some(x => x.name === "Impact");
      const hideCount = itemAffectsAll && !hasStackableRule;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
        children: [", ", count > 1 && !hideCount && `${count}x `, item.name, itemHasRules && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
            children: "("
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_RuleList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            specialRules: itemRules
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
            children: ")"
          })]
        })]
      }, index);
    })]
  });

  const traitsSection = ((_unit$traits = unit.traits) === null || _unit$traits === void 0 ? void 0 : _unit$traits.length) > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
    className: "px-2 mb-4",
    style: {
      fontSize: "14px"
    },
    children: unit.traits.map((trait, index) => {
      const traitDef = traitDefinitions.find(x => x.name === trait);
      if (!prefs.showFullRules) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
        children: [index === 0 ? "" : ", ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_RuleList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          specialRules: [traitDef]
        })]
      }, index);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
          style: {
            fontWeight: 600
          },
          children: [traitDef.name, " -"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
          children: [" ", traitDef.description]
        })]
      }, index);
    })
  });

  const joinedUnitText = attachedTo && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
      className: "mb-2",
      style: {
        textAlign: "center"
      },
      children: ["Joined to ", attachedTo.customName || attachedTo.name]
    })
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ViewCard, {
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [count > 1 ? `${count}x ` : "", unit.customName || unit.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
        className: "",
        style: {
          color: "#666666"
        },
        children: [" ", "[", unit.size, "]"]
      }), prefs.showPointCosts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
        className: "is-size-6 ml-1",
        style: {
          color: "#666666"
        },
        children: ["- ", pointCost, "pts"]
      })]
    }),
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [ false && 0, stats, rulesSection, traitsSection, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "mt-4",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_views_UnitEquipmentTable__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          unit: unit,
          hideEquipment: true,
          square: true
        })
      })]
    })
  });
}

function PsychicCard({
  army
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: army.loadedArmyBooks.map(book => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ViewCard, {
      title: "Psychic/Spells",
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("hr", {
          className: "my-0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
          square: true,
          elevation: 0,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: "px-2 my-2",
            children: book.spells.map(spell => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
                style: {
                  fontWeight: 600
                },
                children: [spell.name, " (", spell.threshold, "+):", " "]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                children: spell.effect
              })]
            }, spell.id))
          })
        })]
      })
    }))
  });
}

function SpecialRulesCard({
  usedRules,
  ruleDefinitions
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ViewCard, {
    title: "Special Rules",
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("hr", {
        className: "my-0"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
        square: true,
        elevation: 0,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: `px-2 my-2 ${(_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_11___default().grid)} has-text-left`,
          children: lodash__WEBPACK_IMPORTED_MODULE_6___default().uniq(usedRules).sort().map((r, i) => {
            var _ruleDefinitions$find;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
              style: {
                breakInside: "avoid"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
                style: {
                  fontWeight: 600
                },
                children: [r, " - "]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                children: (_ruleDefinitions$find = ruleDefinitions.find(t => t.name === r)) === null || _ruleDefinitions$find === void 0 ? void 0 : _ruleDefinitions$find.description
              })]
            }, i);
          })
        })
      })]
    })
  });
}

function ViewCard({
  title,
  content
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
    elevation: 1,
    className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_11___default().card),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("h3", {
        className: "is-size-5 my-2",
        style: {
          fontWeight: 600,
          textAlign: "center"
        },
        children: title
      }), content]
    })
  });
}

function getRules(unit) {
  const unitRules = unit.specialRules.filter(r => r.name != "-");
  const rulesFromUpgrades = _services_UnitService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAllUpgradedRules */ .Z.getAllUpgradedRules(unit);
  const weaponRules = _services_UnitService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAllEquipment */ .Z.getAllEquipment(unit).filter(e => e.attacks > 0).flatMap(e => e.specialRules);
  const rules = unitRules.concat(rulesFromUpgrades).filter(r => !!r && r.name != "-");
  const ruleGroups = (0,_services_Helpers__WEBPACK_IMPORTED_MODULE_10__/* .groupBy */ .vM)(rules, "name");
  const ruleKeys = Object.keys(ruleGroups);
  return {
    keys: ruleKeys,
    groups: ruleGroups,
    weaponRules
  };
}

function toughFromUnit(unit) {
  let baseTough = 0;
  baseTough += unit.specialRules.reduce((tough, rule) => {
    if (rule.name === "Tough") {
      tough += parseInt(rule.rating);
    }

    return tough;
  }, 0);
  baseTough += _services_UnitService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAllUpgradedRules */ .Z.getAllUpgradedRules(unit).reduce((tough, {
    name,
    rating
  }) => {
    if (name === "Tough") {
      tough += parseInt(rating);
    }

    return tough;
  }, 0);
  return baseTough || 1;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ViewTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2437);
/* harmony import */ var _styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_RulesService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9605);
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9358);
/* harmony import */ var _services_UnitService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8449);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9224);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_RuleList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6503);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_4__]);
_services_UpgradeService__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function ViewTable({
  prefs
}) {
  var _list$units;

  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const army = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army);
  const {
    0: maxCellWidth,
    1: setMaxCellWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const gameRules = army.rules;
  const armyRules = army.loadedArmyBooks.flatMap(x => x.specialRules);
  const ruleDefinitions = gameRules.concat(armyRules);
  const units = ((_list$units = list === null || list === void 0 ? void 0 : list.units) !== null && _list$units !== void 0 ? _list$units : []).map(u => (0,_services_Helpers__WEBPACK_IMPORTED_MODULE_8__/* .makeCopy */ .FM)(u));

  for (let unit of units) {
    delete unit.selectionId;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var maxCellWidth = Array.from(document.querySelectorAll(".weapon-name-cell")).reduce((width, elem) => Math.max(width, elem.getBoundingClientRect().width), 0);
    setMaxCellWidth(maxCellWidth);
  }); // useEffect(() => {
  //   setTimeout(() => {
  //     maxCellWidth = Array.from(document.querySelectorAll(".weapon-name-cell")).reduce(
  //       (width, elem) => Math.max(width, elem.getBoundingClientRect().width),
  //       0
  //     );
  //     console.log("maxCellWidth", maxCellWidth);
  //   }, 100);
  // }, [maxCellWidth]);

  const usedRules = [];

  const unitAsKey = unit => {
    return {
      id: unit.id,
      upgrades: unit.selectedUpgrades.map(x => ({
        sectionId: x.upgrade.uid,
        optionId: x.option.id
      }))
    };
  };

  const unitGroups = lodash__WEBPACK_IMPORTED_MODULE_5___default().groupBy(units, u => JSON.stringify(unitAsKey(u)));

  const getUnitRow = (unit, unitCount) => {
    const rules = getRules(unit);
    usedRules.push(...rules.keys);
    usedRules.push(...rules.weaponRules.map(r => r.name));
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(UnitRow, {
      rules: rules,
      unit: unit,
      count: unitCount,
      prefs: prefs,
      ruleDefinitions: ruleDefinitions,
      maxCellWidth: maxCellWidth
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {
        size: "small",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
              style: {
                fontWeight: "600"
              },
              children: "Unit"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
              style: {
                fontWeight: "600"
              },
              children: "Stats"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
              style: {
                fontWeight: "600"
              },
              children: "Loadout"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
              style: {
                fontWeight: "600"
              },
              children: "Rules"
            })]
          })
        }), prefs.combineSameUnits ? Object.values(unitGroups).map((grp, i) => {
          const unit = grp[0];
          const count = grp.length;
          return getUnitRow(unit, count);
        }) : units.map((unit, i) => {
          return getUnitRow(unit, 1);
        })]
      })
    }), prefs.showPsychic && army.loadedArmyBooks.map(book => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: (_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
        elevation: 1,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "card-body",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
              className: "is-size-4 my-2",
              style: {
                fontWeight: 500,
                textAlign: "center"
              },
              children: "Psychic/Spells"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {
              className: "my-0"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
              square: true,
              elevation: 0,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                className: "px-2 my-2",
                children: book.spells.map(spell => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    style: {
                      fontWeight: 600
                    },
                    children: [spell.name, " (", spell.threshold, "+):", " "]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    children: spell.effect
                  })]
                }, spell.id))
              })
            })]
          })
        })
      })
    }, book.uid)), !prefs.showFullRules && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: `mx-4 ${(_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_9___default().card)}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
        elevation: 1,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "card-body",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
              className: "is-size-4 my-2",
              style: {
                fontWeight: 500,
                textAlign: "center"
              },
              children: "Special Rules"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {
              className: "my-0"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
              square: true,
              elevation: 0,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                className: `px-2 my-2 ${(_styles_Cards_module_css__WEBPACK_IMPORTED_MODULE_9___default().grid)} has-text-left`,
                children: lodash__WEBPACK_IMPORTED_MODULE_5___default().uniq(usedRules).sort().map((r, i) => {
                  var _ruleDefinitions$find;

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                    style: {
                      breakInside: "avoid"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                      style: {
                        fontWeight: 600
                      },
                      children: [r, " - "]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                      children: (_ruleDefinitions$find = ruleDefinitions.find(t => t.name === r)) === null || _ruleDefinitions$find === void 0 ? void 0 : _ruleDefinitions$find.description
                    })]
                  }, i);
                })
              })
            })]
          })
        })
      })
    })]
  });
}

function UnitRow({
  unit,
  rules,
  count,
  prefs,
  ruleDefinitions,
  maxCellWidth
}) {
  const ruleKeys = rules.keys;
  const ruleGroups = rules.groups; // usedRules.push(...ruleKeys);
  // usedRules.push(...weaponRules.map((r) => r.name));
  // Sort rules alphabetically

  ruleKeys.sort((a, b) => a.localeCompare(b));

  const stats = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
          style: {
            paddingRight: "8px"
          },
          children: "Quality "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
          style: {
            fontWeight: "600"
          },
          children: [" ", unit.quality, "+"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
          style: {
            paddingRight: "8px"
          },
          children: "Defense"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
          style: {
            fontWeight: "600"
          },
          children: [" ", unit.defense, "+"]
        })]
      })]
    })
  });

  const cellStyle = {
    padding: "2px 4px"
  };

  const loadout = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("table", {
      children: unit.loadout.map((weapon, i) => {
        var _weapon$specialRules;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
            className: "weapon-name-cell",
            style: _objectSpread(_objectSpread({}, cellStyle), {}, {
              paddingRight: "12px",
              fontWeight: "600",
              width: maxCellWidth ? maxCellWidth + "px" : null
            }),
            children: [weapon.count, "x ", weapon.name]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
            style: cellStyle,
            children: weapon.range ? weapon.range + '"' : "-"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
            style: cellStyle,
            children: ["A", weapon.attacks]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
            style: cellStyle,
            children: (_weapon$specialRules = weapon.specialRules) === null || _weapon$specialRules === void 0 ? void 0 : _weapon$specialRules.map(r => _services_RulesService__WEBPACK_IMPORTED_MODULE_10__/* ["default"].displayName */ .Z.displayName(r)).join(", ")
          })]
        }, i);
      })
    })
  });

  const rulesSection = (ruleKeys === null || ruleKeys === void 0 ? void 0 : ruleKeys.length) > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
    children: ruleKeys.map((key, index) => {
      const group = ruleGroups[key];
      if (!prefs.showFullRules) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
        children: [index === 0 ? "" : ", ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_RuleList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          specialRules: group
        })]
      }, index);
      const rule = group[0];
      const rating = group.reduce((total, next) => next.rating ? total + parseInt(next.rating) : total, 0);
      const ruleDefinition = ruleDefinitions.filter(r => /(.+?)(?:\(|$)/.exec(r.name)[0] === rule.name)[0];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          style: {
            fontWeight: 600
          },
          children: [_services_RulesService__WEBPACK_IMPORTED_MODULE_10__/* ["default"].displayName */ .Z.displayName(_objectSpread(_objectSpread({}, rule), {}, {
            rating
          }), count), " -"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          children: [" ", (ruleDefinition === null || ruleDefinition === void 0 ? void 0 : ruleDefinition.description) || ""]
        })]
      }, index);
    })
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
      style: {
        fontWeight: "600",
        fontSize: "16px"
      },
      children: [count > 1 ? `${count}x ` : "", unit.customName || unit.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
        className: "",
        style: {
          color: "#666666"
        },
        children: [" ", "[", unit.size, "]"]
      }), prefs.showPointCosts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
        className: "ml-1",
        style: {
          fontSize: "14px",
          color: "#666666"
        },
        children: ["- ", _services_UpgradeService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(unit), "pts"]
      })]
    }), stats, loadout, rulesSection]
  });
}

function getRules(unit) {
  const unitRules = (unit.specialRules || []).filter(r => r.name != "-");
  const rulesFromUpgrades = _services_UnitService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAllUpgradedRules */ .Z.getAllUpgradedRules(unit);
  const weaponRules = _services_UnitService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAllEquipment */ .Z.getAllEquipment(unit).filter(e => e.attacks > 0).flatMap(e => e.specialRules);
  const rules = unitRules.concat(rulesFromUpgrades).filter(r => !!r && r.name != "-");
  const ruleGroups = (0,_services_Helpers__WEBPACK_IMPORTED_MODULE_8__/* .groupBy */ .vM)(rules, "name");
  const ruleKeys = Object.keys(ruleGroups);
  return {
    keys: ruleKeys,
    groups: ruleGroups,
    weaponRules
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2437:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "Cards_grid__zA87S",
	"card": "Cards_card__Igz_I",
	"profileStat": "Cards_profileStat__xPPHR",
	"profileStat2": "Cards_profileStat2__h6jqH"
};


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

/***/ 7235:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 5375:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Print");

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 7234:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ViewAgenda");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [876,650,797], () => (__webpack_exec__(4485)));
module.exports = __webpack_exports__;

})();