"use strict";
exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 7622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$l": () => (/* binding */ createList),
/* harmony export */   "Ah": () => (/* binding */ renameUnit),
/* harmony export */   "CB": () => (/* binding */ removeUpgrade),
/* harmony export */   "KR": () => (/* binding */ addUnits),
/* harmony export */   "Ke": () => (/* binding */ adjustXp),
/* harmony export */   "Nn": () => (/* binding */ addUnit),
/* harmony export */   "Qh": () => (/* binding */ moveUnit),
/* harmony export */   "RQ": () => (/* binding */ setUnitNotes),
/* harmony export */   "TF": () => (/* binding */ removeUnitsForBook),
/* harmony export */   "Vj": () => (/* binding */ loadSavedList),
/* harmony export */   "WZ": () => (/* binding */ selectUnit),
/* harmony export */   "Xx": () => (/* binding */ previewUnit),
/* harmony export */   "Y5": () => (/* binding */ applyUpgrade),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ZQ": () => (/* binding */ removeUnit),
/* harmony export */   "cU": () => (/* binding */ resetList),
/* harmony export */   "hg": () => (/* binding */ updateCreationTime),
/* harmony export */   "i": () => (/* binding */ undoRemoveUnit),
/* harmony export */   "iQ": () => (/* binding */ addCombinedUnit),
/* harmony export */   "lN": () => (/* binding */ joinUnit),
/* harmony export */   "v$": () => (/* binding */ toggleTrait),
/* harmony export */   "vw": () => (/* binding */ updateListSettings)
/* harmony export */ });
/* unused harmony exports listSlice, reorderList, toggleUnitCombined, clearPreview */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9224);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7261);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_PersistenceService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3744);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5611);
/* harmony import */ var _services_UnitService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8449);
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9358);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__, throttle_debounce__WEBPACK_IMPORTED_MODULE_2__, _services_PersistenceService__WEBPACK_IMPORTED_MODULE_4__, nanoid__WEBPACK_IMPORTED_MODULE_5__]);
([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__, throttle_debounce__WEBPACK_IMPORTED_MODULE_2__, _services_PersistenceService__WEBPACK_IMPORTED_MODULE_4__, nanoid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const initialState = {
  creationTime: null,
  name: "New Army",
  pointsLimit: 0,
  units: [],
  selectedUnitId: null,
  undoUnitRemove: null,
  points: 0,
  unitPreview: null,
  campaignMode: false
};
const debounceSave = (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_2__.debounce)(1500, state => {
  _services_PersistenceService__WEBPACK_IMPORTED_MODULE_4__/* ["default"].updateSave */ .Z.updateSave(state);
});
const listSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'army',
  initialState,
  reducers: {
    resetList: state => {
      return initialState;
    },
    createList: (state, action) => {
      return action.payload;
    },
    updateCreationTime: (state, action) => {
      state.creationTime = action.payload;
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    updateListSettings: (state, action) => {
      const {
        name,
        pointsLimit
      } = action.payload;
      state.name = name;
      state.pointsLimit = pointsLimit;
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },

    loadSavedList(state, action) {
      return _objectSpread({}, action.payload);
    },

    addUnit: (state, action) => {
      const selectedUnit = _services_UnitService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].createUnitFromDefinition */ .Z.createUnitFromDefinition(action.payload);
      const unit = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].buildUpgrades */ .Z.buildUpgrades(selectedUnit);
      state.units.push(unit);
      state.selectedUnitId = unit.selectionId;
      state.unitPreview = null;
      state.points = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].calculateListTotal */ .Z.calculateListTotal(state.units);
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    addCombinedUnit: (state, action) => {
      const parentindex = state.units.findIndex(t => action.payload == t.selectionId);
      let parentUnit = state.units[parentindex];
      parentUnit.combined = true;

      let newUnit = _objectSpread(_objectSpread({}, parentUnit), {}, {
        selectionId: (0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)(5)
      });

      newUnit.joinToUnit = parentUnit.selectionId; //parentUnit.joinToUnit = newUnit.selectionId;

      state.units.splice(parentindex + 1, 0, newUnit);
      state.points = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].calculateListTotal */ .Z.calculateListTotal(state.units);
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    addUnits: (state, action) => {
      const units = action.payload;
      let unitsMapped = units.map(u => _objectSpread(_objectSpread({}, u), {}, {
        selectionId: (0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)(5)
      }));
      units.forEach((u, i) => {
        if (u.joinToUnit) {
          //console.log(action.payload.units)
          //console.log(`${u.name} is joined to unit ${u.joinToUnit}...`)
          let joinedIndex = units.findIndex(t => {
            return t.selectionId === u.joinToUnit;
          }); //console.log(`unit ${u.joinToUnit} found at index ${joinedIndex}...`)

          if (joinedIndex >= 0) {
            unitsMapped[i].joinToUnit = unitsMapped[joinedIndex].selectionId;
          } else {
            unitsMapped[i].joinToUnit = null;
            unitsMapped[i].combined = false;
          }
        }

        if (u.combined) {
          unitsMapped[i].combined = units.some(t => {
            return t.selectionId === u.joinToUnit || t.joinToUnit === u.selectionId;
          });
        }
      }); //state.units.splice(index ?? -1, 0, ...unitsMapped)

      state.units.push(...unitsMapped);
      state.points = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].calculateListTotal */ .Z.calculateListTotal(state.units);
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    selectUnit: (state, action) => {
      state.selectedUnitId = action.payload;
      state.unitPreview = null;
    },
    removeUnit: (state, action) => {
      const unitId = action.payload;
      const removeIndex = state.units.findIndex(u => u.selectionId === unitId);
      if (removeIndex == -1) return null;
      let unit = state.units[removeIndex]; //console.log(`removing: ${unit.name} - ${unitId}`)

      if (unit.combined) {
        //console.log(`units is combined - clearing up friend...`)
        if (!unit.joinToUnit) {
          state.undoUnitRemove = state.units.splice(removeIndex, 1);
          let childIndex = state.units.findIndex(t => {
            return t.combined && t.joinToUnit === unitId;
          });

          if (childIndex !== -1) {
            state.undoUnitRemove = state.undoUnitRemove.concat(state.units.splice(childIndex, 1));
          }
        } else {
          //console.log(`unit has no child, so must have parent... finding it.`)
          let parent = state.units.find(t => {
            return t.combined && unit.joinToUnit === t.selectionId;
          }); //console.log(`parent: ${parent.name} - ${parent.selectionId}`)

          if (parent) {
            console.log(`parent: ${parent.name} - ${parent.selectionId}`);
            parent.combined = false;
          } // don't bother saving it in the undoRemove stuff.


          state.units.splice(removeIndex, 1);
        }
      } else {
        state.undoUnitRemove = state.units.splice(removeIndex, 1);
      }

      state.points = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].calculateListTotal */ .Z.calculateListTotal(state.units);
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    undoRemoveUnit: state => {
      state.units = state.units.concat(state.undoUnitRemove);
      state.undoUnitRemove = null;
      state.points = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].calculateListTotal */ .Z.calculateListTotal(state.units);
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    renameUnit: (state, action) => {
      const {
        unitId,
        name
      } = action.payload;
      const unit = state.units.filter(u => u.selectionId === unitId)[0];
      unit.customName = name;

      if (unit.combined) {
        let partner = state.units.find(t => t.selectionId === unit.joinToUnit || t.combined && t.joinToUnit === unitId);
        partner.customName = name;
      }

      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    moveUnit: (state, action) => {
      let {
        from,
        to
      } = action.payload;
      to = to <= from ? to : to - 1;
      if (from == to) return;
      const unit = state.units[from];
      state.units.splice(from, 1);
      state.units.splice(to, 0, unit);
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    reorderList: (state, action) => {
      let update = false;
      let newunits = action.payload.map((v, i) => {
        if (v != i) {
          update = true;
        }

        return state.units[v];
      });

      if (update) {
        state.units = newunits;
        debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
      }
    },
    toggleUnitCombined: (state, action) => {
      const unitId = action.payload;
      const unit = state.units.filter(u => u.selectionId === unitId)[0];

      if (unit) {
        state.points = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].calculateListTotal */ .Z.calculateListTotal(state.units);
        debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
      }
    },
    joinUnit: (state, action) => {
      const {
        unitId,
        joinToUnitId
      } = action.payload;
      const unit = state.units.filter(u => u.selectionId === unitId)[0];
      unit.joinToUnit = joinToUnitId;
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    applyUpgrade: (state, action) => {
      // TODO: Refactor, break down, unit test...
      const {
        unitId,
        upgrade,
        option
      } = action.payload;
      const unit = state.units.filter(u => u.selectionId === unitId)[0];
      _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].apply */ .Z.apply(unit, upgrade, option);

      if (unit.combined && upgrade.affects == "all") {
        const partner = state.units.find(t => t.selectionId == unit.joinToUnit || t.combined && t.joinToUnit == unit.selectionId);
        _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].apply */ .Z.apply(partner, upgrade, option);
      }

      state.points = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].calculateListTotal */ .Z.calculateListTotal(state.units);
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },
    removeUpgrade: (state, action) => {
      // TODO: Refactor, break down, unit test...
      const {
        unitId,
        upgrade,
        option
      } = action.payload;
      const unit = state.units.filter(u => u.selectionId === unitId)[0];
      _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].remove */ .Z.remove(unit, option);

      if (unit.combined && upgrade.affects == "all") {
        const partner = state.units.find(t => t.selectionId == unit.joinToUnit || t.combined && t.joinToUnit == unit.selectionId);
        _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].remove */ .Z.remove(partner, option);
      }

      state.points = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].calculateListTotal */ .Z.calculateListTotal(state.units);
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },

    removeUnitsForBook(state, action) {
      const armyBookId = action.payload;
      state.units = state.units.filter(unit => unit.armyId !== armyBookId);
    },

    previewUnit(state, action) {
      const unit = (0,_services_Helpers__WEBPACK_IMPORTED_MODULE_7__/* .makeCopy */ .FM)(action.payload);
      unit.selectedUpgrades = [];
      state.unitPreview = _services_UpgradeService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].buildUpgrades */ .Z.buildUpgrades(unit);
      state.selectedUnitId = null;
    },

    clearPreview(state) {
      state.unitPreview = null;
    },

    adjustXp(state, action) {
      const {
        unitId,
        xp
      } = action.payload;
      const unit = state.units.find(u => u.selectionId === unitId);
      if (!unit.xp) unit.xp = 0;
      unit.xp += xp;
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },

    toggleTrait(state, action) {
      const {
        unitId,
        trait
      } = action.payload;
      const unit = state.units.find(u => u.selectionId === unitId);
      const existingTraitIndex = unit.traits.findIndex(t => t === trait);

      if (existingTraitIndex >= 0) {
        unit.traits.splice(existingTraitIndex, 1);
      } else {
        unit.traits.push(trait);
      }

      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    },

    setUnitNotes(state, action) {
      const {
        unitId,
        notes
      } = action.payload;
      const unit = state.units.find(u => u.selectionId === unitId);
      unit.notes = notes;
      debounceSave((0,immer__WEBPACK_IMPORTED_MODULE_3__.current)(state));
    }

  }
}); // Action creators are generated for each case reducer function

const {
  resetList,
  createList,
  addUnit,
  applyUpgrade,
  removeUpgrade,
  addCombinedUnit,
  addUnits,
  selectUnit,
  removeUnit,
  renameUnit,
  moveUnit,
  reorderList,
  toggleUnitCombined,
  joinUnit,
  loadSavedList,
  updateListSettings,
  updateCreationTime,
  undoRemoveUnit,
  removeUnitsForBook,
  previewUnit,
  clearPreview,
  adjustXp,
  toggleTrait,
  setUnitNotes
} = listSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listSlice.reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PersistenceService)
/* harmony export */ });
/* harmony import */ var _data_armySlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5876);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7622);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9358);
/* harmony import */ var _RulesService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9605);
/* harmony import */ var _UnitService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8449);
/* harmony import */ var _UpgradeService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9224);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_armySlice__WEBPACK_IMPORTED_MODULE_0__, _data_listSlice__WEBPACK_IMPORTED_MODULE_1__, _UpgradeService__WEBPACK_IMPORTED_MODULE_3__]);
([_data_armySlice__WEBPACK_IMPORTED_MODULE_0__, _data_listSlice__WEBPACK_IMPORTED_MODULE_1__, _UpgradeService__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PersistenceService {
  static getSaveKey(creationTime) {
    return this.prefix + creationTime;
  }

  static saveImport(saveName, json) {
    localStorage[this.prefix + saveName] = json;
  }

  static createSave(army, name, existingList) {
    const creationTime = new Date().getTime().toString();
    const list = existingList ? _objectSpread(_objectSpread({}, existingList), {}, {
      creationTime: creationTime,
      undoUnitRemove: null
    }) : {
      creationTime: creationTime,
      name: name,
      units: [],
      points: 0,
      undoUnitRemove: null
    };
    const armyData = army.loadedArmyBooks[0];
    const saveData = {
      gameSystem: army.gameSystem,
      armyId: armyData.uid,
      armyIds: [armyData.uid],
      armyFaction: armyData.factionName,
      armyName: armyData.name,
      modified: new Date().toJSON(),
      saveVersion: this.currentSaveVersion,
      listPoints: 0,
      list: this.getDataForSave(list),
      favourite: false
    };
    console.log("Creating save...", saveData);
    const json = JSON.stringify(saveData);
    localStorage[this.getSaveKey(list.creationTime)] = json;
    return creationTime;
  }

  static getDataForSave(list) {
    return _objectSpread(_objectSpread({}, list), {}, {
      units: list.units.map(u => ({
        id: u.id,
        armyId: u.armyId,
        customName: u.customName,
        selectionId: u.selectionId,
        selectedUpgrades: u.selectedUpgrades.map(x => ({
          instanceId: x.instanceId,
          upgradeId: x.upgrade.uid,
          optionId: x.option.id
        })),
        combined: u.combined,
        joinToUnit: u.joinToUnit,
        xp: u.xp,
        traits: u.traits,
        notes: u.notes
      }))
    });
  }

  static updateSave(list) {
    this.updateSaveData(list.creationTime, existingSave => {
      const armyIds = lodash__WEBPACK_IMPORTED_MODULE_4___default().uniq(list.units.map(u => u.armyId));

      const points = _UpgradeService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].calculateListTotal */ .Z.calculateListTotal(list.units);

      const saveData = _objectSpread(_objectSpread({}, existingSave), {}, {
        armyIds: armyIds,
        modified: new Date().toJSON(),
        listPoints: points,
        list: this.getDataForSave(list),
        saveVersion: this.currentSaveVersion
      });

      console.log("Updating save...", saveData);
      return saveData;
    });
  }

  static updateSaveData(creationTime, modifySaveFunc) {
    const key = this.getSaveKey(creationTime);
    const localSave = localStorage[key];
    if (!localSave) return;
    const saveData = modifySaveFunc(JSON.parse(localSave));
    localStorage[key] = JSON.stringify(saveData);
  }

  static toggleFavourite(save, isFavourite) {
    const key = Object.keys(localStorage).find(key => key.endsWith(save.list.creationTime));
    localStorage[key] = JSON.stringify(_objectSpread(_objectSpread({}, save), {}, {
      favourite: isFavourite
    }));
  }

  static delete(list) {
    const key = Object.keys(localStorage).find(key => key.endsWith(list.creationTime));
    delete localStorage[key];
  }

  static buildListFromSave(save, armyBooks) {
    return save.saveVersion === 3 ? this.buildListFromSave_v3(save.list, armyBooks) : save.saveVersion === 2 ? this.buildListFromSave_v2(save.list, armyBooks) : null;
  }

  static buildListFromSave_v2(savedList, armyBooks) {
    const armyData = armyBooks[0];
    const allSections = armyData.upgradePackages.reduce((current, pkg) => current.concat(pkg.sections), []);
    const allOptions = allSections.reduce((current, section) => current.concat(section.options), []);
    return _objectSpread(_objectSpread({}, savedList), {}, {
      units: savedList.units.map(u => {
        const unitDefinition = armyData.units.find(unit => unit.id === u.id);

        const unit = _objectSpread(_objectSpread(_objectSpread({}, unitDefinition), u), {}, {
          armyId: armyData.uid,
          equipment: (0,_Helpers__WEBPACK_IMPORTED_MODULE_5__/* .makeCopy */ .FM)(unitDefinition.equipment),
          selectedUpgrades: [],
          loadout: []
        });

        console.log("Loading unit...", unit);

        for (let upg of (0,_Helpers__WEBPACK_IMPORTED_MODULE_5__/* .makeCopy */ .FM)(u.selectedUpgrades)) {
          const option = allOptions.find(opt => opt.id === upg.id || opt.id === upg.optionId);

          if (option) {
            const section = allSections.find(sec => sec.uid === option.parentSectionId);
            _UpgradeService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].apply */ .Z.apply(unit, section, option);
          } else {
            console.warn("Couldn't find option", upg);
          }
        }

        return _UpgradeService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].buildUpgrades */ .Z.buildUpgrades(unit);
      })
    });
  }

  static buildListFromSave_v3(savedList, armyBooks) {
    const allSections = armyBooks.flatMap(book => book.upgradePackages).reduce((current, pkg) => current.concat(pkg.sections), []);
    const units = armyBooks.flatMap(book => book.units.map(u => _objectSpread(_objectSpread({}, u), {}, {
      armyId: book.uid
    })));
    console.log(units);
    return _objectSpread(_objectSpread({}, savedList), {}, {
      units: savedList.units.map(u => {
        const unitDefinition = units.find(unit => unit.id === u.id);

        const unit = _objectSpread(_objectSpread(_objectSpread({}, unitDefinition), u), {}, {
          equipment: (0,_Helpers__WEBPACK_IMPORTED_MODULE_5__/* .makeCopy */ .FM)(unitDefinition.equipment),
          selectedUpgrades: [],
          loadout: []
        });

        for (let upg of (0,_Helpers__WEBPACK_IMPORTED_MODULE_5__/* .makeCopy */ .FM)(u.selectedUpgrades)) {
          const section = allSections.find(sec => sec.uid === upg.upgradeId);
          const option = section.options.find(opt => opt.id === upg.optionId);

          if (option) {
            _UpgradeService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].apply */ .Z.apply(unit, section, option);
          } else {
            console.warn("Couldn't find option", upg);
          }
        }

        return _UpgradeService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].buildUpgrades */ .Z.buildUpgrades(unit);
      })
    });
  }

  static async loadFromKey(dispatch, key, callback) {
    const save = JSON.parse(localStorage[this.getSaveKey(key)]);
    this.load(dispatch, save, callback);
  }

  static async load(dispatch, save, callback) {
    console.log("Loading save...", save);
    dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_0__/* .resetLoadedBooks */ .nW)());
    dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_0__/* .setGameSystem */ .zi)(save.gameSystem));
    const armyIds = save.armyIds || [save.armyId];
    const promises = armyIds.map(id => dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_0__/* .getArmyBookData */ .zK)({
      armyUid: id,
      gameSystem: save.gameSystem,
      reset: false
    })));
    Promise.all(promises).then(results => {
      const armyBooks = results.map(res => res.payload.armyBookData);
      console.log(armyBooks);
      const list = this.buildListFromSave(save, armyBooks);
      dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_1__/* .loadSavedList */ .Vj)(list));
      dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_0__/* .getGameRules */ .Ty)(save.gameSystem));
      callback(armyBooks);
    });
  }

  static download(list) {
    const saveData = localStorage[this.getSaveKey(list.creationTime)];
    const blob = new Blob([saveData], {
      type: "application/json"
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${list.name}${list.creationTime}.json`;
    document.body.appendChild(a);
    a.dispatchEvent(new MouseEvent('click'));
  }

  static downloadTTS(list) {
    const saveData = JSON.stringify(list);
    const blob = new Blob([saveData], {
      type: "application/json"
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${list.name}${list.creationTime}.json`;
    document.body.appendChild(a);
    a.dispatchEvent(new MouseEvent('click'));
  }

  static checkExists(list) {
    return !!localStorage[this.getSaveKey(list.creationTime)];
  }

  static getListAsText(list) {
    const lines = [`++ ${list.name} [${list.points}pts] ++\n`];

    const constructLabel = item => {
      var _item$specialRules;

      const count = item.count > 1 ? `${item.count}x ` : "";
      const range = item.range ? `${item.range}", ` : "";
      const attacks = item.attacks ? `A${item.attacks}` : "";
      const rules = (_item$specialRules = item.specialRules) === null || _item$specialRules === void 0 ? void 0 : _item$specialRules.map(_RulesService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].displayName */ .Z.displayName).join(", ");
      if (!range && !attacks && !rules) return `${count}${item.name}`;
      return `${count}${item.name} (${range}${attacks}${(rules === null || rules === void 0 ? void 0 : rules.length) > 0 ? ", " + rules : ""})`;
    };

    const getWeapons = unit => {
      console.log("Loadout", unit.loadout);
      return unit.loadout.map(constructLabel).join(", ");
    };

    const getRules = unit => {
      var _unit$specialRules;

      const rules = ((_unit$specialRules = unit.specialRules) !== null && _unit$specialRules !== void 0 ? _unit$specialRules : []).concat(_UnitService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getAllUpgradedRules */ .Z.getAllUpgradedRules(unit));
      const ruleGroups = (0,_Helpers__WEBPACK_IMPORTED_MODULE_5__/* .groupBy */ .vM)(rules, "name");
      const keys = Object.keys(ruleGroups); // Sort rules alphabetically

      keys.sort((a, b) => a.localeCompare(b));
      return keys.map(key => {
        // This has been copy/pasted from RuleList.tsx - refactor!
        const group = ruleGroups[key];
        const rule = group[0];
        const rating = rule.rating == null || rule.rating == "" ? null : key === "Psychic" // Take Highest
        ? Math.max(...group.map(rule => parseInt(rule.rating))) // Sum all occurrences
        : group.reduce((total, next) => next.rating ? total + parseInt(next.rating) : total, 0); // Rules with ratings do not show multiple instances

        const count = rating > 0 ? 0 : group.length;
        return (count > 1 ? `${count}x ` : "") + _RulesService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].displayName */ .Z.displayName(_objectSpread(_objectSpread({}, rule), {}, {
          rating: rule.rating ? rating.toString() : null
        }));
      }).join(", ");
    }; // Unit name [size] Qua 3+ Def 4+ 123pts
    // 2x Hand Weapons, Rifle
    // Fearless
    //
    // ...


    for (let unit of list.units) {
      var _unit$customName;

      // TODO: Campaign unit pt cost...?
      lines.push(`${(_unit$customName = unit.customName) !== null && _unit$customName !== void 0 ? _unit$customName : unit.name} [${unit.size}] | Qua ${unit.quality}+ Def ${unit.defense}+ | ${_UpgradeService__WEBPACK_IMPORTED_MODULE_3__/* ["default"].calculateUnitTotal */ .Z.calculateUnitTotal(unit)}pts`);
      lines.push(getWeapons(unit));
      lines.push(getRules(unit) + "\n");
    }

    return lines.join("\n");
  }

  static copyAsText(list) {
    navigator.clipboard.writeText(this.getListAsText(list)).then(() => console.log("Copied to clipboard..."));
  }

  static saveViewPreferences(prefs) {
    localStorage["view_prefs"] = JSON.stringify(prefs);
  }

  static getViewPreferences() {
    const prefs = localStorage["view_prefs"];
    if (!prefs) return null;
    return JSON.parse(prefs);
  }

}

_defineProperty(PersistenceService, "prefix", "AF_Save_");

_defineProperty(PersistenceService, "currentSaveVersion", 3);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;