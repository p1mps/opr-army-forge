"use strict";
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 3795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ MenuBar)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5780);
/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function MenuBar(props) {
  const appBar = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AppBar, {
    position: "static",
    elevation: 0,
    color: props.transparent ? "transparent" : undefined,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Toolbar, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
        size: "large",
        edge: "start",
        color: "inherit",
        "aria-label": "menu",
        sx: {
          mr: 2
        },
        onClick: props.onBackClick,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_1___default()), {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
        variant: "h6",
        component: "div",
        sx: {
          flexGrow: 1
        },
        children: props.title
      }), props.right]
    })
  });

  return props.transparent ? appBar : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper, {
    elevation: 2,
    color: "primary",
    square: true,
    children: appBar
  });
}

/***/ })

};
;