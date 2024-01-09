"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["pageload"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Luminari-Regular.woff */ "./Luminari-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../wooden_background.png */ "./wooden_background.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../beaverBrosLogo.png */ "./beaverBrosLogo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'fantasy';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* background image for the body */

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: 100vw 100vh;
    background-attachment: fixed;
        
}

body::-webkit-scrollbar {
    display: none;
}

/* menu styling */

.navMenu {
    display: flex;
    margin: auto;
    justify-content: center;
    margin: auto;
    gap: 4rem;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: contain;
    background-repeat: no-repeat;
    height: 600px;
    width: 600px;
    position: sticky;
}

button {
    background: rgb(255,218,150);
    border-radius: .5rem;
    padding: .5rem;
    color: rgb(24,31,33);
    font-size: 18px;
    font-family: 'fantasy';
    height: 2.5rem;
    width: 6rem;
    text-align: center;
}

button:hover {
    background: #f3ac29;
    box-shadow: 0px 0px 1.5rem rgb(255,218,150)
}

.navBtn {
    margin-top: 395px;
}

/* home page styling */
#homeContainer, #menuBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,218,150,.5);
    width: 800px;
    margin: auto;
    border: 4px solid rgb(24,31,33);
    box-shadow: 0 0 1rem rgba(255,218,150);

}

.headerBox {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    width: 800px;
    margin:auto;       
}
    

.subheader {
    font-size: 48px;
    font-weight: 700;
    margin: auto;
    font-family: 'fantasy';
    font-style: italic;
    color: rgb(24,31,33);
    text-shadow:0 0 4px rgb(255,218,150);    
}

.primaryTextBox {
    width: 800px;
    font-size: 22px;
    font-family: 'fantasy';
    color: rgb(24,31,33);
    text-align: center;
}

.caveat {
    font-style: italic;
    font-family: 'fantasy';
    margin-top: 10rem;
}

.contentBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.contentHeader {
    font-size: 20px;
    font-family: 'fantasy';
    color: rgb(24,31,33);
}

.content {
    font-size: 22px;
    font-family: 'fantasy';
    color: rgb(24,31,33);
}

#nirelReview {
    font-style: italic;
    width: 500px;
}

.attribution {
    margin-bottom: 2rem;
    
}

/*Menu Formatting*/

#menuMenuBox {
    display: flex;
    gap: 4rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAAoC;AACxC;;AAEA,kCAAkC;;AAElC;IACI,yDAAiD;IACjD,4BAA4B;IAC5B,4BAA4B;;AAEhC;;AAEA;IACI,aAAa;AACjB;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,SAAS;IACT,yDAA8C;IAC9C,wBAAwB;IACxB,4BAA4B;IAC5B,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,oBAAoB;IACpB,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,sBAAsB;IACtB,cAAc;IACd,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA,sBAAsB;AACtB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;;AAE1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,WAAW;AACf;;;AAGA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,mBAAmB;;AAEvB;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,SAAS;AACb","sourcesContent":["@font-face {\n    font-family: 'fantasy';\n    src: url('../Luminari-Regular.woff');\n}\n\n/* background image for the body */\n\nbody {\n    background-image: url('../wooden_background.png');\n    background-size: 100vw 100vh;\n    background-attachment: fixed;\n        \n}\n\nbody::-webkit-scrollbar {\n    display: none;\n}\n\n/* menu styling */\n\n.navMenu {\n    display: flex;\n    margin: auto;\n    justify-content: center;\n    margin: auto;\n    gap: 4rem;\n    background-image: url('../beaverBrosLogo.png');\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 600px;\n    width: 600px;\n    position: sticky;\n}\n\nbutton {\n    background: rgb(255,218,150);\n    border-radius: .5rem;\n    padding: .5rem;\n    color: rgb(24,31,33);\n    font-size: 18px;\n    font-family: 'fantasy';\n    height: 2.5rem;\n    width: 6rem;\n    text-align: center;\n}\n\nbutton:hover {\n    background: #f3ac29;\n    box-shadow: 0px 0px 1.5rem rgb(255,218,150)\n}\n\n.navBtn {\n    margin-top: 395px;\n}\n\n/* home page styling */\n#homeContainer, #menuBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(255,218,150,.5);\n    width: 800px;\n    margin: auto;\n    border: 4px solid rgb(24,31,33);\n    box-shadow: 0 0 1rem rgba(255,218,150);\n\n}\n\n.headerBox {\n    display: flex;\n    flex-direction: column;\n    margin: 2rem;\n    width: 800px;\n    margin:auto;       \n}\n    \n\n.subheader {\n    font-size: 48px;\n    font-weight: 700;\n    margin: auto;\n    font-family: 'fantasy';\n    font-style: italic;\n    color: rgb(24,31,33);\n    text-shadow:0 0 4px rgb(255,218,150);    \n}\n\n.primaryTextBox {\n    width: 800px;\n    font-size: 22px;\n    font-family: 'fantasy';\n    color: rgb(24,31,33);\n    text-align: center;\n}\n\n.caveat {\n    font-style: italic;\n    font-family: 'fantasy';\n    margin-top: 10rem;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.contentHeader {\n    font-size: 20px;\n    font-family: 'fantasy';\n    color: rgb(24,31,33);\n}\n\n.content {\n    font-size: 22px;\n    font-family: 'fantasy';\n    color: rgb(24,31,33);\n}\n\n#nirelReview {\n    font-style: italic;\n    width: 500px;\n}\n\n.attribution {\n    margin-bottom: 2rem;\n    \n}\n\n/*Menu Formatting*/\n\n#menuMenuBox {\n    display: flex;\n    gap: 4rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });
function renderContact() {
    let container = document.querySelector("#activeContainer");
    container.innerHTML = "";


    
}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHomepage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function renderHomepage() {
    let container = document.querySelector("#activeContainer");
    container.innerHTML = "";

    let homeContainer = document.createElement("div");
    homeContainer.id = "homeContainer";
    container.appendChild(homeContainer);

    let headerBox = document.createElement("div");
    headerBox.classList.add("headerBox");

    let subheader = document.createElement("div");
    subheader.classList.add("subheader");
    subheader.textContent = "Where the timber gets you limber!"
    headerBox.appendChild(subheader);

    homeContainer.appendChild(headerBox);


    let welcomeBox = document.createElement("div");
    welcomeBox.classList.add("primaryTextBox");
    welcomeBox.textContent = "At Beaver Bro's Brewing Company (BBBC), we provide exceptional food and drink alongside mediocre lodging at incredibly low prices! Rated the best tavern in Cyfehil*, you won't be able to stop yourself from showing up and saying, 'Dam!'"
    homeContainer.appendChild(welcomeBox);

    let hoursBox = document.createElement("div");
    hoursBox.classList.add("contentBox");
    hoursBox.style = "margin: 4rem 0 4rem 0"

    let hoursLabel = document.createElement("div");
    hoursLabel.classList.add("contentHeader");
    hoursLabel.textContent = "Hours:"; 
    hoursBox.appendChild(hoursLabel);

    let hoursContent = document.createElement("div");
    hoursContent.classList.add("content");
    hoursContent.textContent = "0000 - 2359 Sunday - Saturday";
    hoursBox.appendChild(hoursContent)

    homeContainer.appendChild(hoursBox);

    let review = document.createElement("div");
    review.id = "nirelReview"
    review.classList.add("content");
    review.textContent = `"Oh yeah, Beaver Bro's Brewing Company is a pretty good spot to go after... well, pretty much anything. Ruvyn's been doing a great job taking care of the place since his brothers died in the Great Sacrifice, and for those looking for a sense of belonging, you've found no better spot. ... ... Oh you want me to keep saying more? I'm sorry? Oh you've got a ... okay, yeah. Um, if you're looking for something savory, you can choose between the Timber Pale Ale, which has real earthy tones in it but like, a good amount. Or you can try the Buckteef Brew - another almost bitter but complex drink. If you want something sweet, there's an awesome Berry Mead made from the berries of my farm, actually. Nirel's Berries are... right, sorry. So yeah, stop in to Beaver Bro's Brewing Company for, uh... you know, mead or food or a bed. It's a good place, really. Look, I would but I gotta get back to the farm. Yeah, anytime."`
    homeContainer.appendChild(review);

    let attribution = document.createElement("div");
    attribution.classList.add("content","attribution");
    attribution.id = "nirelAttribution"
    attribution.textContent = "-- Nirel Aldaos, Cyfehil's defacto BerryMan"
    homeContainer.appendChild(attribution)


    let caveat = document.createElement("div");
    caveat.classList.add("caveat");
    caveat.textContent = "*BBBC is the only tavern in Cyfehil - though the competing Friendly Hostel is known for better beds"
    homeContainer.appendChild(caveat)



}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
function renderMenu() {
    let container = document.querySelector("#activeContainer");
    container.innerHTML = "";

    let menuBox = document.createElement("div");
    menuBox.id = "menuBox";
    container.appendChild(menuBox)

    let menuMenu = document.createElement("div");
    menuMenu.id = "menuMenuBox";

    let food = document.createElement("button");
    food.classList.add("menuBtn");
    food.textContent = "Food";
    menuMenu.appendChild(food);

    let drinks = document.createElement("button");
    drinks.classList.add("menuBtn");
    drinks.textContent = "Drinks";
    menuMenu.appendChild(drinks);

    let rooms = document.createElement("button");
    rooms.classList.add("menuBtn");
    rooms.textContent = "Rooms";
    menuMenu.appendChild(rooms);

    menuBox.appendChild(menuMenu);

    let itemDisplay = document.createElement("div");
    itemDisplay.id = "itemDisplay";

    menuBox.appendChild(itemDisplay);

}



/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageload)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function pageload() {
    
    let container = document.querySelector("body");

    //create menu
    let menuUI = document.createElement("div");
    menuUI.classList.add("navMenu")

    let home = document.createElement('button');
    home.textContent = "Home";
    home.id = "homeBtn";
    home.classList.add("navBtn");
    home.addEventListener('click',_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])
    menuUI.appendChild(home);

    let menu = document.createElement('button');
    menu.textContent = "Menu";
    menu.id = "menuBtn";
    menu.classList.add("navBtn")
    menu.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_1__["default"])
    menuUI.appendChild(menu);

    let contact = document.createElement('button');
    contact.textContent = "Contact";
    contact.id = "contactBtn";
    contact.classList.add("navBtn");
    contact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__["default"])
    menuUI.appendChild(contact);

    container.appendChild(menuUI)


    //create container for pages
    let activeContainer = document.createElement("div");
    activeContainer.id = "activeContainer";

    container.appendChild(activeContainer)

}


/***/ }),

/***/ "./Luminari-Regular.woff":
/*!*******************************!*\
  !*** ./Luminari-Regular.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "506cfaeeb78dd715d188.woff";

/***/ }),

/***/ "./beaverBrosLogo.png":
/*!****************************!*\
  !*** ./beaverBrosLogo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b88e652606a7fff08cc8.png";

/***/ }),

/***/ "./wooden_background.png":
/*!*******************************!*\
  !*** ./wooden_background.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fffaa064d4b99571e21.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageload.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRU47QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQzlEZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDd0M7QUFDUjtBQUNNOztBQUV2QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlEQUFjO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZDQUFVO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdEQUFhO0FBQ25EOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9MdW1pbmFyaS1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi93b29kZW5fYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9iZWF2ZXJCcm9zTG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLyogYmFja2dyb3VuZCBpbWFnZSBmb3IgdGhlIGJvZHkgKi9cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdncgMTAwdmg7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgXG59XG5cbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBtZW51IHN0eWxpbmcgKi9cblxuLm5hdk1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBnYXA6IDRyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyMTgsMTUwKTtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBjb2xvcjogcmdiKDI0LDMxLDMzKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2YzYWMyOTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEuNXJlbSByZ2IoMjU1LDIxOCwxNTApXG59XG5cbi5uYXZCdG4ge1xuICAgIG1hcmdpbi10b3A6IDM5NXB4O1xufVxuXG4vKiBob21lIHBhZ2Ugc3R5bGluZyAqL1xuI2hvbWVDb250YWluZXIsICNtZW51Qm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyMTgsMTUwLC41KTtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigyNCwzMSwzMyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgyNTUsMjE4LDE1MCk7XG5cbn1cblxuLmhlYWRlckJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOmF1dG87ICAgICAgIFxufVxuICAgIFxuXG4uc3ViaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHJnYigyNCwzMSwzMyk7XG4gICAgdGV4dC1zaGFkb3c6MCAwIDRweCByZ2IoMjU1LDIxOCwxNTApOyAgICBcbn1cblxuLnByaW1hcnlUZXh0Qm94IHtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XG4gICAgY29sb3I6IHJnYigyNCwzMSwzMyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2F2ZWF0IHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbn1cblxuLmNvbnRlbnRCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudEhlYWRlciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XG4gICAgY29sb3I6IHJnYigyNCwzMSwzMyk7XG59XG5cbi5jb250ZW50IHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcbiAgICBjb2xvcjogcmdiKDI0LDMxLDMzKTtcbn1cblxuI25pcmVsUmV2aWV3IHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG4uYXR0cmlidXRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgXG59XG5cbi8qTWVudSBGb3JtYXR0aW5nKi9cblxuI21lbnVNZW51Qm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNHJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBb0M7QUFDeEM7O0FBRUEsa0NBQWtDOztBQUVsQztJQUNJLHlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixTQUFTO0lBQ1QseURBQThDO0lBQzlDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isc0NBQXNDOztBQUUxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcXG4gICAgc3JjOiB1cmwoJy4uL0x1bWluYXJpLVJlZ3VsYXIud29mZicpO1xcbn1cXG5cXG4vKiBiYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgYm9keSAqL1xcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3dvb2Rlbl9iYWNrZ3JvdW5kLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICAgICAgXFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbWVudSBzdHlsaW5nICovXFxuXFxuLm5hdk1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGdhcDogNHJlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZWF2ZXJCcm9zTG9nby5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjE4LDE1MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgY29sb3I6IHJnYigyNCwzMSwzMyk7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmM2FjMjk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMS41cmVtIHJnYigyNTUsMjE4LDE1MClcXG59XFxuXFxuLm5hdkJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDM5NXB4O1xcbn1cXG5cXG4vKiBob21lIHBhZ2Ugc3R5bGluZyAqL1xcbiNob21lQ29udGFpbmVyLCAjbWVudUJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyMTgsMTUwLC41KTtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigyNCwzMSwzMyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIHJnYmEoMjU1LDIxOCwxNTApO1xcblxcbn1cXG5cXG4uaGVhZGVyQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjphdXRvOyAgICAgICBcXG59XFxuICAgIFxcblxcbi5zdWJoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogcmdiKDI0LDMxLDMzKTtcXG4gICAgdGV4dC1zaGFkb3c6MCAwIDRweCByZ2IoMjU1LDIxOCwxNTApOyAgICBcXG59XFxuXFxuLnByaW1hcnlUZXh0Qm94IHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XFxuICAgIGNvbG9yOiByZ2IoMjQsMzEsMzMpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXZlYXQge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XFxuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xcbn1cXG5cXG4uY29udGVudEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudEhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcXG4gICAgY29sb3I6IHJnYigyNCwzMSwzMyk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3knO1xcbiAgICBjb2xvcjogcmdiKDI0LDMxLDMzKTtcXG59XFxuXFxuI25pcmVsUmV2aWV3IHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5hdHRyaWJ1dGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIFxcbn1cXG5cXG4vKk1lbnUgRm9ybWF0dGluZyovXFxuXFxuI21lbnVNZW51Qm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3QoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWN0aXZlQ29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG5cbiAgICBcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVySG9tZXBhZ2UoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWN0aXZlQ29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbGV0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVDb250YWluZXIuaWQgPSBcImhvbWVDb250YWluZXJcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbiAgICBsZXQgaGVhZGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJCb3guY2xhc3NMaXN0LmFkZChcImhlYWRlckJveFwiKTtcblxuICAgIGxldCBzdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1YmhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3ViaGVhZGVyXCIpO1xuICAgIHN1YmhlYWRlci50ZXh0Q29udGVudCA9IFwiV2hlcmUgdGhlIHRpbWJlciBnZXRzIHlvdSBsaW1iZXIhXCJcbiAgICBoZWFkZXJCb3guYXBwZW5kQ2hpbGQoc3ViaGVhZGVyKTtcblxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQm94KTtcblxuXG4gICAgbGV0IHdlbGNvbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlbGNvbWVCb3guY2xhc3NMaXN0LmFkZChcInByaW1hcnlUZXh0Qm94XCIpO1xuICAgIHdlbGNvbWVCb3gudGV4dENvbnRlbnQgPSBcIkF0IEJlYXZlciBCcm8ncyBCcmV3aW5nIENvbXBhbnkgKEJCQkMpLCB3ZSBwcm92aWRlIGV4Y2VwdGlvbmFsIGZvb2QgYW5kIGRyaW5rIGFsb25nc2lkZSBtZWRpb2NyZSBsb2RnaW5nIGF0IGluY3JlZGlibHkgbG93IHByaWNlcyEgUmF0ZWQgdGhlIGJlc3QgdGF2ZXJuIGluIEN5ZmVoaWwqLCB5b3Ugd29uJ3QgYmUgYWJsZSB0byBzdG9wIHlvdXJzZWxmIGZyb20gc2hvd2luZyB1cCBhbmQgc2F5aW5nLCAnRGFtISdcIlxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZUJveCk7XG5cbiAgICBsZXQgaG91cnNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzQm94LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Qm94XCIpO1xuICAgIGhvdXJzQm94LnN0eWxlID0gXCJtYXJnaW46IDRyZW0gMCA0cmVtIDBcIlxuXG4gICAgbGV0IGhvdXJzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzTGFiZWwuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRIZWFkZXJcIik7XG4gICAgaG91cnNMYWJlbC50ZXh0Q29udGVudCA9IFwiSG91cnM6XCI7IFxuICAgIGhvdXJzQm94LmFwcGVuZENoaWxkKGhvdXJzTGFiZWwpO1xuXG4gICAgbGV0IGhvdXJzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICAgIGhvdXJzQ29udGVudC50ZXh0Q29udGVudCA9IFwiMDAwMCAtIDIzNTkgU3VuZGF5IC0gU2F0dXJkYXlcIjtcbiAgICBob3Vyc0JveC5hcHBlbmRDaGlsZChob3Vyc0NvbnRlbnQpXG5cbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzQm94KTtcblxuICAgIGxldCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldmlldy5pZCA9IFwibmlyZWxSZXZpZXdcIlxuICAgIHJldmlldy5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgICByZXZpZXcudGV4dENvbnRlbnQgPSBgXCJPaCB5ZWFoLCBCZWF2ZXIgQnJvJ3MgQnJld2luZyBDb21wYW55IGlzIGEgcHJldHR5IGdvb2Qgc3BvdCB0byBnbyBhZnRlci4uLiB3ZWxsLCBwcmV0dHkgbXVjaCBhbnl0aGluZy4gUnV2eW4ncyBiZWVuIGRvaW5nIGEgZ3JlYXQgam9iIHRha2luZyBjYXJlIG9mIHRoZSBwbGFjZSBzaW5jZSBoaXMgYnJvdGhlcnMgZGllZCBpbiB0aGUgR3JlYXQgU2FjcmlmaWNlLCBhbmQgZm9yIHRob3NlIGxvb2tpbmcgZm9yIGEgc2Vuc2Ugb2YgYmVsb25naW5nLCB5b3UndmUgZm91bmQgbm8gYmV0dGVyIHNwb3QuIC4uLiAuLi4gT2ggeW91IHdhbnQgbWUgdG8ga2VlcCBzYXlpbmcgbW9yZT8gSSdtIHNvcnJ5PyBPaCB5b3UndmUgZ290IGEgLi4uIG9rYXksIHllYWguIFVtLCBpZiB5b3UncmUgbG9va2luZyBmb3Igc29tZXRoaW5nIHNhdm9yeSwgeW91IGNhbiBjaG9vc2UgYmV0d2VlbiB0aGUgVGltYmVyIFBhbGUgQWxlLCB3aGljaCBoYXMgcmVhbCBlYXJ0aHkgdG9uZXMgaW4gaXQgYnV0IGxpa2UsIGEgZ29vZCBhbW91bnQuIE9yIHlvdSBjYW4gdHJ5IHRoZSBCdWNrdGVlZiBCcmV3IC0gYW5vdGhlciBhbG1vc3QgYml0dGVyIGJ1dCBjb21wbGV4IGRyaW5rLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgc3dlZXQsIHRoZXJlJ3MgYW4gYXdlc29tZSBCZXJyeSBNZWFkIG1hZGUgZnJvbSB0aGUgYmVycmllcyBvZiBteSBmYXJtLCBhY3R1YWxseS4gTmlyZWwncyBCZXJyaWVzIGFyZS4uLiByaWdodCwgc29ycnkuIFNvIHllYWgsIHN0b3AgaW4gdG8gQmVhdmVyIEJybydzIEJyZXdpbmcgQ29tcGFueSBmb3IsIHVoLi4uIHlvdSBrbm93LCBtZWFkIG9yIGZvb2Qgb3IgYSBiZWQuIEl0J3MgYSBnb29kIHBsYWNlLCByZWFsbHkuIExvb2ssIEkgd291bGQgYnV0IEkgZ290dGEgZ2V0IGJhY2sgdG8gdGhlIGZhcm0uIFllYWgsIGFueXRpbWUuXCJgXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXcpO1xuXG4gICAgbGV0IGF0dHJpYnV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiLFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb24uaWQgPSBcIm5pcmVsQXR0cmlidXRpb25cIlxuICAgIGF0dHJpYnV0aW9uLnRleHRDb250ZW50ID0gXCItLSBOaXJlbCBBbGRhb3MsIEN5ZmVoaWwncyBkZWZhY3RvIEJlcnJ5TWFuXCJcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uKVxuXG5cbiAgICBsZXQgY2F2ZWF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXZlYXQuY2xhc3NMaXN0LmFkZChcImNhdmVhdFwiKTtcbiAgICBjYXZlYXQudGV4dENvbnRlbnQgPSBcIipCQkJDIGlzIHRoZSBvbmx5IHRhdmVybiBpbiBDeWZlaGlsIC0gdGhvdWdoIHRoZSBjb21wZXRpbmcgRnJpZW5kbHkgSG9zdGVsIGlzIGtub3duIGZvciBiZXR0ZXIgYmVkc1wiXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXZlYXQpXG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY3RpdmVDb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsZXQgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUJveC5pZCA9IFwibWVudUJveFwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Qm94KVxuXG4gICAgbGV0IG1lbnVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51TWVudS5pZCA9IFwibWVudU1lbnVCb3hcIjtcblxuICAgIGxldCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICAgIGZvb2QudGV4dENvbnRlbnQgPSBcIkZvb2RcIjtcbiAgICBtZW51TWVudS5hcHBlbmRDaGlsZChmb29kKTtcblxuICAgIGxldCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRyaW5rcy5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgICBkcmlua3MudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICAgIG1lbnVNZW51LmFwcGVuZENoaWxkKGRyaW5rcyk7XG5cbiAgICBsZXQgcm9vbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJvb21zLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICAgIHJvb21zLnRleHRDb250ZW50ID0gXCJSb29tc1wiO1xuICAgIG1lbnVNZW51LmFwcGVuZENoaWxkKHJvb21zKTtcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQobWVudU1lbnUpO1xuXG4gICAgbGV0IGl0ZW1EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRGlzcGxheS5pZCA9IFwiaXRlbURpc3BsYXlcIjtcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoaXRlbURpc3BsYXkpO1xuXG59XG5cbiIsImltcG9ydCByZW5kZXJIb21lcGFnZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlbG9hZCgpIHtcbiAgICBcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAvL2NyZWF0ZSBtZW51XG4gICAgbGV0IG1lbnVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudVVJLmNsYXNzTGlzdC5hZGQoXCJuYXZNZW51XCIpXG5cbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBob21lLmlkID0gXCJob21lQnRuXCI7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2QnRuXCIpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbmRlckhvbWVwYWdlKVxuICAgIG1lbnVVSS5hcHBlbmRDaGlsZChob21lKTtcblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVCdG5cIjtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZCdG5cIilcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW5kZXJNZW51KVxuICAgIG1lbnVVSS5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3RCdG5cIjtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXZCdG5cIik7XG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckNvbnRhY3QpXG4gICAgbWVudVVJLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVVSSlcblxuXG4gICAgLy9jcmVhdGUgY29udGFpbmVyIGZvciBwYWdlc1xuICAgIGxldCBhY3RpdmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFjdGl2ZUNvbnRhaW5lci5pZCA9IFwiYWN0aXZlQ29udGFpbmVyXCI7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZlQ29udGFpbmVyKVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=