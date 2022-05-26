"use strict";
exports.id = 876;
exports.ids = [876];
exports.modules = {

/***/ 5876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ty": () => (/* binding */ getGameRules),
/* harmony export */   "V4": () => (/* binding */ getArmyBooks),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ZT": () => (/* binding */ unloadFaction),
/* harmony export */   "dn": () => (/* binding */ unloadArmyBook),
/* harmony export */   "nW": () => (/* binding */ resetLoadedBooks),
/* harmony export */   "zK": () => (/* binding */ getArmyBookData),
/* harmony export */   "zi": () => (/* binding */ setGameSystem)
/* harmony export */ });
/* unused harmony exports armySlice, setArmyFile */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9358);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9224);
/* harmony import */ var _services_WebappApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__]);
_services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {
  loaded: false,
  loadingArmyData: false,
  armyFile: null,
  gameSystem: null,
  //data: null,
  rules: [],
  armyBooks: [],
  loadedArmyBooks: [],
  selectedFactions: []
};
const getArmyBooks = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("army/getArmyBooks", async gameSystem => {
  // AF to Web Companion game type mapping
  const slug = (0,_services_Helpers__WEBPACK_IMPORTED_MODULE_3__/* .gameSystemToSlug */ .$J)(gameSystem);
  const apiArmyBooks = await _services_WebappApiService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getArmyBooks */ .Z.getArmyBooks(slug);
  console.log("Loaded army books", apiArmyBooks);
  return apiArmyBooks.filter(book => book.official && book.isLive);
});
const getArmyBookData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("army/getArmyBookData", async payload => {
  const armyBookData = await _services_WebappApiService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getArmyBookData */ .Z.getArmyBookData(payload.armyUid, payload.gameSystem);
  console.log("Loaded army data", armyBookData); //payload.callback(armyBookData);

  return {
    armyBookData,
    reset: payload.reset
  };
});
const getGameRules = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("army/getGameRules", async gameSystem => {
  // AF to Web Companion game type mapping
  const slug = (0,_services_Helpers__WEBPACK_IMPORTED_MODULE_3__/* .gameSystemToSlug */ .$J)(gameSystem);
  const rules = await _services_WebappApiService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getGameRules */ .Z.getGameRules(slug);
  return rules.map(rule => ({
    name: rule.name,
    description: rule.description
  }));
  ;
});
const armySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'army',
  initialState: initialState,
  reducers: {
    resetLoadedBooks(state) {
      state.loadedArmyBooks = [];
      state.selectedFactions = [];
    },

    setGameSystem: (state, action) => {
      const gameSystem = action.payload;
      _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].gameSystem */ .Z.gameSystem = gameSystem;
      return _objectSpread(_objectSpread({}, state), {}, {
        gameSystem: action.payload,
        armyBooks: []
      });
    },
    setArmyFile: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        armyFile: action.payload
      });
    },

    unloadFaction(state, action) {
      const factionIndex = state.selectedFactions.findIndex(f => f === action.payload);
      state.selectedFactions.splice(factionIndex, 1);
      state.loadedArmyBooks = state.loadedArmyBooks.filter(book => book.factionName !== action.payload);
    },

    unloadArmyBook(state, action) {
      const uid = action.payload;
      const index = state.loadedArmyBooks.findIndex(book => book.uid === uid);
      state.loadedArmyBooks.splice(index, 1);
    }

  },

  extraReducers(builder) {
    builder.addCase(getArmyBooks.fulfilled, (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        armyBooks: action.payload
      });
    });
    builder.addCase(getGameRules.fulfilled, (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        rules: action.payload
      });
    });
    builder.addCase(getArmyBookData.pending, (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingArmyData: true
      });
    });
    builder.addCase(getArmyBookData.fulfilled, (state, action) => {
      const {
        armyBookData,
        reset
      } = action.payload;
      state.loadingArmyData = false;
      state.loaded = true;

      if (armyBookData.factionName && !state.selectedFactions.some(x => x === armyBookData.factionName)) {
        state.selectedFactions.push(armyBookData.factionName);
      }

      if (reset) {
        state.loadedArmyBooks = [armyBookData];
        return;
      }

      const existingIndex = state.loadedArmyBooks.findIndex(book => book.uid === armyBookData.uid);
      const alreadyExists = existingIndex >= 0;

      if (alreadyExists) {
        state.loadedArmyBooks.splice(existingIndex, 1, armyBookData);
      } else {
        state.loadedArmyBooks.push(armyBookData);
      }
    });
  }

}); // Action creators are generated for each case reducer function

const {
  resetLoadedBooks,
  setGameSystem,
  setArmyFile,
  unloadFaction,
  unloadArmyBook
} = armySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (armySlice.reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4529:
/***/ (() => {



Array.prototype.contains = function (predicate) {
  // code to remove "o"
  return this.findIndex(predicate) > -1;
};

Array.prototype.findLast = function (predicate) {
  const matches = this.filter(predicate);
  return matches[matches.length - 1];
};

Array.prototype.findLastIndex = function (predicate) {
  let l = this.length;

  while (l--) {
    if (predicate(this[l])) return l;
  }

  return -1;
};

/***/ }),

/***/ 9674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EquipmentService)
/* harmony export */ });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RulesService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9605);


class EquipmentService {
  /**
   * Compares an equipment with a search term.
   * @param hasItem The equipment to test against.
   * @param searchItem The term we are seeking a comparison for.
   * @returns true if the equipment is a match, false otherwise.
   */
  static compareEquipment(hasItem, searchItem) {
    // "replace [nothing] -> always ok"
    if (!searchItem) return true;
    const find = pluralize__WEBPACK_IMPORTED_MODULE_0___default().singular((searchItem === null || searchItem === void 0 ? void 0 : searchItem.toLowerCase().trim()) || "");
    if (["equipment"].includes(find)) return !!hasItem;

    if (["melee weapon"].includes(find)) {
      return (hasItem === null || hasItem === void 0 ? void 0 : hasItem.type) === "ArmyBookWeapon" && hasItem.range == 0;
    }

    if (["gun", "ranged weapon"].includes(find)) {
      return (hasItem === null || hasItem === void 0 ? void 0 : hasItem.type) === "ArmyBookWeapon" && hasItem.range > 0;
    }

    if (["weapon"].includes(find)) {
      return (hasItem === null || hasItem === void 0 ? void 0 : hasItem.type) === "ArmyBookWeapon";
    } // otherwise match by name


    return this.compareEquipmentNames(hasItem.name, find) || this.compareEquipmentNames(hasItem.label, find);
  }

  static compareEquipmentNames(hasItem, searchItem) {
    let find = searchItem === null || searchItem === void 0 ? void 0 : searchItem.toLowerCase().trim();
    return pluralize__WEBPACK_IMPORTED_MODULE_0___default().singular((hasItem === null || hasItem === void 0 ? void 0 : hasItem.toLowerCase()) || "") === pluralize__WEBPACK_IMPORTED_MODULE_0___default().singular(find || "");
  }

  static find(list, match) {
    return list.filter(e => this.compareEquipment(e, match));
  }

  static findLast(list, match) {
    const matches = list.filter(e => this.compareEquipment(e, match));
    return matches[matches.length - 1];
  }

  static findLastIndex(array, match) {
    let l = array.length;

    while (l--) {
      if (this.compareEquipment(array[l], match)) return l;
    }

    return -1;
  }

  static getAP(e) {
    if (!e || !e.specialRules) return null;
    const ap = e.specialRules.find(r => r.name === "AP");
    return ap ? parseInt(ap.rating) : null;
  }

  static formatString(eqp) {
    var _eqp$specialRules$map, _eqp$specialRules;

    const parts = [];
    const name = eqp.count > 1 ? pluralize__WEBPACK_IMPORTED_MODULE_0___default().plural(eqp.name) : eqp.name;
    const attacks = eqp.attacks ? `A${eqp.attacks}` : null;

    if (attacks) {
      const weapon = eqp;
      parts.push(weapon.range ? `${weapon.range}"` : null);
    }

    parts.push(attacks);
    const rules = (_eqp$specialRules$map = (_eqp$specialRules = eqp.specialRules) === null || _eqp$specialRules === void 0 ? void 0 : _eqp$specialRules.map(r => _RulesService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].displayName */ .Z.displayName(r))) !== null && _eqp$specialRules$map !== void 0 ? _eqp$specialRules$map : [];
    parts.push(...rules);

    if (eqp.type === "ArmyBookItem") {
      const item = eqp;
      parts.push(...item.content.map(c => this.formatString(c)));
    }

    const displayParts = parts.filter(m => !!m);
    return displayParts.length > 0 ? `${name} (${displayParts.join(", ")})` : name; // comma separated list
  }

  static getStringParts(eqp, count) {
    const name = count > 1 ? pluralize__WEBPACK_IMPORTED_MODULE_0___default().plural(eqp.name || eqp.label) : eqp.name || eqp.label;
    const weapon = eqp.type === "ArmyBookWeapon" ? eqp : null;
    const item = eqp.type === "ArmyBookItem" ? eqp : null;
    const rule = eqp.type === "ArmyBookItem" ? eqp : null;
    const range = weapon && weapon.range ? `${weapon.range}"` : null;
    const attacks = weapon && weapon.attacks ? `A${weapon.attacks}` : null;
    const specialRules = (weapon === null || weapon === void 0 ? void 0 : weapon.specialRules) || (item === null || item === void 0 ? void 0 : item.content.filter(c => c.type === "ArmyBookRule" || c.type === "ArmyBookDefense")) || [];
    return {
      name: name,
      rules: [range, attacks] // Range, then attacks
      .concat(specialRules.map(r => _RulesService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].displayName */ .Z.displayName(r))) // then special rules
      .filter(m => !!m) // Remove empty/null entries
      .join(", ") // csv

    };
  }

}

/***/ }),

/***/ 9358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$J": () => (/* binding */ gameSystemToSlug),
/* harmony export */   "FM": () => (/* binding */ makeCopy),
/* harmony export */   "Q5": () => (/* binding */ gameSystemToEnum),
/* harmony export */   "kh": () => (/* binding */ tryBack),
/* harmony export */   "vM": () => (/* binding */ groupBy)
/* harmony export */ });
/* unused harmony exports distinct, logState */
//import _ from "lodash";
function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
;
function distinct(arr, property) {
  const results = [];

  for (let item of arr) if (!results.some(r => property ? r[property] === item[property] : r === item)) results.push(item);

  return results;
}
;
function logState(msg, state) {
  console.log(msg, makeCopy(state));
}
function makeCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function gameSystemToSlug(gameSystem) {
  switch (gameSystem) {
    case "gf":
      return "grimdark-future";

    case "gff":
      return "grimdark-future-firefight";

    case "aof":
      return "age-of-fantasy";

    case "aofs":
      return "age-of-fantasy-skirmish";

    case "aofr":
      return "age-of-fantasy-regiments";
  }
}
function gameSystemToEnum(gameSystem) {
  switch (gameSystem) {
    case "gf":
      return 2;

    case "gff":
      return 3;

    case "aof":
      return 4;

    case "aofs":
      return 5;

    case "aofr":
      return 6;
  }
}
function tryBack(fallback) {
  if (history.length < 2) {
    fallback();
  } else {
    history.back();
  }
}

/***/ }),

/***/ 9605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RulesService)
/* harmony export */ });
class RulesService {
  static displayName(rule, count = null) {
    return (count > 1 ? `${count}x ` : "") + rule.name + (!(rule.rating == null || rule.rating == "") ? `(${(rule.name === "Defense" || rule.modify ? "+" : "") + rule.rating})` : "") + (rule.condition ? ` ${rule.condition}` : "");
  }

}

/***/ }),

/***/ 8449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UnitService)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EquipmentService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9674);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class UnitService {
  static getSelected(list) {
    return list.selectedUnitId === null || list.selectedUnitId === undefined ? null : list.units.filter(u => u.selectionId === list.selectedUnitId)[0];
  }

  static getAllEquipment(unit) {
    const items = unit.loadout.filter(e => e.type === "ArmyBookItem");
    const itemContent = items.flatMap(i => i.content);
    return unit.loadout.concat(itemContent);
  }

  static getAllUpgrades(unit, excludeModels) {
    return unit.selectedUpgrades.map(x => x.option).filter(u => excludeModels ? !u.isModel : true).reduce((value, option) => value.concat(option.gains), []);
  }

  static getUpgradeRules(unit) {
    return this.getAllUpgrades(unit, true).filter(x => x.type === "ArmyBookRule");
  }

  static getUpgradeItems(unit) {
    return this.getAllUpgrades(unit, true).filter(x => x.type === "ArmyBookItem");
  }

  static getAllUpgradedRules(unit) {
    const upgrades = this.getAllUpgrades(unit, true);
    const rules = upgrades.filter(u => u.type === "ArmyBookRule") || [];
    const rulesFromitems = upgrades.filter(u => u.type === "ArmyBookItem").reduce((value, u) => value.concat(u.content.filter(c => c.type === "ArmyBookRule" || c.type === "ArmyBookDefense")), []) || [];
    return rules.concat(rulesFromitems);
  }

  static getAllUpgradeWeapons(unit) {
    const isWeapon = u => u.type === "ArmyBookWeapon";

    const itemWeapons = this.getAllUpgradeItems(unit).reduce((value, i) => value.concat(i.content.filter(isWeapon)), []);
    const all = this.getAllUpgrades(unit, false).filter(isWeapon).concat(itemWeapons);
    return all;
  }

  static getAllUpgradeItems(unit) {
    return this.getAllUpgrades(unit, false).filter(u => u.type === "ArmyBookItem");
  }

  static getSize(unit) {
    const extraModelCount = unit.selectedUpgrades.map(x => x.option).filter(u => u.isModel).length;
    return unit.size + extraModelCount;
  }

  static createUnitFromDefinition(unit) {
    return _objectSpread(_objectSpread({}, unit), {}, {
      selectionId: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.nanoid)(5),
      selectedUpgrades: [],
      combined: false,
      joinToUnit: null,
      equipment: unit.equipment.map(eqp => _objectSpread(_objectSpread({}, eqp), {}, {
        count: eqp.count || unit.size // Add count to unit size if not already present

      })),
      loadout: [],
      xp: 0,
      traits: [],
      notes: null
    });
  }

  static getAttachedUnits(list, unit) {
    return list.units.filter(u => u.joinToUnit === unit.selectionId);
  }

  static getChildren(list, unit) {
    return list.units.filter(u => u.selectionId === unit.joinToUnit);
  }

  static getFamily(list, unit) {
    let parents = UnitService.getAttachedUnits(list, unit);
    let grandparents = parents.flatMap(u => {
      return UnitService.getAttachedUnits(list, u);
    });
    let children = UnitService.getChildren(list, unit);
    let grandchildren = children.flatMap(u => {
      return UnitService.getChildren(list, u);
    });
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().uniq([...grandparents, ...parents, unit, ...children, ...grandchildren]);
  }

  static mergeCombinedUnit(unit, attached) {
    console.log("Merging ", unit);
    console.log("with", attached);
    return _objectSpread(_objectSpread({}, unit), {}, {
      size: unit.size + attached.size,
      loadout: unit.loadout.concat(attached.loadout),
      selectedUpgrades: unit.selectedUpgrades.concat(attached.selectedUpgrades)
    });
  }

  static getDisabledUpgradeSections(u, upgradePackages) {
    const packagesForUnit = u.upgrades // Map all upgrade packages
    .map(uid => upgradePackages.find(pkg => pkg.uid === uid)).filter(pkg => !!pkg);
    const sections = packagesForUnit // Flatten down to array of all upgrade sections
    .reduce((sections, next) => sections.concat(next.sections), []);
    const allGains = sections.reduce((opts, next) => opts.concat(next.options), []).reduce((gains, next) => gains.concat(next.gains), []).reduce((gains, next) => {
      // Add root item/weapon/etc
      gains.push(next); // For items, also add the content

      if (next.type !== "ArmyBookItem") return gains;
      return gains.concat(next.content);
    }, []);
    const disabledSections = []; // For each section, check that the unit has access to the things it wants to replace
    // Only need sections that are replacing (or looking for) something

    for (let section of sections.filter(s => s.replaceWhat)) {
      for (let what of section.replaceWhat) {
        const target = what.replace(this.countRegex, ""); // Does equipment contain this thing?

        const equipmentMatch = u.equipment.some(e => {
          var _e$label;

          return _EquipmentService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].compareEquipment */ .Z.compareEquipment(_objectSpread(_objectSpread({}, e), {}, {
            label: ((_e$label = e.label) !== null && _e$label !== void 0 ? _e$label : e.name).replace(this.countRegex, "")
          }), target);
        }); // If equipment, then we won't be disabling this section...

        if (equipmentMatch) continue; // Do any upgrade sections contain this thing?

        const upgradeGains = allGains.find(g => _EquipmentService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].compareEquipment */ .Z.compareEquipment(g, target)); // If upgrade gains found, don't disable this

        if (upgradeGains) continue; // If neither was found, then disable this section

        disabledSections.push(section.uid);
      }
    }

    return disabledSections;
  }

}

_defineProperty(UnitService, "countRegex", /^(\d+)x\s/);

/***/ }),

/***/ 9224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpgradeService)
/* harmony export */ });
/* harmony import */ var _EquipmentService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9674);
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4529);
/* harmony import */ var _RulesService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9605);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5611);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UnitService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8449);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9358);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_2__]);
nanoid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class UpgradeService {
  // TODO: Hacky singleton thing?
  static calculateListTotal(list) {
    // TODO: Campaign unit XP
    return list.reduce((value, current) => value + UpgradeService.calculateUnitTotal(current), 0);
  }

  static buildUpgrades(unit) {
    if (!unit) return null;
    unit.loadout = JSON.parse(JSON.stringify(unit.equipment)); //console.log("Build upgrades for:", makeCopy(unit));

    for (let upgrade of (0,_Helpers__WEBPACK_IMPORTED_MODULE_5__/* .makeCopy */ .FM)(unit.selectedUpgrades)) {
      this.applyUpgrade(unit, upgrade.upgrade, upgrade.option); //console.log("after upgrade, ", makeCopy(unit));
    }

    return unit;
  }

  static applyUpgrade(unit, upgrade, option) {
    const affectsCount = typeof upgrade.affects === "number" ? upgrade.affects : upgrade.affects === "all" ? unit.size || 1 // All in unit
    : 1;
    const isAffectsAll = upgrade.affects === "all";
    const gainEquipment = option.gains.filter(item => item.type === "ArmyBookItem" || item.type === "ArmyBookWeapon");

    if (upgrade.type === "upgradeRule") {
      // TODO: Refactor this - shouldn't be using display name func to compare probably!
      const existingRuleIndex = unit.specialRules.findIndex(r => _RulesService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].displayName */ .Z.displayName(r) === upgrade.replaceWhat[0]); // Remove existing rule

      if (existingRuleIndex > -1) unit.specialRules.splice(existingRuleIndex, 1);
      return;
    } else if (upgrade.type === "upgrade") {
      unit.loadout = unit.loadout.concat(gainEquipment.map(g => _objectSpread(_objectSpread({}, g), {}, {
        count: isAffectsAll ? g.count * unit.size : g.count
      })));
    } else if (upgrade.type === "replace") {
      let removeCount = affectsCount;
      const allEquipment = _UnitService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAllEquipment */ .Z.getAllEquipment(unit);

      if (isAffectsAll) {
        for (let what of upgrade.replaceWhat) {
          const toReplace = allEquipment.find(e => _EquipmentService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].compareEquipment */ .Z.compareEquipment(e, what));
          if (toReplace.count < removeCount) removeCount = toReplace.count;
        }
      }

      for (let what of upgrade.replaceWhat) {
        const target = what.replace(this.countRegex, "");
        const toReplace = allEquipment.find(e => _EquipmentService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].compareEquipment */ .Z.compareEquipment(e, target));
        const countMatch = this.countRegex.exec(what);
        toReplace.count -= removeCount * (countMatch ? parseInt(countMatch[1]) : 1);
      }

      unit.loadout = unit.loadout.concat(gainEquipment.map(g => _objectSpread(_objectSpread({}, g), {}, {
        // "Replace all" is replacing each item with "g.count" copies,
        // whereas "replace 2x something" is replacing 2 with "g.count"
        count: isAffectsAll ? g.count * removeCount : g.count
      })));
    } // Remove upgrade/attachments that rely on something that is being removed


    const toRemove = unit.loadout.filter(e => e.count <= 0);

    for (let item of toRemove) {
      for (let dep of ((_item$dependencies = item.dependencies) !== null && _item$dependencies !== void 0 ? _item$dependencies : []).filter(dep => dep.type === "upgrade" || dep.type === "attachment")) {
        var _item$dependencies;

        this.removeById(unit, dep.upgradeInstanceId);
      }
    } // Remove entires with no count left


    unit.loadout = unit.loadout.filter(e => e.count > 0);

    for (let item of unit.loadout.filter(i => i.type === "ArmyBookItem")) {
      item.content = item.content.filter(c => c.count === undefined || // Keep items that don't have a count property at all
      c.count > 0 // Items that have a count
      );
    }
  }

  static calculateUnitTotal(unit) {
    if (!unit) return 0;
    let cost = unit.cost;

    for (const upgrade of unit.selectedUpgrades.map(su => su.option)) {
      if (upgrade.cost) {
        cost += upgrade.cost;
      }
    }

    const levelCost = UpgradeService.gameSystem === "gf" || UpgradeService.gameSystem === "aof" ? 25 : 5;

    if (unit.xp) {
      cost += Math.floor(unit.xp / 5) * levelCost;
    }

    return cost;
  }

  static isApplied(unit, upgrade, option) {
    return unit.selectedUpgrades.map(su => su.option).contains(u => u.id === option.id);
  }

  static countApplied(unit, upgrade, option) {
    return unit.selectedUpgrades.map(su => su.option).filter(u => u.id === option.id).length;
  }

  static countAvailable(unit, upgrade) {
    const appliedInGroup = upgrade.options.reduce((total, opt) => total + this.countApplied(unit, upgrade, opt), 0);

    const groups = lodash__WEBPACK_IMPORTED_MODULE_3___default().groupBy(_UnitService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAllEquipment */ .Z.getAllEquipment(unit), e => e.name);

    const requiredCount = typeof upgrade.affects === "number" ? upgrade.affects : 1;
    let available = 999;

    for (let what of upgrade.replaceWhat) {
      const target = what.replace(this.countRegex, "");
      const countMatch = this.countRegex.exec(what);
      const requiredCountForTarget = requiredCount * (countMatch ? parseInt(countMatch[1]) : 1);
      const groupKey = Object.keys(groups).find(k => _EquipmentService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].compareEquipmentNames */ .Z.compareEquipmentNames(k, target));
      const toReplace = groups[groupKey];
      if (!toReplace) return 0;
      const toReplaceCount = toReplace.reduce((count, gain) => count + gain.count, 0);
      available = Math.min(toReplaceCount, available); // Would not have enough to replace
      // if (requiredCountForTarget > toReplaceCount)
      //   return 0;
      // May only select up to the limit

      if (typeof upgrade.select === "number") {
        // Any model may replace 1...
        if (upgrade.affects === "any") {
          available = Math.min(available, upgrade.select * unit.size);
        } else {
          available = Math.min(available, upgrade.select - appliedInGroup);
        }
      }

      if (typeof upgrade.affects === "number") {
        available = Math.min(available, upgrade.affects - appliedInGroup);
      }
    }

    return available;
  }

  static getControlType(unit, upgrade) {
    const combinedMultiplier = 1; //unit.combined ? 2 : 1;

    const combinedAffects = upgrade.affects; //(unit.combined && typeof (upgrade.affects) === "number") ? upgrade.affects * 2 : upgrade.affects;

    if (upgrade.type === "upgrade") {
      var _upgrade$replaceWhat$;

      // "Upgrade any model with:"
      if (upgrade.affects === "any" && ((unit === null || unit === void 0 ? void 0 : unit.size) > 1 || upgrade.replaceWhat && ((_upgrade$replaceWhat$ = upgrade.replaceWhat[0]) === null || _upgrade$replaceWhat$ === void 0 ? void 0 : _upgrade$replaceWhat$.length) > 0)) return "updown"; // Select > 1

      if (typeof upgrade.select === "number") {
        // "Upgrade with one:"
        if (upgrade.select * combinedMultiplier === 1) return "radio";
        return "updown";
      }

      return "check";
    } // "Upgrade Psychic(1):"


    if (upgrade.type === "upgradeRule") {
      return "check";
    }

    if (upgrade.type === "replace") {
      // "Replace [weapon]:"
      if (!upgrade.affects) {
        if (typeof upgrade.select === "number") return "updown";
        return "radio";
      } // "Replace one [weapon]:"
      // "Replace all [weapons]:"


      if (combinedAffects === 1 || upgrade.affects === "all") {
        return "radio";
      } // "Replace any [weapon]:"
      // "Replace 2 [weapons]:"


      if (upgrade.affects === "any" || typeof upgrade.affects === "number") {
        return "updown";
      }
    }

    console.error("No control type for: ", upgrade);
    return "updown";
  }

  static isValid(unit, upgrade, option) {
    const controlType = this.getControlType(unit, upgrade); //const alreadySelected = this.countApplied(unit, upgrade, option);

    const appliedInGroup = upgrade.options.reduce((total, opt) => total + this.countApplied(unit, upgrade, opt), 0); // if it's a radio, it's valid if any other upgrade in the group is already applied

    if (controlType === "radio") if (appliedInGroup > 0) return true;

    if (upgrade.type === "replace") {
      const requiredCount = typeof upgrade.affects === "number" ? upgrade.affects : 1;

      const groups = lodash__WEBPACK_IMPORTED_MODULE_3___default().groupBy(_UnitService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAllEquipment */ .Z.getAllEquipment(unit), e => e.name);

      for (let what of upgrade.replaceWhat) {
        const target = what.replace(this.countRegex, "");
        const countMatch = this.countRegex.exec(what);
        const requiredCountForTarget = requiredCount * (countMatch ? parseInt(countMatch[1]) : 1);
        const groupKey = Object.keys(groups).find(k => _EquipmentService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].compareEquipmentNames */ .Z.compareEquipmentNames(k, target));
        const toReplace = groups[groupKey];
        if (!toReplace) return false;
        const toReplaceCount = toReplace.reduce((count, gain) => count + gain.count, 0); // Would not have enough to replace

        if (requiredCountForTarget > toReplaceCount) return false; // May only select up to the limit

        if (typeof upgrade.select === "number") {
          // Any model may replace 1...
          if (upgrade.affects === "any") {
            if (appliedInGroup >= upgrade.select * unit.size) {
              return false;
            }
          } else if (appliedInGroup >= upgrade.select) {
            return false;
          }
        } else if (unit.combined && upgrade.affects === 1 && appliedInGroup >= 2) {
          return false;
        }
      }
    }

    if (upgrade.type === "upgrade") {
      // upgrade (n? (models|weapons)?) with...
      var available = unit.size; // if replacing equipment, count number of those equipment available

      if (upgrade.replaceWhat) {
        for (let what of upgrade.replaceWhat) {
          available = unit.loadout // Take only the gains that match this dependency
          .filter(g => _EquipmentService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].compareEquipment */ .Z.compareEquipment(g, what)) // Count how many we have
          .reduce((count, next) => count + next.count, 0);
        }
      } // Upgrade [(any)?] with n:


      if (typeof upgrade.select === "number") {
        if (upgrade.affects === "any") {
          if (appliedInGroup >= upgrade.select * available) {
            return false;
          }
        } else if (appliedInGroup >= upgrade.select || upgrade.attachment && appliedInGroup >= available) {
          return false;
        } // Upgrade any

      } else if (upgrade.affects === "any" && appliedInGroup >= available) {
        return false;
      }
    }

    return true;
  }

  static apply(unit, upgrade, option) {
    var _upgrade$replaceWhat;

    const upgradeInstanceId = (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(9);

    const optionToApply = _objectSpread(_objectSpread({}, option), {}, {
      gains: option.gains.map(g => _objectSpread(_objectSpread({}, g), {}, {
        dependencies: [],
        content: g.type === "ArmyBookItem" ? g.content.map(c => {
          var _c$count;

          return _objectSpread(_objectSpread({}, c), {}, {
            count: (_c$count = c.count) !== null && _c$count !== void 0 ? _c$count : 1,
            dependencies: []
          });
        }) : undefined
      }))
    }); // Add this upgrade to the unit


    unit.selectedUpgrades.push({
      instanceId: upgradeInstanceId,
      upgrade: _objectSpread(_objectSpread({}, upgrade), {}, {
        options: null
      }),
      option: optionToApply
    }); // Figure out deps...

    if (((_upgrade$replaceWhat = upgrade.replaceWhat) === null || _upgrade$replaceWhat === void 0 ? void 0 : _upgrade$replaceWhat.length) > 0) {
      const affectsCount = typeof upgrade.affects === "number" ? upgrade.affects : upgrade.affects === "all" ? unit.size || 1 // All in unit
      : 1; // Find a thing to depend on for each thing we're replacing

      for (let target of upgrade.replaceWhat) {
        let remainingToReplace = affectsCount;

        const applyDependency = equipment => {
          const item = equipment.find(g => _EquipmentService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].compareEquipment */ .Z.compareEquipment(g, target));
          if (!item) return;
          if (!item.dependencies) item.dependencies = []; // gain is a thing we're looking for, check to see if it can be depended upon

          const alreadyTaken = item.dependencies.filter(dep => dep.type === "replace").reduce((count, dep) => count + dep.count, 0);
          const remainingAvailable = item.count - alreadyTaken; // The lesser of "the amount we have" vs "the amount we need"

          const count = Math.min(remainingAvailable, remainingToReplace);

          if (count > 0) {
            item.dependencies.push({
              upgradeInstanceId,
              count: count,
              type: upgrade.type
            });
            remainingToReplace -= count;
          }
        }; // Try and depend on equipment before anything else


        applyDependency(unit.equipment); // -1 because we've added "this" upgrade already above, and want to skip it

        const startAtIndex = unit.selectedUpgrades.length - 1; // Check each applied upgrade, in reverse order until we find a thing to depend upon

        for (let i = startAtIndex; i > 0; i--) {
          // Stop looking if we've replaced enough
          if (remainingToReplace <= 0) break;
          const upgrade = unit.selectedUpgrades[i - 1];
          applyDependency(this.getAllGains(upgrade.option));
        }
      }
    }

    unit = this.buildUpgrades(unit);
  }

  static getAllGains(option) {
    const nestedItems = lodash__WEBPACK_IMPORTED_MODULE_3___default().flatMap(option.gains.filter(e => e.type === "ArmyBookItem"), e => e.content);

    return option.gains.concat(nestedItems);
  }

  static remove(unit, option) {
    console.log("Removing option...", JSON.parse(JSON.stringify(option)));

    const removeId = (() => {
      for (let i = unit.selectedUpgrades.length - 1; i >= 0; i--) {
        const upgrade = unit.selectedUpgrades[i];
        if (upgrade.option.id === option.id) return upgrade.instanceId;
      }

      return null;
    })();

    this.removeById(unit, removeId);
  }

  static removeById(unit, optionInstanceId) {
    const removeAt = unit.selectedUpgrades.findLastIndex(u => u.instanceId === optionInstanceId);
    const toRemove = unit.selectedUpgrades[removeAt];
    console.log("Removing...", JSON.parse(JSON.stringify(toRemove)));

    for (let gain of toRemove.option.gains) {
      if (gain.type === "ArmyBookItem") {
        for (let nestedItem of gain.content) {
          for (let dep of (0,_Helpers__WEBPACK_IMPORTED_MODULE_5__/* .makeCopy */ .FM)(nestedItem.dependencies)) {
            this.removeById(unit, dep.upgradeInstanceId);
          }
        }
      }

      for (let dep of (0,_Helpers__WEBPACK_IMPORTED_MODULE_5__/* .makeCopy */ .FM)(gain.dependencies)) {
        this.removeById(unit, dep.upgradeInstanceId);
      }
    } // Remove the upgrade


    unit.selectedUpgrades.splice(removeAt, 1);

    const removeFromDeps = deps => {
      const idx = deps.findIndex(d => d.upgradeInstanceId === optionInstanceId);
      if (idx >= 0) deps.splice(idx, 1);
    }; // Remove this item from dependencies of other items


    for (let opt of unit.equipment) {
      var _opt$dependencies;

      removeFromDeps((_opt$dependencies = opt.dependencies) !== null && _opt$dependencies !== void 0 ? _opt$dependencies : []);
    }

    const allGainsOfAllUpgrades = unit.selectedUpgrades.map(x => this.getAllGains(x.option));

    for (let opt of lodash__WEBPACK_IMPORTED_MODULE_3___default().flatMap(allGainsOfAllUpgrades, x => x)) {
      var _opt$dependencies2;

      removeFromDeps((_opt$dependencies2 = opt.dependencies) !== null && _opt$dependencies2 !== void 0 ? _opt$dependencies2 : []);
    } // Expensive to put this here but guarantees it'll be up to date!


    unit = this.buildUpgrades(unit);
  }

}

_defineProperty(UpgradeService, "countRegex", /^(\d+)x\s/);

_defineProperty(UpgradeService, "gameSystem", void 0);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WebappApiService)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9358);
/* harmony import */ var _UnitService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8449);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class WebappApiService {
  static getUrl() {
    const fromQuery = (next_router__WEBPACK_IMPORTED_MODULE_0___default().query.dataSourceUrl);
    if (fromQuery) return `https://${fromQuery}.herokuapp.com/api`; //return "http://localhost:3000/api";

    return this.webCompanionUrl;
  }

  static cacheResponse(key, res) {
    localStorage[key] = JSON.stringify({
      cached: new Date(),
      res
    });
  }

  static getFromCache(key) {
    const cachedValue = localStorage[key];
    if (!cachedValue) return null;
    const cachedObject = JSON.parse(cachedValue);
    return cachedObject.res;
  }

  static async getArmyBooks(gameSystemSlug) {
    const cacheKey = "AF_Cache_army-books-" + gameSystemSlug;

    try {
      const res = await fetch(this.getUrl() + "/army-books?gameSystemSlug=" + gameSystemSlug);
      const data = await res.json();
      this.cacheResponse(cacheKey, data);
      return data;
    } catch (e) {
      return this.getFromCache(cacheKey);
    }
  }

  static async getGameRules(gameSystemSlug) {
    const cacheKey = "AF_Cache_game-rules-" + gameSystemSlug;

    try {
      const res = await fetch(this.getUrl() + `/content/game-systems/${gameSystemSlug}/special-rules`);
      const data = await res.json();
      this.cacheResponse(cacheKey, data);
      return data;
    } catch (e) {
      return this.getFromCache(cacheKey);
    }
  }

  static async getArmyBookData(armyId, gameSystem) {
    const cacheKey = "AF_Cache_army-" + armyId + gameSystem;

    try {
      const gameSystemId = (0,_Helpers__WEBPACK_IMPORTED_MODULE_2__/* .gameSystemToEnum */ .Q5)(gameSystem);
      const armyBookRes = await fetch(this.getUrl() + `/army-books/${armyId}~${gameSystemId}?armyForge=true`);
      const data = await armyBookRes.json();
      const upgradePackages = data.upgradePackages.map(upgradePackage => _objectSpread(_objectSpread({}, upgradePackage), {}, {
        sections: upgradePackage.sections.map(section => _objectSpread(_objectSpread({}, section), {}, {
          isCommandGroup: section.options.some(opt => opt.gains.some(g => g.name.toLocaleLowerCase() === "musician")),
          options: section.options.map(option => {
            const result = _objectSpread(_objectSpread({}, option), {}, {
              parentSectionId: section.uid
            });

            delete result.proposedCost;
            delete result.proposedCostHint;
            delete result.proposedVersion;
            delete result.parentPackageUid;
            delete result.parentSectionUid;
            return result;
          })
        }))
      }));

      const transformedData = _objectSpread(_objectSpread({}, data), {}, {
        units: data.units.map((unit, index) => _objectSpread(_objectSpread({}, unit), {}, {
          selectedUpgrades: [],
          sortId: index,
          disabledUpgradeSections: _UnitService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getDisabledUpgradeSections */ .Z.getDisabledUpgradeSections(unit, upgradePackages)
        })),
        upgradePackages: upgradePackages
      });

      this.cacheResponse(cacheKey, transformedData);
      return transformedData;
    } catch (e) {
      return this.getFromCache(cacheKey);
    }
  }

}

_defineProperty(WebappApiService, "webCompanionUrl", "https://webapp.onepagerules.com/api");

/***/ })

};
;