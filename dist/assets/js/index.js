/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/components/product.js":
/*!*********************************************!*\
  !*** ./src/assets/js/components/product.js ***!
  \*********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return Product; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Product =\n/*#__PURE__*/\nfunction () {\n  function Product(url, title, text, element) {\n    _classCallCheck(this, Product);\n\n    this.product = this.createElement('div', 'product', \"<div class=\\\"product\\\">\".concat(url, \"</div>\\n                                                        <h3>\").concat(title, \"</h3>\\n                                                        <p>\").concat(text, \"</p>\"));\n    element.append(this.product);\n  }\n\n  _createClass(Product, [{\n    key: \"createElement\",\n    value: function createElement(tagName, className, text) {\n      var element = document.createElement(tagName);\n      if (tagName) element.classList.add(className);\n      if (text) element.innerHTML = text;\n      return element;\n    }\n  }]);\n\n  return Product;\n}();\n\n//# sourceURL=webpack:///./src/assets/js/components/product.js?");

/***/ }),

/***/ "./src/assets/js/components/request.js":
/*!*********************************************!*\
  !*** ./src/assets/js/components/request.js ***!
  \*********************************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\nvar request = function request(url) {\n  var xhr = new XMLHttpRequest();\n  return new Promise(function (resolve, reject) {\n    xhr.open('GET', url);\n    xhr.addEventListener('readystatechange', function () {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        resolve(JSON.parse(xhr.response));\n      } else if (xhr.status !== 200) {\n        reject(\"Error: \".concat(xhr.status));\n      }\n    });\n    xhr.send();\n  });\n};\n\n//# sourceURL=webpack:///./src/assets/js/components/request.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/request */ \"./src/assets/js/components/request.js\");\n/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product */ \"./src/assets/js/components/product.js\");\n\n\nvar requestURL = 'http://localhost:4000/assets/database/bd.json';\nvar input = document.querySelector('.section-search__input');\nvar productsInner = document.querySelector('.section-products--inner'); // const computers = [/к/gim, /ко/gim, /ком/gim, /комп/gim, /компь/gim, /компьют/gim, , /компьюте/gim, , /компьютер/gim, , /компьютеры/gim, , /компьютера/gim];\n\nvar computers = [];\nvar text = 'компьютер';\n\nfor (var i = 0; i < text.length; i++) {\n  var t = '';\n\n  for (var x = 0; x < i + 1; x++) {\n    t += text[x];\n  }\n\n  computers.push(new RegExp(t, 'gim'));\n} // console.log(computers[0].test('к'))\n// request(requestURL)\n//   .then(products => new Promise(resolve => resolve(products))\n\n\ninput.addEventListener('input', function () {\n  computers.forEach(function (item) {\n    if (item.test(input.value)) {\n      Object(_components_request__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(requestURL).then(function (products) {\n        return products.forEach(function (product) {\n          new _components_product__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](product.id, product.type, 'компьютер', productsInner);\n        });\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/assets/js/index.js?");

/***/ })

/******/ });