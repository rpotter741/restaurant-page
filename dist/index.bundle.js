"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

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

* {
    font-family: 'fantasy';
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
#homeContainer, #menuBox, #contactBox {
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



.namePrice {
    display: flex;
    gap: .5rem; 
}

.namePrice>div {
    font-size: 22px;
}

.itemBox {
    margin: 2rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,kCAAkC;;AAElC;IACI,yDAAiD;IACjD,4BAA4B;IAC5B,4BAA4B;;AAEhC;;AAEA;IACI,aAAa;AACjB;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,SAAS;IACT,yDAA8C;IAC9C,wBAAwB;IACxB,4BAA4B;IAC5B,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,oBAAoB;IACpB,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,sBAAsB;IACtB,cAAc;IACd,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA,sBAAsB;AACtB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;;AAE1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,WAAW;AACf;;;AAGA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,mBAAmB;;AAEvB;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,SAAS;AACb;;;;AAIA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'fantasy';\n    src: url('../Luminari-Regular.woff');\n}\n\n* {\n    font-family: 'fantasy';\n}\n\n/* background image for the body */\n\nbody {\n    background-image: url('../wooden_background.png');\n    background-size: 100vw 100vh;\n    background-attachment: fixed;\n        \n}\n\nbody::-webkit-scrollbar {\n    display: none;\n}\n\n/* menu styling */\n\n.navMenu {\n    display: flex;\n    margin: auto;\n    justify-content: center;\n    margin: auto;\n    gap: 4rem;\n    background-image: url('../beaverBrosLogo.png');\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 600px;\n    width: 600px;\n    position: sticky;\n}\n\nbutton {\n    background: rgb(255,218,150);\n    border-radius: .5rem;\n    padding: .5rem;\n    color: rgb(24,31,33);\n    font-size: 18px;\n    font-family: 'fantasy';\n    height: 2.5rem;\n    width: 6rem;\n    text-align: center;\n}\n\nbutton:hover {\n    background: #f3ac29;\n    box-shadow: 0px 0px 1.5rem rgb(255,218,150)\n}\n\n.navBtn {\n    margin-top: 395px;\n}\n\n/* home page styling */\n#homeContainer, #menuBox, #contactBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(255,218,150,.5);\n    width: 800px;\n    margin: auto;\n    border: 4px solid rgb(24,31,33);\n    box-shadow: 0 0 1rem rgba(255,218,150);\n\n}\n\n.headerBox {\n    display: flex;\n    flex-direction: column;\n    margin: 2rem;\n    width: 800px;\n    margin:auto;       \n}\n    \n\n.subheader {\n    font-size: 48px;\n    font-weight: 700;\n    margin: auto;\n    font-family: 'fantasy';\n    font-style: italic;\n    color: rgb(24,31,33);\n    text-shadow:0 0 4px rgb(255,218,150);    \n}\n\n.primaryTextBox {\n    width: 800px;\n    font-size: 22px;\n    font-family: 'fantasy';\n    color: rgb(24,31,33);\n    text-align: center;\n}\n\n.caveat {\n    font-style: italic;\n    font-family: 'fantasy';\n    margin-top: 10rem;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.contentHeader {\n    font-size: 20px;\n    font-family: 'fantasy';\n    color: rgb(24,31,33);\n}\n\n.content {\n    font-size: 22px;\n    font-family: 'fantasy';\n    color: rgb(24,31,33);\n}\n\n#nirelReview {\n    font-style: italic;\n    width: 500px;\n}\n\n.attribution {\n    margin-bottom: 2rem;\n    \n}\n\n/*Menu Formatting*/\n\n#menuMenuBox {\n    display: flex;\n    gap: 4rem;\n}\n\n\n\n.namePrice {\n    display: flex;\n    gap: .5rem; \n}\n\n.namePrice>div {\n    font-size: 22px;\n}\n\n.itemBox {\n    margin: 2rem;\n}\n"],"sourceRoot":""}]);
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

    let contactBox = document.createElement('div');
    contactBox.id = "contactBox";

    let postageBox = document.createElement('div');
    postageBox.classList.add('content');
    postageBox.textContent = "For Postage, address letters to 13 Tarenthil Ave, Cyfehil, Locrati";
    contactBox.appendChild(postageBox);

    container.appendChild(contactBox);
    
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_pageload__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])();



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
/* harmony import */ var _menuDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuDisplay.js */ "./src/menuDisplay.js");


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
    food.addEventListener('click', () => {
        (0,_menuDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"])(foodMenu);
    });
    menuMenu.appendChild(food);

    let drinks = document.createElement("button");
    drinks.classList.add("menuBtn");
    drinks.textContent = "Drinks";
    drinks.addEventListener('click', () => {
        (0,_menuDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"])(drinksMenu)
    });
    menuMenu.appendChild(drinks);

    let rooms = document.createElement("button");
    rooms.classList.add("menuBtn");
    rooms.textContent = "Rooms";
    rooms.addEventListener('click', () => {
        (0,_menuDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"])(roomMenu);
    })
    menuMenu.appendChild(rooms);

    menuBox.appendChild(menuMenu);

    let itemDisplay = document.createElement("div");
    itemDisplay.id = "itemDisplay";
    itemDisplay.innerHTML = "";

    menuBox.appendChild(itemDisplay);

    (0,_menuDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"])(foodMenu);

}



let foodMenu = [
    {
        name: "Hog onuh Log",
        description: "Porkbutt shaved and skewered, layered with peppers, onions, and garlic. Served with Kille-Fried potatoes.",
        picture: "",
        price: "- 1 sp"
    }, 
    {
        name: "Chicken Flappies",
        description:"This delightfully baked array of chicken wings are so good, you'll just have to flap your arms! Comes with a browned tomato sauce, Kille-Fried potatoes, and your choice of either carrots or nothing.",
        picture: "",
        price: "- 5cp"
    },
    {
        name: "Ruvyn's Ridiculous Rings",
        description:"Ever dropped an onion and thought, 'Now what can I do with this?' Wonder no more! Try Ruvyn's Ridiculous Rings for a taste of earthy fried goodness!",
        picture: "",
        price: "- 1cp"
    },
    {
        name: "Meat",
        description:"Being an adventurer doesn't have to take you far from home! You can be adventurous right now and order Meat! Don't ask questions. Okay, yes it's animal meat. No more questions.",
        picture: "",
        price: "- 2cp"
    },
    {
        name: "Bearberry Pancakes",
        description:"Drinking with the kids and don't want the Missus finding out? Order them some Bearberry Pancakes and sober them right up! Whipped cream, butter, and syrup extra.",
        picture: "",
        price: "- 1cp"
    },
    {
        name: "Barrowmax Stew",
        description:"My brother might be dead, but his cooking is alive and well (okay, I found his recipe)! Enjoy the chonky, heart-warming, belly-filling delight that is Barrowmax Stew!",
        picture: "",
        price: "- 4cp"
    },
    {
        name: "Lemon",
        description:"Yeah, not the best citrus but it's impossible to get anything else tropical in Cyfehil. You want it or not? (depends on seasonal availability)",
        picture: "",
        price: "- 10gp"
    },
    {
        name: "Vegetables",
        description:"See title",
        picture: "",
        price: "- 1cp"
    }
]

let drinksMenu = [
    {
        name: "Timber Pale Ale",
        description: "This rabbity ale is also a bit skunky; as a rule, about as strong as a Beaver dam. Prices by tankard, flagon, and barrel.",
        picture: "",
        price: "- 2cp/1sp/3gp"
    }, 
    {
        name: "Berry Mead",
        description:"A sweet drink concocted from my brains and Nirel's berries!",
        picture: "",
        price: "- 5cp"
    },
    {
        name: "Shait Wine",
        description:"Druids have all but wiped out the shaitugarru berry, calling it an invasive species. Either way, we've got a few bottle's left.",
        picture: "",
        price: "- 2sp"
    },
    {
        name: "Wine",
        description:"Like the other wine, except without the shait.",
        picture: "",
        price: "- 6cp"
    },
    {
        name: "Generic Ale",
        description:"The herbs used to season this ale are generally light on busches. ",
        picture: "",
        price: "- 1cp"
    },
    {
        name: "Bjorn's Special",
        description:"This dastardly whiskey comes from the final barrel of my late brother's last distillation. It'll be the last ever served.",
        picture: "",
        price: "- 4sp"
    }
]

let roomMenu = [
    {
        name: "Single Bed",
        description: "A single bed in a room likely shared with others. Blankets and pillows provided.",
        picture: "",
        price: "- 2cp"
    },
    {
        name: "Single Room",
        description: "For the shy or reasonably wary of sleeping with strangers, the single room offers a bed in a room without others. Comes with blanket, pillow, and door.",
        picture: "",
        price: "- 5cp"
    },
    {
        name: "Suite",
        description: "For the ritzy and glamourous, this is your ticket to comfort in Cyfehil. Has two beds(!), blankets, pillows, a door, a wash tub, and two (or more) mirrors.",
        picture: "",
        price: "- 1sp"
    },
    {
        name: "One-Meal-A-Day Addon",
        description: "Tight on a budget but against starvation in general? This is the add-on for you! Includes up to 5cp of menu items (must be purchased with a room).",
        picture: "",
        price: "- 3cp"
    },
    {
        name: "Two-Meals-A-Day Addon",
        description: "Like to eat and drink without breaking the bank? Check out this deal! Includes up to 1sp of menu items (must be purchased with a room).",
        picture: "",
        price: "- 5cp"
    },
    {
        name: "Kingly Buffet Addon",
        description: "If you're a glutton but don't want others to know, this is the addon for you! Includes up to 5sp of menu items (must be purchased with the Suite)",
        picture: "",
        price: "- 3sp"
    }
]

/***/ }),

/***/ "./src/menuDisplay.js":
/*!****************************!*\
  !*** ./src/menuDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuDisplay)
/* harmony export */ });
function menuDisplay(i) {

    let displayArea = document.querySelector("#itemDisplay");
    displayArea.innerHTML = "";


    i.forEach((item) => {
        let cost = document.createElement('div');
        cost.classList.add('price');
        cost.textContent = item.price;

        let title = document.createElement('div'); 
        title.classList.add("itemTitle"); 
        title.textContent = item.name;

        let namePrice = document.createElement('div');
        namePrice.classList.add('namePrice');
        namePrice.appendChild(title);
        namePrice.appendChild(cost);        

        let picture = document.createElement("img");
        picture.classList.add('itemPicture')
        picture.src = '';

        let description = document.createElement('div');
        description.classList.add('itemDescription');
        description.textContent = item.description;

        let box = document.createElement('div');
        box.classList.add('itemBox');
        box.appendChild(namePrice);
        box.appendChild(description);

        displayArea.appendChild(box)

    })
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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
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
    menu.addEventListener('click',_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsMkRBQVc7QUFDbkIsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLDJEQUFXOztBQUVmOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbExlOztBQUVmO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEN3QztBQUNMO0FBQ0c7O0FBRXZCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaURBQWM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQVU7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0RBQWE7QUFDbkQ7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVEaXNwbGF5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vTHVtaW5hcmktUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vd29vZGVuX2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYmVhdmVyQnJvc0xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XG59XG5cbi8qIGJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSBib2R5ICovXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgIFxufVxuXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogbWVudSBzdHlsaW5nICovXG5cbi5uYXZNZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZ2FwOiA0cmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjE4LDE1MCk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgY29sb3I6IHJnYigyNCwzMSwzMyk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDZyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmM2FjMjk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxLjVyZW0gcmdiKDI1NSwyMTgsMTUwKVxufVxuXG4ubmF2QnRuIHtcbiAgICBtYXJnaW4tdG9wOiAzOTVweDtcbn1cblxuLyogaG9tZSBwYWdlIHN0eWxpbmcgKi9cbiNob21lQ29udGFpbmVyLCAjbWVudUJveCwgI2NvbnRhY3RCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDIxOCwxNTAsLjUpO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDI0LDMxLDMzKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSByZ2JhKDI1NSwyMTgsMTUwKTtcblxufVxuXG4uaGVhZGVyQm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46YXV0bzsgICAgICAgXG59XG4gICAgXG5cbi5zdWJoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3knO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogcmdiKDI0LDMxLDMzKTtcbiAgICB0ZXh0LXNoYWRvdzowIDAgNHB4IHJnYigyNTUsMjE4LDE1MCk7ICAgIFxufVxuXG4ucHJpbWFyeVRleHRCb3gge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcbiAgICBjb2xvcjogcmdiKDI0LDMxLDMzKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXZlYXQge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3knO1xuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xufVxuXG4uY29udGVudEJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50SGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcbiAgICBjb2xvcjogcmdiKDI0LDMxLDMzKTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3knO1xuICAgIGNvbG9yOiByZ2IoMjQsMzEsMzMpO1xufVxuXG4jbmlyZWxSZXZpZXcge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB3aWR0aDogNTAwcHg7XG59XG5cbi5hdHRyaWJ1dGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBcbn1cblxuLypNZW51IEZvcm1hdHRpbmcqL1xuXG4jbWVudU1lbnVCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA0cmVtO1xufVxuXG5cblxuLm5hbWVQcmljZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IC41cmVtOyBcbn1cblxuLm5hbWVQcmljZT5kaXYge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLml0ZW1Cb3gge1xuICAgIG1hcmdpbjogMnJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsa0NBQWtDOztBQUVsQztJQUNJLHlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixTQUFTO0lBQ1QseURBQThDO0lBQzlDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isc0NBQXNDOztBQUUxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3knO1xcbiAgICBzcmM6IHVybCgnLi4vTHVtaW5hcmktUmVndWxhci53b2ZmJyk7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3knO1xcbn1cXG5cXG4vKiBiYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgYm9keSAqL1xcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3dvb2Rlbl9iYWNrZ3JvdW5kLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICAgICAgXFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbWVudSBzdHlsaW5nICovXFxuXFxuLm5hdk1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGdhcDogNHJlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZWF2ZXJCcm9zTG9nby5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjE4LDE1MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgY29sb3I6IHJnYigyNCwzMSwzMyk7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmM2FjMjk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMS41cmVtIHJnYigyNTUsMjE4LDE1MClcXG59XFxuXFxuLm5hdkJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDM5NXB4O1xcbn1cXG5cXG4vKiBob21lIHBhZ2Ugc3R5bGluZyAqL1xcbiNob21lQ29udGFpbmVyLCAjbWVudUJveCwgI2NvbnRhY3RCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjE4LDE1MCwuNSk7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMjQsMzEsMzMpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSByZ2JhKDI1NSwyMTgsMTUwKTtcXG5cXG59XFxuXFxuLmhlYWRlckJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46YXV0bzsgICAgICAgXFxufVxcbiAgICBcXG5cXG4uc3ViaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IHJnYigyNCwzMSwzMyk7XFxuICAgIHRleHQtc2hhZG93OjAgMCA0cHggcmdiKDI1NSwyMTgsMTUwKTsgICAgXFxufVxcblxcbi5wcmltYXJ5VGV4dEJveCB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3knO1xcbiAgICBjb2xvcjogcmdiKDI0LDMxLDMzKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2F2ZWF0IHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3knO1xcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcXG59XFxuXFxuLmNvbnRlbnRCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnRIZWFkZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XFxuICAgIGNvbG9yOiByZ2IoMjQsMzEsMzMpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcXG4gICAgY29sb3I6IHJnYigyNCwzMSwzMyk7XFxufVxcblxcbiNuaXJlbFJldmlldyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uYXR0cmlidXRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICBcXG59XFxuXFxuLypNZW51IEZvcm1hdHRpbmcqL1xcblxcbiNtZW51TWVudUJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuXFxuXFxuLm5hbWVQcmljZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogLjVyZW07IFxcbn1cXG5cXG4ubmFtZVByaWNlPmRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLml0ZW1Cb3gge1xcbiAgICBtYXJnaW46IDJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY3RpdmVDb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsZXQgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RCb3guaWQgPSBcImNvbnRhY3RCb3hcIjtcblxuICAgIGxldCBwb3N0YWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9zdGFnZUJveC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgcG9zdGFnZUJveC50ZXh0Q29udGVudCA9IFwiRm9yIFBvc3RhZ2UsIGFkZHJlc3MgbGV0dGVycyB0byAxMyBUYXJlbnRoaWwgQXZlLCBDeWZlaGlsLCBMb2NyYXRpXCI7XG4gICAgY29udGFjdEJveC5hcHBlbmRDaGlsZChwb3N0YWdlQm94KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Qm94KTtcbiAgICBcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVySG9tZXBhZ2UoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWN0aXZlQ29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbGV0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVDb250YWluZXIuaWQgPSBcImhvbWVDb250YWluZXJcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbiAgICBsZXQgaGVhZGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJCb3guY2xhc3NMaXN0LmFkZChcImhlYWRlckJveFwiKTtcblxuICAgIGxldCBzdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1YmhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3ViaGVhZGVyXCIpO1xuICAgIHN1YmhlYWRlci50ZXh0Q29udGVudCA9IFwiV2hlcmUgdGhlIHRpbWJlciBnZXRzIHlvdSBsaW1iZXIhXCJcbiAgICBoZWFkZXJCb3guYXBwZW5kQ2hpbGQoc3ViaGVhZGVyKTtcblxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQm94KTtcblxuXG4gICAgbGV0IHdlbGNvbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlbGNvbWVCb3guY2xhc3NMaXN0LmFkZChcInByaW1hcnlUZXh0Qm94XCIpO1xuICAgIHdlbGNvbWVCb3gudGV4dENvbnRlbnQgPSBcIkF0IEJlYXZlciBCcm8ncyBCcmV3aW5nIENvbXBhbnkgKEJCQkMpLCB3ZSBwcm92aWRlIGV4Y2VwdGlvbmFsIGZvb2QgYW5kIGRyaW5rIGFsb25nc2lkZSBtZWRpb2NyZSBsb2RnaW5nIGF0IGluY3JlZGlibHkgbG93IHByaWNlcyEgUmF0ZWQgdGhlIGJlc3QgdGF2ZXJuIGluIEN5ZmVoaWwqLCB5b3Ugd29uJ3QgYmUgYWJsZSB0byBzdG9wIHlvdXJzZWxmIGZyb20gc2hvd2luZyB1cCBhbmQgc2F5aW5nLCAnRGFtISdcIlxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZUJveCk7XG5cbiAgICBsZXQgaG91cnNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzQm94LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Qm94XCIpO1xuICAgIGhvdXJzQm94LnN0eWxlID0gXCJtYXJnaW46IDRyZW0gMCA0cmVtIDBcIlxuXG4gICAgbGV0IGhvdXJzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzTGFiZWwuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRIZWFkZXJcIik7XG4gICAgaG91cnNMYWJlbC50ZXh0Q29udGVudCA9IFwiSG91cnM6XCI7IFxuICAgIGhvdXJzQm94LmFwcGVuZENoaWxkKGhvdXJzTGFiZWwpO1xuXG4gICAgbGV0IGhvdXJzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICAgIGhvdXJzQ29udGVudC50ZXh0Q29udGVudCA9IFwiMDAwMCAtIDIzNTkgU3VuZGF5IC0gU2F0dXJkYXlcIjtcbiAgICBob3Vyc0JveC5hcHBlbmRDaGlsZChob3Vyc0NvbnRlbnQpXG5cbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzQm94KTtcblxuICAgIGxldCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldmlldy5pZCA9IFwibmlyZWxSZXZpZXdcIlxuICAgIHJldmlldy5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgICByZXZpZXcudGV4dENvbnRlbnQgPSBgXCJPaCB5ZWFoLCBCZWF2ZXIgQnJvJ3MgQnJld2luZyBDb21wYW55IGlzIGEgcHJldHR5IGdvb2Qgc3BvdCB0byBnbyBhZnRlci4uLiB3ZWxsLCBwcmV0dHkgbXVjaCBhbnl0aGluZy4gUnV2eW4ncyBiZWVuIGRvaW5nIGEgZ3JlYXQgam9iIHRha2luZyBjYXJlIG9mIHRoZSBwbGFjZSBzaW5jZSBoaXMgYnJvdGhlcnMgZGllZCBpbiB0aGUgR3JlYXQgU2FjcmlmaWNlLCBhbmQgZm9yIHRob3NlIGxvb2tpbmcgZm9yIGEgc2Vuc2Ugb2YgYmVsb25naW5nLCB5b3UndmUgZm91bmQgbm8gYmV0dGVyIHNwb3QuIC4uLiAuLi4gT2ggeW91IHdhbnQgbWUgdG8ga2VlcCBzYXlpbmcgbW9yZT8gSSdtIHNvcnJ5PyBPaCB5b3UndmUgZ290IGEgLi4uIG9rYXksIHllYWguIFVtLCBpZiB5b3UncmUgbG9va2luZyBmb3Igc29tZXRoaW5nIHNhdm9yeSwgeW91IGNhbiBjaG9vc2UgYmV0d2VlbiB0aGUgVGltYmVyIFBhbGUgQWxlLCB3aGljaCBoYXMgcmVhbCBlYXJ0aHkgdG9uZXMgaW4gaXQgYnV0IGxpa2UsIGEgZ29vZCBhbW91bnQuIE9yIHlvdSBjYW4gdHJ5IHRoZSBCdWNrdGVlZiBCcmV3IC0gYW5vdGhlciBhbG1vc3QgYml0dGVyIGJ1dCBjb21wbGV4IGRyaW5rLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgc3dlZXQsIHRoZXJlJ3MgYW4gYXdlc29tZSBCZXJyeSBNZWFkIG1hZGUgZnJvbSB0aGUgYmVycmllcyBvZiBteSBmYXJtLCBhY3R1YWxseS4gTmlyZWwncyBCZXJyaWVzIGFyZS4uLiByaWdodCwgc29ycnkuIFNvIHllYWgsIHN0b3AgaW4gdG8gQmVhdmVyIEJybydzIEJyZXdpbmcgQ29tcGFueSBmb3IsIHVoLi4uIHlvdSBrbm93LCBtZWFkIG9yIGZvb2Qgb3IgYSBiZWQuIEl0J3MgYSBnb29kIHBsYWNlLCByZWFsbHkuIExvb2ssIEkgd291bGQgYnV0IEkgZ290dGEgZ2V0IGJhY2sgdG8gdGhlIGZhcm0uIFllYWgsIGFueXRpbWUuXCJgXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXcpO1xuXG4gICAgbGV0IGF0dHJpYnV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiLFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb24uaWQgPSBcIm5pcmVsQXR0cmlidXRpb25cIlxuICAgIGF0dHJpYnV0aW9uLnRleHRDb250ZW50ID0gXCItLSBOaXJlbCBBbGRhb3MsIEN5ZmVoaWwncyBkZWZhY3RvIEJlcnJ5TWFuXCJcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uKVxuXG5cbiAgICBsZXQgY2F2ZWF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXZlYXQuY2xhc3NMaXN0LmFkZChcImNhdmVhdFwiKTtcbiAgICBjYXZlYXQudGV4dENvbnRlbnQgPSBcIipCQkJDIGlzIHRoZSBvbmx5IHRhdmVybiBpbiBDeWZlaGlsIC0gdGhvdWdoIHRoZSBjb21wZXRpbmcgRnJpZW5kbHkgSG9zdGVsIGlzIGtub3duIGZvciBiZXR0ZXIgYmVkc1wiXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXZlYXQpXG5cblxuXG59IiwiaW1wb3J0IHBhZ2Vsb2FkIGZyb20gJy4vcGFnZWxvYWQnO1xuaW1wb3J0IHJlbmRlckhvbWVwYWdlIGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnBhZ2Vsb2FkKCk7XG5yZW5kZXJIb21lcGFnZSgpO1xuXG4iLCJpbXBvcnQgbWVudURpc3BsYXkgZnJvbSBcIi4vbWVudURpc3BsYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY3RpdmVDb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsZXQgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUJveC5pZCA9IFwibWVudUJveFwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Qm94KVxuXG4gICAgbGV0IG1lbnVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51TWVudS5pZCA9IFwibWVudU1lbnVCb3hcIjtcblxuICAgIGxldCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICAgIGZvb2QudGV4dENvbnRlbnQgPSBcIkZvb2RcIjtcbiAgICBmb29kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtZW51RGlzcGxheShmb29kTWVudSk7XG4gICAgfSk7XG4gICAgbWVudU1lbnUuYXBwZW5kQ2hpbGQoZm9vZCk7XG5cbiAgICBsZXQgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkcmlua3MuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gICAgZHJpbmtzLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbiAgICBkcmlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1lbnVEaXNwbGF5KGRyaW5rc01lbnUpXG4gICAgfSk7XG4gICAgbWVudU1lbnUuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcblxuICAgIGxldCByb29tcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcm9vbXMuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gICAgcm9vbXMudGV4dENvbnRlbnQgPSBcIlJvb21zXCI7XG4gICAgcm9vbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1lbnVEaXNwbGF5KHJvb21NZW51KTtcbiAgICB9KVxuICAgIG1lbnVNZW51LmFwcGVuZENoaWxkKHJvb21zKTtcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQobWVudU1lbnUpO1xuXG4gICAgbGV0IGl0ZW1EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRGlzcGxheS5pZCA9IFwiaXRlbURpc3BsYXlcIjtcbiAgICBpdGVtRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChpdGVtRGlzcGxheSk7XG5cbiAgICBtZW51RGlzcGxheShmb29kTWVudSk7XG5cbn1cblxuXG5cbmxldCBmb29kTWVudSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiSG9nIG9udWggTG9nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBvcmtidXR0IHNoYXZlZCBhbmQgc2tld2VyZWQsIGxheWVyZWQgd2l0aCBwZXBwZXJzLCBvbmlvbnMsIGFuZCBnYXJsaWMuIFNlcnZlZCB3aXRoIEtpbGxlLUZyaWVkIHBvdGF0b2VzLlwiLFxuICAgICAgICBwaWN0dXJlOiBcIlwiLFxuICAgICAgICBwcmljZTogXCItIDEgc3BcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDaGlja2VuIEZsYXBwaWVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiVGhpcyBkZWxpZ2h0ZnVsbHkgYmFrZWQgYXJyYXkgb2YgY2hpY2tlbiB3aW5ncyBhcmUgc28gZ29vZCwgeW91J2xsIGp1c3QgaGF2ZSB0byBmbGFwIHlvdXIgYXJtcyEgQ29tZXMgd2l0aCBhIGJyb3duZWQgdG9tYXRvIHNhdWNlLCBLaWxsZS1GcmllZCBwb3RhdG9lcywgYW5kIHlvdXIgY2hvaWNlIG9mIGVpdGhlciBjYXJyb3RzIG9yIG5vdGhpbmcuXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgICAgIHByaWNlOiBcIi0gNWNwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJSdXZ5bidzIFJpZGljdWxvdXMgUmluZ3NcIixcbiAgICAgICAgZGVzY3JpcHRpb246XCJFdmVyIGRyb3BwZWQgYW4gb25pb24gYW5kIHRob3VnaHQsICdOb3cgd2hhdCBjYW4gSSBkbyB3aXRoIHRoaXM/JyBXb25kZXIgbm8gbW9yZSEgVHJ5IFJ1dnluJ3MgUmlkaWN1bG91cyBSaW5ncyBmb3IgYSB0YXN0ZSBvZiBlYXJ0aHkgZnJpZWQgZ29vZG5lc3MhXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgICAgIHByaWNlOiBcIi0gMWNwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJNZWF0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQmVpbmcgYW4gYWR2ZW50dXJlciBkb2Vzbid0IGhhdmUgdG8gdGFrZSB5b3UgZmFyIGZyb20gaG9tZSEgWW91IGNhbiBiZSBhZHZlbnR1cm91cyByaWdodCBub3cgYW5kIG9yZGVyIE1lYXQhIERvbid0IGFzayBxdWVzdGlvbnMuIE9rYXksIHllcyBpdCdzIGFuaW1hbCBtZWF0LiBObyBtb3JlIHF1ZXN0aW9ucy5cIixcbiAgICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiLSAyY3BcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJlYXJiZXJyeSBQYW5jYWtlc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcIkRyaW5raW5nIHdpdGggdGhlIGtpZHMgYW5kIGRvbid0IHdhbnQgdGhlIE1pc3N1cyBmaW5kaW5nIG91dD8gT3JkZXIgdGhlbSBzb21lIEJlYXJiZXJyeSBQYW5jYWtlcyBhbmQgc29iZXIgdGhlbSByaWdodCB1cCEgV2hpcHBlZCBjcmVhbSwgYnV0dGVyLCBhbmQgc3lydXAgZXh0cmEuXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgICAgIHByaWNlOiBcIi0gMWNwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJCYXJyb3dtYXggU3Rld1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcIk15IGJyb3RoZXIgbWlnaHQgYmUgZGVhZCwgYnV0IGhpcyBjb29raW5nIGlzIGFsaXZlIGFuZCB3ZWxsIChva2F5LCBJIGZvdW5kIGhpcyByZWNpcGUpISBFbmpveSB0aGUgY2hvbmt5LCBoZWFydC13YXJtaW5nLCBiZWxseS1maWxsaW5nIGRlbGlnaHQgdGhhdCBpcyBCYXJyb3dtYXggU3RldyFcIixcbiAgICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiLSA0Y3BcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkxlbW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiWWVhaCwgbm90IHRoZSBiZXN0IGNpdHJ1cyBidXQgaXQncyBpbXBvc3NpYmxlIHRvIGdldCBhbnl0aGluZyBlbHNlIHRyb3BpY2FsIGluIEN5ZmVoaWwuIFlvdSB3YW50IGl0IG9yIG5vdD8gKGRlcGVuZHMgb24gc2Vhc29uYWwgYXZhaWxhYmlsaXR5KVwiLFxuICAgICAgICBwaWN0dXJlOiBcIlwiLFxuICAgICAgICBwcmljZTogXCItIDEwZ3BcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlZlZ2V0YWJsZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XCJTZWUgdGl0bGVcIixcbiAgICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiLSAxY3BcIlxuICAgIH1cbl1cblxubGV0IGRyaW5rc01lbnUgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlRpbWJlciBQYWxlIEFsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHJhYmJpdHkgYWxlIGlzIGFsc28gYSBiaXQgc2t1bmt5OyBhcyBhIHJ1bGUsIGFib3V0IGFzIHN0cm9uZyBhcyBhIEJlYXZlciBkYW0uIFByaWNlcyBieSB0YW5rYXJkLCBmbGFnb24sIGFuZCBiYXJyZWwuXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgICAgIHByaWNlOiBcIi0gMmNwLzFzcC8zZ3BcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJCZXJyeSBNZWFkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQSBzd2VldCBkcmluayBjb25jb2N0ZWQgZnJvbSBteSBicmFpbnMgYW5kIE5pcmVsJ3MgYmVycmllcyFcIixcbiAgICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiLSA1Y3BcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNoYWl0IFdpbmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XCJEcnVpZHMgaGF2ZSBhbGwgYnV0IHdpcGVkIG91dCB0aGUgc2hhaXR1Z2FycnUgYmVycnksIGNhbGxpbmcgaXQgYW4gaW52YXNpdmUgc3BlY2llcy4gRWl0aGVyIHdheSwgd2UndmUgZ290IGEgZmV3IGJvdHRsZSdzIGxlZnQuXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgICAgIHByaWNlOiBcIi0gMnNwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJXaW5lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiTGlrZSB0aGUgb3RoZXIgd2luZSwgZXhjZXB0IHdpdGhvdXQgdGhlIHNoYWl0LlwiLFxuICAgICAgICBwaWN0dXJlOiBcIlwiLFxuICAgICAgICBwcmljZTogXCItIDZjcFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiR2VuZXJpYyBBbGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XCJUaGUgaGVyYnMgdXNlZCB0byBzZWFzb24gdGhpcyBhbGUgYXJlIGdlbmVyYWxseSBsaWdodCBvbiBidXNjaGVzLiBcIixcbiAgICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiLSAxY3BcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJqb3JuJ3MgU3BlY2lhbFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcIlRoaXMgZGFzdGFyZGx5IHdoaXNrZXkgY29tZXMgZnJvbSB0aGUgZmluYWwgYmFycmVsIG9mIG15IGxhdGUgYnJvdGhlcidzIGxhc3QgZGlzdGlsbGF0aW9uLiBJdCdsbCBiZSB0aGUgbGFzdCBldmVyIHNlcnZlZC5cIixcbiAgICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiLSA0c3BcIlxuICAgIH1cbl1cblxubGV0IHJvb21NZW51ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJTaW5nbGUgQmVkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgc2luZ2xlIGJlZCBpbiBhIHJvb20gbGlrZWx5IHNoYXJlZCB3aXRoIG90aGVycy4gQmxhbmtldHMgYW5kIHBpbGxvd3MgcHJvdmlkZWQuXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgICAgIHByaWNlOiBcIi0gMmNwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJTaW5nbGUgUm9vbVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGb3IgdGhlIHNoeSBvciByZWFzb25hYmx5IHdhcnkgb2Ygc2xlZXBpbmcgd2l0aCBzdHJhbmdlcnMsIHRoZSBzaW5nbGUgcm9vbSBvZmZlcnMgYSBiZWQgaW4gYSByb29tIHdpdGhvdXQgb3RoZXJzLiBDb21lcyB3aXRoIGJsYW5rZXQsIHBpbGxvdywgYW5kIGRvb3IuXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgICAgIHByaWNlOiBcIi0gNWNwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJTdWl0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGb3IgdGhlIHJpdHp5IGFuZCBnbGFtb3Vyb3VzLCB0aGlzIGlzIHlvdXIgdGlja2V0IHRvIGNvbWZvcnQgaW4gQ3lmZWhpbC4gSGFzIHR3byBiZWRzKCEpLCBibGFua2V0cywgcGlsbG93cywgYSBkb29yLCBhIHdhc2ggdHViLCBhbmQgdHdvIChvciBtb3JlKSBtaXJyb3JzLlwiLFxuICAgICAgICBwaWN0dXJlOiBcIlwiLFxuICAgICAgICBwcmljZTogXCItIDFzcFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiT25lLU1lYWwtQS1EYXkgQWRkb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGlnaHQgb24gYSBidWRnZXQgYnV0IGFnYWluc3Qgc3RhcnZhdGlvbiBpbiBnZW5lcmFsPyBUaGlzIGlzIHRoZSBhZGQtb24gZm9yIHlvdSEgSW5jbHVkZXMgdXAgdG8gNWNwIG9mIG1lbnUgaXRlbXMgKG11c3QgYmUgcHVyY2hhc2VkIHdpdGggYSByb29tKS5cIixcbiAgICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiLSAzY3BcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlR3by1NZWFscy1BLURheSBBZGRvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMaWtlIHRvIGVhdCBhbmQgZHJpbmsgd2l0aG91dCBicmVha2luZyB0aGUgYmFuaz8gQ2hlY2sgb3V0IHRoaXMgZGVhbCEgSW5jbHVkZXMgdXAgdG8gMXNwIG9mIG1lbnUgaXRlbXMgKG11c3QgYmUgcHVyY2hhc2VkIHdpdGggYSByb29tKS5cIixcbiAgICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiLSA1Y3BcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIktpbmdseSBCdWZmZXQgQWRkb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSWYgeW91J3JlIGEgZ2x1dHRvbiBidXQgZG9uJ3Qgd2FudCBvdGhlcnMgdG8ga25vdywgdGhpcyBpcyB0aGUgYWRkb24gZm9yIHlvdSEgSW5jbHVkZXMgdXAgdG8gNXNwIG9mIG1lbnUgaXRlbXMgKG11c3QgYmUgcHVyY2hhc2VkIHdpdGggdGhlIFN1aXRlKVwiLFxuICAgICAgICBwaWN0dXJlOiBcIlwiLFxuICAgICAgICBwcmljZTogXCItIDNzcFwiXG4gICAgfVxuXSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVEaXNwbGF5KGkpIHtcblxuICAgIGxldCBkaXNwbGF5QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXRlbURpc3BsYXlcIik7XG4gICAgZGlzcGxheUFyZWEuaW5uZXJIVE1MID0gXCJcIjtcblxuXG4gICAgaS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvc3QuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgICAgICAgY29zdC50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG5cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaXRlbVRpdGxlXCIpOyBcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG5cbiAgICAgICAgbGV0IG5hbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lUHJpY2UuY2xhc3NMaXN0LmFkZCgnbmFtZVByaWNlJyk7XG4gICAgICAgIG5hbWVQcmljZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIG5hbWVQcmljZS5hcHBlbmRDaGlsZChjb3N0KTsgICAgICAgIFxuXG4gICAgICAgIGxldCBwaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgcGljdHVyZS5jbGFzc0xpc3QuYWRkKCdpdGVtUGljdHVyZScpXG4gICAgICAgIHBpY3R1cmUuc3JjID0gJyc7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW1EZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnaXRlbUJveCcpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQobmFtZVByaWNlKTtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBkaXNwbGF5QXJlYS5hcHBlbmRDaGlsZChib3gpXG5cbiAgICB9KVxufVxuIiwiaW1wb3J0IHJlbmRlckhvbWVwYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2Vsb2FkKCkge1xuICAgIFxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIC8vY3JlYXRlIG1lbnVcbiAgICBsZXQgbWVudVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51VUkuY2xhc3NMaXN0LmFkZChcIm5hdk1lbnVcIilcblxuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGhvbWUuaWQgPSBcImhvbWVCdG5cIjtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXZCdG5cIik7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVuZGVySG9tZXBhZ2UpXG4gICAgbWVudVVJLmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudS5pZCA9IFwibWVudUJ0blwiO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdkJ0blwiKVxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbmRlck1lbnUpXG4gICAgbWVudVVJLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdEJ0blwiO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm5hdkJ0blwiKTtcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQ29udGFjdClcbiAgICBtZW51VUkuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVVJKVxuXG5cbiAgICAvL2NyZWF0ZSBjb250YWluZXIgZm9yIHBhZ2VzXG4gICAgbGV0IGFjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWN0aXZlQ29udGFpbmVyLmlkID0gXCJhY3RpdmVDb250YWluZXJcIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3RpdmVDb250YWluZXIpXG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==