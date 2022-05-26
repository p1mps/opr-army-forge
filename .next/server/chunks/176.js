"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArmyImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["imageUrl", "armyData", "name", "size"];



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const rotations = {};
function ArmyImage(_ref) {
  var _props$className;

  let {
    imageUrl = null,
    armyData = null,
    name = null,
    size = "100px"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const path = armyData.gameSystem ? armyData.gameSystem.indexOf("aof") === 0 ? "aof" : "gf_armies" : armyData.gameSystemId === 4 ? "aof" : "gf_armies";
  const urlName = name.replace(/Daemons of.+/gi, "Daemons").replace(/\s+/g, "-").toLowerCase();

  const directory = (() => {
    if (urlName === "jackals") return "2022/04";
    if (urlName === "havoc-war-clans") return "2022/05";
    return "2022/02";
  })();

  const url = imageUrl || `https://onepagerules.files.wordpress.com/${directory}/${urlName}.png`; // `img/${path}/${name}.png`;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : ""} is-flex p-2`,
    style: _objectSpread(_objectSpread({}, props.style), {}, {
      position: "relative",
      height: size,
      flexBasis: size,
      boxSizing: "content-box"
    }),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      style: {
        zIndex: 0,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("img/army_bg.png")`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        transform: `rotate(${rotations[name] || (rotations[name] = 360 * Math.random())}deg)`
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "is-flex",
      style: {
        height: "100%",
        width: "100%",
        backgroundImage: `url("${url}")`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 1
      }
    })]
  }));
}

/***/ })

};
;