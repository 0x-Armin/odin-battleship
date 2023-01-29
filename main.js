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
___CSS_LOADER_EXPORT___.push([module.id, "#main-screen {\n  display: grid;\n  grid-template-rows: 1fr 1fr 400px 300px;\n}\n\n.target-grid {\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n}\n\n.target-square {\n  width: 35px;\n  height: 35px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px;\n}\n\n.ocean-square {\n  width: 25px;\n  height: 25px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px; \n}\n\n.not-ready {\n  opacity: 0.33;\n  filter: alpha(opacity=33);\n}", "",{"version":3,"sources":["webpack://./src/view/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,kBAAkB;;EAElB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,kBAAkB;;EAElB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B","sourcesContent":["#main-screen {\n  display: grid;\n  grid-template-rows: 1fr 1fr 400px 300px;\n}\n\n.target-grid {\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n}\n\n.target-square {\n  width: 35px;\n  height: 35px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px;\n}\n\n.ocean-square {\n  width: 25px;\n  height: 25px;\n\n  margin-top: 0.5px;\n  margin-left: 0.5px;\n\n  border-style: solid;\n  border-color: black;\n  border-width: 0.5px; \n}\n\n.not-ready {\n  opacity: 0.33;\n  filter: alpha(opacity=33);\n}"],"sourceRoot":""}]);
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
  const opponent = 1 - _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer();
  const outcome = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[opponent].getGameBoard().receiveAttack(row, col);

  return outcome;
}

const passHitToShip = (outcome) => {
  _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[_logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer()].getShipArr()[outcome].hit();
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
  let isGameOver = false;
  const players = [(0,_player__WEBPACK_IMPORTED_MODULE_0__.playerFactory)(), (0,_player__WEBPACK_IMPORTED_MODULE_0__.playerFactory)()];
  let currPlayer = 0;

  const getIsGameOver = () => { return isGameOver; }
  const getPlayers = () => { return players; }
  const getCurrPlayer = () => { return currPlayer; }

  const toggleCurrPlayer = () => { currPlayer = 1 - currPlayer; }

  const initGame = () => {
    players[0].populateBoard();
    players[1].populateBoard();
  };

  return {
    getIsGameOver,
    getPlayers,
    getCurrPlayer,
    toggleCurrPlayer,
    initGame,
  };
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
  let shipArr = [
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(2),
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3),
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3),
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4),
    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(5)
  ];

  let gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)();

  const getShipArr = () => {
    return shipArr;
  }

  // TODO: Allow users to fill up board themselves
  const populateBoard = () => {
    // ship 0 of size 2
    gameboard.placeShip(0, 0, 0);
    gameboard.placeShip(0, 0, 1);

    // ship 1 of size 3
    gameboard.placeShip(1, 1, 2);
    gameboard.placeShip(1, 2, 2);
    gameboard.placeShip(1, 3, 2);

    // ship 2 of size 3
    gameboard.placeShip(2, 3, 7);
    gameboard.placeShip(2, 3, 8);
    gameboard.placeShip(2, 3, 9);

    // ship 3 of size 4
    gameboard.placeShip(3, 7, 4);
    gameboard.placeShip(3, 7, 5);
    gameboard.placeShip(3, 7, 6);
    gameboard.placeShip(3, 7, 9);

    // ship 4 of size 5
    gameboard.placeShip(4, 5, 9);
    gameboard.placeShip(4, 6, 9);
    gameboard.placeShip(4, 7, 9);
    gameboard.placeShip(4, 8, 9);
    gameboard.placeShip(4, 9, 9);
  }

  const getGameBoard = () => {
    return gameboard;
  }

  return {
    getShipArr,
    populateBoard,
    getGameBoard,
  }
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
const shipFactory = (length) => {
  const _length = length;
  let _numHits = 0;

  const getNumHit = () => { return _numHits; }

  const hit = () => { _numHits++; }

  const isSunk = () => {
    if (_length === _numHits) return true;
    return false;
  }

  return {
    getNumHit,
    hit,
    isSunk,
  }
}



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
  targetGridCells.forEach((cell) =>
    cell.addEventListener("click", _controller_handle_attack__WEBPACK_IMPORTED_MODULE_0__.handleAttackCell)
  );
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
/* harmony export */   "createTargetGrid": () => (/* binding */ createTargetGrid)
/* harmony export */ });
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
/* harmony export */   "initFrontend": () => (/* binding */ initFrontend)
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
  targetGridDiv.innerText = "target grid";

  const oceanGridDiv = document.createElement("div");
  oceanGridDiv.classList.add("grid");
  oceanGridDiv.classList.add("ocean-grid");
  oceanGridDiv.innerText = "ocean grid";

  mainScreenDiv.appendChild(playerNameDiv);
  mainScreenDiv.appendChild(infoDiv);
  mainScreenDiv.appendChild(targetGridDiv);
  mainScreenDiv.appendChild(oceanGridDiv);

  document.body.appendChild(mainScreenDiv);
};



const initFrontend = (oceanGrid, targetGrid) => {
  createDivStructure();
  (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createTargetGrid)(targetGrid);
  (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createOceanGrid)(oceanGrid);
  (0,_feEventHandler__WEBPACK_IMPORTED_MODULE_2__.addTargetGridEL)();
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

const updateDOMAfterAttack = (outcome) => {
  if (outcome === "M" || typeof outcome === "number") {
    const opponent = 1 - _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getCurrPlayer();
    const targetGrid = _logic_game__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[opponent].getGameBoard();
    (0,_grid__WEBPACK_IMPORTED_MODULE_2__.createTargetGrid)(targetGrid);

    // allow user to pass the turn to the next player
    makeNextTurnBtnClickable();
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
  const opponent = 1 - currPlayer;

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
/* harmony import */ var _view_initFrontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/initFrontend */ "./src/view/initFrontend.js");
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/game */ "./src/logic/game.js");
/* harmony import */ var _view_feEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/feEventHandler */ "./src/view/feEventHandler.js");






_logic_game__WEBPACK_IMPORTED_MODULE_1__.game.initGame();

let currPlayer = _logic_game__WEBPACK_IMPORTED_MODULE_1__.game.getCurrPlayer();
let opponent = 1 - currPlayer;

let oceanGrid = _logic_game__WEBPACK_IMPORTED_MODULE_1__.game.getPlayers()[currPlayer].getGameBoard();
let targetGrid = _logic_game__WEBPACK_IMPORTED_MODULE_1__.game.getPlayers()[opponent].getGameBoard();

(0,_view_initFrontend__WEBPACK_IMPORTED_MODULE_0__.initFrontend)(oceanGrid, targetGrid);
(0,_view_feEventHandler__WEBPACK_IMPORTED_MODULE_2__.addTargetGridEL)();

/*
GAME LOOP
1. currPlayer picks a spot to hit on targetGrid
2. targetGrid refreshes to give result of attack
3. Check if either player has won
4. If yes, end game. If not, switch player's turn.
*/
// while (!game.getIsGameOver()) {
//   // addTargetGridEL();
// }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWU7QUFDbEMsRUFBRSxzREFBZSxDQUFDLHdEQUFlO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdDOzs7Ozs7O1VDdEdoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7O0FBRWY7QUFDb0I7OztBQUd4RCxzREFBYTs7QUFFYixpQkFBaUIsMkRBQWtCO0FBQ25DOztBQUVBLGdCQUFnQix3REFBZTtBQUMvQixpQkFBaUIsd0RBQWU7O0FBRWhDLGdFQUFZO0FBQ1oscUVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L3N0eWxlLmNzcz9lZTU3Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvaGFuZGxlLWF0dGFjay5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9oYW5kbGUtbmV4dC10dXJuLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9nYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy9mZUV2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy9ncmlkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy92aWV3L2luaXRGcm9udGVuZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdmlldy91cGRhdGUtdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbi1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0MDBweCAzMDBweDtcXG59XFxuXFxuLnRhcmdldC1ncmlkIHtcXG4gIGZsZXgtZ3JvdzogMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXJnZXQtc3F1YXJlIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgbWFyZ2luLXRvcDogMC41cHg7XFxuICBtYXJnaW4tbGVmdDogMC41cHg7XFxuXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxufVxcblxcbi5vY2Vhbi1zcXVhcmUge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuXFxuICBtYXJnaW4tdG9wOiAwLjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVweDtcXG5cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDsgXFxufVxcblxcbi5ub3QtcmVhZHkge1xcbiAgb3BhY2l0eTogMC4zMztcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0zMyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZOztFQUVaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbWFpbi1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0MDBweCAzMDBweDtcXG59XFxuXFxuLnRhcmdldC1ncmlkIHtcXG4gIGZsZXgtZ3JvdzogMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXJnZXQtc3F1YXJlIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgbWFyZ2luLXRvcDogMC41cHg7XFxuICBtYXJnaW4tbGVmdDogMC41cHg7XFxuXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxufVxcblxcbi5vY2Vhbi1zcXVhcmUge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuXFxuICBtYXJnaW4tdG9wOiAwLjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVweDtcXG5cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDsgXFxufVxcblxcbi5ub3QtcmVhZHkge1xcbiAgb3BhY2l0eTogMC4zMztcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0zMyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vbG9naWMvZ2FtZVwiO1xuXG5pbXBvcnQgeyB1cGRhdGVET01BZnRlckF0dGFjayB9IGZyb20gXCIuLi92aWV3L3VwZGF0ZS12aWV3XCI7XG5cbmNvbnN0IGdldFJvd0FuZENvbCA9IChjZWxsSWR4KSA9PiB7XG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoY2VsbElkeCAvIDEwKTtcbiAgY29uc3QgY29sID0gY2VsbElkeCAlIDEwO1xuXG4gIHJldHVybiBbcm93LCBjb2xdO1xufVxuXG5jb25zdCBjaGVja0Nob3NlbkNlbGwgPSAocm93LCBjb2wpID0+IHtcbiAgY29uc3Qgb3Bwb25lbnQgPSAxIC0gZ2FtZS5nZXRDdXJyUGxheWVyKCk7XG4gIGNvbnN0IG91dGNvbWUgPSBnYW1lLmdldFBsYXllcnMoKVtvcHBvbmVudF0uZ2V0R2FtZUJvYXJkKCkucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG5cbiAgcmV0dXJuIG91dGNvbWU7XG59XG5cbmNvbnN0IHBhc3NIaXRUb1NoaXAgPSAob3V0Y29tZSkgPT4ge1xuICBnYW1lLmdldFBsYXllcnMoKVtnYW1lLmdldEN1cnJQbGF5ZXIoKV0uZ2V0U2hpcEFycigpW291dGNvbWVdLmhpdCgpO1xufVxuXG5jb25zdCBoYW5kbGVBdHRhY2tDZWxsID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGNlbGxJZHggPSBldmVudC5zcmNFbGVtZW50LmluZGV4O1xuICBjb25zdCBbcm93LCBjb2xdID0gZ2V0Um93QW5kQ29sKGNlbGxJZHgpO1xuICBjb25zdCBvdXRjb21lID0gY2hlY2tDaG9zZW5DZWxsKHJvdywgY29sKTtcblxuICBpZiAodHlwZW9mIG91dGNvbWUgPT09ICdudW1iZXInKSBwYXNzSGl0VG9TaGlwKG91dGNvbWUpO1xuXG4gIC8vIEZpcmUgb3V0Y29tZSB0byBET00ncyBtZXRob2RcbiAgdXBkYXRlRE9NQWZ0ZXJBdHRhY2sob3V0Y29tZSk7XG59XG5cbmV4cG9ydCB7IGhhbmRsZUF0dGFja0NlbGwgfTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uL2xvZ2ljL2dhbWVcIlxuXG5jb25zdCBoYW5kbGVOZXh0VHVybiA9ICgpID0+IHtcbiAgZ2FtZS50b2dnbGVDdXJyUGxheWVyKCk7XG59XG5cbmV4cG9ydCB7IGhhbmRsZU5leHRUdXJuIH07IiwiaW1wb3J0IHsgcGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgbGV0IGlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgY29uc3QgcGxheWVycyA9IFtwbGF5ZXJGYWN0b3J5KCksIHBsYXllckZhY3RvcnkoKV07XG4gIGxldCBjdXJyUGxheWVyID0gMDtcblxuICBjb25zdCBnZXRJc0dhbWVPdmVyID0gKCkgPT4geyByZXR1cm4gaXNHYW1lT3ZlcjsgfVxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4geyByZXR1cm4gcGxheWVyczsgfVxuICBjb25zdCBnZXRDdXJyUGxheWVyID0gKCkgPT4geyByZXR1cm4gY3VyclBsYXllcjsgfVxuXG4gIGNvbnN0IHRvZ2dsZUN1cnJQbGF5ZXIgPSAoKSA9PiB7IGN1cnJQbGF5ZXIgPSAxIC0gY3VyclBsYXllcjsgfVxuXG4gIGNvbnN0IGluaXRHYW1lID0gKCkgPT4ge1xuICAgIHBsYXllcnNbMF0ucG9wdWxhdGVCb2FyZCgpO1xuICAgIHBsYXllcnNbMV0ucG9wdWxhdGVCb2FyZCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SXNHYW1lT3ZlcixcbiAgICBnZXRQbGF5ZXJzLFxuICAgIGdldEN1cnJQbGF5ZXIsXG4gICAgdG9nZ2xlQ3VyclBsYXllcixcbiAgICBpbml0R2FtZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGdhbWUgfTsiLCJjb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKGRpbT0xMCkgPT4ge1xuICBjb25zdCByb3cgPSBuZXcgQXJyYXkoZGltKS5maWxsKCcnKTtcbiAgbGV0IGJvYXJkID0gbmV3IEFycmF5KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltOyBpKyspIGJvYXJkLnB1c2goQXJyYXkuZnJvbShyb3cpKTtcblxuICBjb25zdCBsZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IGFjY2Vzc0JvYXJkID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4gYm9hcmRbeF1beV07XG4gIH1cblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcElkeCwgeCwgeSkgPT4ge1xuICAgIGJvYXJkW3hdW3ldID0gc2hpcElkeDtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gJycpIHtcbiAgICAgIGJvYXJkW3hdW3ldID0gJ00nO1xuICAgICAgcmV0dXJuICdNJztcbiAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldID09PSAnSCcpIHtcbiAgICAgIHJldHVybiAnQUgnOyBcbiAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldID09PSAnTScpIHtcbiAgICAgIHJldHVybiAnQU0nO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaGlwSGl0ID0gYm9hcmRbeF1beV07XG4gICAgICBib2FyZFt4XVt5XSA9ICdIJztcbiAgICAgIHJldHVybiBzaGlwSGl0OyAvLyBUT0RPOiB0aGVuIGNhbGwgaGl0IGZ1bmN0aW9uIG9mIHNoaXBcbiAgICB9XG4gIH1cblxuICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcEluZGljZXMgPSBbMCwgMSwgMiwgMywgNF07XG4gICAgcmV0dXJuICFib2FyZC5zb21lKHJvdyA9PiByb3cuaW5jbHVkZXMoc2hpcEluZGljZXMpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgbGVuZ3RoLFxuICAgIGFjY2Vzc0JvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgfVxufVxuXG5leHBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH07IiwiaW1wb3J0IHsgc2hpcEZhY3RvcnkgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHNoaXBBcnIgPSBbXG4gICAgc2hpcEZhY3RvcnkoMiksXG4gICAgc2hpcEZhY3RvcnkoMyksXG4gICAgc2hpcEZhY3RvcnkoMyksXG4gICAgc2hpcEZhY3RvcnkoNCksXG4gICAgc2hpcEZhY3RvcnkoNSlcbiAgXTtcblxuICBsZXQgZ2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG4gIGNvbnN0IGdldFNoaXBBcnIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBBcnI7XG4gIH1cblxuICAvLyBUT0RPOiBBbGxvdyB1c2VycyB0byBmaWxsIHVwIGJvYXJkIHRoZW1zZWx2ZXNcbiAgY29uc3QgcG9wdWxhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAvLyBzaGlwIDAgb2Ygc2l6ZSAyXG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLCAwLCAwKTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKDAsIDAsIDEpO1xuXG4gICAgLy8gc2hpcCAxIG9mIHNpemUgM1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoMSwgMSwgMik7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCgxLCAyLCAyKTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKDEsIDMsIDIpO1xuXG4gICAgLy8gc2hpcCAyIG9mIHNpemUgM1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoMiwgMywgNyk7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLCAzLCA4KTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKDIsIDMsIDkpO1xuXG4gICAgLy8gc2hpcCAzIG9mIHNpemUgNFxuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoMywgNywgNCk7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCgzLCA3LCA1KTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKDMsIDcsIDYpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoMywgNywgOSk7XG5cbiAgICAvLyBzaGlwIDQgb2Ygc2l6ZSA1XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCA1LCA5KTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKDQsIDYsIDkpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoNCwgNywgOSk7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCA4LCA5KTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKDQsIDksIDkpO1xuICB9XG5cbiAgY29uc3QgZ2V0R2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFNoaXBBcnIsXG4gICAgcG9wdWxhdGVCb2FyZCxcbiAgICBnZXRHYW1lQm9hcmQsXG4gIH1cbn07XG5cbmV4cG9ydCB7IHBsYXllckZhY3RvcnkgfTsiLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgpID0+IHtcbiAgY29uc3QgX2xlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IF9udW1IaXRzID0gMDtcblxuICBjb25zdCBnZXROdW1IaXQgPSAoKSA9PiB7IHJldHVybiBfbnVtSGl0czsgfVxuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHsgX251bUhpdHMrKzsgfVxuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoX2xlbmd0aCA9PT0gX251bUhpdHMpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0TnVtSGl0LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH1cbn1cblxuZXhwb3J0IHsgc2hpcEZhY3RvcnkgfTsiLCJpbXBvcnQgeyBoYW5kbGVBdHRhY2tDZWxsIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvaGFuZGxlLWF0dGFja1wiO1xuXG5jb25zdCBhZGRUYXJnZXRHcmlkRUwgPSAoKSA9PiB7XG4gIGNvbnN0IHRhcmdldEdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIudGFyZ2V0LWdyaWQgLnRhcmdldC1zcXVhcmVcIlxuICApO1xuICB0YXJnZXRHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBdHRhY2tDZWxsKVxuICApO1xufTtcblxuZXhwb3J0IHsgYWRkVGFyZ2V0R3JpZEVMIH07XG4iLCJjb25zdCBjbGVhckdyaWQgPSAoY29udGFpbmVyKSA9PiB7XG4gIHdoaWxlIChjb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPiAwKVxuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhcmdldEdyaWQgPSAoZ3JpZCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhcmdldC1ncmlkXCIpO1xuICBjbGVhckdyaWQoY29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoKCk7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkLmxlbmd0aCgpOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXQtc3F1YXJlXCIpO1xuICAgICAgY29uc3QgZ3JpZEVsZW1lbnQgPSBncmlkLmFjY2Vzc0JvYXJkKGksIGopO1xuICAgICAgc3F1YXJlLmlubmVyVGV4dCA9IHR5cGVvZiBncmlkRWxlbWVudCA9PT0gXCJudW1iZXJcIiA/IFwiXCIgOiBncmlkRWxlbWVudDtcbiAgICAgIHNxdWFyZS5pbmRleCA9IGkgKiAxMCArIGo7XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlT2NlYW5HcmlkID0gKGdyaWQpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2Vhbi1ncmlkXCIpO1xuICBjbGVhckdyaWQoY29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoKCk7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkLmxlbmd0aCgpOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJvY2Vhbi1zcXVhcmVcIik7XG4gICAgICBzcXVhcmUuaW5uZXJUZXh0ID0gZ3JpZC5hY2Nlc3NCb2FyZChpLCBqKTtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59O1xuXG5leHBvcnQgeyBjbGVhckdyaWQsIGNyZWF0ZVRhcmdldEdyaWQsIGNyZWF0ZU9jZWFuR3JpZCB9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXJnZXRHcmlkLCBjcmVhdGVPY2VhbkdyaWQgfSBmcm9tIFwiLi9ncmlkXCI7XG5pbXBvcnQgeyBhZGRUYXJnZXRHcmlkRUwgfSBmcm9tIFwiLi9mZUV2ZW50SGFuZGxlclwiO1xuXG5jb25zdCBjcmVhdGVEaXZTdHJ1Y3R1cmUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TY3JlZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluU2NyZWVuRGl2LmlkID0gXCJtYWluLXNjcmVlblwiO1xuXG4gIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJOYW1lRGl2LmlkID0gJ3BsYXllci1kaXYnO1xuICBwbGF5ZXJOYW1lRGl2LmlubmVyVGV4dCA9IFwiUGxheWVyIDBcIjtcblxuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlRGl2LmlkID0gJ21lc3NhZ2UtZGl2JztcblxuICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXh0VHVybkJ0bi50ZXh0Q29udGVudCA9ICdOZXh0IHR1cm4nO1xuICBuZXh0VHVybkJ0bi5pZCA9ICduZXh0LXR1cm4tYnRuJztcbiAgbmV4dFR1cm5CdG4uY2xhc3NMaXN0LmFkZCgnbm90LXJlYWR5Jyk7XG4gIG5leHRUdXJuQnRuLmRpc2FibGVkID0gJ2Rpc2FibGVkJztcblxuICBpbmZvRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKG5leHRUdXJuQnRuKTtcblxuICBjb25zdCB0YXJnZXRHcmlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFyZ2V0R3JpZERpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgdGFyZ2V0R3JpZERpdi5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0LWdyaWRcIik7XG4gIHRhcmdldEdyaWREaXYuaW5uZXJUZXh0ID0gXCJ0YXJnZXQgZ3JpZFwiO1xuXG4gIGNvbnN0IG9jZWFuR3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9jZWFuR3JpZERpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgb2NlYW5HcmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJvY2Vhbi1ncmlkXCIpO1xuICBvY2VhbkdyaWREaXYuaW5uZXJUZXh0ID0gXCJvY2VhbiBncmlkXCI7XG5cbiAgbWFpblNjcmVlbkRpdi5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lRGl2KTtcbiAgbWFpblNjcmVlbkRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcbiAgbWFpblNjcmVlbkRpdi5hcHBlbmRDaGlsZCh0YXJnZXRHcmlkRGl2KTtcbiAgbWFpblNjcmVlbkRpdi5hcHBlbmRDaGlsZChvY2VhbkdyaWREaXYpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpblNjcmVlbkRpdik7XG59O1xuXG5cblxuY29uc3QgaW5pdEZyb250ZW5kID0gKG9jZWFuR3JpZCwgdGFyZ2V0R3JpZCkgPT4ge1xuICBjcmVhdGVEaXZTdHJ1Y3R1cmUoKTtcbiAgY3JlYXRlVGFyZ2V0R3JpZCh0YXJnZXRHcmlkKTtcbiAgY3JlYXRlT2NlYW5HcmlkKG9jZWFuR3JpZCk7XG4gIGFkZFRhcmdldEdyaWRFTCgpO1xufTtcblxuZXhwb3J0IHsgaW5pdEZyb250ZW5kIH07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uL2xvZ2ljL2dhbWVcIjtcblxuaW1wb3J0IHsgYWRkVGFyZ2V0R3JpZEVMIH0gZnJvbSBcIi4vZmVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IGNsZWFyR3JpZCwgY3JlYXRlVGFyZ2V0R3JpZCwgY3JlYXRlT2NlYW5HcmlkIH0gZnJvbSBcIi4vZ3JpZFwiO1xuXG5pbXBvcnQgeyBoYW5kbGVOZXh0VHVybiB9IGZyb20gXCIuLi9jb250cm9sbGVyL2hhbmRsZS1uZXh0LXR1cm5cIjtcblxuY29uc3QgZGlzcGxheURvdWJsZUF0dGFja0Vyck1zZyA9IChvdXRjb21lKSA9PiB7XG4gIGNvbnN0IG1zZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1kaXZcIik7XG5cbiAgaWYgKG91dGNvbWUgPT09IFwiQU1cIikge1xuICAgIG1zZ0Rpdi5pbm5lclRleHQgPVxuICAgICAgXCJZb3UndmUgYWxyZWFkeSBtaXNzZWQgYXQgdGhpcyBzcG90ISBGaXJlIGF0IGFub3RoZXIgc3BvdC5cIjtcbiAgfSBlbHNlIGlmIChvdXRjb21lID09PSBcIkFIXCIpIHtcbiAgICBtc2dEaXYuaW5uZXJUZXh0ID1cbiAgICAgIFwiWW91J3ZlIGFscmVhZHkgaGl0IGEgc2hpcCBhdCB0aGlzIHNwb3QhIEZpcmUgYXQgYW5vdGhlciBzcG90LlwiO1xuICB9XG59O1xuXG5jb25zdCBtYWtlTmV4dFR1cm5CdG5DbGlja2FibGUgPSAoKSA9PiB7XG4gIGNvbnN0IG5leHRUdXJuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXR1cm4tYnRuXCIpO1xuICBjb25zdCBuZXdOZXh0VHVybkJ0biA9IG5leHRUdXJuQnRuLmNsb25lTm9kZSh0cnVlKTtcblxuICBuZXdOZXh0VHVybkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LXJlYWR5XCIpO1xuICBuZXdOZXh0VHVybkJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgbmV3TmV4dFR1cm5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoYW5kbGVOZXh0VHVybigpO1xuICAgIG1ha2VOZXh0VHVybkJ0blVuY2xpY2thYmxlKCk7XG4gICAgdXBkYXRlRE9NQWZ0ZXJOZXh0VHVybigpO1xuICAgIHNldFRpbWVvdXQoYWRkVGFyZ2V0R3JpZEVMLCA1MDAwKTtcbiAgfSk7XG5cbiAgbmV4dFR1cm5CdG4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3TmV4dFR1cm5CdG4sIG5leHRUdXJuQnRuKTtcbn07XG5cbmNvbnN0IG1ha2VOZXh0VHVybkJ0blVuY2xpY2thYmxlID0gKCkgPT4ge1xuICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dC10dXJuLWJ0blwiKTtcbiAgbmV4dFR1cm5CdG4uY2xhc3NMaXN0LmFkZCgnbm90LXJlYWR5Jyk7XG4gIG5leHRUdXJuQnRuLmRpc2FibGVkID0gJ2Rpc2FibGVkJztcbn1cblxuY29uc3QgdXBkYXRlRE9NQWZ0ZXJBdHRhY2sgPSAob3V0Y29tZSkgPT4ge1xuICBpZiAob3V0Y29tZSA9PT0gXCJNXCIgfHwgdHlwZW9mIG91dGNvbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICBjb25zdCBvcHBvbmVudCA9IDEgLSBnYW1lLmdldEN1cnJQbGF5ZXIoKTtcbiAgICBjb25zdCB0YXJnZXRHcmlkID0gZ2FtZS5nZXRQbGF5ZXJzKClbb3Bwb25lbnRdLmdldEdhbWVCb2FyZCgpO1xuICAgIGNyZWF0ZVRhcmdldEdyaWQodGFyZ2V0R3JpZCk7XG5cbiAgICAvLyBhbGxvdyB1c2VyIHRvIHBhc3MgdGhlIHR1cm4gdG8gdGhlIG5leHQgcGxheWVyXG4gICAgbWFrZU5leHRUdXJuQnRuQ2xpY2thYmxlKCk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheURvdWJsZUF0dGFja0Vyck1zZyhvdXRjb21lKTtcbiAgICBhZGRUYXJnZXRHcmlkRUwoKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJEaXNwbGF5ZWRHcmlkcyA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0R3JpZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFyZ2V0LWdyaWRcIik7XG4gIGNvbnN0IG9jZWFuR3JpZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW4tZ3JpZFwiKTtcblxuICBjbGVhckdyaWQodGFyZ2V0R3JpZERpdik7XG4gIGNsZWFyR3JpZChvY2VhbkdyaWREaXYpO1xufTtcblxuY29uc3QgaW5kaWNhdGVMb2FkaW5nID0gKCkgPT4ge1xuICBjb25zdCBtc2dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lc3NhZ2UtZGl2XCIpO1xuICBsZXQgdGltZUxlZnQgPSAzO1xuXG4gIGxldCBjb3VudGRvd25JbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBtc2dEaXYuaW5uZXJUZXh0ID0gYExvYWRpbmcgbmV4dCBwbGF5ZXIncyBzY3JlZW4gaW4gJHt0aW1lTGVmdH0gc2Vjb25kcy4uLmA7XG4gICAgdGltZUxlZnQtLTtcblxuICAgIGlmICh0aW1lTGVmdCA9PT0gLTEpIHtcbiAgICAgIG1zZ0Rpdi5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25JbnRlcnZhbCk7XG4gICAgfVxuICB9LCAxMDAwKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVBsYXllckRpdiA9IChjdXJyUGxheWVyKSA9PiB7XG4gIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWRpdicpO1xuICBwbGF5ZXJOYW1lRGl2LmlubmVyVGV4dCA9IGBQbGF5ZXIgJHtjdXJyUGxheWVyfWA7XG59XG5cbmNvbnN0IGNyZWF0ZVNjcmVlbkZvck5leHRQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLmdldEN1cnJQbGF5ZXIoKTtcbiAgY29uc3Qgb3Bwb25lbnQgPSAxIC0gY3VyclBsYXllcjtcblxuICB1cGRhdGVQbGF5ZXJEaXYoY3VyclBsYXllcik7XG5cbiAgY3JlYXRlVGFyZ2V0R3JpZChnYW1lLmdldFBsYXllcnMoKVtvcHBvbmVudF0uZ2V0R2FtZUJvYXJkKCkpO1xuICBjcmVhdGVPY2VhbkdyaWQoZ2FtZS5nZXRQbGF5ZXJzKClbY3VyclBsYXllcl0uZ2V0R2FtZUJvYXJkKCkpO1xufTtcblxuY29uc3QgdXBkYXRlRE9NQWZ0ZXJOZXh0VHVybiA9ICgpID0+IHtcbiAgLy8gY2xlYXIgZ3JpZHMgZm9yIGN1cnJlbnQgcGxheWVyICsgaW5kaWNhdGUgJ2xvYWRpbmcnXG4gIGNsZWFyRGlzcGxheWVkR3JpZHMoKTtcbiAgLy8gc2V0IGEgdGltZW91dCBmb3IgMyBzZWNzXG4gIGluZGljYXRlTG9hZGluZygpO1xuICAvLyBkaXNwbGF5IGdyaWRzIGZvciBuZXh0IHBsYXllclxuICBzZXRUaW1lb3V0KGNyZWF0ZVNjcmVlbkZvck5leHRQbGF5ZXIsIDQwMDApO1xufTtcblxuZXhwb3J0IHsgdXBkYXRlRE9NQWZ0ZXJBdHRhY2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXRGcm9udGVuZCB9IGZyb20gXCIuL3ZpZXcvaW5pdEZyb250ZW5kXCI7XG5cbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9sb2dpYy9nYW1lXCI7XG5pbXBvcnQgeyBhZGRUYXJnZXRHcmlkRUwgfSBmcm9tIFwiLi92aWV3L2ZlRXZlbnRIYW5kbGVyXCI7XG5cblxuZ2FtZS5pbml0R2FtZSgpO1xuXG5sZXQgY3VyclBsYXllciA9IGdhbWUuZ2V0Q3VyclBsYXllcigpO1xubGV0IG9wcG9uZW50ID0gMSAtIGN1cnJQbGF5ZXI7XG5cbmxldCBvY2VhbkdyaWQgPSBnYW1lLmdldFBsYXllcnMoKVtjdXJyUGxheWVyXS5nZXRHYW1lQm9hcmQoKTtcbmxldCB0YXJnZXRHcmlkID0gZ2FtZS5nZXRQbGF5ZXJzKClbb3Bwb25lbnRdLmdldEdhbWVCb2FyZCgpO1xuXG5pbml0RnJvbnRlbmQob2NlYW5HcmlkLCB0YXJnZXRHcmlkKTtcbmFkZFRhcmdldEdyaWRFTCgpO1xuXG4vKlxuR0FNRSBMT09QXG4xLiBjdXJyUGxheWVyIHBpY2tzIGEgc3BvdCB0byBoaXQgb24gdGFyZ2V0R3JpZFxuMi4gdGFyZ2V0R3JpZCByZWZyZXNoZXMgdG8gZ2l2ZSByZXN1bHQgb2YgYXR0YWNrXG4zLiBDaGVjayBpZiBlaXRoZXIgcGxheWVyIGhhcyB3b25cbjQuIElmIHllcywgZW5kIGdhbWUuIElmIG5vdCwgc3dpdGNoIHBsYXllcidzIHR1cm4uXG4qL1xuLy8gd2hpbGUgKCFnYW1lLmdldElzR2FtZU92ZXIoKSkge1xuLy8gICAvLyBhZGRUYXJnZXRHcmlkRUwoKTtcbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=