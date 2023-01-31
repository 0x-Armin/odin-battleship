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
___CSS_LOADER_EXPORT___.push([module.id, "#main-screen {\n  display: grid;\n  grid-template-rows: 1fr 1fr 400px 300px;\n}\n\n.target-grid {\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n}\n\n.indicator-sq,\n.empty-sq {\n  width: 40px;\n  height: 40px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n}\n\n.indicator-sq, \n.empty-sq {\n  border-style: solid;\n  border-width: 0.5px;\n}\n\n.indicator-sq {\n  border-color: rgba(256, 256, 256,0);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.empty-sq {\n  border-color: black;\n}\n\n.target-square {\n  width: 35px;\n  height: 35px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px;\n}\n\n.ocean-square {\n  width: 25px;\n  height: 25px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px; \n}\n\n#setup-game-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#user-input-div {\n  display: grid;\n  grid-template-columns: repeat(4, 2fr) 1fr;\n  grid-template-rows: repeat(6, 1fr);\n}\n\n.form-div {\n  grid-column: 3 / 6;\n}\n\n.input-form-ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 2fr 1fr;\n}\n\n.not-ready {\n  opacity: 0.33;\n  filter: alpha(opacity=33);\n}\n\n", "",{"version":3,"sources":["webpack://./src/view/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;;EAEnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,kBAAkB;;EAElB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,kBAAkB;;EAElB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B","sourcesContent":["#main-screen {\n  display: grid;\n  grid-template-rows: 1fr 1fr 400px 300px;\n}\n\n.target-grid {\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n}\n\n.indicator-sq,\n.empty-sq {\n  width: 40px;\n  height: 40px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n}\n\n.indicator-sq, \n.empty-sq {\n  border-style: solid;\n  border-width: 0.5px;\n}\n\n.indicator-sq {\n  border-color: rgba(256, 256, 256,0);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.empty-sq {\n  border-color: black;\n}\n\n.target-square {\n  width: 35px;\n  height: 35px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px;\n}\n\n.ocean-square {\n  width: 25px;\n  height: 25px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px; \n}\n\n#setup-game-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#user-input-div {\n  display: grid;\n  grid-template-columns: repeat(4, 2fr) 1fr;\n  grid-template-rows: repeat(6, 1fr);\n}\n\n.form-div {\n  grid-column: 3 / 6;\n}\n\n.input-form-ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 2fr 1fr;\n}\n\n.not-ready {\n  opacity: 0.33;\n  filter: alpha(opacity=33);\n}\n\n"],"sourceRoot":""}]);
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

  // Fire outcome to DOM's method
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
/* harmony export */   "handleNextTurn": () => (/* binding */ handleNextTurn)
/* harmony export */ });
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/game */ "./src/logic/game.js");


const handleNextTurn = () => {
  _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.toggleCurrPlayer();
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

  const shipName = event.srcElement.id;
  const shipLength = _logic_gameRules__WEBPACK_IMPORTED_MODULE_1__.gameRules.getShipNameToLength().get(shipName);
  const shipIdx = _logic_gameRules__WEBPACK_IMPORTED_MODULE_1__.gameRules.getShipNameToIdx().get(shipName);

  const currPlayer = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer();
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
    console.log(board.some(row => row.includes(shipIndices)));
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
    for (let x of dx) {
      for (let y of dy) {
        console.log(i+x);
        console.log(j+y);
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
    if (orientation === "V") {
      dx.push(0);
      for (let y = 0; y < length; y++) dy.push(y);
    } else if (orientation === "H") {
      for (let x = 0; x < length; x++) dx.push(x);
      dy.push(0);
    }

    if (checkBoardForShipPlacement(i, j, dx, dy)) {
      placeShipOnBoard(i, j, dx, dy, idx);
      return true;
    }

    return false;
    // // ship 0 of size 2
    // gameboard.placeShip(0, 0, 0);
    // gameboard.placeShip(0, 0, 1);

    // // ship 1 of size 3
    // gameboard.placeShip(1, 1, 2);
    // gameboard.placeShip(1, 2, 2);
    // gameboard.placeShip(1, 3, 2);

    // // ship 2 of size 3
    // gameboard.placeShip(2, 3, 7);
    // gameboard.placeShip(2, 3, 8);
    // gameboard.placeShip(2, 3, 9);

    // // ship 3 of size 4
    // gameboard.placeShip(3, 7, 4);
    // gameboard.placeShip(3, 7, 5);
    // gameboard.placeShip(3, 7, 6);
    // gameboard.placeShip(3, 7, 9);

    // // ship 4 of size 5
    // gameboard.placeShip(4, 5, 9);
    // gameboard.placeShip(4, 6, 9);
    // gameboard.placeShip(4, 7, 9);
    // gameboard.placeShip(4, 8, 9);
    // gameboard.placeShip(4, 9, 9);
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

/***/ "./src/view/initFrontend.js":
/*!**********************************!*\
  !*** ./src/view/initFrontend.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initBattleFrontend": () => (/* binding */ initBattleFrontend)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/view/style.css");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./src/view/grid.js");
/* harmony import */ var _feEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feEventHandler */ "./src/view/feEventHandler.js");




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



const initBattleFrontend = (oceanGrid, targetGrid) => {
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
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./src/view/grid.js");
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/game */ "./src/logic/game.js");
/* harmony import */ var _logic_gameRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/gameRules */ "./src/logic/gameRules.js");
/* harmony import */ var _controller_handle_place_ships__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/handle-place-ships */ "./src/controller/handle-place-ships.js");








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
  formDiv.id = shipName;
  formDiv.addEventListener("submit", (event) => {
    event.preventDefault();
    const placedShip = (0,_controller_handle_place_ships__WEBPACK_IMPORTED_MODULE_4__.confirmShipPlacement)(event);
    console.log(placedShip);
    if (placedShip) {
      const templateGridDiv = document.getElementById("template-grid-div");
      const player = _logic_game__WEBPACK_IMPORTED_MODULE_2__.game.getCurrPlayer();
      const playerBoard = _logic_game__WEBPACK_IMPORTED_MODULE_2__.game.getPlayers()[player].getGameBoard();
      (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createTemplateGrid)(templateGridDiv, playerBoard);
    }
  });

  const inputFormUl = document.createElement("ul");
  inputFormUl.classList.add("input-form-ul");

  const coordRowLi = document.createElement("li");
  coordRowLi.classList.add("input-li");

  const coordRowLiLabel = document.createElement("label");
  coordRowLiLabel.for = `r-coord`;

  const coordRowLiSelect = document.createElement("select");
  coordRowLiSelect.id = `r-coord`;
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
};

const initUserShips = (player) => {
  const gameSetupDiv = createDivSkeleton();
  document.body.appendChild(gameSetupDiv);

  const templateGridDiv = document.getElementById("template-grid-div");
  const playerBoard = _logic_game__WEBPACK_IMPORTED_MODULE_2__.game.getPlayers()[player].getGameBoard();
  (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createTemplateGrid)(templateGridDiv, playerBoard);

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
    (0,_controller_handle_next_turn__WEBPACK_IMPORTED_MODULE_3__.handleNextTurn)();
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
/* harmony import */ var _view_initFrontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/initFrontend */ "./src/view/initFrontend.js");
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/game */ "./src/logic/game.js");
/* harmony import */ var _view_feEventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/feEventHandler */ "./src/view/feEventHandler.js");







// game.initGame();

let currPlayer = _logic_game__WEBPACK_IMPORTED_MODULE_2__.game.getCurrPlayer();
let opponent = 1 - currPlayer;

let oceanGrid = _logic_game__WEBPACK_IMPORTED_MODULE_2__.game.getPlayers()[currPlayer].getGameBoard();
let targetGrid = _logic_game__WEBPACK_IMPORTED_MODULE_2__.game.getPlayers()[opponent].getGameBoard();


// ask user for input here
(0,_view_initUserShips__WEBPACK_IMPORTED_MODULE_0__.initUserShips)(currPlayer);
// initBattleFrontend(oceanGrid, targetGrid);
// addTargetGridEL();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdDOzs7Ozs7O1VDL0doQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFEO0FBQ0k7O0FBRXJCO0FBQ29COzs7QUFHeEQ7O0FBRUEsaUJBQWlCLDJEQUFrQjtBQUNuQzs7QUFFQSxnQkFBZ0Isd0RBQWU7QUFDL0IsaUJBQWlCLHdEQUFlOzs7QUFHaEM7QUFDQSxrRUFBYTtBQUNiO0FBQ0EscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy9zdHlsZS5jc3M/ZWU1NyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL2hhbmRsZS1hdHRhY2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvaGFuZGxlLW5leHQtdHVybi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9oYW5kbGUtcGxhY2Utc2hpcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL2dhbWVSdWxlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3ZpZXcvZmVFdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3ZpZXcvZ3JpZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy9pbml0RnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3ZpZXcvaW5pdFVzZXJTaGlwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy91cGRhdGUtdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbi1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0MDBweCAzMDBweDtcXG59XFxuXFxuLnRhcmdldC1ncmlkIHtcXG4gIGZsZXgtZ3JvdzogMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmRpY2F0b3Itc3EsXFxuLmVtcHR5LXNxIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcblxcbiAgbWFyZ2luLXRvcDogMC41cHg7XFxuICBtYXJnaW4tbGVmdDogMC41cHg7XFxufVxcblxcbi5pbmRpY2F0b3Itc3EsIFxcbi5lbXB0eS1zcSB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXG59XFxuXFxuLmluZGljYXRvci1zcSB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU2LCAyNTYsIDI1NiwwKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zcSB7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFyZ2V0LXNxdWFyZSB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG5cXG4gIG1hcmdpbi10b3A6IDAuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXB4O1xcblxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcbn1cXG5cXG4ub2NlYW4tc3F1YXJlIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcblxcbiAgbWFyZ2luLXRvcDogMC41cHg7XFxuICBtYXJnaW4tbGVmdDogMC41cHg7XFxuXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC41cHg7IFxcbn1cXG5cXG4jc2V0dXAtZ2FtZS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI3VzZXItaW5wdXQtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyZnIpIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMyAvIDY7XFxufVxcblxcbi5pbnB1dC1mb3JtLXVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMmZyIDFmcjtcXG59XFxuXFxuLm5vdC1yZWFkeSB7XFxuICBvcGFjaXR5OiAwLjMzO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTMzKTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXcvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFlBQVk7O0VBRVosYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7O0VBRW5DLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNtYWluLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDQwMHB4IDMwMHB4O1xcbn1cXG5cXG4udGFyZ2V0LWdyaWQge1xcbiAgZmxleC1ncm93OiAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmluZGljYXRvci1zcSxcXG4uZW1wdHktc3Ege1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuXFxuICBtYXJnaW4tdG9wOiAwLjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVweDtcXG59XFxuXFxuLmluZGljYXRvci1zcSwgXFxuLmVtcHR5LXNxIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcbn1cXG5cXG4uaW5kaWNhdG9yLXNxIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTYsIDI1NiwgMjU2LDApO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXNxIHtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXJnZXQtc3F1YXJlIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgbWFyZ2luLXRvcDogMC41cHg7XFxuICBtYXJnaW4tbGVmdDogMC41cHg7XFxuXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxufVxcblxcbi5vY2Vhbi1zcXVhcmUge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuXFxuICBtYXJnaW4tdG9wOiAwLjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVweDtcXG5cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDsgXFxufVxcblxcbiNzZXR1cC1nYW1lLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jdXNlci1pbnB1dC1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDJmcikgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNjtcXG59XFxuXFxuLmlucHV0LWZvcm0tdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyZnIgMWZyO1xcbn1cXG5cXG4ubm90LXJlYWR5IHtcXG4gIG9wYWNpdHk6IDAuMzM7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MzMpO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uL2xvZ2ljL2dhbWVcIjtcblxuaW1wb3J0IHsgdXBkYXRlRE9NQWZ0ZXJBdHRhY2sgfSBmcm9tIFwiLi4vdmlldy91cGRhdGUtdmlld1wiO1xuXG5jb25zdCBnZXRSb3dBbmRDb2wgPSAoY2VsbElkeCkgPT4ge1xuICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGNlbGxJZHggLyAxMCk7XG4gIGNvbnN0IGNvbCA9IGNlbGxJZHggJSAxMDtcblxuICByZXR1cm4gW3JvdywgY29sXTtcbn1cblxuY29uc3QgY2hlY2tDaG9zZW5DZWxsID0gKHJvdywgY29sKSA9PiB7XG4gIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5nZXRPcHBvbmVudCgpO1xuICBjb25zdCBvdXRjb21lID0gZ2FtZS5nZXRQbGF5ZXJzKClbb3Bwb25lbnRdLmdldEdhbWVCb2FyZCgpLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuXG4gIHJldHVybiBvdXRjb21lO1xufVxuXG5jb25zdCBwYXNzSGl0VG9TaGlwID0gKG91dGNvbWUpID0+IHtcbiAgZ2FtZS5nZXRQbGF5ZXJzKClbZ2FtZS5nZXRPcHBvbmVudCgpXS5nZXRTaGlwQXJyKClbb3V0Y29tZV0uaGl0KCk7XG59XG5cbmNvbnN0IGhhbmRsZUF0dGFja0NlbGwgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2VsbElkeCA9IGV2ZW50LnNyY0VsZW1lbnQuaW5kZXg7XG4gIGNvbnN0IFtyb3csIGNvbF0gPSBnZXRSb3dBbmRDb2woY2VsbElkeCk7XG4gIGNvbnN0IG91dGNvbWUgPSBjaGVja0Nob3NlbkNlbGwocm93LCBjb2wpO1xuXG4gIGlmICh0eXBlb2Ygb3V0Y29tZSA9PT0gJ251bWJlcicpIHBhc3NIaXRUb1NoaXAob3V0Y29tZSk7XG5cbiAgLy8gRmlyZSBvdXRjb21lIHRvIERPTSdzIG1ldGhvZFxuICB1cGRhdGVET01BZnRlckF0dGFjayhvdXRjb21lKTtcbn1cblxuZXhwb3J0IHsgaGFuZGxlQXR0YWNrQ2VsbCB9OyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vbG9naWMvZ2FtZVwiXG5cbmNvbnN0IGhhbmRsZU5leHRUdXJuID0gKCkgPT4ge1xuICBnYW1lLnRvZ2dsZUN1cnJQbGF5ZXIoKTtcbn1cblxuZXhwb3J0IHsgaGFuZGxlTmV4dFR1cm4gfTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uL2xvZ2ljL2dhbWVcIjtcbmltcG9ydCB7IGdhbWVSdWxlcyB9IGZyb20gXCIuLi9sb2dpYy9nYW1lUnVsZXNcIjtcblxuY29uc3QgY29uZmlybVNoaXBQbGFjZW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgaSA9IHBhcnNlSW50KGV2ZW50LnNyY0VsZW1lbnRbMF0udmFsdWUpO1xuICBjb25zdCBqID0gcGFyc2VJbnQoZXZlbnQuc3JjRWxlbWVudFsxXS52YWx1ZSk7XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gZXZlbnQuc3JjRWxlbWVudFsyXS52YWx1ZTtcblxuICBjb25zdCBzaGlwTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuaWQ7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBnYW1lUnVsZXMuZ2V0U2hpcE5hbWVUb0xlbmd0aCgpLmdldChzaGlwTmFtZSk7XG4gIGNvbnN0IHNoaXBJZHggPSBnYW1lUnVsZXMuZ2V0U2hpcE5hbWVUb0lkeCgpLmdldChzaGlwTmFtZSk7XG5cbiAgY29uc3QgY3VyclBsYXllciA9IGdhbWUuZ2V0Q3VyclBsYXllcigpO1xuICByZXR1cm4gZ2FtZS5nZXRQbGF5ZXJzKClbY3VyclBsYXllcl0ucG9wdWxhdGVCb2FyZChpLCBqLCBzaGlwSWR4LCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCk7XG59XG5cbmV4cG9ydCB7IGNvbmZpcm1TaGlwUGxhY2VtZW50IH07IiwiaW1wb3J0IHsgcGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgY29uc3QgcGxheWVycyA9IFtwbGF5ZXJGYWN0b3J5KCksIHBsYXllckZhY3RvcnkoKV07XG4gIGxldCBjdXJyUGxheWVyID0gMDtcbiAgbGV0IG9wcG9uZW50ID0gMTtcblxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBwbGF5ZXJzO1xuICB9O1xuICBjb25zdCBnZXRDdXJyUGxheWVyID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyUGxheWVyO1xuICB9O1xuXG4gIGNvbnN0IGdldE9wcG9uZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBvcHBvbmVudDtcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZUN1cnJQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY3VyclBsYXllciA9IDEgLSBjdXJyUGxheWVyO1xuICAgIG9wcG9uZW50ID0gMSAtIG9wcG9uZW50O1xuICB9O1xuXG4gIGNvbnN0IGluaXRHYW1lID0gKCkgPT4ge1xuICAgIHBsYXllcnNbMF0ucG9wdWxhdGVCb2FyZCgpO1xuICAgIHBsYXllcnNbMV0ucG9wdWxhdGVCb2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3Bwb25lbnRTaGlwcyA9IHBsYXllcnNbb3Bwb25lbnRdLmdldFNoaXBBcnIoKTtcbiAgICBmb3IgKGxldCBzaGlwIG9mIG9wcG9uZW50U2hpcHMpIHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UGxheWVycyxcbiAgICBnZXRDdXJyUGxheWVyLFxuICAgIGdldE9wcG9uZW50LFxuICAgIHRvZ2dsZUN1cnJQbGF5ZXIsXG4gICAgaW5pdEdhbWUsXG4gICAgaXNHYW1lT3ZlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGdhbWUgfTtcbiIsImNvbnN0IGdhbWVSdWxlcyA9ICgoKSA9PiB7XG4gIGNvbnN0IHNoaXBzTmFtZSA9IFtcbiAgICAnRGVzdHJveWVyJyxcbiAgICAnU3VibWFyaW5lJyxcbiAgICAnQ3J1aXNlcicsXG4gICAgJ0JhdHRsZXNoaXAnLFxuICAgICdDYXJyaWVyJyxcbiAgXVxuXG4gIGNvbnN0IHNoaXBzTGVuZ3RoID0gWzIsIDMsIDMsIDQsIDVdO1xuXG4gIGNvbnN0IHNoaXBOYW1lVG9MZW5ndGggPSBuZXcgTWFwKFtcbiAgICBbJ0Rlc3Ryb3llcicsIDJdLFxuICAgIFsnU3VibWFyaW5lJywgM10sXG4gICAgWydDcnVpc2VyJywgM10sXG4gICAgWydCYXR0bGVzaGlwJywgNF0sXG4gICAgWydDYXJyaWVyJywgNV0sXG4gIF0pO1xuXG4gIGNvbnN0IHNoaXBOYW1lVG9JZHggPSBuZXcgTWFwKFtcbiAgICBbJ0Rlc3Ryb3llcicsIDBdLFxuICAgIFsnU3VibWFyaW5lJywgMV0sXG4gICAgWydDcnVpc2VyJywgMl0sXG4gICAgWydCYXR0bGVzaGlwJywgM10sXG4gICAgWydDYXJyaWVyJywgNF0sXG4gIF0pO1xuXG4gIGNvbnN0IGdldFNoaXBzTmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzaGlwc05hbWU7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwc0xlbmd0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzaGlwc0xlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXBOYW1lVG9MZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBOYW1lVG9MZW5ndGg7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwTmFtZVRvSWR4ID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwTmFtZVRvSWR4O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRTaGlwc05hbWUsXG4gICAgZ2V0U2hpcHNMZW5ndGgsXG4gICAgZ2V0U2hpcE5hbWVUb0xlbmd0aCxcbiAgICBnZXRTaGlwTmFtZVRvSWR4LFxuICB9XG59KSgpO1xuXG5leHBvcnQgeyBnYW1lUnVsZXMgfTsiLCJjb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKGRpbT0xMCkgPT4ge1xuICBjb25zdCByb3cgPSBuZXcgQXJyYXkoZGltKS5maWxsKCcnKTtcbiAgbGV0IGJvYXJkID0gbmV3IEFycmF5KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltOyBpKyspIGJvYXJkLnB1c2goQXJyYXkuZnJvbShyb3cpKTtcblxuICBjb25zdCBsZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IGFjY2Vzc0JvYXJkID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4gYm9hcmRbeF1beV07XG4gIH1cblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcElkeCwgeCwgeSkgPT4ge1xuICAgIGJvYXJkW3hdW3ldID0gc2hpcElkeDtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gJycpIHtcbiAgICAgIGJvYXJkW3hdW3ldID0gJ00nO1xuICAgICAgcmV0dXJuICdNJztcbiAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldID09PSAnSCcpIHtcbiAgICAgIHJldHVybiAnQUgnOyBcbiAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldID09PSAnTScpIHtcbiAgICAgIHJldHVybiAnQU0nO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaGlwSGl0ID0gYm9hcmRbeF1beV07XG4gICAgICBib2FyZFt4XVt5XSA9ICdIJztcbiAgICAgIHJldHVybiBzaGlwSGl0OyAvLyBUT0RPOiB0aGVuIGNhbGwgaGl0IGZ1bmN0aW9uIG9mIHNoaXBcbiAgICB9XG4gIH1cblxuICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcEluZGljZXMgPSBbMCwgMSwgMiwgMywgNF07XG4gICAgY29uc29sZS5sb2coYm9hcmQuc29tZShyb3cgPT4gcm93LmluY2x1ZGVzKHNoaXBJbmRpY2VzKSkpO1xuICAgIHJldHVybiAhYm9hcmQuc29tZShyb3cgPT4gcm93LmluY2x1ZGVzKHNoaXBJbmRpY2VzKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIGxlbmd0aCxcbiAgICBhY2Nlc3NCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhcmVBbGxTaGlwc1N1bmssXG4gIH1cbn1cblxuZXhwb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9OyIsImltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBzaGlwQXJyID0gW1xuICAgIHNoaXBGYWN0b3J5KDIpLFxuICAgIHNoaXBGYWN0b3J5KDMpLFxuICAgIHNoaXBGYWN0b3J5KDMpLFxuICAgIHNoaXBGYWN0b3J5KDQpLFxuICAgIHNoaXBGYWN0b3J5KDUpLFxuICBdO1xuXG4gIGxldCBnYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG5cbiAgY29uc3QgZ2V0U2hpcEFyciA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcEFycjtcbiAgfTtcblxuICBjb25zdCBjaGVja0JvYXJkRm9yU2hpcFBsYWNlbWVudCA9IChpLCBqLCBkeCwgZHkpID0+IHtcbiAgICBmb3IgKGxldCB4IG9mIGR4KSB7XG4gICAgICBmb3IgKGxldCB5IG9mIGR5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkreCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGoreSk7XG4gICAgICAgIGlmIChnYW1lYm9hcmQuYWNjZXNzQm9hcmQoaSt4LCBqK3kpICE9PSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwT25Cb2FyZCA9IChpLCBqLCBkeCwgZHksIGlkeCkgPT4ge1xuICAgIGZvciAobGV0IHggb2YgZHgpIHtcbiAgICAgIGZvciAobGV0IHkgb2YgZHkpIHtcbiAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChpZHgsIGkreCwgait5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gVE9ETzogQWxsb3cgdXNlcnMgdG8gZmlsbCB1cCBib2FyZCB0aGVtc2VsdmVzXG4gIGNvbnN0IHBvcHVsYXRlQm9hcmQgPSAoaSwgaiwgaWR4LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgZHggPSBbXTtcbiAgICBjb25zdCBkeSA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJWXCIpIHtcbiAgICAgIGR4LnB1c2goMCk7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSsrKSBkeS5wdXNoKHkpO1xuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwiSFwiKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxlbmd0aDsgeCsrKSBkeC5wdXNoKHgpO1xuICAgICAgZHkucHVzaCgwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tCb2FyZEZvclNoaXBQbGFjZW1lbnQoaSwgaiwgZHgsIGR5KSkge1xuICAgICAgcGxhY2VTaGlwT25Cb2FyZChpLCBqLCBkeCwgZHksIGlkeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gLy8gc2hpcCAwIG9mIHNpemUgMlxuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoMCwgMCwgMCk7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLCAwLCAxKTtcblxuICAgIC8vIC8vIHNoaXAgMSBvZiBzaXplIDNcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDEsIDEsIDIpO1xuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoMSwgMiwgMik7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCgxLCAzLCAyKTtcblxuICAgIC8vIC8vIHNoaXAgMiBvZiBzaXplIDNcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDIsIDMsIDcpO1xuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoMiwgMywgOCk7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLCAzLCA5KTtcblxuICAgIC8vIC8vIHNoaXAgMyBvZiBzaXplIDRcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDMsIDcsIDQpO1xuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoMywgNywgNSk7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCgzLCA3LCA2KTtcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDMsIDcsIDkpO1xuXG4gICAgLy8gLy8gc2hpcCA0IG9mIHNpemUgNVxuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoNCwgNSwgOSk7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCA2LCA5KTtcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDQsIDcsIDkpO1xuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoNCwgOCwgOSk7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCA5LCA5KTtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFNoaXBBcnIsXG4gICAgcG9wdWxhdGVCb2FyZCxcbiAgICBnZXRHYW1lQm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBwbGF5ZXJGYWN0b3J5IH07XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9IGZ1bmN0aW9uKGxlbmd0aCkge1xuICBjb25zdCBfbGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgX251bUhpdHMgPSAwO1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gX2xlbmd0aDtcbiAgfTtcbiAgY29uc3QgZ2V0TnVtSGl0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bUhpdHM7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbnVtSGl0cysrO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sZW5ndGggPT09IHRoaXMuX251bUhpdHMpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIF9sZW5ndGgsXG4gICAgX251bUhpdHMsXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGdldE51bUhpdCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IHsgc2hpcEZhY3RvcnkgfTtcbiIsImltcG9ydCB7IGhhbmRsZUF0dGFja0NlbGwgfSBmcm9tIFwiLi4vY29udHJvbGxlci9oYW5kbGUtYXR0YWNrXCI7XG5cbmNvbnN0IGFkZFRhcmdldEdyaWRFTCA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0R3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi50YXJnZXQtZ3JpZCAudGFyZ2V0LXNxdWFyZVwiXG4gICk7XG4gIHRhcmdldEdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKCFjZWxsLmhhc0F0dHJpYnV0ZSgnYWRkZWRFTCcpKSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBdHRhY2tDZWxsKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdhZGRlZEVMJywgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFkZFRhcmdldEdyaWRFTCB9O1xuIiwiY29uc3QgY3JlYXRlVGVtcGxhdGVHcmlkID0gKGNvbnRhaW5lciwgZ3JpZCkgPT4ge1xuICBjbGVhckdyaWQoY29udGFpbmVyKTtcbiAgY29uc3QgZ3JpZFNpemUgPSAxMTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcbiAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgZm9yIChsZXQgaj0wOyBqIDwgZ3JpZFNpemU7IGorKykge1xuICAgICAgY29uc3QgaW5mb1NxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpZiAoaT09PSAwICYmIGogPT09IDApIHtcbiAgICAgICAgaW5mb1NxLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvci1zcScpO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAwICYmIGogPj0gMSkge1xuICAgICAgICBpbmZvU3EuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yLXNxJyk7XG4gICAgICAgIGluZm9TcS5pbm5lclRleHQgPSBgYyR7ai0xfWA7XG4gICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgaSA+PSAxKSB7XG4gICAgICAgIGluZm9TcS5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3Itc3EnKTtcbiAgICAgICAgaW5mb1NxLmlubmVyVGV4dCA9IGByJHtpLTF9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm9TcS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1zcScpO1xuICAgICAgICBpbmZvU3EuaW5uZXJUZXh0ID0gZ3JpZC5hY2Nlc3NCb2FyZChpLTEsIGotMSk7XG4gICAgICB9XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChpbmZvU3EpO1xuICAgIH1cbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5jb25zdCBjbGVhckdyaWQgPSAoY29udGFpbmVyKSA9PiB7XG4gIHdoaWxlIChjb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPiAwKVxuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhcmdldEdyaWQgPSAoZ3JpZCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhcmdldC1ncmlkXCIpO1xuICBjbGVhckdyaWQoY29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoKCk7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkLmxlbmd0aCgpOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXQtc3F1YXJlXCIpO1xuICAgICAgY29uc3QgZ3JpZEVsZW1lbnQgPSBncmlkLmFjY2Vzc0JvYXJkKGksIGopO1xuICAgICAgc3F1YXJlLmlubmVyVGV4dCA9IHR5cGVvZiBncmlkRWxlbWVudCA9PT0gXCJudW1iZXJcIiA/IFwiXCIgOiBncmlkRWxlbWVudDtcbiAgICAgIHNxdWFyZS5pbmRleCA9IGkgKiAxMCArIGo7XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlT2NlYW5HcmlkID0gKGdyaWQpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2Vhbi1ncmlkXCIpO1xuICBjbGVhckdyaWQoY29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoKCk7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkLmxlbmd0aCgpOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJvY2Vhbi1zcXVhcmVcIik7XG4gICAgICBzcXVhcmUuaW5uZXJUZXh0ID0gZ3JpZC5hY2Nlc3NCb2FyZChpLCBqKTtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUZW1wbGF0ZUdyaWQsIGNsZWFyR3JpZCwgY3JlYXRlVGFyZ2V0R3JpZCwgY3JlYXRlT2NlYW5HcmlkIH07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZVRhcmdldEdyaWQsIGNyZWF0ZU9jZWFuR3JpZCB9IGZyb20gXCIuL2dyaWRcIjtcbmltcG9ydCB7IGFkZFRhcmdldEdyaWRFTCB9IGZyb20gXCIuL2ZlRXZlbnRIYW5kbGVyXCI7XG5cbmNvbnN0IGNyZWF0ZURpdlN0cnVjdHVyZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpblNjcmVlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5TY3JlZW5EaXYuaWQgPSBcIm1haW4tc2NyZWVuXCI7XG5cbiAgY29uc3QgcGxheWVyTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllck5hbWVEaXYuaWQgPSAncGxheWVyLWRpdic7XG4gIHBsYXllck5hbWVEaXYuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgMFwiO1xuXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lc3NhZ2VEaXYuaWQgPSAnbWVzc2FnZS1kaXYnO1xuICBtZXNzYWdlRGl2LmlubmVyVGV4dCA9ICcnO1xuXG4gIGNvbnN0IG5leHRUdXJuQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5leHRUdXJuQnRuLnRleHRDb250ZW50ID0gJ05leHQgdHVybic7XG4gIG5leHRUdXJuQnRuLmlkID0gJ25leHQtdHVybi1idG4nO1xuICBuZXh0VHVybkJ0bi5jbGFzc0xpc3QuYWRkKCdub3QtcmVhZHknKTtcbiAgbmV4dFR1cm5CdG4uZGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xuXG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQobmV4dFR1cm5CdG4pO1xuXG4gIGNvbnN0IHRhcmdldEdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXJnZXRHcmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICB0YXJnZXRHcmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXQtZ3JpZFwiKTtcblxuICBjb25zdCBvY2VhbkdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvY2VhbkdyaWREaXYuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gIG9jZWFuR3JpZERpdi5jbGFzc0xpc3QuYWRkKFwib2NlYW4tZ3JpZFwiKTtcblxuICBtYWluU2NyZWVuRGl2LmFwcGVuZENoaWxkKHBsYXllck5hbWVEaXYpO1xuICBtYWluU2NyZWVuRGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuICBtYWluU2NyZWVuRGl2LmFwcGVuZENoaWxkKHRhcmdldEdyaWREaXYpO1xuICBtYWluU2NyZWVuRGl2LmFwcGVuZENoaWxkKG9jZWFuR3JpZERpdik7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluU2NyZWVuRGl2KTtcbn07XG5cblxuXG5jb25zdCBpbml0QmF0dGxlRnJvbnRlbmQgPSAob2NlYW5HcmlkLCB0YXJnZXRHcmlkKSA9PiB7XG4gIGNyZWF0ZURpdlN0cnVjdHVyZSgpO1xuICBjcmVhdGVUYXJnZXRHcmlkKHRhcmdldEdyaWQpO1xuICBjcmVhdGVPY2VhbkdyaWQob2NlYW5HcmlkKTtcbiAgYWRkVGFyZ2V0R3JpZEVMKCk7XG59O1xuXG5leHBvcnQgeyBpbml0QmF0dGxlRnJvbnRlbmQgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVUZW1wbGF0ZUdyaWQgfSBmcm9tIFwiLi9ncmlkXCI7XG5cbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vbG9naWMvZ2FtZVwiO1xuaW1wb3J0IHsgZ2FtZVJ1bGVzIH0gZnJvbSBcIi4uL2xvZ2ljL2dhbWVSdWxlc1wiO1xuXG5pbXBvcnQgeyBjb25maXJtU2hpcFBsYWNlbWVudCB9IGZyb20gXCIuLi9jb250cm9sbGVyL2hhbmRsZS1wbGFjZS1zaGlwc1wiO1xuXG5jb25zdCBjcmVhdGVEaXZTa2VsZXRvbiA9ICgpID0+IHtcbiAgY29uc3Qgc2V0dXBHYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V0dXBHYW1lRGl2LmlkID0gXCJzZXR1cC1nYW1lLWRpdlwiO1xuXG4gIGNvbnN0IHRlbXBsYXRlR3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBsYXRlR3JpZERpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgdGVtcGxhdGVHcmlkRGl2LmlkID0gXCJ0ZW1wbGF0ZS1ncmlkLWRpdlwiO1xuXG4gIGNvbnN0IHVzZXJJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVzZXJJbnB1dERpdi5pZCA9IFwidXNlci1pbnB1dC1kaXZcIjtcblxuICBzZXR1cEdhbWVEaXYuYXBwZW5kQ2hpbGQodGVtcGxhdGVHcmlkRGl2KTtcbiAgc2V0dXBHYW1lRGl2LmFwcGVuZENoaWxkKHVzZXJJbnB1dERpdik7XG5cbiAgcmV0dXJuIHNldHVwR2FtZURpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVVzZXJJbnB1dEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgbmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hbWVIZWFkZXIuaW5uZXJUZXh0ID0gXCJOYW1lXCI7XG4gIG5hbWVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImZvcm0taGVhZGVyXCIpO1xuXG4gIGNvbnN0IGxlbmd0aEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlbmd0aEhlYWRlci5pbm5lclRleHQgPSBcIkxlbmd0aFwiO1xuICBsZW5ndGhIZWFkZXIuY2xhc3NMaXN0LmFkZChcImZvcm0taGVhZGVyXCIpO1xuXG4gIGNvbnN0IHN0YXJ0Q29vcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdGFydENvb3JkSGVhZGVyLmlubmVyVGV4dCA9IFwiU3RhcnRpbmcgY29vcmRpbmF0ZXNcIjtcbiAgc3RhcnRDb29yZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1oZWFkZXJcIik7XG5cbiAgY29uc3Qgb3JpZW50YXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcmllbnRhdGlvbkhlYWRlci5pbm5lclRleHQgPSBcIk9yaWVudGF0aW9uXCI7XG4gIG9yaWVudGF0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWhlYWRlclwiKTtcblxuICBjb25zdCBjb25maXJtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uZmlybUhlYWRlci5pbm5lclRleHQgPSBcIkNvbmZpcm0gcGxhY2VtZW50XCI7XG4gIGNvbmZpcm1IZWFkZXIuY2xhc3NMaXN0LmFkZChcImZvcm0taGVhZGVyXCIpO1xuXG4gIHJldHVybiBbXG4gICAgbmFtZUhlYWRlcixcbiAgICBsZW5ndGhIZWFkZXIsXG4gICAgc3RhcnRDb29yZEhlYWRlcixcbiAgICBvcmllbnRhdGlvbkhlYWRlcixcbiAgICBjb25maXJtSGVhZGVyLFxuICBdO1xufTtcblxuY29uc3QgY3JlYXRlT3B0aW9uc0ZvckNvb3JkID0gKHNlbGVjdERpdiwgYXhpcykgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGk7XG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IGAke2F4aXN9JHtpfWA7XG5cbiAgICBzZWxlY3REaXYuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlVXNlcklucHV0Um93ID0gKHNoaXBOYW1lLCBzaGlwTGVuZ3RoKSA9PiB7XG4gIC8vIE5hbWUgb2Ygc2hpcCBmb3IgdGhhdCByb3dcbiAgY29uc3Qgcm93TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvd05hbWUuaW5uZXJUZXh0ID0gc2hpcE5hbWU7XG5cbiAgLy8gTGVuZ3RoIG9mIHNoaXAgZm9yIHRoYXQgcm93XG4gIGNvbnN0IHJvd0xlbmd0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvd0xlbmd0aC5pbm5lclRleHQgPSBzaGlwTGVuZ3RoO1xuXG4gIC8vIElucHV0IGZvcm0gZm9yIHNoaXAncyBjb29yZGluYXRlc1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm1EaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZGl2XCIpO1xuICBmb3JtRGl2LmlkID0gc2hpcE5hbWU7XG4gIGZvcm1EaXYuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBjb25maXJtU2hpcFBsYWNlbWVudChldmVudCk7XG4gICAgY29uc29sZS5sb2cocGxhY2VkU2hpcCk7XG4gICAgaWYgKHBsYWNlZFNoaXApIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlR3JpZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGxhdGUtZ3JpZC1kaXZcIik7XG4gICAgICBjb25zdCBwbGF5ZXIgPSBnYW1lLmdldEN1cnJQbGF5ZXIoKTtcbiAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZS5nZXRQbGF5ZXJzKClbcGxheWVyXS5nZXRHYW1lQm9hcmQoKTtcbiAgICAgIGNyZWF0ZVRlbXBsYXRlR3JpZCh0ZW1wbGF0ZUdyaWREaXYsIHBsYXllckJvYXJkKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0Rm9ybVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBpbnB1dEZvcm1VbC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZm9ybS11bFwiKTtcblxuICBjb25zdCBjb29yZFJvd0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb29yZFJvd0xpLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1saVwiKTtcblxuICBjb25zdCBjb29yZFJvd0xpTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvb3JkUm93TGlMYWJlbC5mb3IgPSBgci1jb29yZGA7XG5cbiAgY29uc3QgY29vcmRSb3dMaVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvb3JkUm93TGlTZWxlY3QuaWQgPSBgci1jb29yZGA7XG4gIGNyZWF0ZU9wdGlvbnNGb3JDb29yZChjb29yZFJvd0xpU2VsZWN0LCBcInJcIik7XG5cbiAgY29vcmRSb3dMaS5hcHBlbmRDaGlsZChjb29yZFJvd0xpTGFiZWwpO1xuICBjb29yZFJvd0xpLmFwcGVuZENoaWxkKGNvb3JkUm93TGlTZWxlY3QpO1xuXG4gIGNvbnN0IGNvb3JkQ29sTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvb3JkQ29sTGkuY2xhc3NMaXN0LmFkZChcImlucHV0LWxpXCIpO1xuXG4gIGNvbnN0IGNvb3JkQ29sTGlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29vcmRDb2xMaUxhYmVsLmZvciA9IGBjLWNvb3JkYDtcblxuICBjb25zdCBjb29yZENvbExpU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29vcmRDb2xMaVNlbGVjdC5pZCA9IGBjLWNvb3JkYDtcbiAgY3JlYXRlT3B0aW9uc0ZvckNvb3JkKGNvb3JkQ29sTGlTZWxlY3QsIFwiY1wiKTtcblxuICBjb29yZENvbExpLmFwcGVuZENoaWxkKGNvb3JkQ29sTGlMYWJlbCk7XG4gIGNvb3JkQ29sTGkuYXBwZW5kQ2hpbGQoY29vcmRDb2xMaVNlbGVjdCk7XG5cbiAgY29uc3Qgb3JpZW50YXRpb25MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgb3JpZW50YXRpb25MaS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtbGlcIik7XG5cbiAgY29uc3Qgb3JpZW50YXRpb25MaUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBvcmllbnRhdGlvbkxpTGFiZWwuZm9yID0gYG9yaWVudGF0aW9uYDtcblxuICBjb25zdCBvcmllbnRhdGlvbkxpU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgb3JpZW50YXRpb25MaVNlbGVjdC5pZCA9IGBvcmllbnRhdGlvbmA7XG5cbiAgY29uc3QgaG9yT3JpZW50YXRpb25PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBob3JPcmllbnRhdGlvbk9wdGlvbi52YWx1ZSA9IFwiSFwiO1xuICBob3JPcmllbnRhdGlvbk9wdGlvbi5pbm5lclRleHQgPSBcIkhvcml6b250YWxcIjtcblxuICBjb25zdCB2ZXJPcmllbnRhdGlvbk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHZlck9yaWVudGF0aW9uT3B0aW9uLnZhbHVlID0gXCJWXCI7XG4gIHZlck9yaWVudGF0aW9uT3B0aW9uLmlubmVyVGV4dCA9IFwiVmVydGljYWxcIjtcblxuICBvcmllbnRhdGlvbkxpU2VsZWN0LmFwcGVuZENoaWxkKGhvck9yaWVudGF0aW9uT3B0aW9uKTtcbiAgb3JpZW50YXRpb25MaVNlbGVjdC5hcHBlbmRDaGlsZCh2ZXJPcmllbnRhdGlvbk9wdGlvbik7XG5cbiAgb3JpZW50YXRpb25MaS5hcHBlbmRDaGlsZChvcmllbnRhdGlvbkxpTGFiZWwpO1xuICBvcmllbnRhdGlvbkxpLmFwcGVuZENoaWxkKG9yaWVudGF0aW9uTGlTZWxlY3QpO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG5MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uZmlybUJ0bkxpLmlkID0gYGNvbmZpcm1gO1xuICBjb25maXJtQnRuTGkuY2xhc3NMaXN0LmFkZChcImlucHV0LWxpXCIpO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBjb25maXJtQnRuLmlubmVyVGV4dCA9IFwiQ29uZmlybVwiO1xuICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJjZm0tY29vcmQtYnRuXCIpO1xuXG4gIGNvbmZpcm1CdG5MaS5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICBpbnB1dEZvcm1VbC5hcHBlbmRDaGlsZChjb29yZFJvd0xpKTtcbiAgaW5wdXRGb3JtVWwuYXBwZW5kQ2hpbGQoY29vcmRDb2xMaSk7XG4gIGlucHV0Rm9ybVVsLmFwcGVuZENoaWxkKG9yaWVudGF0aW9uTGkpO1xuICBpbnB1dEZvcm1VbC5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICBmb3JtRGl2LmFwcGVuZENoaWxkKGlucHV0Rm9ybVVsKTtcblxuICByZXR1cm4gW3Jvd05hbWUsIHJvd0xlbmd0aCwgZm9ybURpdl07XG59O1xuXG5jb25zdCBjcmVhdGVVc2VySW5wdXRGb3JtID0gKHNoaXBzTmFtZSwgc2hpcHNMZW5ndGgpID0+IHtcbiAgY29uc3QgdXNlcklucHV0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWlucHV0LWRpdlwiKTtcblxuICBjb25zdCBbXG4gICAgbmFtZUhlYWRlcixcbiAgICBsZW5ndGhIZWFkZXIsXG4gICAgc3RhcnRDb29yZEhlYWRlcixcbiAgICBvcmllbnRhdGlvbkhlYWRlcixcbiAgICBjb25maXJtSGVhZGVyLFxuICBdID0gY3JlYXRlVXNlcklucHV0SGVhZGVyKCk7XG4gIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChuYW1lSGVhZGVyKTtcbiAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKGxlbmd0aEhlYWRlcik7XG4gIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChzdGFydENvb3JkSGVhZGVyKTtcbiAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKG9yaWVudGF0aW9uSGVhZGVyKTtcbiAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKGNvbmZpcm1IZWFkZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3Jvd05hbWUsIHJvd0xlbmd0aCwgZm9ybURpdl0gPSBjcmVhdGVVc2VySW5wdXRSb3coXG4gICAgICBzaGlwc05hbWVbaV0sXG4gICAgICBzaGlwc0xlbmd0aFtpXVxuICAgICk7XG4gICAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKHJvd05hbWUpO1xuICAgIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChyb3dMZW5ndGgpO1xuICAgIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgfVxufTtcblxuY29uc3QgaW5pdFVzZXJTaGlwcyA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgZ2FtZVNldHVwRGl2ID0gY3JlYXRlRGl2U2tlbGV0b24oKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lU2V0dXBEaXYpO1xuXG4gIGNvbnN0IHRlbXBsYXRlR3JpZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGxhdGUtZ3JpZC1kaXZcIik7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZS5nZXRQbGF5ZXJzKClbcGxheWVyXS5nZXRHYW1lQm9hcmQoKTtcbiAgY3JlYXRlVGVtcGxhdGVHcmlkKHRlbXBsYXRlR3JpZERpdiwgcGxheWVyQm9hcmQpO1xuXG4gIGNvbnN0IHNoaXBzTmFtZSA9IGdhbWVSdWxlcy5nZXRTaGlwc05hbWUoKTtcbiAgY29uc3Qgc2hpcHNMZW5ndGggPSBnYW1lUnVsZXMuZ2V0U2hpcHNMZW5ndGgoKTtcbiAgY3JlYXRlVXNlcklucHV0Rm9ybShzaGlwc05hbWUsIHNoaXBzTGVuZ3RoKTtcbn07XG5cbmV4cG9ydCB7IGluaXRVc2VyU2hpcHMgfTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vbG9naWMvZ2FtZVwiO1xuXG5pbXBvcnQgeyBhZGRUYXJnZXRHcmlkRUwgfSBmcm9tIFwiLi9mZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgY2xlYXJHcmlkLCBjcmVhdGVUYXJnZXRHcmlkLCBjcmVhdGVPY2VhbkdyaWQgfSBmcm9tIFwiLi9ncmlkXCI7XG5cbmltcG9ydCB7IGhhbmRsZU5leHRUdXJuIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvaGFuZGxlLW5leHQtdHVyblwiO1xuXG5jb25zdCBkaXNwbGF5RG91YmxlQXR0YWNrRXJyTXNnID0gKG91dGNvbWUpID0+IHtcbiAgY29uc3QgbXNnRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlLWRpdlwiKTtcblxuICBpZiAob3V0Y29tZSA9PT0gXCJBTVwiKSB7XG4gICAgbXNnRGl2LmlubmVyVGV4dCA9XG4gICAgICBcIllvdSd2ZSBhbHJlYWR5IG1pc3NlZCBhdCB0aGlzIHNwb3QhIEZpcmUgYXQgYW5vdGhlciBzcG90LlwiO1xuICB9IGVsc2UgaWYgKG91dGNvbWUgPT09IFwiQUhcIikge1xuICAgIG1zZ0Rpdi5pbm5lclRleHQgPVxuICAgICAgXCJZb3UndmUgYWxyZWFkeSBoaXQgYSBzaGlwIGF0IHRoaXMgc3BvdCEgRmlyZSBhdCBhbm90aGVyIHNwb3QuXCI7XG4gIH1cbn07XG5cbmNvbnN0IG1ha2VOZXh0VHVybkJ0bkNsaWNrYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgbmV4dFR1cm5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtdHVybi1idG5cIik7XG4gIGNvbnN0IG5ld05leHRUdXJuQnRuID0gbmV4dFR1cm5CdG4uY2xvbmVOb2RlKHRydWUpO1xuXG4gIG5ld05leHRUdXJuQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtcmVhZHlcIik7XG4gIG5ld05leHRUdXJuQnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICBuZXdOZXh0VHVybkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhhbmRsZU5leHRUdXJuKCk7XG4gICAgbWFrZU5leHRUdXJuQnRuVW5jbGlja2FibGUoKTtcbiAgICB1cGRhdGVET01BZnRlck5leHRUdXJuKCk7XG4gICAgc2V0VGltZW91dChhZGRUYXJnZXRHcmlkRUwsIDUwMDApO1xuICB9KTtcblxuICBuZXh0VHVybkJ0bi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOZXh0VHVybkJ0biwgbmV4dFR1cm5CdG4pO1xufTtcblxuY29uc3QgbWFrZU5leHRUdXJuQnRuVW5jbGlja2FibGUgPSAoKSA9PiB7XG4gIGNvbnN0IG5leHRUdXJuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXR1cm4tYnRuXCIpO1xuICBuZXh0VHVybkJ0bi5jbGFzc0xpc3QuYWRkKCdub3QtcmVhZHknKTtcbiAgbmV4dFR1cm5CdG4uZGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xufVxuXG5jb25zdCBkaXNwbGF5V2luTWVzc2FnZSA9ICgpID0+IHtcbiAgY29uc3QgY3VyclBsYXllciA9IGdhbWUuZ2V0Q3VyclBsYXllcigpO1xuICBjb25zdCBtc2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtZGl2XCIpO1xuXG4gIG1zZ0Rpdi5pbm5lclRleHQgPSBgQ29uZ3JhdHVsYXRpb25zIFBsYXllciAke2N1cnJQbGF5ZXJ9ISBZb3UndmUgd29uIHRoZSBnYW1lISDwn5SrYDtcbn1cblxuY29uc3QgdXBkYXRlRE9NQWZ0ZXJBdHRhY2sgPSAob3V0Y29tZSkgPT4ge1xuICBpZiAob3V0Y29tZSA9PT0gXCJNXCIgfHwgdHlwZW9mIG91dGNvbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICBjb25zdCBvcHBvbmVudCA9IGdhbWUuZ2V0T3Bwb25lbnQoKTtcbiAgICBjb25zdCB0YXJnZXRHcmlkID0gZ2FtZS5nZXRQbGF5ZXJzKClbb3Bwb25lbnRdLmdldEdhbWVCb2FyZCgpO1xuICAgIGNyZWF0ZVRhcmdldEdyaWQodGFyZ2V0R3JpZCk7XG4gICAgaWYgKGdhbWUuaXNHYW1lT3ZlcigpKSB7XG4gICAgICBkaXNwbGF5V2luTWVzc2FnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYWtlTmV4dFR1cm5CdG5DbGlja2FibGUoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheURvdWJsZUF0dGFja0Vyck1zZyhvdXRjb21lKTtcbiAgICBhZGRUYXJnZXRHcmlkRUwoKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJEaXNwbGF5ZWRHcmlkcyA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0R3JpZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFyZ2V0LWdyaWRcIik7XG4gIGNvbnN0IG9jZWFuR3JpZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW4tZ3JpZFwiKTtcblxuICBjbGVhckdyaWQodGFyZ2V0R3JpZERpdik7XG4gIGNsZWFyR3JpZChvY2VhbkdyaWREaXYpO1xufTtcblxuY29uc3QgaW5kaWNhdGVMb2FkaW5nID0gKCkgPT4ge1xuICBjb25zdCBtc2dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lc3NhZ2UtZGl2XCIpO1xuICBsZXQgdGltZUxlZnQgPSAzO1xuXG4gIGxldCBjb3VudGRvd25JbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBtc2dEaXYuaW5uZXJUZXh0ID0gYExvYWRpbmcgbmV4dCBwbGF5ZXIncyBzY3JlZW4gaW4gJHt0aW1lTGVmdH0gc2Vjb25kcy4uLmA7XG4gICAgdGltZUxlZnQtLTtcblxuICAgIGlmICh0aW1lTGVmdCA9PT0gLTEpIHtcbiAgICAgIG1zZ0Rpdi5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25JbnRlcnZhbCk7XG4gICAgfVxuICB9LCAxMDAwKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVBsYXllckRpdiA9IChjdXJyUGxheWVyKSA9PiB7XG4gIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWRpdicpO1xuICBwbGF5ZXJOYW1lRGl2LmlubmVyVGV4dCA9IGBQbGF5ZXIgJHtjdXJyUGxheWVyfWA7XG59XG5cbmNvbnN0IGNyZWF0ZVNjcmVlbkZvck5leHRQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLmdldEN1cnJQbGF5ZXIoKTtcbiAgY29uc3Qgb3Bwb25lbnQgPSBnYW1lLmdldE9wcG9uZW50KCk7XG5cbiAgdXBkYXRlUGxheWVyRGl2KGN1cnJQbGF5ZXIpO1xuXG4gIGNyZWF0ZVRhcmdldEdyaWQoZ2FtZS5nZXRQbGF5ZXJzKClbb3Bwb25lbnRdLmdldEdhbWVCb2FyZCgpKTtcbiAgY3JlYXRlT2NlYW5HcmlkKGdhbWUuZ2V0UGxheWVycygpW2N1cnJQbGF5ZXJdLmdldEdhbWVCb2FyZCgpKTtcbn07XG5cbmNvbnN0IHVwZGF0ZURPTUFmdGVyTmV4dFR1cm4gPSAoKSA9PiB7XG4gIC8vIGNsZWFyIGdyaWRzIGZvciBjdXJyZW50IHBsYXllciArIGluZGljYXRlICdsb2FkaW5nJ1xuICBjbGVhckRpc3BsYXllZEdyaWRzKCk7XG4gIC8vIHNldCBhIHRpbWVvdXQgZm9yIDMgc2Vjc1xuICBpbmRpY2F0ZUxvYWRpbmcoKTtcbiAgLy8gZGlzcGxheSBncmlkcyBmb3IgbmV4dCBwbGF5ZXJcbiAgc2V0VGltZW91dChjcmVhdGVTY3JlZW5Gb3JOZXh0UGxheWVyLCA0MDAwKTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZURPTUFmdGVyQXR0YWNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0VXNlclNoaXBzIH0gZnJvbSBcIi4vdmlldy9pbml0VXNlclNoaXBzXCI7XG5pbXBvcnQgeyBpbml0QmF0dGxlRnJvbnRlbmQgfSBmcm9tIFwiLi92aWV3L2luaXRGcm9udGVuZFwiO1xuXG5pbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vbG9naWMvZ2FtZVwiO1xuaW1wb3J0IHsgYWRkVGFyZ2V0R3JpZEVMIH0gZnJvbSBcIi4vdmlldy9mZUV2ZW50SGFuZGxlclwiO1xuXG5cbi8vIGdhbWUuaW5pdEdhbWUoKTtcblxubGV0IGN1cnJQbGF5ZXIgPSBnYW1lLmdldEN1cnJQbGF5ZXIoKTtcbmxldCBvcHBvbmVudCA9IDEgLSBjdXJyUGxheWVyO1xuXG5sZXQgb2NlYW5HcmlkID0gZ2FtZS5nZXRQbGF5ZXJzKClbY3VyclBsYXllcl0uZ2V0R2FtZUJvYXJkKCk7XG5sZXQgdGFyZ2V0R3JpZCA9IGdhbWUuZ2V0UGxheWVycygpW29wcG9uZW50XS5nZXRHYW1lQm9hcmQoKTtcblxuXG4vLyBhc2sgdXNlciBmb3IgaW5wdXQgaGVyZVxuaW5pdFVzZXJTaGlwcyhjdXJyUGxheWVyKTtcbi8vIGluaXRCYXR0bGVGcm9udGVuZChvY2VhbkdyaWQsIHRhcmdldEdyaWQpO1xuLy8gYWRkVGFyZ2V0R3JpZEVMKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9