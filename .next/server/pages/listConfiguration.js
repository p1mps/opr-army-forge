"use strict";
(() => {
var exports = {};
exports.id = 832;
exports.ids = [832];
exports.modules = {

/***/ 2624:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListConfiguration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7622);
/* harmony import */ var _data_armySlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5876);
/* harmony import */ var _views_components_ArmyImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(176);
/* harmony import */ var _views_components_MenuBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3795);
/* harmony import */ var _views_listConfiguration_CreateView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4030);
/* harmony import */ var _views_listConfiguration_EditView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6609);
/* harmony import */ var _views_listConfiguration_MultipleArmySelections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5578);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_listSlice__WEBPACK_IMPORTED_MODULE_4__, _data_armySlice__WEBPACK_IMPORTED_MODULE_5__, _views_listConfiguration_CreateView__WEBPACK_IMPORTED_MODULE_8__, _views_listConfiguration_EditView__WEBPACK_IMPORTED_MODULE_9__, _views_listConfiguration_MultipleArmySelections__WEBPACK_IMPORTED_MODULE_10__]);
([_data_listSlice__WEBPACK_IMPORTED_MODULE_4__, _data_armySlice__WEBPACK_IMPORTED_MODULE_5__, _views_listConfiguration_CreateView__WEBPACK_IMPORTED_MODULE_8__, _views_listConfiguration_EditView__WEBPACK_IMPORTED_MODULE_9__, _views_listConfiguration_MultipleArmySelections__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function ListConfiguration() {
  var _armyState$loadedArmy, _armyData$factionName;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const isEdit = !!router.query["edit"];
  const armyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.army);
  const listState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.list);
  const {
    0: armyName,
    1: setArmyName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isEdit ? listState.name : "");
  const {
    0: pointsLimit,
    1: setPointsLimit
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isEdit ? listState.pointsLimit : null);
  const armyData = (_armyState$loadedArmy = armyState.loadedArmyBooks) === null || _armyState$loadedArmy === void 0 ? void 0 : _armyState$loadedArmy[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Ensure gameSystem is set
    if (!armyState.gameSystem) {
      dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_5__/* .setGameSystem */ .zi)(router.query["gameSystem"]));
      return;
    }
  }, [armyState.gameSystem]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _armyState$armyBooks;

    // Load books if not loaded
    if (armyState.gameSystem && ((_armyState$armyBooks = armyState.armyBooks) === null || _armyState$armyBooks === void 0 ? void 0 : _armyState$armyBooks.length) <= 0) {
      dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_5__/* .getArmyBooks */ .V4)(armyState.gameSystem));
    }
  }, [armyState.gameSystem, armyState.armyBooks]); // Reset list if not edit mode

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_4__/* .selectUnit */ .WZ)(null));
    if (!isEdit) dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_4__/* .resetList */ .cU)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _armyData$name;

    // TODO: Be nice to the user and work out if the name was set manually before overriding it? nah
    setArmyName((_armyData$name = armyData === null || armyData === void 0 ? void 0 : armyData.name) !== null && _armyData$name !== void 0 ? _armyData$name : "");
  }, [armyData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_views_components_MenuBar__WEBPACK_IMPORTED_MODULE_7__/* .MenuBar */ .j, {
      title: isEdit ? "List Details" : (armyData === null || armyData === void 0 ? void 0 : armyData.name) || "New Army",
      onBackClick: () => router.back(),
      transparent: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "is-flex is-flex-direction-column p-4 mx-auto",
      style: {
        maxWidth: "480px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "mb-6",
        children: armyData && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_views_components_ArmyImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          name: (_armyData$factionName = armyData === null || armyData === void 0 ? void 0 : armyData.factionName) !== null && _armyData$factionName !== void 0 ? _armyData$factionName : armyData === null || armyData === void 0 ? void 0 : armyData.name,
          armyData: armyState
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
        variant: "filled",
        label: "List Name",
        className: "mb-4",
        value: armyName,
        onChange: e => setArmyName(e.target.value)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
        variant: "filled",
        label: "Points Limit",
        type: "number",
        className: "mb-4",
        value: pointsLimit !== null && pointsLimit !== void 0 ? pointsLimit : "",
        onChange: e => setPointsLimit(e.target.value ? parseInt(e.target.value) : null)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_views_listConfiguration_MultipleArmySelections__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), isEdit ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_views_listConfiguration_EditView__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        armyName: armyName,
        pointsLimit: pointsLimit
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_views_listConfiguration_CreateView__WEBPACK_IMPORTED_MODULE_8__/* .CreateView */ .t, {
        armyName: armyName,
        pointsLimit: pointsLimit
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ CreateView)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_armySlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5876);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7622);
/* harmony import */ var _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3744);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_armySlice__WEBPACK_IMPORTED_MODULE_4__, _data_listSlice__WEBPACK_IMPORTED_MODULE_5__, _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__]);
([_data_armySlice__WEBPACK_IMPORTED_MODULE_4__, _data_listSlice__WEBPACK_IMPORTED_MODULE_5__, _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function CreateView(props) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const armyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.army);
  const {
    0: autoSave,
    1: setAutoSave
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const {
    0: isCampaignList,
    1: setCampaignList
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const factionName = router.query["faction"];
  const armyId = router.query["armyId"];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var _armyState$armyBooks;

    if (((_armyState$armyBooks = armyState.armyBooks) === null || _armyState$armyBooks === void 0 ? void 0 : _armyState$armyBooks.length) < 1) return;

    if (armyId && armyState.loadedArmyBooks.length === 0) {
      dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_4__/* .getArmyBookData */ .zK)({
        armyUid: armyId,
        gameSystem: armyState.gameSystem,
        reset: false
      }));
    }
  }, [armyState.armyBooks]);

  const create = async () => {
    const name = props.armyName || "My List";
    const creationTime = autoSave ? _services_PersistenceService__WEBPACK_IMPORTED_MODULE_6__/* ["default"].createSave */ .Z.createSave(armyState, name) : null;
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_5__/* .createList */ .$l)({
      name,
      units: [],
      points: 0,
      pointsLimit: props.pointsLimit || 0,
      creationTime: creationTime,
      campaignMode: isCampaignList
    }));
    router.push({
      pathname: "/list",
      query: {
        listId: creationTime
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormGroup, {
      className: "mt-4 is-flex-direction-row is-align-items-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControlLabel, {
        control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
          checked: autoSave,
          onClick: () => setAutoSave(prev => !prev)
        }),
        label: "Auto-save changes"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormGroup, {
      className: "mb-2 is-flex-direction-row is-align-items-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControlLabel, {
        control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
          checked: isCampaignList,
          onClick: () => setCampaignList(prev => !prev)
        }),
        label: "Campaign Mode"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {
      className: "mx-auto px-6",
      variant: "contained",
      onClick: () => create(),
      disabled: armyState.loadingArmyData,
      children: "Create List"
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditView)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7622);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_listSlice__WEBPACK_IMPORTED_MODULE_3__]);
_data_listSlice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function EditView(props) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const update = () => {
    dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_3__/* .updateListSettings */ .vw)({
      name: props.armyName,
      pointsLimit: props.pointsLimit || 0
    }));
    router.push({
      pathname: "/list",
      query: _objectSpread({}, router.query)
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {
    className: "mt-4 mx-auto px-6",
    variant: "contained",
    onClick: () => update(),
    children: "Save Changes"
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MultipleArmySelections)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_armySlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5876);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_listSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7622);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_armySlice__WEBPACK_IMPORTED_MODULE_5__, _data_listSlice__WEBPACK_IMPORTED_MODULE_7__]);
([_data_armySlice__WEBPACK_IMPORTED_MODULE_5__, _data_listSlice__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MultipleArmySelections() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const armyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.army);
  const factions = armyState.selectedFactions;
  const loadedArmyBooks = armyState.loadedArmyBooks;
  const isEdit = !!router.query["edit"];
  const allowRemove = lodash__WEBPACK_IMPORTED_MODULE_6___default().uniq(armyState.selectedFactions.concat(loadedArmyBooks.filter(book => !book.factionName).map(book => book.name))).length > 1;

  function addAnotherBook() {
    router.replace({
      pathname: "/armyBookSelection",
      query: _objectSpread(_objectSpread({}, router.query), {}, {
        append: true
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
      className: "my-2",
      fontWeight: 600,
      children: "Selected Army Books"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper, {
      sx: {
        background: "rgba(33, 33, 33, 0.08)"
      },
      elevation: 0,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.List, {
        children: [loadedArmyBooks.filter(book => !book.factionName).map(army => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ArmyBookSelection, {
          army: army,
          allowRemove: allowRemove,
          editMode: isEdit
        }, army.uid)), factions.map(faction => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(FactionArmyBookSelection, {
          faction: faction,
          allowRemove: allowRemove,
          editMode: isEdit
        }, faction)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
          disablePadding: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItemButton, {
            color: "primary",
            onClick: addAnotherBook,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
              primary: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                color: "primary",
                fontWeight: 600,
                children: "ADD ANOTHER ARMY"
              })
            })
          })
        })]
      })
    })]
  });
}

function ArmyBookSelection({
  army,
  allowRemove,
  editMode
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  function remove(armyId) {
    const prompt = !editMode || confirm("Removing this army book will remove all associated units. Remove anyway?");

    if (prompt) {
      dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_5__/* .unloadArmyBook */ .dn)(armyId));
      dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_7__/* .removeUnitsForBook */ .TF)(armyId));
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
      secondaryAction: allowRemove && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
        edge: "end",
        "aria-label": "comments",
        color: "primary",
        onClick: () => remove(army.uid),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default()), {})
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
        primary: army.name
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Divider, {})]
  });
}

function FactionArmyBookSelection({
  faction,
  allowRemove,
  editMode
}) {
  var _factionBooks$filter$;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const armyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.army);
  const armyBooks = armyState.armyBooks;
  const loadedArmyBooks = armyState.loadedArmyBooks.filter(book => book.factionName === faction);
  const factionBooks = armyBooks.filter(book => book.factionName === faction);
  const factionRelation = (_factionBooks$filter$ = factionBooks.filter(book => book.factionRelation)[0]) === null || _factionBooks$filter$ === void 0 ? void 0 : _factionBooks$filter$.factionRelation;

  function removeFaction(faction) {
    const prompt = !editMode || confirm("Removing this faction will remove all associated units. Remove anyway?");

    if (prompt) {
      const booksToRemove = loadedArmyBooks.map(book => book.uid);
      dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_5__/* .unloadFaction */ .ZT)(faction));

      for (let bookId of booksToRemove) {
        dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_7__/* .removeUnitsForBook */ .TF)(bookId));
      }
    }
  }

  function remove(armyId) {
    const prompt = !editMode || confirm("Removing this army book will remove all associated units. Remove anyway?");

    if (prompt) {
      dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_5__/* .unloadArmyBook */ .dn)(armyId));
      dispatch((0,_data_listSlice__WEBPACK_IMPORTED_MODULE_7__/* .removeUnitsForBook */ .TF)(armyId));
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
      secondaryAction: allowRemove && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
        edge: "end",
        "aria-label": "comments",
        color: "primary",
        onClick: () => removeFaction(faction),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default()), {})
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
        primary: faction + " " + factionRelation,
        secondary: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          style: {
            color: "#B00020"
          },
          children: loadedArmyBooks.length === 0 ? "Select at least one option" : ""
        })
      })
    }), factionBooks.map((book, bookIndex) => {
      const enabled = loadedArmyBooks.some(x => x.uid === book.uid);

      const selectSubfaction = () => {
        if (!enabled) {
          dispatch((0,_data_armySlice__WEBPACK_IMPORTED_MODULE_5__/* .getArmyBookData */ .zK)({
            armyUid: book.uid,
            gameSystem: armyState.gameSystem,
            reset: false
          }));
        } else {
          remove(book.uid);
        }
      };

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [bookIndex > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Divider, {
          sx: {
            marginLeft: "26px"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
          secondaryAction: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
            sx: {
              right: "-12px"
            },
            checked: enabled,
            onClick: selectSubfaction
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
            primary: book.name,
            sx: {
              textIndent: "12px"
            }
          })
        })]
      }, book.uid);
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Divider, {})]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIosNew");

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
var __webpack_exports__ = __webpack_require__.X(0, [876,650,795,176], () => (__webpack_exec__(2624)));
module.exports = __webpack_exports__;

})();