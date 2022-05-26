(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9399);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_FolderOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2681);
/* harmony import */ var _mui_icons_material_FolderOpen__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FolderOpen__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_components_NotificationBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(511);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









function Home() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  let canUseRegexLookahead = false;

  try {
    const match = new RegExp("q(?=u)").exec("qu");

    if (match) {
      canUseRegexLookahead = true;
    }
  } catch (e) {
    console.warn('Your browser does not support regex lookahead.');
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_views_components_NotificationBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeContainer) + " container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().outerColumn),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeColumn) + " mx-auto has-text-centered p-4 pt-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
              style: {
                letterSpacing: "8px"
              },
              children: "ARMY"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo) + " mx-auto"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h1", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
              children: ["FORGE", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().betaTag)
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttonContainer) + " is-flex is-flex-direction-column p-4",
            children: canUseRegexLookahead ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "contained",
                color: "primary",
                className: "mb-4",
                onClick: () => router.push("/gameSystem"),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3___default()), {}), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                  className: "ml-2",
                  style: {
                    fontWeight: 600
                  },
                  children: "Create A New List"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "outlined",
                sx: {
                  borderColor: "white",
                  color: "white",
                  background: "rgba(255,255,255,.2)",
                  "&:hover": {
                    borderColor: "white",
                    background: "rgba(255,255,255,.3)"
                  }
                },
                onClick: () => router.push("/load"),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_icons_material_FolderOpen__WEBPACK_IMPORTED_MODULE_2___default()), {}), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                  className: "ml-2",
                  style: {
                    fontWeight: 600
                  },
                  children: "Open A List"
                })]
              })]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "notification is-danger",
              children: "Sorry, your browser is not supported!"
            })
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ 511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NotificationBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function NotificationBanner() {
  const displayError = false;
  if (!displayError) return null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "notification is-danger is-radiusless mb-0",
    children: "The save file format is changing on Friday - all existing saved/exported lists will need to be recreated!"
  });
}

/***/ }),

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"homeContainer": "Home_homeContainer__i_mEW",
	"outerColumn": "Home_outerColumn__Gm3aN",
	"homeColumn": "Home_homeColumn__5wudg",
	"title": "Home_title__T09hD",
	"logo": "Home_logo__27_tb",
	"betaTag": "Home_betaTag__36VBp",
	"buttonContainer": "Home_buttonContainer__IqHjU"
};


/***/ }),

/***/ 6146:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 2681:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/FolderOpen");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5006));
module.exports = __webpack_exports__;

})();