/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#main-screen {\n  display: grid;\n  grid-template-rows: 1fr 1fr 400px 300px;\n}\n\n.target-grid {\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n}\n\n.indicator-sq,\n.empty-sq {\n  width: 40px;\n  height: 40px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n}\n\n.indicator-sq, \n.empty-sq {\n  border-style: solid;\n  border-width: 0.5px;\n}\n\n.indicator-sq {\n  border-color: rgba(256, 256, 256,0);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.empty-sq {\n  border-color: black;\n}\n\n.target-square {\n  width: 35px;\n  height: 35px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px;\n}\n\n.ocean-square {\n  width: 25px;\n  height: 25px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px; \n}\n\n#setup-game-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#user-input-div {\n  display: grid;\n  grid-template-columns: repeat(4, 2fr) 1fr;\n  grid-template-rows: repeat(7, 1fr);\n}\n\n.form-div {\n  grid-column: 3 / 6;\n}\n\n.input-form-ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 2fr 1fr;\n}\n\n.not-ready {\n  opacity: 0.33;\n  filter: alpha(opacity=33);\n}\n\n", "",{"version":3,"sources":["webpack://./src/view/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;;EAEnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,kBAAkB;;EAElB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,kBAAkB;;EAElB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B","sourcesContent":["#main-screen {\n  display: grid;\n  grid-template-rows: 1fr 1fr 400px 300px;\n}\n\n.target-grid {\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n}\n\n.indicator-sq,\n.empty-sq {\n  width: 40px;\n  height: 40px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n}\n\n.indicator-sq, \n.empty-sq {\n  border-style: solid;\n  border-width: 0.5px;\n}\n\n.indicator-sq {\n  border-color: rgba(256, 256, 256,0);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.empty-sq {\n  border-color: black;\n}\n\n.target-square {\n  width: 35px;\n  height: 35px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px;\n}\n\n.ocean-square {\n  width: 25px;\n  height: 25px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px; \n}\n\n#setup-game-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#user-input-div {\n  display: grid;\n  grid-template-columns: repeat(4, 2fr) 1fr;\n  grid-template-rows: repeat(7, 1fr);\n}\n\n.form-div {\n  grid-column: 3 / 6;\n}\n\n.input-form-ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 2fr 1fr;\n}\n\n.not-ready {\n  opacity: 0.33;\n  filter: alpha(opacity=33);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/view/style.css":
/*!****************************!*\
  !*** ./src/view/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller/handle-attack.js":
/*!*****************************************!*\
  !*** ./src/controller/handle-attack.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleAttackCell": () => (/* binding */ handleAttackCell)
/* harmony export */ });
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/game */ "./src/logic/game.js");
/* harmony import */ var _view_update_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/update-view */ "./src/view/update-view.js");




const getRowAndCol = (cellIdx) => {
  const row = Math.floor(cellIdx / 10);
  const col = cellIdx % 10;

  return [row, col];
}

const checkChosenCell = (row, col) => {
  const opponent = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getOpponent();
  const outcome = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[opponent].getGameBoard().receiveAttack(row, col);

  return outcome;
}

const passHitToShip = (outcome) => {
  _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[_logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getOpponent()].getShipArr()[outcome].hit();
}

const handleAttackCell = (event) => {
  const cellIdx = event.srcElement.index;
  const [row, col] = getRowAndCol(cellIdx);
  const outcome = checkChosenCell(row, col);

  if (typeof outcome === 'number') passHitToShip(outcome);
  (0,_view_update_view__WEBPACK_IMPORTED_MODULE_1__.updateDOMAfterAttack)(outcome);
}



/***/ }),

/***/ "./src/controller/handle-next-turn.js":
/*!********************************************!*\
  !*** ./src/controller/handle-next-turn.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBoard": () => (/* binding */ getBoard),
/* harmony export */   "getCurrBoard": () => (/* binding */ getCurrBoard),
/* harmony export */   "getCurrPlayer": () => (/* binding */ getCurrPlayer),
/* harmony export */   "handleNextTurnDuringPlacement": () => (/* binding */ handleNextTurnDuringPlacement),
/* harmony export */   "handleNextTurnInGame": () => (/* binding */ handleNextTurnInGame)
/* harmony export */ });
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/game */ "./src/logic/game.js");


const handleNextTurnInGame = () => {
  _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.toggleCurrPlayer();
};

const handleNextTurnDuringPlacement = () => {
  _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.toggleCurrPlayer();

  const currPlayer = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer();
  const opponent = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getOpponent();

  let targetGrid = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[opponent].getGameBoard();
  let oceanGrid = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[currPlayer].getGameBoard();

  return [currPlayer, targetGrid, oceanGrid];
};

const getBoard = (player) => {
  return _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[player].getGameBoard();
};

const getCurrBoard = () => {
  return _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[_logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer()].getGameBoard();
};

const getCurrPlayer = () => {
  return _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer();
}




/***/ }),

/***/ "./src/controller/handle-place-ships.js":
/*!**********************************************!*\
  !*** ./src/controller/handle-place-ships.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "confirmShipPlacement": () => (/* binding */ confirmShipPlacement)
/* harmony export */ });
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/game */ "./src/logic/game.js");
/* harmony import */ var _logic_gameRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/gameRules */ "./src/logic/gameRules.js");



const confirmShipPlacement = (event) => {
  const i = parseInt(event.srcElement[0].value);
  const j = parseInt(event.srcElement[1].value);
  const orientation = event.srcElement[2].value;

  const shipName = event.srcElement.shipName;
  const shipLength = _logic_gameRules__WEBPACK_IMPORTED_MODULE_1__.gameRules.getShipNameToLength().get(shipName);
  const shipIdx = _logic_gameRules__WEBPACK_IMPORTED_MODULE_1__.gameRules.getShipNameToIdx().get(shipName);

  const currPlayer = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer();

  console.log(currPlayer, i, j, shipName, shipLength, orientation);
  return _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[currPlayer].populateBoard(i, j, shipIdx, orientation, shipLength);
}



/***/ }),

/***/ "./src/logic/game.js":
/*!***************************!*\
  !*** ./src/logic/game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/logic/player.js");


const game = (() => {
  const players = [(0,_player__WEBPACK_IMPORTED_MODULE_0__.playerFactory)(), (0,_player__WEBPACK_IMPORTED_MODULE_0__.playerFactory)()];
  let currPlayer = 0;
  let opponent = 1;

  const getPlayers = () => {
    return players;
  };
  const getCurrPlayer = () => {
    return currPlayer;
  };

  const getOpponent = () => {
    return opponent;
  }

  const toggleCurrPlayer = () => {
    currPlayer = 1 - currPlayer;
    opponent = 1 - opponent;
  };

  const initGame = () => {
    players[0].populateBoard();
    players[1].populateBoard();
  };

  const isGameOver = () => {
    const opponentShips = players[opponent].getShipArr();
    for (let ship of opponentShips) {
      if (!ship.isSunk()) return false;
    }

    return true;
  };

  return {
    getPlayers,
    getCurrPlayer,
    getOpponent,
    toggleCurrPlayer,
    initGame,
    isGameOver,
  };
})();




/***/ }),

/***/ "./src/logic/gameRules.js":
/*!********************************!*\
  !*** ./src/logic/gameRules.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameRules": () => (/* binding */ gameRules)
/* harmony export */ });
const gameRules = (() => {
  const shipsName = [
    'Destroyer',
    'Submarine',
    'Cruiser',
    'Battleship',
    'Carrier',
  ]

  const shipsLength = [2, 3, 3, 4, 5];

  const shipNameToLength = new Map([
    ['Destroyer', 2],
    ['Submarine', 3],
    ['Cruiser', 3],
    ['Battleship', 4],
    ['Carrier', 5],
  ]);

  const shipNameToIdx = new Map([
    ['Destroyer', 0],
    ['Submarine', 1],
    ['Cruiser', 2],
    ['Battleship', 3],
    ['Carrier', 4],
  ]);

  const getShipsName = function() {
    return shipsName;
  }

  const getShipsLength = function() {
    return shipsLength;
  }

  const getShipNameToLength = () => {
    return shipNameToLength;
  }

  const getShipNameToIdx = () => {
    return shipNameToIdx;
  }

  return {
    getShipsName,
    getShipsLength,
    getShipNameToLength,
    getShipNameToIdx,
  }
})();



/***/ }),

/***/ "./src/logic/gameboard.js":
/*!********************************!*\
  !*** ./src/logic/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory)
/* harmony export */ });
const gameboardFactory = (dim=10) => {
  const row = new Array(dim).fill('');
  let board = new Array();
  for (let i = 0; i < dim; i++) board.push(Array.from(row));

  const length = () => {
    return board.length;
  }

  const accessBoard = (x, y) => {
    return board[x][y];
  }

  const placeShip = (shipIdx, x, y) => {
    board[x][y] = shipIdx;
  }

  const receiveAttack = (x, y) => {
    if (board[x][y] === '') {
      board[x][y] = 'M';
      return 'M';
    } else if (board[x][y] === 'H') {
      return 'AH'; 
    } else if (board[x][y] === 'M') {
      return 'AM';
    } else {
      const shipHit = board[x][y];
      board[x][y] = 'H';
      return shipHit; // TODO: then call hit function of ship
    }
  }

  const areAllShipsSunk = () => {
    const shipIndices = [0, 1, 2, 3, 4];
    return !board.some(row => row.includes(shipIndices));
  }

  return {
    board,
    length,
    accessBoard,
    placeShip,
    receiveAttack,
    areAllShipsSunk,
  }
}



/***/ }),

/***/ "./src/logic/player.js":
/*!*****************************!*\
  !*** ./src/logic/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/logic/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/logic/gameboard.js");



const playerFactory = () => {
  const shipArr = [
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(2),
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3),
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3),
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4),
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(5),
  ];

  let gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)();

  const getShipArr = () => {
    return shipArr;
  };

  const checkBoardForShipPlacement = (i, j, dx, dy) => {
    const gameBoardDim = 10;

    for (let x of dx) {
      for (let y of dy) {
        if (i+x >= gameBoardDim || j+y >= gameBoardDim) return false;
        if (gameboard.accessBoard(i+x, j+y) !== "") return false;
      }
    }

    return true;
  };

  const placeShipOnBoard = (i, j, dx, dy, idx) => {
    for (let x of dx) {
      for (let y of dy) {
        gameboard.placeShip(idx, i+x, j+y);
      }
    }
  };

  // TODO: Allow users to fill up board themselves
  const populateBoard = (i, j, idx, orientation, length) => {
    const dx = [];
    const dy = [];
    if (orientation === "H") {
      dx.push(0);
      for (let y = 0; y < length; y++) dy.push(y);
    } else if (orientation === "V") {
      for (let x = 0; x < length; x++) dx.push(x);
      dy.push(0);
    }

    if (checkBoardForShipPlacement(i, j, dx, dy)) {
      placeShipOnBoard(i, j, dx, dy, idx);
      return true;
    }

    return false;
  };

  const getGameBoard = () => {
    return gameboard;
  };

  return {
    getShipArr,
    populateBoard,
    getGameBoard,
  };
};




/***/ }),

/***/ "./src/logic/ship.js":
/*!***************************!*\
  !*** ./src/logic/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = function(length) {
  const _length = length;
  let _numHits = 0;

  const getLength = () => {
    return _length;
  };
  const getNumHit = function() {
    return this._numHits;
  };

  const hit = function() {
    this._numHits++;
  };

  const isSunk = function() {
    if (this._length === this._numHits) return true;
    return false;
  };

  return {
    _length,
    _numHits,
    getLength,
    getNumHit,
    hit,
    isSunk,
  };
};




/***/ }),

/***/ "./src/view/feEventHandler.js":
/*!************************************!*\
  !*** ./src/view/feEventHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTargetGridEL": () => (/* binding */ addTargetGridEL)
/* harmony export */ });
/* harmony import */ var _controller_handle_attack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/handle-attack */ "./src/controller/handle-attack.js");


const addTargetGridEL = () => {
  const targetGridCells = document.querySelectorAll(
    ".target-grid .target-square"
  );
  targetGridCells.forEach((cell) => {
    if (!cell.hasAttribute('addedEL')) {
      cell.addEventListener("click", _controller_handle_attack__WEBPACK_IMPORTED_MODULE_0__.handleAttackCell);
      cell.setAttribute('addedEL', true);
    }
  });
};




/***/ }),

/***/ "./src/view/grid.js":
/*!**************************!*\
  !*** ./src/view/grid.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearGrid": () => (/* binding */ clearGrid),
/* harmony export */   "createOceanGrid": () => (/* binding */ createOceanGrid),
/* harmony export */   "createTargetGrid": () => (/* binding */ createTargetGrid),
/* harmony export */   "createTemplateGrid": () => (/* binding */ createTemplateGrid)
/* harmony export */ });
const createTemplateGrid = (container, grid) => {
  clearGrid(container);
  const gridSize = 11;

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j=0; j < gridSize; j++) {
      const infoSq = document.createElement('div');
      if (i=== 0 && j === 0) {
        infoSq.classList.add('indicator-sq');
      } else if (i === 0 && j >= 1) {
        infoSq.classList.add('indicator-sq');
        infoSq.innerText = `c${j-1}`;
      } else if (j === 0 && i >= 1) {
        infoSq.classList.add('indicator-sq');
        infoSq.innerText = `r${i-1}`;
      } else {
        infoSq.classList.add('empty-sq');
        infoSq.innerText = grid.accessBoard(i-1, j-1);
      }

      row.appendChild(infoSq);
    }
    
    container.appendChild(row);
  }
}

const clearGrid = (container) => {
  while (container.childElementCount > 0)
    container.removeChild(container.lastChild);
};

const createTargetGrid = (grid) => {
  const container = document.querySelector(".target-grid");
  clearGrid(container);

  for (let i = 0; i < grid.length(); i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < grid.length(); j++) {
      let square = document.createElement("div");
      square.classList.add("target-square");
      const gridElement = grid.accessBoard(i, j);
      square.innerText = typeof gridElement === "number" ? "" : gridElement;
      square.index = i * 10 + j;

      row.appendChild(square);
    }
    container.appendChild(row);
  }
};

const createOceanGrid = (grid) => {
  const container = document.querySelector(".ocean-grid");
  clearGrid(container);

  for (let i = 0; i < grid.length(); i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < grid.length(); j++) {
      let square = document.createElement("div");
      square.classList.add("ocean-square");
      square.innerText = grid.accessBoard(i, j);

      row.appendChild(square);
    }
    container.appendChild(row);
  }
};



/***/ }),

/***/ "./src/view/initBattleFrontend.js":
/*!****************************************!*\
  !*** ./src/view/initBattleFrontend.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBody": () => (/* binding */ clearBody),
/* harmony export */   "initBattleFrontend": () => (/* binding */ initBattleFrontend)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/view/style.css");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./src/view/grid.js");
/* harmony import */ var _feEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feEventHandler */ "./src/view/feEventHandler.js");




const clearBody = () => {
  while (document.body.childElementCount > 0) {
    document.body.removeChild(document.body.lastChild);
  }
}

const createDivStructure = () => {
  const mainScreenDiv = document.createElement("div");
  mainScreenDiv.id = "main-screen";

  const playerNameDiv = document.createElement("div");
  playerNameDiv.id = 'player-div';
  playerNameDiv.innerText = "Player 0";

  const infoDiv = document.createElement('div');

  const messageDiv = document.createElement('div');
  messageDiv.id = 'message-div';
  messageDiv.innerText = '';

  const nextTurnBtn = document.createElement('button');
  nextTurnBtn.textContent = 'Next turn';
  nextTurnBtn.id = 'next-turn-btn';
  nextTurnBtn.classList.add('not-ready');
  nextTurnBtn.disabled = 'disabled';

  infoDiv.appendChild(messageDiv);
  infoDiv.appendChild(nextTurnBtn);

  const targetGridDiv = document.createElement("div");
  targetGridDiv.classList.add("grid");
  targetGridDiv.classList.add("target-grid");

  const oceanGridDiv = document.createElement("div");
  oceanGridDiv.classList.add("grid");
  oceanGridDiv.classList.add("ocean-grid");

  mainScreenDiv.appendChild(playerNameDiv);
  mainScreenDiv.appendChild(infoDiv);
  mainScreenDiv.appendChild(targetGridDiv);
  mainScreenDiv.appendChild(oceanGridDiv);

  document.body.appendChild(mainScreenDiv);
};



const initBattleFrontend = (targetGrid, oceanGrid) => {
  createDivStructure();
  (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createTargetGrid)(targetGrid);
  (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createOceanGrid)(oceanGrid);
  (0,_feEventHandler__WEBPACK_IMPORTED_MODULE_2__.addTargetGridEL)();
};




/***/ }),

/***/ "./src/view/initUserShips.js":
/*!***********************************!*\
  !*** ./src/view/initUserShips.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initUserShips": () => (/* binding */ initUserShips)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/view/style.css");
/* harmony import */ var _initBattleFrontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initBattleFrontend */ "./src/view/initBattleFrontend.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./src/view/grid.js");
/* harmony import */ var _logic_gameRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/gameRules */ "./src/logic/gameRules.js");
/* harmony import */ var _controller_handle_place_ships__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/handle-place-ships */ "./src/controller/handle-place-ships.js");
/* harmony import */ var _controller_handle_next_turn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/handle-next-turn */ "./src/controller/handle-next-turn.js");









const createDivSkeleton = () => {
  const setupGameDiv = document.createElement("div");
  setupGameDiv.id = "setup-game-div";

  const templateGridDiv = document.createElement("div");
  templateGridDiv.classList.add("grid");
  templateGridDiv.id = "template-grid-div";

  const userInputDiv = document.createElement("div");
  userInputDiv.id = "user-input-div";

  setupGameDiv.appendChild(templateGridDiv);
  setupGameDiv.appendChild(userInputDiv);

  return setupGameDiv;
};

const createUserInputHeader = () => {
  const nameHeader = document.createElement("div");
  nameHeader.innerText = "Name";
  nameHeader.classList.add("form-header");

  const lengthHeader = document.createElement("div");
  lengthHeader.innerText = "Length";
  lengthHeader.classList.add("form-header");

  const startCoordHeader = document.createElement("div");
  startCoordHeader.innerText = "Starting coordinates";
  startCoordHeader.classList.add("form-header");

  const orientationHeader = document.createElement("div");
  orientationHeader.innerText = "Orientation";
  orientationHeader.classList.add("form-header");

  const confirmHeader = document.createElement("div");
  confirmHeader.innerText = "Confirm placement";
  confirmHeader.classList.add("form-header");

  return [
    nameHeader,
    lengthHeader,
    startCoordHeader,
    orientationHeader,
    confirmHeader,
  ];
};

const createOptionsForCoord = (selectDiv, axis) => {
  for (let i = 0; i < 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = `${axis}${i}`;

    selectDiv.appendChild(option);
  }
};

const makeCfmBtnUnusable = (event) => {
  const btnName = event.srcElement[3].id;
  const cfmBtn = document.getElementById(btnName);
  cfmBtn.classList.add("not-ready");
  cfmBtn.disabled = "disabled";
};

const checkAllCfmBtnDisabled = () => {
  const allDisabledBtnCount = 5;
  const cfmBtnArr = document.querySelectorAll(".cfm-coord-btn");
  let disabledBtnCount = 0;
  cfmBtnArr.forEach((btn) => {
    if (btn.hasAttribute("disabled")) disabledBtnCount++;
  });

  return disabledBtnCount == allDisabledBtnCount;
};

const notifyUserOfErrInPlacingShip = (event) => {
  const rCoordId = event.srcElement[0].id;
  const rCoordSel = document.getElementById(rCoordId);

  rCoordSel.setCustomValidity(
    "Either out of bounds or a cell is already occupied. Pick another spot!"
  );
  rCoordSel.reportValidity();
};

const enableNextStepBtn = () => {
  const nextStepBtn = document.getElementById("next-step-btn");
  nextStepBtn.disabled = false;

  nextStepBtn.addEventListener("click", () => {
    (0,_initBattleFrontend__WEBPACK_IMPORTED_MODULE_1__.clearBody)();
    const [currPlayer, targetGrid, oceanGrid] = (0,_controller_handle_next_turn__WEBPACK_IMPORTED_MODULE_5__.handleNextTurnDuringPlacement)();
    if (currPlayer === 0) {
      (0,_initBattleFrontend__WEBPACK_IMPORTED_MODULE_1__.initBattleFrontend)(targetGrid, oceanGrid);
    } else {
      initUserShips(currPlayer);
    }
  });
};

const relistenToShipPlacement = (event) => {
  const formId = event.srcElement.id;
  let oldForm = document.getElementById(formId);
  let newForm = oldForm.cloneNode(true);
  newForm.shipName = oldForm.shipName;
  newForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleShipPlacementSubmission(event);
  });

  oldForm.parentNode.replaceChild(newForm, oldForm);
}

const handleShipPlacementSubmission = (event) => {
  const placedShip = (0,_controller_handle_place_ships__WEBPACK_IMPORTED_MODULE_4__.confirmShipPlacement)(event);
  if (placedShip) {
    const templateGridDiv = document.getElementById("template-grid-div");
    const playerBoard = (0,_controller_handle_next_turn__WEBPACK_IMPORTED_MODULE_5__.getCurrBoard)();
    (0,_grid__WEBPACK_IMPORTED_MODULE_2__.createTemplateGrid)(templateGridDiv, playerBoard);
    displayWhichPlayer(templateGridDiv);
    makeCfmBtnUnusable(event);

    const placedAllShips = checkAllCfmBtnDisabled();
    if (placedAllShips) enableNextStepBtn();
  } else {
    notifyUserOfErrInPlacingShip(event);
    relistenToShipPlacement(event);
  }
};

const createUserInputRow = (shipName, shipLength) => {
  // Name of ship for that row
  const rowName = document.createElement("div");
  rowName.innerText = shipName;

  // Length of ship for that row
  const rowLength = document.createElement("div");
  rowLength.innerText = shipLength;

  // Input form for ship's coordinates
  const formDiv = document.createElement("form");
  formDiv.classList.add("form-div");
  formDiv.shipName = shipName;
  formDiv.id = `${shipName}-form`;
  formDiv.addEventListener("submit", (event) => {
    event.preventDefault();
    handleShipPlacementSubmission(event);
  });

  const inputFormUl = document.createElement("ul");
  inputFormUl.classList.add("input-form-ul");

  const coordRowLi = document.createElement("li");
  coordRowLi.classList.add("input-li");

  const coordRowLiLabel = document.createElement("label");
  coordRowLiLabel.for = `${shipName}-r-coord`;

  const coordRowLiSelect = document.createElement("select");
  coordRowLiSelect.id = `${shipName}-r-coord`;
  createOptionsForCoord(coordRowLiSelect, "r");

  coordRowLi.appendChild(coordRowLiLabel);
  coordRowLi.appendChild(coordRowLiSelect);

  const coordColLi = document.createElement("li");
  coordColLi.classList.add("input-li");

  const coordColLiLabel = document.createElement("label");
  coordColLiLabel.for = `c-coord`;

  const coordColLiSelect = document.createElement("select");
  coordColLiSelect.id = `c-coord`;
  createOptionsForCoord(coordColLiSelect, "c");

  coordColLi.appendChild(coordColLiLabel);
  coordColLi.appendChild(coordColLiSelect);

  const orientationLi = document.createElement("li");
  orientationLi.classList.add("input-li");

  const orientationLiLabel = document.createElement("label");
  orientationLiLabel.for = `orientation`;

  const orientationLiSelect = document.createElement("select");
  orientationLiSelect.id = `orientation`;

  const horOrientationOption = document.createElement("option");
  horOrientationOption.value = "H";
  horOrientationOption.innerText = "Horizontal";

  const verOrientationOption = document.createElement("option");
  verOrientationOption.value = "V";
  verOrientationOption.innerText = "Vertical";

  orientationLiSelect.appendChild(horOrientationOption);
  orientationLiSelect.appendChild(verOrientationOption);

  orientationLi.appendChild(orientationLiLabel);
  orientationLi.appendChild(orientationLiSelect);

  const confirmBtnLi = document.createElement("li");
  confirmBtnLi.id = `confirm`;
  confirmBtnLi.classList.add("input-li");

  const confirmBtn = document.createElement("button");
  confirmBtn.type = "submit";
  confirmBtn.innerText = "Confirm";
  confirmBtn.classList.add("cfm-coord-btn");
  confirmBtn.id = `${shipName}-cfm-btn`;

  confirmBtnLi.appendChild(confirmBtn);

  inputFormUl.appendChild(coordRowLi);
  inputFormUl.appendChild(coordColLi);
  inputFormUl.appendChild(orientationLi);
  inputFormUl.appendChild(confirmBtn);

  formDiv.appendChild(inputFormUl);

  return [rowName, rowLength, formDiv];
};

const createUserInputForm = (shipsName, shipsLength) => {
  const userInputDiv = document.getElementById("user-input-div");

  const [
    nameHeader,
    lengthHeader,
    startCoordHeader,
    orientationHeader,
    confirmHeader,
  ] = createUserInputHeader();
  userInputDiv.appendChild(nameHeader);
  userInputDiv.appendChild(lengthHeader);
  userInputDiv.appendChild(startCoordHeader);
  userInputDiv.appendChild(orientationHeader);
  userInputDiv.appendChild(confirmHeader);

  for (let i = 0; i < shipsName.length; i++) {
    const [rowName, rowLength, formDiv] = createUserInputRow(
      shipsName[i],
      shipsLength[i]
    );
    userInputDiv.appendChild(rowName);
    userInputDiv.appendChild(rowLength);
    userInputDiv.appendChild(formDiv);
  }

  const nextStepBtn = document.createElement("button");
  nextStepBtn.innerText = "Next step";
  nextStepBtn.id = "next-step-btn";
  nextStepBtn.disabled = true;
  userInputDiv.appendChild(nextStepBtn);
};

const displayWhichPlayer = (div) => {
  const whichPlayerDiv = document.createElement("div");
  whichPlayerDiv.innerText = `Player ${(0,_controller_handle_next_turn__WEBPACK_IMPORTED_MODULE_5__.getCurrPlayer)()}, please place your ships.`;

  div.insertBefore(whichPlayerDiv, div.firstChild);
};

const initUserShips = (player) => {
  const gameSetupDiv = createDivSkeleton();
  document.body.appendChild(gameSetupDiv);

  const templateGridDiv = document.getElementById("template-grid-div");
  const playerBoard = (0,_controller_handle_next_turn__WEBPACK_IMPORTED_MODULE_5__.getBoard)(player);
  (0,_grid__WEBPACK_IMPORTED_MODULE_2__.createTemplateGrid)(templateGridDiv, playerBoard);
  displayWhichPlayer(templateGridDiv);

  const shipsName = _logic_gameRules__WEBPACK_IMPORTED_MODULE_3__.gameRules.getShipsName();
  const shipsLength = _logic_gameRules__WEBPACK_IMPORTED_MODULE_3__.gameRules.getShipsLength();
  createUserInputForm(shipsName, shipsLength);
};




/***/ }),

/***/ "./src/view/update-view.js":
/*!*********************************!*\
  !*** ./src/view/update-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateDOMAfterAttack": () => (/* binding */ updateDOMAfterAttack)
/* harmony export */ });
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/game */ "./src/logic/game.js");
/* harmony import */ var _feEventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feEventHandler */ "./src/view/feEventHandler.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./src/view/grid.js");
/* harmony import */ var _controller_handle_next_turn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/handle-next-turn */ "./src/controller/handle-next-turn.js");







const displayDoubleAttackErrMsg = (outcome) => {
  const msgDiv = document.getElementById("message-div");

  if (outcome === "AM") {
    msgDiv.innerText =
      "You've already missed at this spot! Fire at another spot.";
  } else if (outcome === "AH") {
    msgDiv.innerText =
      "You've already hit a ship at this spot! Fire at another spot.";
  }
};

const makeNextTurnBtnClickable = () => {
  const nextTurnBtn = document.getElementById("next-turn-btn");
  const newNextTurnBtn = nextTurnBtn.cloneNode(true);

  newNextTurnBtn.classList.remove("not-ready");
  newNextTurnBtn.removeAttribute("disabled");
  newNextTurnBtn.addEventListener("click", () => {
    (0,_controller_handle_next_turn__WEBPACK_IMPORTED_MODULE_3__.handleNextTurnInGame)();
    makeNextTurnBtnUnclickable();
    updateDOMAfterNextTurn();
    setTimeout(_feEventHandler__WEBPACK_IMPORTED_MODULE_1__.addTargetGridEL, 5000);
  });

  nextTurnBtn.parentNode.replaceChild(newNextTurnBtn, nextTurnBtn);
};

const makeNextTurnBtnUnclickable = () => {
  const nextTurnBtn = document.getElementById("next-turn-btn");
  nextTurnBtn.classList.add('not-ready');
  nextTurnBtn.disabled = 'disabled';
}

const displayWinMessage = () => {
  const currPlayer = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer();
  const msgDiv = document.getElementById("message-div");

  msgDiv.innerText = `Congratulations Player ${currPlayer}! You've won the game! 🔫`;
}

const updateDOMAfterAttack = (outcome) => {
  if (outcome === "M" || typeof outcome === "number") {
    const opponent = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getOpponent();
    const targetGrid = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[opponent].getGameBoard();
    (0,_grid__WEBPACK_IMPORTED_MODULE_2__.createTargetGrid)(targetGrid);
    if (_logic_game__WEBPACK_IMPORTED_MODULE_0__.game.isGameOver()) {
      displayWinMessage();
    } else {
      makeNextTurnBtnClickable();
    }
  } else {
    displayDoubleAttackErrMsg(outcome);
    (0,_feEventHandler__WEBPACK_IMPORTED_MODULE_1__.addTargetGridEL)();
  }
};

const clearDisplayedGrids = () => {
  const targetGridDiv = document.querySelector(".target-grid");
  const oceanGridDiv = document.querySelector(".ocean-grid");

  (0,_grid__WEBPACK_IMPORTED_MODULE_2__.clearGrid)(targetGridDiv);
  (0,_grid__WEBPACK_IMPORTED_MODULE_2__.clearGrid)(oceanGridDiv);
};

const indicateLoading = () => {
  const msgDiv = document.querySelector("#message-div");
  let timeLeft = 3;

  let countdownInterval = setInterval(function () {
    msgDiv.innerText = `Loading next player's screen in ${timeLeft} seconds...`;
    timeLeft--;

    if (timeLeft === -1) {
      msgDiv.innerText = "";
      clearInterval(countdownInterval);
    }
  }, 1000);
};

const updatePlayerDiv = (currPlayer) => {
  const playerNameDiv = document.getElementById('player-div');
  playerNameDiv.innerText = `Player ${currPlayer}`;
}

const createScreenForNextPlayer = () => {
  const currPlayer = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer();
  const opponent = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getOpponent();

  updatePlayerDiv(currPlayer);

  (0,_grid__WEBPACK_IMPORTED_MODULE_2__.createTargetGrid)(_logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[opponent].getGameBoard());
  (0,_grid__WEBPACK_IMPORTED_MODULE_2__.createOceanGrid)(_logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[currPlayer].getGameBoard());
};

const updateDOMAfterNextTurn = () => {
  // clear grids for current player + indicate 'loading'
  clearDisplayedGrids();
  // set a timeout for 3 secs
  indicateLoading();
  // display grids for next player
  setTimeout(createScreenForNextPlayer, 4000);
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_initUserShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/initUserShips */ "./src/view/initUserShips.js");
/* harmony import */ var _view_initBattleFrontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/initBattleFrontend */ "./src/view/initBattleFrontend.js");
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/game */ "./src/logic/game.js");
/* harmony import */ var _view_feEventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/feEventHandler */ "./src/view/feEventHandler.js");







// game.initGame();

// ask user for input here
(0,_view_initBattleFrontend__WEBPACK_IMPORTED_MODULE_1__.clearBody)();
let currPlayer = 0; // 0 by default
(0,_view_initUserShips__WEBPACK_IMPORTED_MODULE_0__.initUserShips)(currPlayer);
// initBattleFrontend(oceanGrid, targetGrid);
// addTargetGridEL();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxRDtBQUNxQjs7QUFFdEM7QUFDb0I7OztBQUd4RDs7QUFFQTtBQUNBLG1FQUFTO0FBQ1Qsb0JBQW9CO0FBQ3BCLGtFQUFhO0FBQ2I7QUFDQSxxQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L3N0eWxlLmNzcz9lZTU3Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvaGFuZGxlLWF0dGFjay5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9oYW5kbGUtbmV4dC10dXJuLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL2hhbmRsZS1wbGFjZS1zaGlwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMvZ2FtZVJ1bGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy9mZUV2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy9ncmlkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L2luaXRCYXR0bGVGcm9udGVuZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy9pbml0VXNlclNoaXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L3VwZGF0ZS12aWV3LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNtYWluLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDQwMHB4IDMwMHB4O1xcbn1cXG5cXG4udGFyZ2V0LWdyaWQge1xcbiAgZmxleC1ncm93OiAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmluZGljYXRvci1zcSxcXG4uZW1wdHktc3Ege1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuXFxuICBtYXJnaW4tdG9wOiAwLjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVweDtcXG59XFxuXFxuLmluZGljYXRvci1zcSwgXFxuLmVtcHR5LXNxIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcbn1cXG5cXG4uaW5kaWNhdG9yLXNxIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTYsIDI1NiwgMjU2LDApO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXNxIHtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXJnZXQtc3F1YXJlIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgbWFyZ2luLXRvcDogMC41cHg7XFxuICBtYXJnaW4tbGVmdDogMC41cHg7XFxuXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxufVxcblxcbi5vY2Vhbi1zcXVhcmUge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuXFxuICBtYXJnaW4tdG9wOiAwLjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVweDtcXG5cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDsgXFxufVxcblxcbiNzZXR1cC1nYW1lLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jdXNlci1pbnB1dC1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDJmcikgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNjtcXG59XFxuXFxuLmlucHV0LWZvcm0tdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyZnIgMWZyO1xcbn1cXG5cXG4ubm90LXJlYWR5IHtcXG4gIG9wYWNpdHk6IDAuMzM7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MzMpO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlldy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQzs7RUFFbkMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21haW4tc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNDAwcHggMzAwcHg7XFxufVxcblxcbi50YXJnZXQtZ3JpZCB7XFxuICBmbGV4LWdyb3c6IDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5kaWNhdG9yLXNxLFxcbi5lbXB0eS1zcSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG5cXG4gIG1hcmdpbi10b3A6IDAuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXB4O1xcbn1cXG5cXG4uaW5kaWNhdG9yLXNxLCBcXG4uZW1wdHktc3Ege1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxufVxcblxcbi5pbmRpY2F0b3Itc3Ege1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsMCk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3Ege1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRhcmdldC1zcXVhcmUge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuXFxuICBtYXJnaW4tdG9wOiAwLjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVweDtcXG5cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXG59XFxuXFxuLm9jZWFuLXNxdWFyZSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG5cXG4gIG1hcmdpbi10b3A6IDAuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXB4O1xcblxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuNXB4OyBcXG59XFxuXFxuI3NldHVwLWdhbWUtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbiN1c2VyLWlucHV0LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMmZyKSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA2O1xcbn1cXG5cXG4uaW5wdXQtZm9ybS11bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDJmciAxZnI7XFxufVxcblxcbi5ub3QtcmVhZHkge1xcbiAgb3BhY2l0eTogMC4zMztcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0zMyk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vbG9naWMvZ2FtZVwiO1xuXG5pbXBvcnQgeyB1cGRhdGVET01BZnRlckF0dGFjayB9IGZyb20gXCIuLi92aWV3L3VwZGF0ZS12aWV3XCI7XG5cbmNvbnN0IGdldFJvd0FuZENvbCA9IChjZWxsSWR4KSA9PiB7XG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoY2VsbElkeCAvIDEwKTtcbiAgY29uc3QgY29sID0gY2VsbElkeCAlIDEwO1xuXG4gIHJldHVybiBbcm93LCBjb2xdO1xufVxuXG5jb25zdCBjaGVja0Nob3NlbkNlbGwgPSAocm93LCBjb2wpID0+IHtcbiAgY29uc3Qgb3Bwb25lbnQgPSBnYW1lLmdldE9wcG9uZW50KCk7XG4gIGNvbnN0IG91dGNvbWUgPSBnYW1lLmdldFBsYXllcnMoKVtvcHBvbmVudF0uZ2V0R2FtZUJvYXJkKCkucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG5cbiAgcmV0dXJuIG91dGNvbWU7XG59XG5cbmNvbnN0IHBhc3NIaXRUb1NoaXAgPSAob3V0Y29tZSkgPT4ge1xuICBnYW1lLmdldFBsYXllcnMoKVtnYW1lLmdldE9wcG9uZW50KCldLmdldFNoaXBBcnIoKVtvdXRjb21lXS5oaXQoKTtcbn1cblxuY29uc3QgaGFuZGxlQXR0YWNrQ2VsbCA9IChldmVudCkgPT4ge1xuICBjb25zdCBjZWxsSWR4ID0gZXZlbnQuc3JjRWxlbWVudC5pbmRleDtcbiAgY29uc3QgW3JvdywgY29sXSA9IGdldFJvd0FuZENvbChjZWxsSWR4KTtcbiAgY29uc3Qgb3V0Y29tZSA9IGNoZWNrQ2hvc2VuQ2VsbChyb3csIGNvbCk7XG5cbiAgaWYgKHR5cGVvZiBvdXRjb21lID09PSAnbnVtYmVyJykgcGFzc0hpdFRvU2hpcChvdXRjb21lKTtcbiAgdXBkYXRlRE9NQWZ0ZXJBdHRhY2sob3V0Y29tZSk7XG59XG5cbmV4cG9ydCB7IGhhbmRsZUF0dGFja0NlbGwgfTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uL2xvZ2ljL2dhbWVcIjtcblxuY29uc3QgaGFuZGxlTmV4dFR1cm5JbkdhbWUgPSAoKSA9PiB7XG4gIGdhbWUudG9nZ2xlQ3VyclBsYXllcigpO1xufTtcblxuY29uc3QgaGFuZGxlTmV4dFR1cm5EdXJpbmdQbGFjZW1lbnQgPSAoKSA9PiB7XG4gIGdhbWUudG9nZ2xlQ3VyclBsYXllcigpO1xuXG4gIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLmdldEN1cnJQbGF5ZXIoKTtcbiAgY29uc3Qgb3Bwb25lbnQgPSBnYW1lLmdldE9wcG9uZW50KCk7XG5cbiAgbGV0IHRhcmdldEdyaWQgPSBnYW1lLmdldFBsYXllcnMoKVtvcHBvbmVudF0uZ2V0R2FtZUJvYXJkKCk7XG4gIGxldCBvY2VhbkdyaWQgPSBnYW1lLmdldFBsYXllcnMoKVtjdXJyUGxheWVyXS5nZXRHYW1lQm9hcmQoKTtcblxuICByZXR1cm4gW2N1cnJQbGF5ZXIsIHRhcmdldEdyaWQsIG9jZWFuR3JpZF07XG59O1xuXG5jb25zdCBnZXRCb2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgcmV0dXJuIGdhbWUuZ2V0UGxheWVycygpW3BsYXllcl0uZ2V0R2FtZUJvYXJkKCk7XG59O1xuXG5jb25zdCBnZXRDdXJyQm9hcmQgPSAoKSA9PiB7XG4gIHJldHVybiBnYW1lLmdldFBsYXllcnMoKVtnYW1lLmdldEN1cnJQbGF5ZXIoKV0uZ2V0R2FtZUJvYXJkKCk7XG59O1xuXG5jb25zdCBnZXRDdXJyUGxheWVyID0gKCkgPT4ge1xuICByZXR1cm4gZ2FtZS5nZXRDdXJyUGxheWVyKCk7XG59XG5cbmV4cG9ydCB7XG4gIGhhbmRsZU5leHRUdXJuSW5HYW1lLFxuICBoYW5kbGVOZXh0VHVybkR1cmluZ1BsYWNlbWVudCxcbiAgZ2V0Qm9hcmQsXG4gIGdldEN1cnJCb2FyZCxcbiAgZ2V0Q3VyclBsYXllcixcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uL2xvZ2ljL2dhbWVcIjtcbmltcG9ydCB7IGdhbWVSdWxlcyB9IGZyb20gXCIuLi9sb2dpYy9nYW1lUnVsZXNcIjtcblxuY29uc3QgY29uZmlybVNoaXBQbGFjZW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgaSA9IHBhcnNlSW50KGV2ZW50LnNyY0VsZW1lbnRbMF0udmFsdWUpO1xuICBjb25zdCBqID0gcGFyc2VJbnQoZXZlbnQuc3JjRWxlbWVudFsxXS52YWx1ZSk7XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gZXZlbnQuc3JjRWxlbWVudFsyXS52YWx1ZTtcblxuICBjb25zdCBzaGlwTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuc2hpcE5hbWU7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBnYW1lUnVsZXMuZ2V0U2hpcE5hbWVUb0xlbmd0aCgpLmdldChzaGlwTmFtZSk7XG4gIGNvbnN0IHNoaXBJZHggPSBnYW1lUnVsZXMuZ2V0U2hpcE5hbWVUb0lkeCgpLmdldChzaGlwTmFtZSk7XG5cbiAgY29uc3QgY3VyclBsYXllciA9IGdhbWUuZ2V0Q3VyclBsYXllcigpO1xuXG4gIGNvbnNvbGUubG9nKGN1cnJQbGF5ZXIsIGksIGosIHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gIHJldHVybiBnYW1lLmdldFBsYXllcnMoKVtjdXJyUGxheWVyXS5wb3B1bGF0ZUJvYXJkKGksIGosIHNoaXBJZHgsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKTtcbn1cblxuZXhwb3J0IHsgY29uZmlybVNoaXBQbGFjZW1lbnQgfTsiLCJpbXBvcnQgeyBwbGF5ZXJGYWN0b3J5IH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJzID0gW3BsYXllckZhY3RvcnkoKSwgcGxheWVyRmFjdG9yeSgpXTtcbiAgbGV0IGN1cnJQbGF5ZXIgPSAwO1xuICBsZXQgb3Bwb25lbnQgPSAxO1xuXG4gIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllcnM7XG4gIH07XG4gIGNvbnN0IGdldEN1cnJQbGF5ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJQbGF5ZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0T3Bwb25lbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9wcG9uZW50O1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlQ3VyclBsYXllciA9ICgpID0+IHtcbiAgICBjdXJyUGxheWVyID0gMSAtIGN1cnJQbGF5ZXI7XG4gICAgb3Bwb25lbnQgPSAxIC0gb3Bwb25lbnQ7XG4gIH07XG5cbiAgY29uc3QgaW5pdEdhbWUgPSAoKSA9PiB7XG4gICAgcGxheWVyc1swXS5wb3B1bGF0ZUJvYXJkKCk7XG4gICAgcGxheWVyc1sxXS5wb3B1bGF0ZUJvYXJkKCk7XG4gIH07XG5cbiAgY29uc3QgaXNHYW1lT3ZlciA9ICgpID0+IHtcbiAgICBjb25zdCBvcHBvbmVudFNoaXBzID0gcGxheWVyc1tvcHBvbmVudF0uZ2V0U2hpcEFycigpO1xuICAgIGZvciAobGV0IHNoaXAgb2Ygb3Bwb25lbnRTaGlwcykge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQbGF5ZXJzLFxuICAgIGdldEN1cnJQbGF5ZXIsXG4gICAgZ2V0T3Bwb25lbnQsXG4gICAgdG9nZ2xlQ3VyclBsYXllcixcbiAgICBpbml0R2FtZSxcbiAgICBpc0dhbWVPdmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgZ2FtZSB9O1xuIiwiY29uc3QgZ2FtZVJ1bGVzID0gKCgpID0+IHtcbiAgY29uc3Qgc2hpcHNOYW1lID0gW1xuICAgICdEZXN0cm95ZXInLFxuICAgICdTdWJtYXJpbmUnLFxuICAgICdDcnVpc2VyJyxcbiAgICAnQmF0dGxlc2hpcCcsXG4gICAgJ0NhcnJpZXInLFxuICBdXG5cbiAgY29uc3Qgc2hpcHNMZW5ndGggPSBbMiwgMywgMywgNCwgNV07XG5cbiAgY29uc3Qgc2hpcE5hbWVUb0xlbmd0aCA9IG5ldyBNYXAoW1xuICAgIFsnRGVzdHJveWVyJywgMl0sXG4gICAgWydTdWJtYXJpbmUnLCAzXSxcbiAgICBbJ0NydWlzZXInLCAzXSxcbiAgICBbJ0JhdHRsZXNoaXAnLCA0XSxcbiAgICBbJ0NhcnJpZXInLCA1XSxcbiAgXSk7XG5cbiAgY29uc3Qgc2hpcE5hbWVUb0lkeCA9IG5ldyBNYXAoW1xuICAgIFsnRGVzdHJveWVyJywgMF0sXG4gICAgWydTdWJtYXJpbmUnLCAxXSxcbiAgICBbJ0NydWlzZXInLCAyXSxcbiAgICBbJ0JhdHRsZXNoaXAnLCAzXSxcbiAgICBbJ0NhcnJpZXInLCA0XSxcbiAgXSk7XG5cbiAgY29uc3QgZ2V0U2hpcHNOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNoaXBzTmFtZTtcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXBzTGVuZ3RoID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNoaXBzTGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcE5hbWVUb0xlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcE5hbWVUb0xlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXBOYW1lVG9JZHggPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBOYW1lVG9JZHg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFNoaXBzTmFtZSxcbiAgICBnZXRTaGlwc0xlbmd0aCxcbiAgICBnZXRTaGlwTmFtZVRvTGVuZ3RoLFxuICAgIGdldFNoaXBOYW1lVG9JZHgsXG4gIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGdhbWVSdWxlcyB9OyIsImNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoZGltPTEwKSA9PiB7XG4gIGNvbnN0IHJvdyA9IG5ldyBBcnJheShkaW0pLmZpbGwoJycpO1xuICBsZXQgYm9hcmQgPSBuZXcgQXJyYXkoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW07IGkrKykgYm9hcmQucHVzaChBcnJheS5mcm9tKHJvdykpO1xuXG4gIGNvbnN0IGxlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gYm9hcmQubGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgYWNjZXNzQm9hcmQgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiBib2FyZFt4XVt5XTtcbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwSWR4LCB4LCB5KSA9PiB7XG4gICAgYm9hcmRbeF1beV0gPSBzaGlwSWR4O1xuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKGJvYXJkW3hdW3ldID09PSAnJykge1xuICAgICAgYm9hcmRbeF1beV0gPSAnTSc7XG4gICAgICByZXR1cm4gJ00nO1xuICAgIH0gZWxzZSBpZiAoYm9hcmRbeF1beV0gPT09ICdIJykge1xuICAgICAgcmV0dXJuICdBSCc7IFxuICAgIH0gZWxzZSBpZiAoYm9hcmRbeF1beV0gPT09ICdNJykge1xuICAgICAgcmV0dXJuICdBTSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXBIaXQgPSBib2FyZFt4XVt5XTtcbiAgICAgIGJvYXJkW3hdW3ldID0gJ0gnO1xuICAgICAgcmV0dXJuIHNoaXBIaXQ7IC8vIFRPRE86IHRoZW4gY2FsbCBoaXQgZnVuY3Rpb24gb2Ygc2hpcFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFyZUFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwSW5kaWNlcyA9IFswLCAxLCAyLCAzLCA0XTtcbiAgICByZXR1cm4gIWJvYXJkLnNvbWUocm93ID0+IHJvdy5pbmNsdWRlcyhzaGlwSW5kaWNlcykpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBsZW5ndGgsXG4gICAgYWNjZXNzQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYXJlQWxsU2hpcHNTdW5rLFxuICB9XG59XG5cbmV4cG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfTsiLCJpbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcEFyciA9IFtcbiAgICBzaGlwRmFjdG9yeSgyKSxcbiAgICBzaGlwRmFjdG9yeSgzKSxcbiAgICBzaGlwRmFjdG9yeSgzKSxcbiAgICBzaGlwRmFjdG9yeSg0KSxcbiAgICBzaGlwRmFjdG9yeSg1KSxcbiAgXTtcblxuICBsZXQgZ2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG4gIGNvbnN0IGdldFNoaXBBcnIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBBcnI7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tCb2FyZEZvclNoaXBQbGFjZW1lbnQgPSAoaSwgaiwgZHgsIGR5KSA9PiB7XG4gICAgY29uc3QgZ2FtZUJvYXJkRGltID0gMTA7XG5cbiAgICBmb3IgKGxldCB4IG9mIGR4KSB7XG4gICAgICBmb3IgKGxldCB5IG9mIGR5KSB7XG4gICAgICAgIGlmIChpK3ggPj0gZ2FtZUJvYXJkRGltIHx8IGoreSA+PSBnYW1lQm9hcmREaW0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5hY2Nlc3NCb2FyZChpK3gsIGoreSkgIT09IFwiXCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBPbkJvYXJkID0gKGksIGosIGR4LCBkeSwgaWR4KSA9PiB7XG4gICAgZm9yIChsZXQgeCBvZiBkeCkge1xuICAgICAgZm9yIChsZXQgeSBvZiBkeSkge1xuICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKGlkeCwgaSt4LCBqK3kpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBUT0RPOiBBbGxvdyB1c2VycyB0byBmaWxsIHVwIGJvYXJkIHRoZW1zZWx2ZXNcbiAgY29uc3QgcG9wdWxhdGVCb2FyZCA9IChpLCBqLCBpZHgsIG9yaWVudGF0aW9uLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBkeCA9IFtdO1xuICAgIGNvbnN0IGR5ID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhcIikge1xuICAgICAgZHgucHVzaCgwKTtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuZ3RoOyB5KyspIGR5LnB1c2goeSk7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gXCJWXCIpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVuZ3RoOyB4KyspIGR4LnB1c2goeCk7XG4gICAgICBkeS5wdXNoKDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0JvYXJkRm9yU2hpcFBsYWNlbWVudChpLCBqLCBkeCwgZHkpKSB7XG4gICAgICBwbGFjZVNoaXBPbkJvYXJkKGksIGosIGR4LCBkeSwgaWR4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFNoaXBBcnIsXG4gICAgcG9wdWxhdGVCb2FyZCxcbiAgICBnZXRHYW1lQm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBwbGF5ZXJGYWN0b3J5IH07XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9IGZ1bmN0aW9uKGxlbmd0aCkge1xuICBjb25zdCBfbGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgX251bUhpdHMgPSAwO1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gX2xlbmd0aDtcbiAgfTtcbiAgY29uc3QgZ2V0TnVtSGl0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bUhpdHM7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbnVtSGl0cysrO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sZW5ndGggPT09IHRoaXMuX251bUhpdHMpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIF9sZW5ndGgsXG4gICAgX251bUhpdHMsXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGdldE51bUhpdCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IHsgc2hpcEZhY3RvcnkgfTtcbiIsImltcG9ydCB7IGhhbmRsZUF0dGFja0NlbGwgfSBmcm9tIFwiLi4vY29udHJvbGxlci9oYW5kbGUtYXR0YWNrXCI7XG5cbmNvbnN0IGFkZFRhcmdldEdyaWRFTCA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0R3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi50YXJnZXQtZ3JpZCAudGFyZ2V0LXNxdWFyZVwiXG4gICk7XG4gIHRhcmdldEdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKCFjZWxsLmhhc0F0dHJpYnV0ZSgnYWRkZWRFTCcpKSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBdHRhY2tDZWxsKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdhZGRlZEVMJywgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFkZFRhcmdldEdyaWRFTCB9O1xuIiwiY29uc3QgY3JlYXRlVGVtcGxhdGVHcmlkID0gKGNvbnRhaW5lciwgZ3JpZCkgPT4ge1xuICBjbGVhckdyaWQoY29udGFpbmVyKTtcbiAgY29uc3QgZ3JpZFNpemUgPSAxMTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcbiAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgZm9yIChsZXQgaj0wOyBqIDwgZ3JpZFNpemU7IGorKykge1xuICAgICAgY29uc3QgaW5mb1NxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpZiAoaT09PSAwICYmIGogPT09IDApIHtcbiAgICAgICAgaW5mb1NxLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvci1zcScpO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAwICYmIGogPj0gMSkge1xuICAgICAgICBpbmZvU3EuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yLXNxJyk7XG4gICAgICAgIGluZm9TcS5pbm5lclRleHQgPSBgYyR7ai0xfWA7XG4gICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgaSA+PSAxKSB7XG4gICAgICAgIGluZm9TcS5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3Itc3EnKTtcbiAgICAgICAgaW5mb1NxLmlubmVyVGV4dCA9IGByJHtpLTF9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm9TcS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1zcScpO1xuICAgICAgICBpbmZvU3EuaW5uZXJUZXh0ID0gZ3JpZC5hY2Nlc3NCb2FyZChpLTEsIGotMSk7XG4gICAgICB9XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChpbmZvU3EpO1xuICAgIH1cbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5jb25zdCBjbGVhckdyaWQgPSAoY29udGFpbmVyKSA9PiB7XG4gIHdoaWxlIChjb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPiAwKVxuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhcmdldEdyaWQgPSAoZ3JpZCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhcmdldC1ncmlkXCIpO1xuICBjbGVhckdyaWQoY29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoKCk7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkLmxlbmd0aCgpOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXQtc3F1YXJlXCIpO1xuICAgICAgY29uc3QgZ3JpZEVsZW1lbnQgPSBncmlkLmFjY2Vzc0JvYXJkKGksIGopO1xuICAgICAgc3F1YXJlLmlubmVyVGV4dCA9IHR5cGVvZiBncmlkRWxlbWVudCA9PT0gXCJudW1iZXJcIiA/IFwiXCIgOiBncmlkRWxlbWVudDtcbiAgICAgIHNxdWFyZS5pbmRleCA9IGkgKiAxMCArIGo7XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlT2NlYW5HcmlkID0gKGdyaWQpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2Vhbi1ncmlkXCIpO1xuICBjbGVhckdyaWQoY29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoKCk7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkLmxlbmd0aCgpOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJvY2Vhbi1zcXVhcmVcIik7XG4gICAgICBzcXVhcmUuaW5uZXJUZXh0ID0gZ3JpZC5hY2Nlc3NCb2FyZChpLCBqKTtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUZW1wbGF0ZUdyaWQsIGNsZWFyR3JpZCwgY3JlYXRlVGFyZ2V0R3JpZCwgY3JlYXRlT2NlYW5HcmlkIH07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZVRhcmdldEdyaWQsIGNyZWF0ZU9jZWFuR3JpZCB9IGZyb20gXCIuL2dyaWRcIjtcbmltcG9ydCB7IGFkZFRhcmdldEdyaWRFTCB9IGZyb20gXCIuL2ZlRXZlbnRIYW5kbGVyXCI7XG5cbmNvbnN0IGNsZWFyQm9keSA9ICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlRGl2U3RydWN0dXJlID0gKCkgPT4ge1xuICBjb25zdCBtYWluU2NyZWVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpblNjcmVlbkRpdi5pZCA9IFwibWFpbi1zY3JlZW5cIjtcblxuICBjb25zdCBwbGF5ZXJOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyTmFtZURpdi5pZCA9ICdwbGF5ZXItZGl2JztcbiAgcGxheWVyTmFtZURpdi5pbm5lclRleHQgPSBcIlBsYXllciAwXCI7XG5cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVzc2FnZURpdi5pZCA9ICdtZXNzYWdlLWRpdic7XG4gIG1lc3NhZ2VEaXYuaW5uZXJUZXh0ID0gJyc7XG5cbiAgY29uc3QgbmV4dFR1cm5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV4dFR1cm5CdG4udGV4dENvbnRlbnQgPSAnTmV4dCB0dXJuJztcbiAgbmV4dFR1cm5CdG4uaWQgPSAnbmV4dC10dXJuLWJ0bic7XG4gIG5leHRUdXJuQnRuLmNsYXNzTGlzdC5hZGQoJ25vdC1yZWFkeScpO1xuICBuZXh0VHVybkJ0bi5kaXNhYmxlZCA9ICdkaXNhYmxlZCc7XG5cbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChuZXh0VHVybkJ0bik7XG5cbiAgY29uc3QgdGFyZ2V0R3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhcmdldEdyaWREaXYuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gIHRhcmdldEdyaWREaXYuY2xhc3NMaXN0LmFkZChcInRhcmdldC1ncmlkXCIpO1xuXG4gIGNvbnN0IG9jZWFuR3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9jZWFuR3JpZERpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgb2NlYW5HcmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJvY2Vhbi1ncmlkXCIpO1xuXG4gIG1haW5TY3JlZW5EaXYuYXBwZW5kQ2hpbGQocGxheWVyTmFtZURpdik7XG4gIG1haW5TY3JlZW5EaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG4gIG1haW5TY3JlZW5EaXYuYXBwZW5kQ2hpbGQodGFyZ2V0R3JpZERpdik7XG4gIG1haW5TY3JlZW5EaXYuYXBwZW5kQ2hpbGQob2NlYW5HcmlkRGl2KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5TY3JlZW5EaXYpO1xufTtcblxuXG5cbmNvbnN0IGluaXRCYXR0bGVGcm9udGVuZCA9ICh0YXJnZXRHcmlkLCBvY2VhbkdyaWQpID0+IHtcbiAgY3JlYXRlRGl2U3RydWN0dXJlKCk7XG4gIGNyZWF0ZVRhcmdldEdyaWQodGFyZ2V0R3JpZCk7XG4gIGNyZWF0ZU9jZWFuR3JpZChvY2VhbkdyaWQpO1xuICBhZGRUYXJnZXRHcmlkRUwoKTtcbn07XG5cbmV4cG9ydCB7IGNsZWFyQm9keSwgaW5pdEJhdHRsZUZyb250ZW5kIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY2xlYXJCb2R5LCBpbml0QmF0dGxlRnJvbnRlbmQgfSBmcm9tIFwiLi9pbml0QmF0dGxlRnJvbnRlbmRcIjtcbmltcG9ydCB7IGNyZWF0ZVRlbXBsYXRlR3JpZCB9IGZyb20gXCIuL2dyaWRcIjtcblxuaW1wb3J0IHsgZ2FtZVJ1bGVzIH0gZnJvbSBcIi4uL2xvZ2ljL2dhbWVSdWxlc1wiO1xuXG5pbXBvcnQgeyBjb25maXJtU2hpcFBsYWNlbWVudCB9IGZyb20gXCIuLi9jb250cm9sbGVyL2hhbmRsZS1wbGFjZS1zaGlwc1wiO1xuaW1wb3J0IHtcbiAgZ2V0Qm9hcmQsXG4gIGdldEN1cnJCb2FyZCxcbiAgZ2V0Q3VyclBsYXllcixcbiAgaGFuZGxlTmV4dFR1cm5EdXJpbmdQbGFjZW1lbnQsXG59IGZyb20gXCIuLi9jb250cm9sbGVyL2hhbmRsZS1uZXh0LXR1cm5cIjtcblxuY29uc3QgY3JlYXRlRGl2U2tlbGV0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHNldHVwR2FtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHVwR2FtZURpdi5pZCA9IFwic2V0dXAtZ2FtZS1kaXZcIjtcblxuICBjb25zdCB0ZW1wbGF0ZUdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wbGF0ZUdyaWREaXYuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gIHRlbXBsYXRlR3JpZERpdi5pZCA9IFwidGVtcGxhdGUtZ3JpZC1kaXZcIjtcblxuICBjb25zdCB1c2VySW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1c2VySW5wdXREaXYuaWQgPSBcInVzZXItaW5wdXQtZGl2XCI7XG5cbiAgc2V0dXBHYW1lRGl2LmFwcGVuZENoaWxkKHRlbXBsYXRlR3JpZERpdik7XG4gIHNldHVwR2FtZURpdi5hcHBlbmRDaGlsZCh1c2VySW5wdXREaXYpO1xuXG4gIHJldHVybiBzZXR1cEdhbWVEaXY7XG59O1xuXG5jb25zdCBjcmVhdGVVc2VySW5wdXRIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYW1lSGVhZGVyLmlubmVyVGV4dCA9IFwiTmFtZVwiO1xuICBuYW1lSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWhlYWRlclwiKTtcblxuICBjb25zdCBsZW5ndGhIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZW5ndGhIZWFkZXIuaW5uZXJUZXh0ID0gXCJMZW5ndGhcIjtcbiAgbGVuZ3RoSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWhlYWRlclwiKTtcblxuICBjb25zdCBzdGFydENvb3JkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RhcnRDb29yZEhlYWRlci5pbm5lclRleHQgPSBcIlN0YXJ0aW5nIGNvb3JkaW5hdGVzXCI7XG4gIHN0YXJ0Q29vcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImZvcm0taGVhZGVyXCIpO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3JpZW50YXRpb25IZWFkZXIuaW5uZXJUZXh0ID0gXCJPcmllbnRhdGlvblwiO1xuICBvcmllbnRhdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1oZWFkZXJcIik7XG5cbiAgY29uc3QgY29uZmlybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbmZpcm1IZWFkZXIuaW5uZXJUZXh0ID0gXCJDb25maXJtIHBsYWNlbWVudFwiO1xuICBjb25maXJtSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWhlYWRlclwiKTtcblxuICByZXR1cm4gW1xuICAgIG5hbWVIZWFkZXIsXG4gICAgbGVuZ3RoSGVhZGVyLFxuICAgIHN0YXJ0Q29vcmRIZWFkZXIsXG4gICAgb3JpZW50YXRpb25IZWFkZXIsXG4gICAgY29uZmlybUhlYWRlcixcbiAgXTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9wdGlvbnNGb3JDb29yZCA9IChzZWxlY3REaXYsIGF4aXMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBpO1xuICAgIG9wdGlvbi5pbm5lclRleHQgPSBgJHtheGlzfSR7aX1gO1xuXG4gICAgc2VsZWN0RGl2LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cbn07XG5cbmNvbnN0IG1ha2VDZm1CdG5VbnVzYWJsZSA9IChldmVudCkgPT4ge1xuICBjb25zdCBidG5OYW1lID0gZXZlbnQuc3JjRWxlbWVudFszXS5pZDtcbiAgY29uc3QgY2ZtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuTmFtZSk7XG4gIGNmbUJ0bi5jbGFzc0xpc3QuYWRkKFwibm90LXJlYWR5XCIpO1xuICBjZm1CdG4uZGlzYWJsZWQgPSBcImRpc2FibGVkXCI7XG59O1xuXG5jb25zdCBjaGVja0FsbENmbUJ0bkRpc2FibGVkID0gKCkgPT4ge1xuICBjb25zdCBhbGxEaXNhYmxlZEJ0bkNvdW50ID0gNTtcbiAgY29uc3QgY2ZtQnRuQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZm0tY29vcmQtYnRuXCIpO1xuICBsZXQgZGlzYWJsZWRCdG5Db3VudCA9IDA7XG4gIGNmbUJ0bkFyci5mb3JFYWNoKChidG4pID0+IHtcbiAgICBpZiAoYnRuLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKSBkaXNhYmxlZEJ0bkNvdW50Kys7XG4gIH0pO1xuXG4gIHJldHVybiBkaXNhYmxlZEJ0bkNvdW50ID09IGFsbERpc2FibGVkQnRuQ291bnQ7XG59O1xuXG5jb25zdCBub3RpZnlVc2VyT2ZFcnJJblBsYWNpbmdTaGlwID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHJDb29yZElkID0gZXZlbnQuc3JjRWxlbWVudFswXS5pZDtcbiAgY29uc3QgckNvb3JkU2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQockNvb3JkSWQpO1xuXG4gIHJDb29yZFNlbC5zZXRDdXN0b21WYWxpZGl0eShcbiAgICBcIkVpdGhlciBvdXQgb2YgYm91bmRzIG9yIGEgY2VsbCBpcyBhbHJlYWR5IG9jY3VwaWVkLiBQaWNrIGFub3RoZXIgc3BvdCFcIlxuICApO1xuICByQ29vcmRTZWwucmVwb3J0VmFsaWRpdHkoKTtcbn07XG5cbmNvbnN0IGVuYWJsZU5leHRTdGVwQnRuID0gKCkgPT4ge1xuICBjb25zdCBuZXh0U3RlcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dC1zdGVwLWJ0blwiKTtcbiAgbmV4dFN0ZXBCdG4uZGlzYWJsZWQgPSBmYWxzZTtcblxuICBuZXh0U3RlcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQm9keSgpO1xuICAgIGNvbnN0IFtjdXJyUGxheWVyLCB0YXJnZXRHcmlkLCBvY2VhbkdyaWRdID0gaGFuZGxlTmV4dFR1cm5EdXJpbmdQbGFjZW1lbnQoKTtcbiAgICBpZiAoY3VyclBsYXllciA9PT0gMCkge1xuICAgICAgaW5pdEJhdHRsZUZyb250ZW5kKHRhcmdldEdyaWQsIG9jZWFuR3JpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRVc2VyU2hpcHMoY3VyclBsYXllcik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHJlbGlzdGVuVG9TaGlwUGxhY2VtZW50ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGZvcm1JZCA9IGV2ZW50LnNyY0VsZW1lbnQuaWQ7XG4gIGxldCBvbGRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKTtcbiAgbGV0IG5ld0Zvcm0gPSBvbGRGb3JtLmNsb25lTm9kZSh0cnVlKTtcbiAgbmV3Rm9ybS5zaGlwTmFtZSA9IG9sZEZvcm0uc2hpcE5hbWU7XG4gIG5ld0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZVNoaXBQbGFjZW1lbnRTdWJtaXNzaW9uKGV2ZW50KTtcbiAgfSk7XG5cbiAgb2xkRm9ybS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdGb3JtLCBvbGRGb3JtKTtcbn1cblxuY29uc3QgaGFuZGxlU2hpcFBsYWNlbWVudFN1Ym1pc3Npb24gPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcGxhY2VkU2hpcCA9IGNvbmZpcm1TaGlwUGxhY2VtZW50KGV2ZW50KTtcbiAgaWYgKHBsYWNlZFNoaXApIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUdyaWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBsYXRlLWdyaWQtZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZ2V0Q3VyckJvYXJkKCk7XG4gICAgY3JlYXRlVGVtcGxhdGVHcmlkKHRlbXBsYXRlR3JpZERpdiwgcGxheWVyQm9hcmQpO1xuICAgIGRpc3BsYXlXaGljaFBsYXllcih0ZW1wbGF0ZUdyaWREaXYpO1xuICAgIG1ha2VDZm1CdG5VbnVzYWJsZShldmVudCk7XG5cbiAgICBjb25zdCBwbGFjZWRBbGxTaGlwcyA9IGNoZWNrQWxsQ2ZtQnRuRGlzYWJsZWQoKTtcbiAgICBpZiAocGxhY2VkQWxsU2hpcHMpIGVuYWJsZU5leHRTdGVwQnRuKCk7XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5VXNlck9mRXJySW5QbGFjaW5nU2hpcChldmVudCk7XG4gICAgcmVsaXN0ZW5Ub1NoaXBQbGFjZW1lbnQoZXZlbnQpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVVc2VySW5wdXRSb3cgPSAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpID0+IHtcbiAgLy8gTmFtZSBvZiBzaGlwIGZvciB0aGF0IHJvd1xuICBjb25zdCByb3dOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93TmFtZS5pbm5lclRleHQgPSBzaGlwTmFtZTtcblxuICAvLyBMZW5ndGggb2Ygc2hpcCBmb3IgdGhhdCByb3dcbiAgY29uc3Qgcm93TGVuZ3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93TGVuZ3RoLmlubmVyVGV4dCA9IHNoaXBMZW5ndGg7XG5cbiAgLy8gSW5wdXQgZm9ybSBmb3Igc2hpcCdzIGNvb3JkaW5hdGVzXG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1kaXZcIik7XG4gIGZvcm1EaXYuc2hpcE5hbWUgPSBzaGlwTmFtZTtcbiAgZm9ybURpdi5pZCA9IGAke3NoaXBOYW1lfS1mb3JtYDtcbiAgZm9ybURpdi5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlU2hpcFBsYWNlbWVudFN1Ym1pc3Npb24oZXZlbnQpO1xuICB9KTtcblxuICBjb25zdCBpbnB1dEZvcm1VbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgaW5wdXRGb3JtVWwuY2xhc3NMaXN0LmFkZChcImlucHV0LWZvcm0tdWxcIik7XG5cbiAgY29uc3QgY29vcmRSb3dMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29vcmRSb3dMaS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtbGlcIik7XG5cbiAgY29uc3QgY29vcmRSb3dMaUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb29yZFJvd0xpTGFiZWwuZm9yID0gYCR7c2hpcE5hbWV9LXItY29vcmRgO1xuXG4gIGNvbnN0IGNvb3JkUm93TGlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb29yZFJvd0xpU2VsZWN0LmlkID0gYCR7c2hpcE5hbWV9LXItY29vcmRgO1xuICBjcmVhdGVPcHRpb25zRm9yQ29vcmQoY29vcmRSb3dMaVNlbGVjdCwgXCJyXCIpO1xuXG4gIGNvb3JkUm93TGkuYXBwZW5kQ2hpbGQoY29vcmRSb3dMaUxhYmVsKTtcbiAgY29vcmRSb3dMaS5hcHBlbmRDaGlsZChjb29yZFJvd0xpU2VsZWN0KTtcblxuICBjb25zdCBjb29yZENvbExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb29yZENvbExpLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1saVwiKTtcblxuICBjb25zdCBjb29yZENvbExpTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvb3JkQ29sTGlMYWJlbC5mb3IgPSBgYy1jb29yZGA7XG5cbiAgY29uc3QgY29vcmRDb2xMaVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvb3JkQ29sTGlTZWxlY3QuaWQgPSBgYy1jb29yZGA7XG4gIGNyZWF0ZU9wdGlvbnNGb3JDb29yZChjb29yZENvbExpU2VsZWN0LCBcImNcIik7XG5cbiAgY29vcmRDb2xMaS5hcHBlbmRDaGlsZChjb29yZENvbExpTGFiZWwpO1xuICBjb29yZENvbExpLmFwcGVuZENoaWxkKGNvb3JkQ29sTGlTZWxlY3QpO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9uTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIG9yaWVudGF0aW9uTGkuY2xhc3NMaXN0LmFkZChcImlucHV0LWxpXCIpO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9uTGlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgb3JpZW50YXRpb25MaUxhYmVsLmZvciA9IGBvcmllbnRhdGlvbmA7XG5cbiAgY29uc3Qgb3JpZW50YXRpb25MaVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIG9yaWVudGF0aW9uTGlTZWxlY3QuaWQgPSBgb3JpZW50YXRpb25gO1xuXG4gIGNvbnN0IGhvck9yaWVudGF0aW9uT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaG9yT3JpZW50YXRpb25PcHRpb24udmFsdWUgPSBcIkhcIjtcbiAgaG9yT3JpZW50YXRpb25PcHRpb24uaW5uZXJUZXh0ID0gXCJIb3Jpem9udGFsXCI7XG5cbiAgY29uc3QgdmVyT3JpZW50YXRpb25PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICB2ZXJPcmllbnRhdGlvbk9wdGlvbi52YWx1ZSA9IFwiVlwiO1xuICB2ZXJPcmllbnRhdGlvbk9wdGlvbi5pbm5lclRleHQgPSBcIlZlcnRpY2FsXCI7XG5cbiAgb3JpZW50YXRpb25MaVNlbGVjdC5hcHBlbmRDaGlsZChob3JPcmllbnRhdGlvbk9wdGlvbik7XG4gIG9yaWVudGF0aW9uTGlTZWxlY3QuYXBwZW5kQ2hpbGQodmVyT3JpZW50YXRpb25PcHRpb24pO1xuXG4gIG9yaWVudGF0aW9uTGkuYXBwZW5kQ2hpbGQob3JpZW50YXRpb25MaUxhYmVsKTtcbiAgb3JpZW50YXRpb25MaS5hcHBlbmRDaGlsZChvcmllbnRhdGlvbkxpU2VsZWN0KTtcblxuICBjb25zdCBjb25maXJtQnRuTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbmZpcm1CdG5MaS5pZCA9IGBjb25maXJtYDtcbiAgY29uZmlybUJ0bkxpLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1saVwiKTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgY29uZmlybUJ0bi5pbm5lclRleHQgPSBcIkNvbmZpcm1cIjtcbiAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2ZtLWNvb3JkLWJ0blwiKTtcbiAgY29uZmlybUJ0bi5pZCA9IGAke3NoaXBOYW1lfS1jZm0tYnRuYDtcblxuICBjb25maXJtQnRuTGkuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgaW5wdXRGb3JtVWwuYXBwZW5kQ2hpbGQoY29vcmRSb3dMaSk7XG4gIGlucHV0Rm9ybVVsLmFwcGVuZENoaWxkKGNvb3JkQ29sTGkpO1xuICBpbnB1dEZvcm1VbC5hcHBlbmRDaGlsZChvcmllbnRhdGlvbkxpKTtcbiAgaW5wdXRGb3JtVWwuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgZm9ybURpdi5hcHBlbmRDaGlsZChpbnB1dEZvcm1VbCk7XG5cbiAgcmV0dXJuIFtyb3dOYW1lLCByb3dMZW5ndGgsIGZvcm1EaXZdO1xufTtcblxuY29uc3QgY3JlYXRlVXNlcklucHV0Rm9ybSA9IChzaGlwc05hbWUsIHNoaXBzTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHVzZXJJbnB1dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1pbnB1dC1kaXZcIik7XG5cbiAgY29uc3QgW1xuICAgIG5hbWVIZWFkZXIsXG4gICAgbGVuZ3RoSGVhZGVyLFxuICAgIHN0YXJ0Q29vcmRIZWFkZXIsXG4gICAgb3JpZW50YXRpb25IZWFkZXIsXG4gICAgY29uZmlybUhlYWRlcixcbiAgXSA9IGNyZWF0ZVVzZXJJbnB1dEhlYWRlcigpO1xuICB1c2VySW5wdXREaXYuYXBwZW5kQ2hpbGQobmFtZUhlYWRlcik7XG4gIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChsZW5ndGhIZWFkZXIpO1xuICB1c2VySW5wdXREaXYuYXBwZW5kQ2hpbGQoc3RhcnRDb29yZEhlYWRlcik7XG4gIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChvcmllbnRhdGlvbkhlYWRlcik7XG4gIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChjb25maXJtSGVhZGVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzTmFtZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFtyb3dOYW1lLCByb3dMZW5ndGgsIGZvcm1EaXZdID0gY3JlYXRlVXNlcklucHV0Um93KFxuICAgICAgc2hpcHNOYW1lW2ldLFxuICAgICAgc2hpcHNMZW5ndGhbaV1cbiAgICApO1xuICAgIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChyb3dOYW1lKTtcbiAgICB1c2VySW5wdXREaXYuYXBwZW5kQ2hpbGQocm93TGVuZ3RoKTtcbiAgICB1c2VySW5wdXREaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gIH1cblxuICBjb25zdCBuZXh0U3RlcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5leHRTdGVwQnRuLmlubmVyVGV4dCA9IFwiTmV4dCBzdGVwXCI7XG4gIG5leHRTdGVwQnRuLmlkID0gXCJuZXh0LXN0ZXAtYnRuXCI7XG4gIG5leHRTdGVwQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKG5leHRTdGVwQnRuKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlXaGljaFBsYXllciA9IChkaXYpID0+IHtcbiAgY29uc3Qgd2hpY2hQbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aGljaFBsYXllckRpdi5pbm5lclRleHQgPSBgUGxheWVyICR7Z2V0Q3VyclBsYXllcigpfSwgcGxlYXNlIHBsYWNlIHlvdXIgc2hpcHMuYDtcblxuICBkaXYuaW5zZXJ0QmVmb3JlKHdoaWNoUGxheWVyRGl2LCBkaXYuZmlyc3RDaGlsZCk7XG59O1xuXG5jb25zdCBpbml0VXNlclNoaXBzID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBnYW1lU2V0dXBEaXYgPSBjcmVhdGVEaXZTa2VsZXRvbigpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVTZXR1cERpdik7XG5cbiAgY29uc3QgdGVtcGxhdGVHcmlkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wbGF0ZS1ncmlkLWRpdlwiKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBnZXRCb2FyZChwbGF5ZXIpO1xuICBjcmVhdGVUZW1wbGF0ZUdyaWQodGVtcGxhdGVHcmlkRGl2LCBwbGF5ZXJCb2FyZCk7XG4gIGRpc3BsYXlXaGljaFBsYXllcih0ZW1wbGF0ZUdyaWREaXYpO1xuXG4gIGNvbnN0IHNoaXBzTmFtZSA9IGdhbWVSdWxlcy5nZXRTaGlwc05hbWUoKTtcbiAgY29uc3Qgc2hpcHNMZW5ndGggPSBnYW1lUnVsZXMuZ2V0U2hpcHNMZW5ndGgoKTtcbiAgY3JlYXRlVXNlcklucHV0Rm9ybShzaGlwc05hbWUsIHNoaXBzTGVuZ3RoKTtcbn07XG5cbmV4cG9ydCB7IGluaXRVc2VyU2hpcHMgfTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vbG9naWMvZ2FtZVwiO1xuXG5pbXBvcnQgeyBhZGRUYXJnZXRHcmlkRUwgfSBmcm9tIFwiLi9mZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgY2xlYXJHcmlkLCBjcmVhdGVUYXJnZXRHcmlkLCBjcmVhdGVPY2VhbkdyaWQgfSBmcm9tIFwiLi9ncmlkXCI7XG5cbmltcG9ydCB7IGhhbmRsZU5leHRUdXJuSW5HYW1lIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvaGFuZGxlLW5leHQtdHVyblwiO1xuXG5jb25zdCBkaXNwbGF5RG91YmxlQXR0YWNrRXJyTXNnID0gKG91dGNvbWUpID0+IHtcbiAgY29uc3QgbXNnRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlLWRpdlwiKTtcblxuICBpZiAob3V0Y29tZSA9PT0gXCJBTVwiKSB7XG4gICAgbXNnRGl2LmlubmVyVGV4dCA9XG4gICAgICBcIllvdSd2ZSBhbHJlYWR5IG1pc3NlZCBhdCB0aGlzIHNwb3QhIEZpcmUgYXQgYW5vdGhlciBzcG90LlwiO1xuICB9IGVsc2UgaWYgKG91dGNvbWUgPT09IFwiQUhcIikge1xuICAgIG1zZ0Rpdi5pbm5lclRleHQgPVxuICAgICAgXCJZb3UndmUgYWxyZWFkeSBoaXQgYSBzaGlwIGF0IHRoaXMgc3BvdCEgRmlyZSBhdCBhbm90aGVyIHNwb3QuXCI7XG4gIH1cbn07XG5cbmNvbnN0IG1ha2VOZXh0VHVybkJ0bkNsaWNrYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgbmV4dFR1cm5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtdHVybi1idG5cIik7XG4gIGNvbnN0IG5ld05leHRUdXJuQnRuID0gbmV4dFR1cm5CdG4uY2xvbmVOb2RlKHRydWUpO1xuXG4gIG5ld05leHRUdXJuQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtcmVhZHlcIik7XG4gIG5ld05leHRUdXJuQnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICBuZXdOZXh0VHVybkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhhbmRsZU5leHRUdXJuSW5HYW1lKCk7XG4gICAgbWFrZU5leHRUdXJuQnRuVW5jbGlja2FibGUoKTtcbiAgICB1cGRhdGVET01BZnRlck5leHRUdXJuKCk7XG4gICAgc2V0VGltZW91dChhZGRUYXJnZXRHcmlkRUwsIDUwMDApO1xuICB9KTtcblxuICBuZXh0VHVybkJ0bi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOZXh0VHVybkJ0biwgbmV4dFR1cm5CdG4pO1xufTtcblxuY29uc3QgbWFrZU5leHRUdXJuQnRuVW5jbGlja2FibGUgPSAoKSA9PiB7XG4gIGNvbnN0IG5leHRUdXJuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXR1cm4tYnRuXCIpO1xuICBuZXh0VHVybkJ0bi5jbGFzc0xpc3QuYWRkKCdub3QtcmVhZHknKTtcbiAgbmV4dFR1cm5CdG4uZGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xufVxuXG5jb25zdCBkaXNwbGF5V2luTWVzc2FnZSA9ICgpID0+IHtcbiAgY29uc3QgY3VyclBsYXllciA9IGdhbWUuZ2V0Q3VyclBsYXllcigpO1xuICBjb25zdCBtc2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtZGl2XCIpO1xuXG4gIG1zZ0Rpdi5pbm5lclRleHQgPSBgQ29uZ3JhdHVsYXRpb25zIFBsYXllciAke2N1cnJQbGF5ZXJ9ISBZb3UndmUgd29uIHRoZSBnYW1lISDwn5SrYDtcbn1cblxuY29uc3QgdXBkYXRlRE9NQWZ0ZXJBdHRhY2sgPSAob3V0Y29tZSkgPT4ge1xuICBpZiAob3V0Y29tZSA9PT0gXCJNXCIgfHwgdHlwZW9mIG91dGNvbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICBjb25zdCBvcHBvbmVudCA9IGdhbWUuZ2V0T3Bwb25lbnQoKTtcbiAgICBjb25zdCB0YXJnZXRHcmlkID0gZ2FtZS5nZXRQbGF5ZXJzKClbb3Bwb25lbnRdLmdldEdhbWVCb2FyZCgpO1xuICAgIGNyZWF0ZVRhcmdldEdyaWQodGFyZ2V0R3JpZCk7XG4gICAgaWYgKGdhbWUuaXNHYW1lT3ZlcigpKSB7XG4gICAgICBkaXNwbGF5V2luTWVzc2FnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYWtlTmV4dFR1cm5CdG5DbGlja2FibGUoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheURvdWJsZUF0dGFja0Vyck1zZyhvdXRjb21lKTtcbiAgICBhZGRUYXJnZXRHcmlkRUwoKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJEaXNwbGF5ZWRHcmlkcyA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0R3JpZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFyZ2V0LWdyaWRcIik7XG4gIGNvbnN0IG9jZWFuR3JpZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW4tZ3JpZFwiKTtcblxuICBjbGVhckdyaWQodGFyZ2V0R3JpZERpdik7XG4gIGNsZWFyR3JpZChvY2VhbkdyaWREaXYpO1xufTtcblxuY29uc3QgaW5kaWNhdGVMb2FkaW5nID0gKCkgPT4ge1xuICBjb25zdCBtc2dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lc3NhZ2UtZGl2XCIpO1xuICBsZXQgdGltZUxlZnQgPSAzO1xuXG4gIGxldCBjb3VudGRvd25JbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBtc2dEaXYuaW5uZXJUZXh0ID0gYExvYWRpbmcgbmV4dCBwbGF5ZXIncyBzY3JlZW4gaW4gJHt0aW1lTGVmdH0gc2Vjb25kcy4uLmA7XG4gICAgdGltZUxlZnQtLTtcblxuICAgIGlmICh0aW1lTGVmdCA9PT0gLTEpIHtcbiAgICAgIG1zZ0Rpdi5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25JbnRlcnZhbCk7XG4gICAgfVxuICB9LCAxMDAwKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVBsYXllckRpdiA9IChjdXJyUGxheWVyKSA9PiB7XG4gIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWRpdicpO1xuICBwbGF5ZXJOYW1lRGl2LmlubmVyVGV4dCA9IGBQbGF5ZXIgJHtjdXJyUGxheWVyfWA7XG59XG5cbmNvbnN0IGNyZWF0ZVNjcmVlbkZvck5leHRQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLmdldEN1cnJQbGF5ZXIoKTtcbiAgY29uc3Qgb3Bwb25lbnQgPSBnYW1lLmdldE9wcG9uZW50KCk7XG5cbiAgdXBkYXRlUGxheWVyRGl2KGN1cnJQbGF5ZXIpO1xuXG4gIGNyZWF0ZVRhcmdldEdyaWQoZ2FtZS5nZXRQbGF5ZXJzKClbb3Bwb25lbnRdLmdldEdhbWVCb2FyZCgpKTtcbiAgY3JlYXRlT2NlYW5HcmlkKGdhbWUuZ2V0UGxheWVycygpW2N1cnJQbGF5ZXJdLmdldEdhbWVCb2FyZCgpKTtcbn07XG5cbmNvbnN0IHVwZGF0ZURPTUFmdGVyTmV4dFR1cm4gPSAoKSA9PiB7XG4gIC8vIGNsZWFyIGdyaWRzIGZvciBjdXJyZW50IHBsYXllciArIGluZGljYXRlICdsb2FkaW5nJ1xuICBjbGVhckRpc3BsYXllZEdyaWRzKCk7XG4gIC8vIHNldCBhIHRpbWVvdXQgZm9yIDMgc2Vjc1xuICBpbmRpY2F0ZUxvYWRpbmcoKTtcbiAgLy8gZGlzcGxheSBncmlkcyBmb3IgbmV4dCBwbGF5ZXJcbiAgc2V0VGltZW91dChjcmVhdGVTY3JlZW5Gb3JOZXh0UGxheWVyLCA0MDAwKTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZURPTUFmdGVyQXR0YWNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0VXNlclNoaXBzIH0gZnJvbSBcIi4vdmlldy9pbml0VXNlclNoaXBzXCI7XG5pbXBvcnQgeyBjbGVhckJvZHksIGluaXRCYXR0bGVGcm9udGVuZCB9IGZyb20gXCIuL3ZpZXcvaW5pdEJhdHRsZUZyb250ZW5kXCI7XG5cbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9sb2dpYy9nYW1lXCI7XG5pbXBvcnQgeyBhZGRUYXJnZXRHcmlkRUwgfSBmcm9tIFwiLi92aWV3L2ZlRXZlbnRIYW5kbGVyXCI7XG5cblxuLy8gZ2FtZS5pbml0R2FtZSgpO1xuXG4vLyBhc2sgdXNlciBmb3IgaW5wdXQgaGVyZVxuY2xlYXJCb2R5KCk7XG5sZXQgY3VyclBsYXllciA9IDA7IC8vIDAgYnkgZGVmYXVsdFxuaW5pdFVzZXJTaGlwcyhjdXJyUGxheWVyKTtcbi8vIGluaXRCYXR0bGVGcm9udGVuZChvY2VhbkdyaWQsIHRhcmdldEdyaWQpO1xuLy8gYWRkVGFyZ2V0R3JpZEVMKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9