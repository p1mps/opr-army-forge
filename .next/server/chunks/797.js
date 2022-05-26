"use strict";
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 4631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getFlatTraitDefinitions),
/* harmony export */   "y": () => (/* binding */ getTraitDefinitions)
/* harmony export */ });
/* harmony import */ var _services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9224);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__]);
_services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const traitDefinitions = {
  gf: {
    units: [{
      "name": "Agile",
      "description": "Moves +1” on advance and +2” on rush and charge."
    }, {
      "name": "Headstrong",
      "description": "Gets +1 to rolls when taking morale tests."
    }, {
      "name": "Specialist (Melee)",
      "description": "Gets +1 to rolls in melee."
    }, {
      "name": "Specialist (Shooting)",
      "description": "Gets +1 to rolls when shooting."
    }, {
      "name": "Resilient",
      "description": "Gets +1 to rolls when blocking hits."
    }, {
      "name": "Elite",
      "description": "May re-roll one roll of any kind once per game."
    }],
    "heroes": [{
      name: "Captain",
      traits: [{
        name: "Leader",
        description: "Friendly units within 6” get +1 to morale tests."
      }, {
        name: "Instigator",
        description: "Friendly units within 6” get +1 to melee."
      }, {
        name: "Tactician",
        description: "Friendly units within 6” get +1 to shooting."
      }]
    }, {
      name: "Support",
      traits: [{
        name: "Vanguard",
        description: "Friendly units within 6” get +4” charge range."
      }, {
        name: "Scavenger",
        description: "Friendly units within 6” get +6” firing range."
      }, {
        name: "Mastermind",
        description: "Enemy units within 6” get -1 to defense."
      }]
    }, {
      name: "Fighter",
      traits: [{
        name: "Duellist",
        description: "Enemy units get -1 in melee against the hero."
      }, {
        name: "Fanatic",
        description: "The hero gets +1 attack when in melee."
      }, {
        name: "Berserker",
        description: "Enemies get -1 to morale tests when in melee with the hero."
      }]
    }, {
      name: "Shooter",
      traits: [{
        name: "Hunter",
        description: "The hero may shoot even after rush actions."
      }, {
        name: "Destroyer",
        description: "The hero gets AP(+1) when shooting."
      }, {
        name: "Suppressor",
        description: "Enemies shot at by the hero get -1 to shooting until the end of the round."
      }]
    }, {
      name: "Pathfinder",
      traits: [{
        name: "Runner",
        description: "The hero always moves +2” (even in terrain)."
      }, {
        name: "Prowler",
        description: "Enemy units further than 12” get -1 to shooting rolls against the hero."
      }, {
        name: "Daredevil",
        description: "The hero ignores dangerous terrain effects."
      }]
    }, {
      name: "Healer",
      traits: [{
        name: "Chemist",
        description: "Friendly units within 6” get +1 to morale tests when in melee."
      }, {
        name: "Herbalist",
        description: "Friendly units within 6” may ignore wounds on a roll of 6+."
      }, {
        name: "Warden",
        description: "When the hero is activated roll one die, on a 5+ all friendly units within 6” stop being pinned."
      }]
    }],
    "injuries": [{
      "name": "Chest Wound",
      "description": "Gets -1 to rolls when blocking hits."
    }, {
      "name": "Blinded Eye",
      "description": "Gets -1 to rolls when shooting."
    }, {
      "name": "Arm Injury",
      "description": "Gets -1 to rolls when in melee."
    }, {
      "name": "Traumatised",
      "description": "Gets -1 to rolls when taking morale tests."
    }, {
      "name": "Smashed Leg",
      "description": "Moves -1” on advance and -2” on rush and charge actions."
    }],
    "talents": [{
      "name": "Motivated",
      "description": "Always passes the first morale test of the match."
    }, {
      "name": "Crazed",
      "description": "Gets +1 attack in melee when charging."
    }, {
      "name": "Bitter Rivalry",
      "description": "Always hits pinned units on 2+."
    }, {
      "name": "Horrible Scars",
      "description": "Enemy units get -1 to hit when in melee against the hero."
    }, {
      "name": "Toughened",
      "description": "Gets Tough(+1)."
    }]
  },
  gff: {
    units: [{
      "name": "Agile",
      "description": "Moves +1” on advance and +2” on rush and charge."
    }, {
      "name": "Headstrong",
      "description": "Gets +1 to rolls when taking morale tests."
    }, {
      "name": "Specialist (Melee)",
      "description": "Gets +1 to rolls in melee."
    }, {
      "name": "Specialist (Shooting)",
      "description": "Gets +1 to rolls when shooting."
    }, {
      "name": "Resilient",
      "description": "Gets +1 to rolls when blocking hits."
    }, {
      "name": "Elite",
      "description": "May re-roll one die of any kind once per game."
    }],
    "heroes": [{
      name: "Captain",
      traits: [{
        name: "Leader",
        description: "Friendly units within 3” get +1 to morale tests."
      }, {
        name: "Instigator",
        description: "Friendly units within 3” get +1 to melee."
      }, {
        name: "Tactician",
        description: "Friendly units within 3” get +1 to shooting."
      }]
    }, {
      name: "Support",
      traits: [{
        name: "Vanguard",
        description: "Friendly units within 3” get +4” charge range."
      }, {
        name: "Scavenger",
        description: "Friendly units within 3” get +6” firing range."
      }, {
        name: "Mastermind",
        description: "Enemy units within 3” get -1 to defense."
      }]
    }, {
      name: "Fighter",
      traits: [{
        name: "Duellist",
        description: "Enemy units get -1 in melee against the hero."
      }, {
        name: "Fanatic",
        description: "The hero gets +1 attack when in melee."
      }, {
        name: "Berserker",
        description: "Enemies get +1 to wound results when in melee with the hero."
      }]
    }, {
      name: "Shooter",
      traits: [{
        name: "Hunter",
        description: "The hero may shoot even after rush actions."
      }, {
        name: "Destroyer",
        description: "The hero gets AP(+1) when shooting."
      }, {
        name: "Suppressor",
        description: "Enemies shot at by the hero get -1 to shooting until the end of the round."
      }]
    }, {
      name: "Pathfinder",
      traits: [{
        name: "Runner",
        description: "The hero always moves +2” (even in terrain)."
      }, {
        name: "Prowler",
        description: "Enemy units further than 12” get -1 to shooting rolls against the hero."
      }, {
        name: "Daredevil",
        description: "The hero needs to roll only 2+ (instead of 3+) when dropping, leaping and jumping."
      }]
    }, {
      name: "Healer",
      traits: [{
        name: "Chemist",
        description: "Friendly units within 3” get -1 to wound result rolls."
      }, {
        name: "Herbalist",
        description: "Friendly units within 3” may ignore wounds on a roll of 6+."
      }, {
        name: "Warden",
        description: "When the hero is activated roll one die, on a 5+ all friendly units within 3” stop being stunned."
      }]
    }],
    "injuries": [{
      "name": "Chest Wound",
      "description": "Gets -1 to rolls when blocking hits."
    }, {
      "name": "Blinded Eye",
      "description": "Gets -1 to rolls when shooting."
    }, {
      "name": "Arm Injury",
      "description": "Gets -1 to rolls when in melee."
    }, {
      "name": "Traumatised",
      "description": "Gets -1 to rolls when taking morale tests."
    }, {
      "name": "Smashed Leg",
      "description": "Moves -1” on advance and -2” on rush and charge actions."
    }],
    "talents": [{
      "name": "Motivated",
      "description": "Always passes the first morale test of the match."
    }, {
      "name": "Crazed",
      "description": "Gets +1 attack in melee when charging."
    }, {
      "name": "Bitter Rivalry",
      "description": "Always hits stunned units on 2+."
    }, {
      "name": "Horrible Scars",
      "description": "Enemy units get -1 to hit when in melee against the hero."
    }, {
      "name": "Toughened",
      "description": "Gets Tough(+1)."
    }]
  },
  aof: {
    units: [{
      "name": "Agile",
      "description": "Moves +1” on advance and +2” on rush and charge."
    }, {
      "name": "Headstrong",
      "description": "Gets +1 to rolls when taking morale tests."
    }, {
      "name": "Specialist (Melee)",
      "description": "Gets +1 to rolls in melee."
    }, {
      "name": "Specialist (Shooting)",
      "description": "Gets +1 to rolls when shooting."
    }, {
      "name": "Resilient",
      "description": "Gets +1 to rolls when blocking hits."
    }, {
      "name": "Elite",
      "description": "May re-roll one roll of any kind once per game."
    }],
    "heroes": [{
      name: "Captain",
      traits: [{
        name: "Leader",
        description: "Friendly units within 6” get +1 to morale tests."
      }, {
        name: "Instigator",
        description: "Friendly units within 6” get +1 to melee."
      }, {
        name: "Tactician",
        description: "Friendly units within 6” get +1 to shooting."
      }]
    }, {
      name: "Support",
      traits: [{
        name: "Vanguard",
        description: "Friendly units within 6” get +1 to morale tests."
      }, {
        name: "Scavenger",
        description: "Friendly units within 6” get +1 to melee."
      }, {
        name: "Mastermind",
        description: "Friendly units within 6” get +1 to shooting."
      }]
    }, {
      name: "Fighter",
      traits: [{
        name: "Duellist",
        description: "Friendly units within 6” get +1 to morale tests."
      }, {
        name: "Fanatic",
        description: "Friendly units within 6” get +1 to melee."
      }, {
        name: "Berserker",
        description: "Friendly units within 6” get +1 to shooting."
      }]
    }, {
      name: "Shooter",
      traits: [{
        name: "Hunter",
        description: "The hero may shoot even after rush actions."
      }, {
        name: "Destroyer",
        description: "The hero gets AP(+1) when shooting."
      }, {
        name: "Suppressor",
        description: "Enemies shot at by the hero get -1 to shooting until the end of the round."
      }]
    }, {
      name: "Pathfinder",
      traits: [{
        name: "Runner",
        description: "The hero always moves +2” (even in terrain)."
      }, {
        name: "Prowler",
        description: "Enemy units further than 12” get -1 to shooting rolls against the hero."
      }, {
        name: "Daredevil",
        description: "The hero ignores dangerous terrain effects."
      }]
    }, {
      name: "Healer",
      traits: [{
        name: "Chemist",
        description: "Friendly units within 6” get +1 to morale tests when in melee."
      }, {
        name: "Herbalist",
        description: "Friendly units within 6” may ignore wounds on a roll of 6+."
      }, {
        name: "Warden",
        description: "When the hero is activated roll one die, on a 5+ all friendly units within 6” stop being pinned."
      }]
    }],
    "injuries": [{
      "name": "Chest Wound",
      "description": "Gets -1 to rolls when blocking hits."
    }, {
      "name": "Blinded Eye",
      "description": "Gets -1 to rolls when shooting."
    }, {
      "name": "Arm Injury",
      "description": "Gets -1 to rolls when in melee."
    }, {
      "name": "Traumatised",
      "description": "Gets -1 to rolls when taking morale tests."
    }, {
      "name": "Smashed Leg",
      "description": "Moves -1” on advance and -2” on rush and charge actions."
    }],
    "talents": [{
      "name": "Motivated",
      "description": "Always passes the first morale test of the match."
    }, {
      "name": "Crazed",
      "description": "Gets +1 attack in melee when charging."
    }, {
      "name": "Bitter Rivalry",
      "description": "Always hits pinned units on 2+."
    }, {
      "name": "Horrible Scars",
      "description": "Enemy units get -1 to hit when in melee against the hero."
    }, {
      "name": "Toughened",
      "description": "Gets Tough(+1)."
    }]
  },
  aofs: {
    units: [{
      "name": "Agile",
      "description": "Moves +1” on advance and +2” on rush and charge."
    }, {
      "name": "Headstrong",
      "description": "Gets +1 to rolls when taking morale tests."
    }, {
      "name": "Specialist (Melee)",
      "description": "Gets +1 to rolls in melee."
    }, {
      "name": "Specialist (Shooting)",
      "description": "Gets +1 to rolls when shooting."
    }, {
      "name": "Resilient",
      "description": "Gets +1 to rolls when blocking hits."
    }, {
      "name": "Elite",
      "description": "May re-roll one roll of any kind once per game."
    }],
    "heroes": [{
      name: "Captain",
      traits: [{
        name: "Leader",
        description: "Friendly units within 6” get +1 to morale tests."
      }, {
        name: "Instigator",
        description: "Friendly units within 6” get +1 to melee."
      }, {
        name: "Tactician",
        description: "Friendly units within 6” get +1 to shooting."
      }]
    }, {
      name: "Support",
      traits: [{
        name: "Vanguard",
        description: "Friendly units within 6” get +1 to morale tests."
      }, {
        name: "Scavenger",
        description: "Friendly units within 6” get +1 to melee."
      }, {
        name: "Mastermind",
        description: "Friendly units within 6” get +1 to shooting."
      }]
    }, {
      name: "Fighter",
      traits: [{
        name: "Duellist",
        description: "Friendly units within 6” get +1 to morale tests."
      }, {
        name: "Fanatic",
        description: "Friendly units within 6” get +1 to melee."
      }, {
        name: "Berserker",
        description: "Friendly units within 6” get +1 to shooting."
      }]
    }, {
      name: "Shooter",
      traits: [{
        name: "Hunter",
        description: "The hero may shoot even after rush actions."
      }, {
        name: "Destroyer",
        description: "The hero gets AP(+1) when shooting."
      }, {
        name: "Suppressor",
        description: "Enemies shot at by the hero get -1 to shooting until the end of the round."
      }]
    }, {
      name: "Pathfinder",
      traits: [{
        name: "Runner",
        description: "The hero always moves +2” (even in terrain)."
      }, {
        name: "Prowler",
        description: "Enemy units further than 12” get -1 to shooting rolls against the hero."
      }, {
        name: "Daredevil",
        description: "The hero ignores dangerous terrain effects."
      }]
    }, {
      name: "Healer",
      traits: [{
        name: "Chemist",
        description: "Friendly units within 6” get +1 to morale tests when in melee."
      }, {
        name: "Herbalist",
        description: "Friendly units within 6” may ignore wounds on a roll of 6+."
      }, {
        name: "Warden",
        description: "When the hero is activated roll one die, on a 5+ all friendly units within 6” stop being pinned."
      }]
    }],
    "injuries": [{
      "name": "Chest Wound",
      "description": "Gets -1 to rolls when blocking hits."
    }, {
      "name": "Blinded Eye",
      "description": "Gets -1 to rolls when shooting."
    }, {
      "name": "Arm Injury",
      "description": "Gets -1 to rolls when in melee."
    }, {
      "name": "Traumatised",
      "description": "Gets -1 to rolls when taking morale tests."
    }, {
      "name": "Smashed Leg",
      "description": "Moves -1” on advance and -2” on rush and charge actions."
    }],
    "talents": [{
      "name": "Motivated",
      "description": "Always passes the first morale test of the match."
    }, {
      "name": "Crazed",
      "description": "Gets +1 attack in melee when charging."
    }, {
      "name": "Bitter Rivalry",
      "description": "Always hits pinned units on 2+."
    }, {
      "name": "Horrible Scars",
      "description": "Enemy units get -1 to hit when in melee against the hero."
    }, {
      "name": "Toughened",
      "description": "Gets Tough(+1)."
    }]
  }
};
function getTraitDefinitions() {
  return traitDefinitions[_services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gameSystem */ .Z.gameSystem];
}
function getFlatTraitDefinitions() {
  const defs = traitDefinitions[_services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gameSystem */ .Z.gameSystem];

  if (!traitDefinitions[_services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gameSystem */ .Z.gameSystem]["all"]) {
    traitDefinitions[_services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gameSystem */ .Z.gameSystem]["all"] = defs.units.concat(defs.injuries).concat(defs.talents).concat(defs.heroes.flatMap(x => x.traits));
  }

  return traitDefinitions[_services_UpgradeService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gameSystem */ .Z.gameSystem]["all"];
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UnitEquipmentTable)
});

// UNUSED EXPORTS: WeaponRow

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./services/EquipmentService.ts
var EquipmentService = __webpack_require__(9674);
// EXTERNAL MODULE: external "pluralize"
var external_pluralize_ = __webpack_require__(420);
var external_pluralize_default = /*#__PURE__*/__webpack_require__.n(external_pluralize_);
// EXTERNAL MODULE: ./views/components/RuleList.tsx + 1 modules
var RuleList = __webpack_require__(6503);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
;// CONCATENATED MODULE: ./services/DataParsingService.ts
class DataParsingService {
  static parseRule(r) {
    const defenseMatch = /^(Defense) \+(\d+)\s?(in melee)?/.exec(r);

    if (defenseMatch) {
      return {
        key: defenseMatch[1].toLowerCase().replace(/\s+/g, "-"),
        name: defenseMatch[1],
        rating: defenseMatch[2] || "",
        condition: defenseMatch[3] || ""
      };
    }

    const rMatch = /^(.+?)(?:\((\+?)(\d+)\))?( in melee)?$/.exec(r);
    const result = {
      key: rMatch[1].toLowerCase().replace(/\s+/g, "-"),
      name: rMatch[1],
      rating: rMatch[3] || "",
      modify: rMatch[2] === "+",
      condition: rMatch[4] ? rMatch[4].trim() : null
    };
    if (!result.condition) delete result.condition;
    return result;
  }

}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./views/UnitEquipmentTable.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function UnitEquipmentTable({
  unit,
  square,
  hideEquipment = false
}) {
  const isWeapon = e => e.attacks;

  const weaponsFromItems = external_lodash_default().flatMap(unit.loadout.filter(e => e.type === "ArmyBookItem"), e => e.content.filter(item => item.type === "ArmyBookWeapon"));

  const weapons = unit.loadout.filter(e => isWeapon(e)).concat(weaponsFromItems.map(item => {
    var _item$count;

    return _objectSpread(_objectSpread({}, item), {}, {
      count: (_item$count = item.count) !== null && _item$count !== void 0 ? _item$count : 1
    });
  }));
  const equipment = unit.loadout.filter(e => !isWeapon(e));
  const combinedEquipment = equipment.map(e => {
    if (e.type === "ArmyBookItem") return {
      label: e.name,
      specialRules: e.content.filter(c => c.type === "ArmyBookRule" || c.type === "ArmyBookDefense")
    };
    return {
      label: e.label || e.name,
      specialRules: e.specialRules.map(DataParsingService.parseRule)
    };
  });
  const hasWeapons = weapons.length > 0;
  const hasEquipment = equipment.length > 0; // || itemUpgrades.length > 0;

  const weaponGroups = external_lodash_default().groupBy(weapons, w => {
    var _w$name;

    return external_pluralize_default().singular((_w$name = w.name) !== null && _w$name !== void 0 ? _w$name : w.label) + w.attacks;
  });

  const itemGroups = external_lodash_default().groupBy(combinedEquipment, w => {
    var _w$name2;

    return external_pluralize_default().singular((_w$name2 = w.name) !== null && _w$name2 !== void 0 ? _w$name2 : w.label);
  });

  const weaponGroupKeys = Object.keys(weaponGroups);
  const cellStyle = {
    paddingLeft: "8px",
    paddingRight: "8px",
    borderBottom: "none"
  };

  const headerStyle = _objectSpread(_objectSpread({}, cellStyle), {}, {
    fontWeight: 600,
    paddingTop: "2px",
    paddingBottom: "2px"
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [hasWeapons && /*#__PURE__*/jsx_runtime_.jsx(material_.TableContainer, {
      component: material_.Paper,
      square: square,
      elevation: 0,
      style: {
        borderBottom: "1px solid rgba(0,0,0,.12)",
        backgroundColor: "transparent"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Table, {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableHead, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
            style: {
              backgroundColor: "#EBEBEB",
              fontWeight: 600
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
              style: headerStyle,
              children: "Weapon"
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
              style: headerStyle,
              children: "RNG"
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
              style: headerStyle,
              children: "ATK"
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
              style: headerStyle,
              children: "AP"
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
              style: headerStyle,
              children: "SPE"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableBody, {
          children: weaponGroupKeys.map((key, i) => {
            const group = weaponGroups[key];
            const upgrade = group[0];
            const count = group.reduce((c, next) => c + next.count, 0);

            const e = _objectSpread(_objectSpread({}, upgrade), {}, {
              count
            });

            return /*#__PURE__*/jsx_runtime_.jsx(WeaponRow, {
              weapon: e,
              isProfile: false,
              isLastRow: i === weaponGroupKeys.length - 1
            }, key);
          })
        })]
      })
    }), hasEquipment && !hideEquipment && /*#__PURE__*/jsx_runtime_.jsx(material_.TableContainer, {
      component: material_.Paper,
      className: "mt-2",
      square: square,
      elevation: 0,
      style: {
        borderBottom: "1px solid rgba(0,0,0,.12)",
        backgroundColor: "transparent"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Table, {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableHead, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
            style: {
              backgroundColor: "#EBEBEB",
              fontWeight: 600
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
              style: headerStyle,
              children: "Equipment"
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
              style: headerStyle,
              children: "SPE"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableBody, {
          children: Object.values(itemGroups).map((group, index) => {
            const e = group[0];
            const count = group.reduce((c, next) => c + (next.count || 1), 0);
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableCell, {
                style: cellStyle,
                children: [count > 1 ? `${count}x ` : "", e.label]
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                style: cellStyle,
                children: /*#__PURE__*/jsx_runtime_.jsx(RuleList/* default */.Z, {
                  specialRules: e.specialRules
                })
              })]
            }, index);
          })
        })]
      })
    })]
  });
}
function WeaponRow({
  weapon,
  isProfile,
  isLastRow
}) {
  const count = weapon.count;
  const name = count > 1 ? external_pluralize_default().plural(weapon.name) : external_pluralize_default().singular(weapon.name);
  const weaponCount = count > 1 ? `${count}x ` : null;
  const rules = weapon.specialRules.filter(r => r.name !== "AP");
  const cellStyle = {
    paddingLeft: "8px",
    paddingRight: "8px"
  };
  const borderStyle = {
    borderBottom: "none",
    borderTop: isProfile ? "none" : "1px solid rgb(224, 224, 224)",
    paddingBottom: isLastRow ? "12px" : null
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableCell, {
      style: _objectSpread(_objectSpread(_objectSpread({}, borderStyle), cellStyle), {}, {
        fontWeight: 600
      }),
      children: [weaponCount, isProfile ? `- ${name}` : name]
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
      style: borderStyle,
      children: weapon.range ? weapon.range + '"' : "-"
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
      style: borderStyle,
      children: weapon.attacks ? "A" + weapon.attacks : "-"
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
      style: borderStyle,
      children: EquipmentService/* default.getAP */.Z.getAP(weapon) || "-"
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
      style: borderStyle,
      children: rules && rules.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(RuleList/* default */.Z, {
        specialRules: rules
      }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "-"
      })
    })]
  });
}

/***/ }),

/***/ 3987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ CustomTooltip)
/* harmony export */ });
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CustomTooltip = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_ref => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_0___default()), _objectSpread(_objectSpread({}, props), {}, {
    classes: {
      popper: className
    }
  }));
})(({
  theme
}) => ({
  [`& .${_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_0__.tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(0,0,0,.75)",
    padding: "8px",
    fontSize: "14px"
  }
}));

/***/ }),

/***/ 6503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RuleList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./views/components/CustomTooltip.tsx
var CustomTooltip = __webpack_require__(3987);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./views/components/RuleItem.tsx



function RuleItem({
  label,
  description
}) {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const bullet = /•|/;
  const descParts = description.split(bullet).map(part => /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: part
  }, part));
  let content = description ? /*#__PURE__*/jsx_runtime_.jsx(CustomTooltip/* CustomTooltip */.W, {
    title: descParts,
    arrow: true,
    open: open,
    leaveDelay: 6000,
    leaveTouchDelay: 6000,
    onClose: () => setOpen(false),
    onClick: e => {
      e.stopPropagation();
      setOpen(true);
    },
    onMouseOver: () => setOpen(true),
    onMouseOut: () => setOpen(false),
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      style: {
        userSelect: "none",
        textDecoration: "underline",
        textDecorationStyle: "dashed",
        textDecorationColor: "#666",
        textUnderlineOffset: "4px"
      },
      children: label
    })
  }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: label
  });
  return content;
}
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./services/RulesService.ts
var RulesService = __webpack_require__(9605);
// EXTERNAL MODULE: ./services/Helpers.ts
var Helpers = __webpack_require__(9358);
;// CONCATENATED MODULE: ./views/components/RuleList.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function RuleList({
  specialRules
}) {
  var _specialRules$filter;

  const army = (0,external_react_redux_.useSelector)(state => state.army);
  const gameRules = army.rules;
  const armyRules = army.loadedArmyBooks.flatMap(x => x.specialRules);
  const ruleDefinitions = gameRules.concat(armyRules);
  const rules = (_specialRules$filter = specialRules === null || specialRules === void 0 ? void 0 : specialRules.filter(r => !!r && r.name != "-")) !== null && _specialRules$filter !== void 0 ? _specialRules$filter : [];
  if (!rules || rules.length === 0) return null;
  const ruleGroups = (0,Helpers/* groupBy */.vM)(rules, "name");
  const keys = Object.keys(ruleGroups); // Sort rules alphabetically

  keys.sort((a, b) => a.localeCompare(b));
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: keys.map((key, index) => {
      const group = ruleGroups[key];
      const rule = group[0];
      const rating = rule.rating == null || rule.rating == "" ? null : key === "Psychic" ? // Take Highest
      Math.max(...group.map(rule => parseInt(rule.rating))) : // Sum all occurrences
      group.reduce((total, next) => next.rating ? total + parseInt(next.rating) : total, 0); // Rules with ratings do not show multiple instances

      const count = rating > 0 ? 0 : group.length; //console.log(rule)

      const ruleDefinition = ruleDefinitions.filter(r => /(.+?)(?:\(|$)/.exec(r.name)[0] === rule.name)[0];
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [index > 0 ? /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "mr-1",
          children: ", "
        }) : null, /*#__PURE__*/jsx_runtime_.jsx(RuleItem, {
          label: (count > 1 ? `${count}x ` : "") + RulesService/* default.displayName */.Z.displayName(_objectSpread(_objectSpread({}, rule), {}, {
            rating: rule.rating ? rating.toString() : null
          })),
          description: rule.description || (ruleDefinition === null || ruleDefinition === void 0 ? void 0 : ruleDefinition.description) || ""
        })]
      }, index);
    })
  });
} //export const MemoisedRuleList = memo(RuleList);

/***/ })

};
;