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
    const gameBoardDim = 10;

    for (let x of dx) {
      for (let y of dy) {
        if (i+x >= gameBoardDim || j+y >= getGameBoard) return false;
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
/* harmony import */ var _initFrontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initFrontend */ "./src/view/initFrontend.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./src/view/grid.js");
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/game */ "./src/logic/game.js");
/* harmony import */ var _logic_gameRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logic/gameRules */ "./src/logic/gameRules.js");
/* harmony import */ var _controller_handle_place_ships__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/handle-place-ships */ "./src/controller/handle-place-ships.js");









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
  const nextStepBtn = document.getElementById('next-step-btn');
  nextStepBtn.disabled = false;

  nextStepBtn.addEventListener('click', () => {
    _logic_game__WEBPACK_IMPORTED_MODULE_3__.game.toggleCurrPlayer();
    const currPlayer = _logic_game__WEBPACK_IMPORTED_MODULE_3__.game.getCurrPlayer();
    if (currPlayer === 0) {
      // start game
      console.log('start game');
    } else {
      (0,_initFrontend__WEBPACK_IMPORTED_MODULE_1__.clearBody)();
      initUserShips(currPlayer);
    }
  });
}

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
    const placedShip = (0,_controller_handle_place_ships__WEBPACK_IMPORTED_MODULE_5__.confirmShipPlacement)(event);
    if (placedShip) {
      const templateGridDiv = document.getElementById("template-grid-div");
      const player = _logic_game__WEBPACK_IMPORTED_MODULE_3__.game.getCurrPlayer();
      const playerBoard = _logic_game__WEBPACK_IMPORTED_MODULE_3__.game.getPlayers()[player].getGameBoard();
      (0,_grid__WEBPACK_IMPORTED_MODULE_2__.createTemplateGrid)(templateGridDiv, playerBoard);
      displayWhichPlayer(templateGridDiv);
      makeCfmBtnUnusable(event);

      const placedAllShips = checkAllCfmBtnDisabled();
      if (placedAllShips) enableNextStepBtn();
      // CONT: Make 'next action' btn available by checking if all btns
      // with 'cfm-coord-btn' class have been disabled
    } else {
      notifyUserOfErrInPlacingShip(event);
    }
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
  nextStepBtn.id = 'next-step-btn';
  nextStepBtn.disabled = true;
  userInputDiv.appendChild(nextStepBtn);
};

const displayWhichPlayer = (div) => {
  const whichPlayerDiv = document.createElement("div");
  whichPlayerDiv.innerText = `Player ${_logic_game__WEBPACK_IMPORTED_MODULE_3__.game.getCurrPlayer()}, please place your ships.`;

  div.insertBefore(whichPlayerDiv, div.firstChild);
};

const initUserShips = (player) => {
  const gameSetupDiv = createDivSkeleton();
  document.body.appendChild(gameSetupDiv);

  const templateGridDiv = document.getElementById("template-grid-div");
  const playerBoard = _logic_game__WEBPACK_IMPORTED_MODULE_3__.game.getPlayers()[player].getGameBoard();
  (0,_grid__WEBPACK_IMPORTED_MODULE_2__.createTemplateGrid)(templateGridDiv, playerBoard);
  displayWhichPlayer(templateGridDiv);

  const shipsName = _logic_gameRules__WEBPACK_IMPORTED_MODULE_4__.gameRules.getShipsName();
  const shipsLength = _logic_gameRules__WEBPACK_IMPORTED_MODULE_4__.gameRules.getShipsLength();
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
(0,_view_initFrontend__WEBPACK_IMPORTED_MODULE_1__.clearBody)();
(0,_view_initUserShips__WEBPACK_IMPORTED_MODULE_0__.initUserShips)(currPlayer);
// initBattleFrontend(oceanGrid, targetGrid);
// addTargetGridEL();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsd0RBQWU7OztBQUdoQztBQUNBLDZEQUFTO0FBQ1Qsa0VBQWE7QUFDYjtBQUNBLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3ZpZXcvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3ZpZXcvc3R5bGUuY3NzP2VlNTciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9oYW5kbGUtYXR0YWNrLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL2hhbmRsZS1uZXh0LXR1cm4uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvaGFuZGxlLXBsYWNlLXNoaXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9nYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9nYW1lUnVsZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L2ZlRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L2dyaWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3ZpZXcvaW5pdEZyb250ZW5kLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L2luaXRVc2VyU2hpcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3ZpZXcvdXBkYXRlLXZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW4tc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNDAwcHggMzAwcHg7XFxufVxcblxcbi50YXJnZXQtZ3JpZCB7XFxuICBmbGV4LWdyb3c6IDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5kaWNhdG9yLXNxLFxcbi5lbXB0eS1zcSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG5cXG4gIG1hcmdpbi10b3A6IDAuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXB4O1xcbn1cXG5cXG4uaW5kaWNhdG9yLXNxLCBcXG4uZW1wdHktc3Ege1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxufVxcblxcbi5pbmRpY2F0b3Itc3Ege1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsMCk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3Ege1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRhcmdldC1zcXVhcmUge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuXFxuICBtYXJnaW4tdG9wOiAwLjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVweDtcXG5cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXG59XFxuXFxuLm9jZWFuLXNxdWFyZSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG5cXG4gIG1hcmdpbi10b3A6IDAuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXB4O1xcblxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuNXB4OyBcXG59XFxuXFxuI3NldHVwLWdhbWUtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbiN1c2VyLWlucHV0LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMmZyKSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA2O1xcbn1cXG5cXG4uaW5wdXQtZm9ybS11bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDJmciAxZnI7XFxufVxcblxcbi5ub3QtcmVhZHkge1xcbiAgb3BhY2l0eTogMC4zMztcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0zMyk7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZOztFQUVaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7O0VBRVosaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUNBQW1DOztFQUVuQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbWFpbi1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0MDBweCAzMDBweDtcXG59XFxuXFxuLnRhcmdldC1ncmlkIHtcXG4gIGZsZXgtZ3JvdzogMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmRpY2F0b3Itc3EsXFxuLmVtcHR5LXNxIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcblxcbiAgbWFyZ2luLXRvcDogMC41cHg7XFxuICBtYXJnaW4tbGVmdDogMC41cHg7XFxufVxcblxcbi5pbmRpY2F0b3Itc3EsIFxcbi5lbXB0eS1zcSB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXG59XFxuXFxuLmluZGljYXRvci1zcSB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU2LCAyNTYsIDI1NiwwKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zcSB7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFyZ2V0LXNxdWFyZSB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG5cXG4gIG1hcmdpbi10b3A6IDAuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXB4O1xcblxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcbn1cXG5cXG4ub2NlYW4tc3F1YXJlIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcblxcbiAgbWFyZ2luLXRvcDogMC41cHg7XFxuICBtYXJnaW4tbGVmdDogMC41cHg7XFxuXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC41cHg7IFxcbn1cXG5cXG4jc2V0dXAtZ2FtZS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI3VzZXItaW5wdXQtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyZnIpIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMyAvIDY7XFxufVxcblxcbi5pbnB1dC1mb3JtLXVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMmZyIDFmcjtcXG59XFxuXFxuLm5vdC1yZWFkeSB7XFxuICBvcGFjaXR5OiAwLjMzO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTMzKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi9sb2dpYy9nYW1lXCI7XG5cbmltcG9ydCB7IHVwZGF0ZURPTUFmdGVyQXR0YWNrIH0gZnJvbSBcIi4uL3ZpZXcvdXBkYXRlLXZpZXdcIjtcblxuY29uc3QgZ2V0Um93QW5kQ29sID0gKGNlbGxJZHgpID0+IHtcbiAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihjZWxsSWR4IC8gMTApO1xuICBjb25zdCBjb2wgPSBjZWxsSWR4ICUgMTA7XG5cbiAgcmV0dXJuIFtyb3csIGNvbF07XG59XG5cbmNvbnN0IGNoZWNrQ2hvc2VuQ2VsbCA9IChyb3csIGNvbCkgPT4ge1xuICBjb25zdCBvcHBvbmVudCA9IGdhbWUuZ2V0T3Bwb25lbnQoKTtcbiAgY29uc3Qgb3V0Y29tZSA9IGdhbWUuZ2V0UGxheWVycygpW29wcG9uZW50XS5nZXRHYW1lQm9hcmQoKS5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcblxuICByZXR1cm4gb3V0Y29tZTtcbn1cblxuY29uc3QgcGFzc0hpdFRvU2hpcCA9IChvdXRjb21lKSA9PiB7XG4gIGdhbWUuZ2V0UGxheWVycygpW2dhbWUuZ2V0T3Bwb25lbnQoKV0uZ2V0U2hpcEFycigpW291dGNvbWVdLmhpdCgpO1xufVxuXG5jb25zdCBoYW5kbGVBdHRhY2tDZWxsID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGNlbGxJZHggPSBldmVudC5zcmNFbGVtZW50LmluZGV4O1xuICBjb25zdCBbcm93LCBjb2xdID0gZ2V0Um93QW5kQ29sKGNlbGxJZHgpO1xuICBjb25zdCBvdXRjb21lID0gY2hlY2tDaG9zZW5DZWxsKHJvdywgY29sKTtcblxuICBpZiAodHlwZW9mIG91dGNvbWUgPT09ICdudW1iZXInKSBwYXNzSGl0VG9TaGlwKG91dGNvbWUpO1xuXG4gIC8vIEZpcmUgb3V0Y29tZSB0byBET00ncyBtZXRob2RcbiAgdXBkYXRlRE9NQWZ0ZXJBdHRhY2sob3V0Y29tZSk7XG59XG5cbmV4cG9ydCB7IGhhbmRsZUF0dGFja0NlbGwgfTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uL2xvZ2ljL2dhbWVcIlxuXG5jb25zdCBoYW5kbGVOZXh0VHVybiA9ICgpID0+IHtcbiAgZ2FtZS50b2dnbGVDdXJyUGxheWVyKCk7XG59XG5cbmV4cG9ydCB7IGhhbmRsZU5leHRUdXJuIH07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi9sb2dpYy9nYW1lXCI7XG5pbXBvcnQgeyBnYW1lUnVsZXMgfSBmcm9tIFwiLi4vbG9naWMvZ2FtZVJ1bGVzXCI7XG5cbmNvbnN0IGNvbmZpcm1TaGlwUGxhY2VtZW50ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGkgPSBwYXJzZUludChldmVudC5zcmNFbGVtZW50WzBdLnZhbHVlKTtcbiAgY29uc3QgaiA9IHBhcnNlSW50KGV2ZW50LnNyY0VsZW1lbnRbMV0udmFsdWUpO1xuICBjb25zdCBvcmllbnRhdGlvbiA9IGV2ZW50LnNyY0VsZW1lbnRbMl0udmFsdWU7XG5cbiAgY29uc3Qgc2hpcE5hbWUgPSBldmVudC5zcmNFbGVtZW50LmlkO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gZ2FtZVJ1bGVzLmdldFNoaXBOYW1lVG9MZW5ndGgoKS5nZXQoc2hpcE5hbWUpO1xuICBjb25zdCBzaGlwSWR4ID0gZ2FtZVJ1bGVzLmdldFNoaXBOYW1lVG9JZHgoKS5nZXQoc2hpcE5hbWUpO1xuXG4gIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLmdldEN1cnJQbGF5ZXIoKTtcbiAgcmV0dXJuIGdhbWUuZ2V0UGxheWVycygpW2N1cnJQbGF5ZXJdLnBvcHVsYXRlQm9hcmQoaSwgaiwgc2hpcElkeCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpO1xufVxuXG5leHBvcnQgeyBjb25maXJtU2hpcFBsYWNlbWVudCB9OyIsImltcG9ydCB7IHBsYXllckZhY3RvcnkgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgZ2FtZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYXllcnMgPSBbcGxheWVyRmFjdG9yeSgpLCBwbGF5ZXJGYWN0b3J5KCldO1xuICBsZXQgY3VyclBsYXllciA9IDA7XG4gIGxldCBvcHBvbmVudCA9IDE7XG5cbiAgY29uc3QgZ2V0UGxheWVycyA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheWVycztcbiAgfTtcbiAgY29uc3QgZ2V0Q3VyclBsYXllciA9ICgpID0+IHtcbiAgICByZXR1cm4gY3VyclBsYXllcjtcbiAgfTtcblxuICBjb25zdCBnZXRPcHBvbmVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gb3Bwb25lbnQ7XG4gIH1cblxuICBjb25zdCB0b2dnbGVDdXJyUGxheWVyID0gKCkgPT4ge1xuICAgIGN1cnJQbGF5ZXIgPSAxIC0gY3VyclBsYXllcjtcbiAgICBvcHBvbmVudCA9IDEgLSBvcHBvbmVudDtcbiAgfTtcblxuICBjb25zdCBpbml0R2FtZSA9ICgpID0+IHtcbiAgICBwbGF5ZXJzWzBdLnBvcHVsYXRlQm9hcmQoKTtcbiAgICBwbGF5ZXJzWzFdLnBvcHVsYXRlQm9hcmQoKTtcbiAgfTtcblxuICBjb25zdCBpc0dhbWVPdmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG9wcG9uZW50U2hpcHMgPSBwbGF5ZXJzW29wcG9uZW50XS5nZXRTaGlwQXJyKCk7XG4gICAgZm9yIChsZXQgc2hpcCBvZiBvcHBvbmVudFNoaXBzKSB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFBsYXllcnMsXG4gICAgZ2V0Q3VyclBsYXllcixcbiAgICBnZXRPcHBvbmVudCxcbiAgICB0b2dnbGVDdXJyUGxheWVyLFxuICAgIGluaXRHYW1lLFxuICAgIGlzR2FtZU92ZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBnYW1lIH07XG4iLCJjb25zdCBnYW1lUnVsZXMgPSAoKCkgPT4ge1xuICBjb25zdCBzaGlwc05hbWUgPSBbXG4gICAgJ0Rlc3Ryb3llcicsXG4gICAgJ1N1Ym1hcmluZScsXG4gICAgJ0NydWlzZXInLFxuICAgICdCYXR0bGVzaGlwJyxcbiAgICAnQ2FycmllcicsXG4gIF1cblxuICBjb25zdCBzaGlwc0xlbmd0aCA9IFsyLCAzLCAzLCA0LCA1XTtcblxuICBjb25zdCBzaGlwTmFtZVRvTGVuZ3RoID0gbmV3IE1hcChbXG4gICAgWydEZXN0cm95ZXInLCAyXSxcbiAgICBbJ1N1Ym1hcmluZScsIDNdLFxuICAgIFsnQ3J1aXNlcicsIDNdLFxuICAgIFsnQmF0dGxlc2hpcCcsIDRdLFxuICAgIFsnQ2FycmllcicsIDVdLFxuICBdKTtcblxuICBjb25zdCBzaGlwTmFtZVRvSWR4ID0gbmV3IE1hcChbXG4gICAgWydEZXN0cm95ZXInLCAwXSxcbiAgICBbJ1N1Ym1hcmluZScsIDFdLFxuICAgIFsnQ3J1aXNlcicsIDJdLFxuICAgIFsnQmF0dGxlc2hpcCcsIDNdLFxuICAgIFsnQ2FycmllcicsIDRdLFxuICBdKTtcblxuICBjb25zdCBnZXRTaGlwc05hbWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2hpcHNOYW1lO1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcHNMZW5ndGggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2hpcHNMZW5ndGg7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwTmFtZVRvTGVuZ3RoID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwTmFtZVRvTGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcE5hbWVUb0lkeCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcE5hbWVUb0lkeDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0U2hpcHNOYW1lLFxuICAgIGdldFNoaXBzTGVuZ3RoLFxuICAgIGdldFNoaXBOYW1lVG9MZW5ndGgsXG4gICAgZ2V0U2hpcE5hbWVUb0lkeCxcbiAgfVxufSkoKTtcblxuZXhwb3J0IHsgZ2FtZVJ1bGVzIH07IiwiY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9IChkaW09MTApID0+IHtcbiAgY29uc3Qgcm93ID0gbmV3IEFycmF5KGRpbSkuZmlsbCgnJyk7XG4gIGxldCBib2FyZCA9IG5ldyBBcnJheSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbTsgaSsrKSBib2FyZC5wdXNoKEFycmF5LmZyb20ocm93KSk7XG5cbiAgY29uc3QgbGVuZ3RoID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZC5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBhY2Nlc3NCb2FyZCA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkW3hdW3ldO1xuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBJZHgsIHgsIHkpID0+IHtcbiAgICBib2FyZFt4XVt5XSA9IHNoaXBJZHg7XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09ICcnKSB7XG4gICAgICBib2FyZFt4XVt5XSA9ICdNJztcbiAgICAgIHJldHVybiAnTSc7XG4gICAgfSBlbHNlIGlmIChib2FyZFt4XVt5XSA9PT0gJ0gnKSB7XG4gICAgICByZXR1cm4gJ0FIJzsgXG4gICAgfSBlbHNlIGlmIChib2FyZFt4XVt5XSA9PT0gJ00nKSB7XG4gICAgICByZXR1cm4gJ0FNJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2hpcEhpdCA9IGJvYXJkW3hdW3ldO1xuICAgICAgYm9hcmRbeF1beV0gPSAnSCc7XG4gICAgICByZXR1cm4gc2hpcEhpdDsgLy8gVE9ETzogdGhlbiBjYWxsIGhpdCBmdW5jdGlvbiBvZiBzaGlwXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXJlQWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBJbmRpY2VzID0gWzAsIDEsIDIsIDMsIDRdO1xuICAgIGNvbnNvbGUubG9nKGJvYXJkLnNvbWUocm93ID0+IHJvdy5pbmNsdWRlcyhzaGlwSW5kaWNlcykpKTtcbiAgICByZXR1cm4gIWJvYXJkLnNvbWUocm93ID0+IHJvdy5pbmNsdWRlcyhzaGlwSW5kaWNlcykpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBsZW5ndGgsXG4gICAgYWNjZXNzQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYXJlQWxsU2hpcHNTdW5rLFxuICB9XG59XG5cbmV4cG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfTsiLCJpbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcEFyciA9IFtcbiAgICBzaGlwRmFjdG9yeSgyKSxcbiAgICBzaGlwRmFjdG9yeSgzKSxcbiAgICBzaGlwRmFjdG9yeSgzKSxcbiAgICBzaGlwRmFjdG9yeSg0KSxcbiAgICBzaGlwRmFjdG9yeSg1KSxcbiAgXTtcblxuICBsZXQgZ2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG4gIGNvbnN0IGdldFNoaXBBcnIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBBcnI7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tCb2FyZEZvclNoaXBQbGFjZW1lbnQgPSAoaSwgaiwgZHgsIGR5KSA9PiB7XG4gICAgY29uc3QgZ2FtZUJvYXJkRGltID0gMTA7XG5cbiAgICBmb3IgKGxldCB4IG9mIGR4KSB7XG4gICAgICBmb3IgKGxldCB5IG9mIGR5KSB7XG4gICAgICAgIGlmIChpK3ggPj0gZ2FtZUJvYXJkRGltIHx8IGoreSA+PSBnZXRHYW1lQm9hcmQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5hY2Nlc3NCb2FyZChpK3gsIGoreSkgIT09IFwiXCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBPbkJvYXJkID0gKGksIGosIGR4LCBkeSwgaWR4KSA9PiB7XG4gICAgZm9yIChsZXQgeCBvZiBkeCkge1xuICAgICAgZm9yIChsZXQgeSBvZiBkeSkge1xuICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKGlkeCwgaSt4LCBqK3kpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBUT0RPOiBBbGxvdyB1c2VycyB0byBmaWxsIHVwIGJvYXJkIHRoZW1zZWx2ZXNcbiAgY29uc3QgcG9wdWxhdGVCb2FyZCA9IChpLCBqLCBpZHgsIG9yaWVudGF0aW9uLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBkeCA9IFtdO1xuICAgIGNvbnN0IGR5ID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhcIikge1xuICAgICAgZHgucHVzaCgwKTtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuZ3RoOyB5KyspIGR5LnB1c2goeSk7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gXCJWXCIpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVuZ3RoOyB4KyspIGR4LnB1c2goeCk7XG4gICAgICBkeS5wdXNoKDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0JvYXJkRm9yU2hpcFBsYWNlbWVudChpLCBqLCBkeCwgZHkpKSB7XG4gICAgICBwbGFjZVNoaXBPbkJvYXJkKGksIGosIGR4LCBkeSwgaWR4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyAvLyBzaGlwIDAgb2Ygc2l6ZSAyXG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLCAwLCAwKTtcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDAsIDAsIDEpO1xuXG4gICAgLy8gLy8gc2hpcCAxIG9mIHNpemUgM1xuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoMSwgMSwgMik7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCgxLCAyLCAyKTtcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDEsIDMsIDIpO1xuXG4gICAgLy8gLy8gc2hpcCAyIG9mIHNpemUgM1xuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoMiwgMywgNyk7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLCAzLCA4KTtcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDIsIDMsIDkpO1xuXG4gICAgLy8gLy8gc2hpcCAzIG9mIHNpemUgNFxuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoMywgNywgNCk7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCgzLCA3LCA1KTtcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDMsIDcsIDYpO1xuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoMywgNywgOSk7XG5cbiAgICAvLyAvLyBzaGlwIDQgb2Ygc2l6ZSA1XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCA1LCA5KTtcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDQsIDYsIDkpO1xuICAgIC8vIGdhbWVib2FyZC5wbGFjZVNoaXAoNCwgNywgOSk7XG4gICAgLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCA4LCA5KTtcbiAgICAvLyBnYW1lYm9hcmQucGxhY2VTaGlwKDQsIDksIDkpO1xuICB9O1xuXG4gIGNvbnN0IGdldEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0U2hpcEFycixcbiAgICBwb3B1bGF0ZUJvYXJkLFxuICAgIGdldEdhbWVCb2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHBsYXllckZhY3RvcnkgfTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gZnVuY3Rpb24obGVuZ3RoKSB7XG4gIGNvbnN0IF9sZW5ndGggPSBsZW5ndGg7XG4gIGxldCBfbnVtSGl0cyA9IDA7XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgIHJldHVybiBfbGVuZ3RoO1xuICB9O1xuICBjb25zdCBnZXROdW1IaXQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtSGl0cztcbiAgfTtcblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9udW1IaXRzKys7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xlbmd0aCA9PT0gdGhpcy5fbnVtSGl0cykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgX2xlbmd0aCxcbiAgICBfbnVtSGl0cyxcbiAgICBnZXRMZW5ndGgsXG4gICAgZ2V0TnVtSGl0LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgeyBzaGlwRmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgaGFuZGxlQXR0YWNrQ2VsbCB9IGZyb20gXCIuLi9jb250cm9sbGVyL2hhbmRsZS1hdHRhY2tcIjtcblxuY29uc3QgYWRkVGFyZ2V0R3JpZEVMID0gKCkgPT4ge1xuICBjb25zdCB0YXJnZXRHcmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLnRhcmdldC1ncmlkIC50YXJnZXQtc3F1YXJlXCJcbiAgKTtcbiAgdGFyZ2V0R3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoIWNlbGwuaGFzQXR0cmlidXRlKCdhZGRlZEVMJykpIHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUF0dGFja0NlbGwpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2FkZGVkRUwnLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYWRkVGFyZ2V0R3JpZEVMIH07XG4iLCJjb25zdCBjcmVhdGVUZW1wbGF0ZUdyaWQgPSAoY29udGFpbmVyLCBncmlkKSA9PiB7XG4gIGNsZWFyR3JpZChjb250YWluZXIpO1xuICBjb25zdCBncmlkU2l6ZSA9IDExO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZFNpemU7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBmb3IgKGxldCBqPTA7IGogPCBncmlkU2l6ZTsgaisrKSB7XG4gICAgICBjb25zdCBpbmZvU3EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGlmIChpPT09IDAgJiYgaiA9PT0gMCkge1xuICAgICAgICBpbmZvU3EuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yLXNxJyk7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDAgJiYgaiA+PSAxKSB7XG4gICAgICAgIGluZm9TcS5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3Itc3EnKTtcbiAgICAgICAgaW5mb1NxLmlubmVyVGV4dCA9IGBjJHtqLTF9YDtcbiAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBpID49IDEpIHtcbiAgICAgICAgaW5mb1NxLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvci1zcScpO1xuICAgICAgICBpbmZvU3EuaW5uZXJUZXh0ID0gYHIke2ktMX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mb1NxLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LXNxJyk7XG4gICAgICAgIGluZm9TcS5pbm5lclRleHQgPSBncmlkLmFjY2Vzc0JvYXJkKGktMSwgai0xKTtcbiAgICAgIH1cblxuICAgICAgcm93LmFwcGVuZENoaWxkKGluZm9TcSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmNvbnN0IGNsZWFyR3JpZCA9IChjb250YWluZXIpID0+IHtcbiAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA+IDApXG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xufTtcblxuY29uc3QgY3JlYXRlVGFyZ2V0R3JpZCA9IChncmlkKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFyZ2V0LWdyaWRcIik7XG4gIGNsZWFyR3JpZChjb250YWluZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGgoKTsgaSsrKSB7XG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWQubGVuZ3RoKCk7IGorKykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInRhcmdldC1zcXVhcmVcIik7XG4gICAgICBjb25zdCBncmlkRWxlbWVudCA9IGdyaWQuYWNjZXNzQm9hcmQoaSwgaik7XG4gICAgICBzcXVhcmUuaW5uZXJUZXh0ID0gdHlwZW9mIGdyaWRFbGVtZW50ID09PSBcIm51bWJlclwiID8gXCJcIiA6IGdyaWRFbGVtZW50O1xuICAgICAgc3F1YXJlLmluZGV4ID0gaSAqIDEwICsgajtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVPY2VhbkdyaWQgPSAoZ3JpZCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFuLWdyaWRcIik7XG4gIGNsZWFyR3JpZChjb250YWluZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGgoKTsgaSsrKSB7XG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWQubGVuZ3RoKCk7IGorKykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm9jZWFuLXNxdWFyZVwiKTtcbiAgICAgIHNxdWFyZS5pbm5lclRleHQgPSBncmlkLmFjY2Vzc0JvYXJkKGksIGopO1xuXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRlbXBsYXRlR3JpZCwgY2xlYXJHcmlkLCBjcmVhdGVUYXJnZXRHcmlkLCBjcmVhdGVPY2VhbkdyaWQgfTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFyZ2V0R3JpZCwgY3JlYXRlT2NlYW5HcmlkIH0gZnJvbSBcIi4vZ3JpZFwiO1xuaW1wb3J0IHsgYWRkVGFyZ2V0R3JpZEVMIH0gZnJvbSBcIi4vZmVFdmVudEhhbmRsZXJcIjtcblxuY29uc3QgY2xlYXJCb2R5ID0gKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVEaXZTdHJ1Y3R1cmUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TY3JlZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluU2NyZWVuRGl2LmlkID0gXCJtYWluLXNjcmVlblwiO1xuXG4gIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJOYW1lRGl2LmlkID0gJ3BsYXllci1kaXYnO1xuICBwbGF5ZXJOYW1lRGl2LmlubmVyVGV4dCA9IFwiUGxheWVyIDBcIjtcblxuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlRGl2LmlkID0gJ21lc3NhZ2UtZGl2JztcbiAgbWVzc2FnZURpdi5pbm5lclRleHQgPSAnJztcblxuICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXh0VHVybkJ0bi50ZXh0Q29udGVudCA9ICdOZXh0IHR1cm4nO1xuICBuZXh0VHVybkJ0bi5pZCA9ICduZXh0LXR1cm4tYnRuJztcbiAgbmV4dFR1cm5CdG4uY2xhc3NMaXN0LmFkZCgnbm90LXJlYWR5Jyk7XG4gIG5leHRUdXJuQnRuLmRpc2FibGVkID0gJ2Rpc2FibGVkJztcblxuICBpbmZvRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKG5leHRUdXJuQnRuKTtcblxuICBjb25zdCB0YXJnZXRHcmlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFyZ2V0R3JpZERpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgdGFyZ2V0R3JpZERpdi5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0LWdyaWRcIik7XG5cbiAgY29uc3Qgb2NlYW5HcmlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb2NlYW5HcmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICBvY2VhbkdyaWREaXYuY2xhc3NMaXN0LmFkZChcIm9jZWFuLWdyaWRcIik7XG5cbiAgbWFpblNjcmVlbkRpdi5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lRGl2KTtcbiAgbWFpblNjcmVlbkRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcbiAgbWFpblNjcmVlbkRpdi5hcHBlbmRDaGlsZCh0YXJnZXRHcmlkRGl2KTtcbiAgbWFpblNjcmVlbkRpdi5hcHBlbmRDaGlsZChvY2VhbkdyaWREaXYpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpblNjcmVlbkRpdik7XG59O1xuXG5cblxuY29uc3QgaW5pdEJhdHRsZUZyb250ZW5kID0gKG9jZWFuR3JpZCwgdGFyZ2V0R3JpZCkgPT4ge1xuICBjcmVhdGVEaXZTdHJ1Y3R1cmUoKTtcbiAgY3JlYXRlVGFyZ2V0R3JpZCh0YXJnZXRHcmlkKTtcbiAgY3JlYXRlT2NlYW5HcmlkKG9jZWFuR3JpZCk7XG4gIGFkZFRhcmdldEdyaWRFTCgpO1xufTtcblxuZXhwb3J0IHsgY2xlYXJCb2R5LCBpbml0QmF0dGxlRnJvbnRlbmQgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjbGVhckJvZHkgfSBmcm9tIFwiLi9pbml0RnJvbnRlbmRcIjtcbmltcG9ydCB7IGNyZWF0ZVRlbXBsYXRlR3JpZCB9IGZyb20gXCIuL2dyaWRcIjtcblxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi9sb2dpYy9nYW1lXCI7XG5pbXBvcnQgeyBnYW1lUnVsZXMgfSBmcm9tIFwiLi4vbG9naWMvZ2FtZVJ1bGVzXCI7XG5cbmltcG9ydCB7IGNvbmZpcm1TaGlwUGxhY2VtZW50IH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvaGFuZGxlLXBsYWNlLXNoaXBzXCI7XG5cbmNvbnN0IGNyZWF0ZURpdlNrZWxldG9uID0gKCkgPT4ge1xuICBjb25zdCBzZXR1cEdhbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXR1cEdhbWVEaXYuaWQgPSBcInNldHVwLWdhbWUtZGl2XCI7XG5cbiAgY29uc3QgdGVtcGxhdGVHcmlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcGxhdGVHcmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICB0ZW1wbGF0ZUdyaWREaXYuaWQgPSBcInRlbXBsYXRlLWdyaWQtZGl2XCI7XG5cbiAgY29uc3QgdXNlcklucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXNlcklucHV0RGl2LmlkID0gXCJ1c2VyLWlucHV0LWRpdlwiO1xuXG4gIHNldHVwR2FtZURpdi5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUdyaWREaXYpO1xuICBzZXR1cEdhbWVEaXYuYXBwZW5kQ2hpbGQodXNlcklucHV0RGl2KTtcblxuICByZXR1cm4gc2V0dXBHYW1lRGl2O1xufTtcblxuY29uc3QgY3JlYXRlVXNlcklucHV0SGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBuYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmFtZUhlYWRlci5pbm5lclRleHQgPSBcIk5hbWVcIjtcbiAgbmFtZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1oZWFkZXJcIik7XG5cbiAgY29uc3QgbGVuZ3RoSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVuZ3RoSGVhZGVyLmlubmVyVGV4dCA9IFwiTGVuZ3RoXCI7XG4gIGxlbmd0aEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1oZWFkZXJcIik7XG5cbiAgY29uc3Qgc3RhcnRDb29yZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YXJ0Q29vcmRIZWFkZXIuaW5uZXJUZXh0ID0gXCJTdGFydGluZyBjb29yZGluYXRlc1wiO1xuICBzdGFydENvb3JkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWhlYWRlclwiKTtcblxuICBjb25zdCBvcmllbnRhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9yaWVudGF0aW9uSGVhZGVyLmlubmVyVGV4dCA9IFwiT3JpZW50YXRpb25cIjtcbiAgb3JpZW50YXRpb25IZWFkZXIuY2xhc3NMaXN0LmFkZChcImZvcm0taGVhZGVyXCIpO1xuXG4gIGNvbnN0IGNvbmZpcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25maXJtSGVhZGVyLmlubmVyVGV4dCA9IFwiQ29uZmlybSBwbGFjZW1lbnRcIjtcbiAgY29uZmlybUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1oZWFkZXJcIik7XG5cbiAgcmV0dXJuIFtcbiAgICBuYW1lSGVhZGVyLFxuICAgIGxlbmd0aEhlYWRlcixcbiAgICBzdGFydENvb3JkSGVhZGVyLFxuICAgIG9yaWVudGF0aW9uSGVhZGVyLFxuICAgIGNvbmZpcm1IZWFkZXIsXG4gIF07XG59O1xuXG5jb25zdCBjcmVhdGVPcHRpb25zRm9yQ29vcmQgPSAoc2VsZWN0RGl2LCBheGlzKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gaTtcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gYCR7YXhpc30ke2l9YDtcblxuICAgIHNlbGVjdERpdi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG59O1xuXG5jb25zdCBtYWtlQ2ZtQnRuVW51c2FibGUgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgYnRuTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnRbM10uaWQ7XG4gIGNvbnN0IGNmbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ0bk5hbWUpO1xuICBjZm1CdG4uY2xhc3NMaXN0LmFkZChcIm5vdC1yZWFkeVwiKTtcbiAgY2ZtQnRuLmRpc2FibGVkID0gXCJkaXNhYmxlZFwiO1xufTtcblxuY29uc3QgY2hlY2tBbGxDZm1CdG5EaXNhYmxlZCA9ICgpID0+IHtcbiAgY29uc3QgYWxsRGlzYWJsZWRCdG5Db3VudCA9IDU7XG4gIGNvbnN0IGNmbUJ0bkFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2ZtLWNvb3JkLWJ0blwiKTtcbiAgbGV0IGRpc2FibGVkQnRuQ291bnQgPSAwO1xuICBjZm1CdG5BcnIuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgaWYgKGJ0bi5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkgZGlzYWJsZWRCdG5Db3VudCsrO1xuICB9KTtcblxuICByZXR1cm4gZGlzYWJsZWRCdG5Db3VudCA9PSBhbGxEaXNhYmxlZEJ0bkNvdW50O1xufTtcblxuY29uc3Qgbm90aWZ5VXNlck9mRXJySW5QbGFjaW5nU2hpcCA9IChldmVudCkgPT4ge1xuICBjb25zdCByQ29vcmRJZCA9IGV2ZW50LnNyY0VsZW1lbnRbMF0uaWQ7XG4gIGNvbnN0IHJDb29yZFNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJDb29yZElkKTtcblxuICByQ29vcmRTZWwuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgXCJFaXRoZXIgb3V0IG9mIGJvdW5kcyBvciBhIGNlbGwgaXMgYWxyZWFkeSBvY2N1cGllZC4gUGljayBhbm90aGVyIHNwb3QhXCJcbiAgKTtcbiAgckNvb3JkU2VsLnJlcG9ydFZhbGlkaXR5KCk7XG59O1xuXG5jb25zdCBlbmFibGVOZXh0U3RlcEJ0biA9ICgpID0+IHtcbiAgY29uc3QgbmV4dFN0ZXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1zdGVwLWJ0bicpO1xuICBuZXh0U3RlcEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIG5leHRTdGVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbWUudG9nZ2xlQ3VyclBsYXllcigpO1xuICAgIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLmdldEN1cnJQbGF5ZXIoKTtcbiAgICBpZiAoY3VyclBsYXllciA9PT0gMCkge1xuICAgICAgLy8gc3RhcnQgZ2FtZVxuICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IGdhbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJCb2R5KCk7XG4gICAgICBpbml0VXNlclNoaXBzKGN1cnJQbGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IGNyZWF0ZVVzZXJJbnB1dFJvdyA9IChzaGlwTmFtZSwgc2hpcExlbmd0aCkgPT4ge1xuICAvLyBOYW1lIG9mIHNoaXAgZm9yIHRoYXQgcm93XG4gIGNvbnN0IHJvd05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3dOYW1lLmlubmVyVGV4dCA9IHNoaXBOYW1lO1xuXG4gIC8vIExlbmd0aCBvZiBzaGlwIGZvciB0aGF0IHJvd1xuICBjb25zdCByb3dMZW5ndGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3dMZW5ndGguaW5uZXJUZXh0ID0gc2hpcExlbmd0aDtcblxuICAvLyBJbnB1dCBmb3JtIGZvciBzaGlwJ3MgY29vcmRpbmF0ZXNcbiAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWRpdlwiKTtcbiAgZm9ybURpdi5pZCA9IHNoaXBOYW1lO1xuICBmb3JtRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwbGFjZWRTaGlwID0gY29uZmlybVNoaXBQbGFjZW1lbnQoZXZlbnQpO1xuICAgIGlmIChwbGFjZWRTaGlwKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUdyaWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBsYXRlLWdyaWQtZGl2XCIpO1xuICAgICAgY29uc3QgcGxheWVyID0gZ2FtZS5nZXRDdXJyUGxheWVyKCk7XG4gICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0UGxheWVycygpW3BsYXllcl0uZ2V0R2FtZUJvYXJkKCk7XG4gICAgICBjcmVhdGVUZW1wbGF0ZUdyaWQodGVtcGxhdGVHcmlkRGl2LCBwbGF5ZXJCb2FyZCk7XG4gICAgICBkaXNwbGF5V2hpY2hQbGF5ZXIodGVtcGxhdGVHcmlkRGl2KTtcbiAgICAgIG1ha2VDZm1CdG5VbnVzYWJsZShldmVudCk7XG5cbiAgICAgIGNvbnN0IHBsYWNlZEFsbFNoaXBzID0gY2hlY2tBbGxDZm1CdG5EaXNhYmxlZCgpO1xuICAgICAgaWYgKHBsYWNlZEFsbFNoaXBzKSBlbmFibGVOZXh0U3RlcEJ0bigpO1xuICAgICAgLy8gQ09OVDogTWFrZSAnbmV4dCBhY3Rpb24nIGJ0biBhdmFpbGFibGUgYnkgY2hlY2tpbmcgaWYgYWxsIGJ0bnNcbiAgICAgIC8vIHdpdGggJ2NmbS1jb29yZC1idG4nIGNsYXNzIGhhdmUgYmVlbiBkaXNhYmxlZFxuICAgIH0gZWxzZSB7XG4gICAgICBub3RpZnlVc2VyT2ZFcnJJblBsYWNpbmdTaGlwKGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0Rm9ybVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBpbnB1dEZvcm1VbC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZm9ybS11bFwiKTtcblxuICBjb25zdCBjb29yZFJvd0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb29yZFJvd0xpLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1saVwiKTtcblxuICBjb25zdCBjb29yZFJvd0xpTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvb3JkUm93TGlMYWJlbC5mb3IgPSBgJHtzaGlwTmFtZX0tci1jb29yZGA7XG5cbiAgY29uc3QgY29vcmRSb3dMaVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvb3JkUm93TGlTZWxlY3QuaWQgPSBgJHtzaGlwTmFtZX0tci1jb29yZGA7XG4gIGNyZWF0ZU9wdGlvbnNGb3JDb29yZChjb29yZFJvd0xpU2VsZWN0LCBcInJcIik7XG5cbiAgY29vcmRSb3dMaS5hcHBlbmRDaGlsZChjb29yZFJvd0xpTGFiZWwpO1xuICBjb29yZFJvd0xpLmFwcGVuZENoaWxkKGNvb3JkUm93TGlTZWxlY3QpO1xuXG4gIGNvbnN0IGNvb3JkQ29sTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvb3JkQ29sTGkuY2xhc3NMaXN0LmFkZChcImlucHV0LWxpXCIpO1xuXG4gIGNvbnN0IGNvb3JkQ29sTGlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29vcmRDb2xMaUxhYmVsLmZvciA9IGBjLWNvb3JkYDtcblxuICBjb25zdCBjb29yZENvbExpU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29vcmRDb2xMaVNlbGVjdC5pZCA9IGBjLWNvb3JkYDtcbiAgY3JlYXRlT3B0aW9uc0ZvckNvb3JkKGNvb3JkQ29sTGlTZWxlY3QsIFwiY1wiKTtcblxuICBjb29yZENvbExpLmFwcGVuZENoaWxkKGNvb3JkQ29sTGlMYWJlbCk7XG4gIGNvb3JkQ29sTGkuYXBwZW5kQ2hpbGQoY29vcmRDb2xMaVNlbGVjdCk7XG5cbiAgY29uc3Qgb3JpZW50YXRpb25MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgb3JpZW50YXRpb25MaS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtbGlcIik7XG5cbiAgY29uc3Qgb3JpZW50YXRpb25MaUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBvcmllbnRhdGlvbkxpTGFiZWwuZm9yID0gYG9yaWVudGF0aW9uYDtcblxuICBjb25zdCBvcmllbnRhdGlvbkxpU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgb3JpZW50YXRpb25MaVNlbGVjdC5pZCA9IGBvcmllbnRhdGlvbmA7XG5cbiAgY29uc3QgaG9yT3JpZW50YXRpb25PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBob3JPcmllbnRhdGlvbk9wdGlvbi52YWx1ZSA9IFwiSFwiO1xuICBob3JPcmllbnRhdGlvbk9wdGlvbi5pbm5lclRleHQgPSBcIkhvcml6b250YWxcIjtcblxuICBjb25zdCB2ZXJPcmllbnRhdGlvbk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHZlck9yaWVudGF0aW9uT3B0aW9uLnZhbHVlID0gXCJWXCI7XG4gIHZlck9yaWVudGF0aW9uT3B0aW9uLmlubmVyVGV4dCA9IFwiVmVydGljYWxcIjtcblxuICBvcmllbnRhdGlvbkxpU2VsZWN0LmFwcGVuZENoaWxkKGhvck9yaWVudGF0aW9uT3B0aW9uKTtcbiAgb3JpZW50YXRpb25MaVNlbGVjdC5hcHBlbmRDaGlsZCh2ZXJPcmllbnRhdGlvbk9wdGlvbik7XG5cbiAgb3JpZW50YXRpb25MaS5hcHBlbmRDaGlsZChvcmllbnRhdGlvbkxpTGFiZWwpO1xuICBvcmllbnRhdGlvbkxpLmFwcGVuZENoaWxkKG9yaWVudGF0aW9uTGlTZWxlY3QpO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG5MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uZmlybUJ0bkxpLmlkID0gYGNvbmZpcm1gO1xuICBjb25maXJtQnRuTGkuY2xhc3NMaXN0LmFkZChcImlucHV0LWxpXCIpO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBjb25maXJtQnRuLmlubmVyVGV4dCA9IFwiQ29uZmlybVwiO1xuICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJjZm0tY29vcmQtYnRuXCIpO1xuICBjb25maXJtQnRuLmlkID0gYCR7c2hpcE5hbWV9LWNmbS1idG5gO1xuXG4gIGNvbmZpcm1CdG5MaS5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICBpbnB1dEZvcm1VbC5hcHBlbmRDaGlsZChjb29yZFJvd0xpKTtcbiAgaW5wdXRGb3JtVWwuYXBwZW5kQ2hpbGQoY29vcmRDb2xMaSk7XG4gIGlucHV0Rm9ybVVsLmFwcGVuZENoaWxkKG9yaWVudGF0aW9uTGkpO1xuICBpbnB1dEZvcm1VbC5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICBmb3JtRGl2LmFwcGVuZENoaWxkKGlucHV0Rm9ybVVsKTtcblxuICByZXR1cm4gW3Jvd05hbWUsIHJvd0xlbmd0aCwgZm9ybURpdl07XG59O1xuXG5jb25zdCBjcmVhdGVVc2VySW5wdXRGb3JtID0gKHNoaXBzTmFtZSwgc2hpcHNMZW5ndGgpID0+IHtcbiAgY29uc3QgdXNlcklucHV0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWlucHV0LWRpdlwiKTtcblxuICBjb25zdCBbXG4gICAgbmFtZUhlYWRlcixcbiAgICBsZW5ndGhIZWFkZXIsXG4gICAgc3RhcnRDb29yZEhlYWRlcixcbiAgICBvcmllbnRhdGlvbkhlYWRlcixcbiAgICBjb25maXJtSGVhZGVyLFxuICBdID0gY3JlYXRlVXNlcklucHV0SGVhZGVyKCk7XG4gIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChuYW1lSGVhZGVyKTtcbiAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKGxlbmd0aEhlYWRlcik7XG4gIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChzdGFydENvb3JkSGVhZGVyKTtcbiAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKG9yaWVudGF0aW9uSGVhZGVyKTtcbiAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKGNvbmZpcm1IZWFkZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3Jvd05hbWUsIHJvd0xlbmd0aCwgZm9ybURpdl0gPSBjcmVhdGVVc2VySW5wdXRSb3coXG4gICAgICBzaGlwc05hbWVbaV0sXG4gICAgICBzaGlwc0xlbmd0aFtpXVxuICAgICk7XG4gICAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKHJvd05hbWUpO1xuICAgIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChyb3dMZW5ndGgpO1xuICAgIHVzZXJJbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgfVxuXG4gIGNvbnN0IG5leHRTdGVwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV4dFN0ZXBCdG4uaW5uZXJUZXh0ID0gXCJOZXh0IHN0ZXBcIjtcbiAgbmV4dFN0ZXBCdG4uaWQgPSAnbmV4dC1zdGVwLWJ0bic7XG4gIG5leHRTdGVwQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgdXNlcklucHV0RGl2LmFwcGVuZENoaWxkKG5leHRTdGVwQnRuKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlXaGljaFBsYXllciA9IChkaXYpID0+IHtcbiAgY29uc3Qgd2hpY2hQbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aGljaFBsYXllckRpdi5pbm5lclRleHQgPSBgUGxheWVyICR7Z2FtZS5nZXRDdXJyUGxheWVyKCl9LCBwbGVhc2UgcGxhY2UgeW91ciBzaGlwcy5gO1xuXG4gIGRpdi5pbnNlcnRCZWZvcmUod2hpY2hQbGF5ZXJEaXYsIGRpdi5maXJzdENoaWxkKTtcbn07XG5cbmNvbnN0IGluaXRVc2VyU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGdhbWVTZXR1cERpdiA9IGNyZWF0ZURpdlNrZWxldG9uKCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZVNldHVwRGl2KTtcblxuICBjb25zdCB0ZW1wbGF0ZUdyaWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBsYXRlLWdyaWQtZGl2XCIpO1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0UGxheWVycygpW3BsYXllcl0uZ2V0R2FtZUJvYXJkKCk7XG4gIGNyZWF0ZVRlbXBsYXRlR3JpZCh0ZW1wbGF0ZUdyaWREaXYsIHBsYXllckJvYXJkKTtcbiAgZGlzcGxheVdoaWNoUGxheWVyKHRlbXBsYXRlR3JpZERpdik7XG5cbiAgY29uc3Qgc2hpcHNOYW1lID0gZ2FtZVJ1bGVzLmdldFNoaXBzTmFtZSgpO1xuICBjb25zdCBzaGlwc0xlbmd0aCA9IGdhbWVSdWxlcy5nZXRTaGlwc0xlbmd0aCgpO1xuICBjcmVhdGVVc2VySW5wdXRGb3JtKHNoaXBzTmFtZSwgc2hpcHNMZW5ndGgpO1xufTtcblxuZXhwb3J0IHsgaW5pdFVzZXJTaGlwcyB9O1xuIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi9sb2dpYy9nYW1lXCI7XG5cbmltcG9ydCB7IGFkZFRhcmdldEdyaWRFTCB9IGZyb20gXCIuL2ZlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBjbGVhckdyaWQsIGNyZWF0ZVRhcmdldEdyaWQsIGNyZWF0ZU9jZWFuR3JpZCB9IGZyb20gXCIuL2dyaWRcIjtcblxuaW1wb3J0IHsgaGFuZGxlTmV4dFR1cm4gfSBmcm9tIFwiLi4vY29udHJvbGxlci9oYW5kbGUtbmV4dC10dXJuXCI7XG5cbmNvbnN0IGRpc3BsYXlEb3VibGVBdHRhY2tFcnJNc2cgPSAob3V0Y29tZSkgPT4ge1xuICBjb25zdCBtc2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtZGl2XCIpO1xuXG4gIGlmIChvdXRjb21lID09PSBcIkFNXCIpIHtcbiAgICBtc2dEaXYuaW5uZXJUZXh0ID1cbiAgICAgIFwiWW91J3ZlIGFscmVhZHkgbWlzc2VkIGF0IHRoaXMgc3BvdCEgRmlyZSBhdCBhbm90aGVyIHNwb3QuXCI7XG4gIH0gZWxzZSBpZiAob3V0Y29tZSA9PT0gXCJBSFwiKSB7XG4gICAgbXNnRGl2LmlubmVyVGV4dCA9XG4gICAgICBcIllvdSd2ZSBhbHJlYWR5IGhpdCBhIHNoaXAgYXQgdGhpcyBzcG90ISBGaXJlIGF0IGFub3RoZXIgc3BvdC5cIjtcbiAgfVxufTtcblxuY29uc3QgbWFrZU5leHRUdXJuQnRuQ2xpY2thYmxlID0gKCkgPT4ge1xuICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dC10dXJuLWJ0blwiKTtcbiAgY29uc3QgbmV3TmV4dFR1cm5CdG4gPSBuZXh0VHVybkJ0bi5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgbmV3TmV4dFR1cm5CdG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1yZWFkeVwiKTtcbiAgbmV3TmV4dFR1cm5CdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gIG5ld05leHRUdXJuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGFuZGxlTmV4dFR1cm4oKTtcbiAgICBtYWtlTmV4dFR1cm5CdG5VbmNsaWNrYWJsZSgpO1xuICAgIHVwZGF0ZURPTUFmdGVyTmV4dFR1cm4oKTtcbiAgICBzZXRUaW1lb3V0KGFkZFRhcmdldEdyaWRFTCwgNTAwMCk7XG4gIH0pO1xuXG4gIG5leHRUdXJuQnRuLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05leHRUdXJuQnRuLCBuZXh0VHVybkJ0bik7XG59O1xuXG5jb25zdCBtYWtlTmV4dFR1cm5CdG5VbmNsaWNrYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgbmV4dFR1cm5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtdHVybi1idG5cIik7XG4gIG5leHRUdXJuQnRuLmNsYXNzTGlzdC5hZGQoJ25vdC1yZWFkeScpO1xuICBuZXh0VHVybkJ0bi5kaXNhYmxlZCA9ICdkaXNhYmxlZCc7XG59XG5cbmNvbnN0IGRpc3BsYXlXaW5NZXNzYWdlID0gKCkgPT4ge1xuICBjb25zdCBjdXJyUGxheWVyID0gZ2FtZS5nZXRDdXJyUGxheWVyKCk7XG4gIGNvbnN0IG1zZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1kaXZcIik7XG5cbiAgbXNnRGl2LmlubmVyVGV4dCA9IGBDb25ncmF0dWxhdGlvbnMgUGxheWVyICR7Y3VyclBsYXllcn0hIFlvdSd2ZSB3b24gdGhlIGdhbWUhIPCflKtgO1xufVxuXG5jb25zdCB1cGRhdGVET01BZnRlckF0dGFjayA9IChvdXRjb21lKSA9PiB7XG4gIGlmIChvdXRjb21lID09PSBcIk1cIiB8fCB0eXBlb2Ygb3V0Y29tZSA9PT0gXCJudW1iZXJcIikge1xuICAgIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5nZXRPcHBvbmVudCgpO1xuICAgIGNvbnN0IHRhcmdldEdyaWQgPSBnYW1lLmdldFBsYXllcnMoKVtvcHBvbmVudF0uZ2V0R2FtZUJvYXJkKCk7XG4gICAgY3JlYXRlVGFyZ2V0R3JpZCh0YXJnZXRHcmlkKTtcbiAgICBpZiAoZ2FtZS5pc0dhbWVPdmVyKCkpIHtcbiAgICAgIGRpc3BsYXlXaW5NZXNzYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ha2VOZXh0VHVybkJ0bkNsaWNrYWJsZSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5RG91YmxlQXR0YWNrRXJyTXNnKG91dGNvbWUpO1xuICAgIGFkZFRhcmdldEdyaWRFTCgpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckRpc3BsYXllZEdyaWRzID0gKCkgPT4ge1xuICBjb25zdCB0YXJnZXRHcmlkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXJnZXQtZ3JpZFwiKTtcbiAgY29uc3Qgb2NlYW5HcmlkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2Vhbi1ncmlkXCIpO1xuXG4gIGNsZWFyR3JpZCh0YXJnZXRHcmlkRGl2KTtcbiAgY2xlYXJHcmlkKG9jZWFuR3JpZERpdik7XG59O1xuXG5jb25zdCBpbmRpY2F0ZUxvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IG1zZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVzc2FnZS1kaXZcIik7XG4gIGxldCB0aW1lTGVmdCA9IDM7XG5cbiAgbGV0IGNvdW50ZG93bkludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIG1zZ0Rpdi5pbm5lclRleHQgPSBgTG9hZGluZyBuZXh0IHBsYXllcidzIHNjcmVlbiBpbiAke3RpbWVMZWZ0fSBzZWNvbmRzLi4uYDtcbiAgICB0aW1lTGVmdC0tO1xuXG4gICAgaWYgKHRpbWVMZWZ0ID09PSAtMSkge1xuICAgICAgbXNnRGl2LmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bkludGVydmFsKTtcbiAgICB9XG4gIH0sIDEwMDApO1xufTtcblxuY29uc3QgdXBkYXRlUGxheWVyRGl2ID0gKGN1cnJQbGF5ZXIpID0+IHtcbiAgY29uc3QgcGxheWVyTmFtZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZGl2Jyk7XG4gIHBsYXllck5hbWVEaXYuaW5uZXJUZXh0ID0gYFBsYXllciAke2N1cnJQbGF5ZXJ9YDtcbn1cblxuY29uc3QgY3JlYXRlU2NyZWVuRm9yTmV4dFBsYXllciA9ICgpID0+IHtcbiAgY29uc3QgY3VyclBsYXllciA9IGdhbWUuZ2V0Q3VyclBsYXllcigpO1xuICBjb25zdCBvcHBvbmVudCA9IGdhbWUuZ2V0T3Bwb25lbnQoKTtcblxuICB1cGRhdGVQbGF5ZXJEaXYoY3VyclBsYXllcik7XG5cbiAgY3JlYXRlVGFyZ2V0R3JpZChnYW1lLmdldFBsYXllcnMoKVtvcHBvbmVudF0uZ2V0R2FtZUJvYXJkKCkpO1xuICBjcmVhdGVPY2VhbkdyaWQoZ2FtZS5nZXRQbGF5ZXJzKClbY3VyclBsYXllcl0uZ2V0R2FtZUJvYXJkKCkpO1xufTtcblxuY29uc3QgdXBkYXRlRE9NQWZ0ZXJOZXh0VHVybiA9ICgpID0+IHtcbiAgLy8gY2xlYXIgZ3JpZHMgZm9yIGN1cnJlbnQgcGxheWVyICsgaW5kaWNhdGUgJ2xvYWRpbmcnXG4gIGNsZWFyRGlzcGxheWVkR3JpZHMoKTtcbiAgLy8gc2V0IGEgdGltZW91dCBmb3IgMyBzZWNzXG4gIGluZGljYXRlTG9hZGluZygpO1xuICAvLyBkaXNwbGF5IGdyaWRzIGZvciBuZXh0IHBsYXllclxuICBzZXRUaW1lb3V0KGNyZWF0ZVNjcmVlbkZvck5leHRQbGF5ZXIsIDQwMDApO1xufTtcblxuZXhwb3J0IHsgdXBkYXRlRE9NQWZ0ZXJBdHRhY2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXRVc2VyU2hpcHMgfSBmcm9tIFwiLi92aWV3L2luaXRVc2VyU2hpcHNcIjtcbmltcG9ydCB7IGNsZWFyQm9keSwgaW5pdEJhdHRsZUZyb250ZW5kIH0gZnJvbSBcIi4vdmlldy9pbml0RnJvbnRlbmRcIjtcblxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2xvZ2ljL2dhbWVcIjtcbmltcG9ydCB7IGFkZFRhcmdldEdyaWRFTCB9IGZyb20gXCIuL3ZpZXcvZmVFdmVudEhhbmRsZXJcIjtcblxuXG4vLyBnYW1lLmluaXRHYW1lKCk7XG5cbmxldCBjdXJyUGxheWVyID0gZ2FtZS5nZXRDdXJyUGxheWVyKCk7XG5sZXQgb3Bwb25lbnQgPSAxIC0gY3VyclBsYXllcjtcblxubGV0IG9jZWFuR3JpZCA9IGdhbWUuZ2V0UGxheWVycygpW2N1cnJQbGF5ZXJdLmdldEdhbWVCb2FyZCgpO1xubGV0IHRhcmdldEdyaWQgPSBnYW1lLmdldFBsYXllcnMoKVtvcHBvbmVudF0uZ2V0R2FtZUJvYXJkKCk7XG5cblxuLy8gYXNrIHVzZXIgZm9yIGlucHV0IGhlcmVcbmNsZWFyQm9keSgpO1xuaW5pdFVzZXJTaGlwcyhjdXJyUGxheWVyKTtcbi8vIGluaXRCYXR0bGVGcm9udGVuZChvY2VhbkdyaWQsIHRhcmdldEdyaWQpO1xuLy8gYWRkVGFyZ2V0R3JpZEVMKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9