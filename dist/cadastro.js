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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dom/listenersCadastro.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom/listenersCadastro.js":
/*!**************************************!*\
  !*** ./src/dom/listenersCadastro.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _manipuladorInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipuladorInput */ \"./src/dom/manipuladorInput.js\");\n\r\n\r\nfunction addIngrediente() {\r\n    let counter = 1;\r\n    \r\n    document.getElementById(\"btnadd\").addEventListener(\"click\", function () {\r\n\r\n        let text = Object(_manipuladorInput__WEBPACK_IMPORTED_MODULE_0__[\"createHtmlIngredienteInput\"])(counter);\r\n        let ingrediente = document.getElementById(\"ingrediente\");\r\n\r\n        Object(_manipuladorInput__WEBPACK_IMPORTED_MODULE_0__[\"pendurarInput\"])(ingrediente, text);\r\n\r\n        counter++;\r\n    });\r\n};\r\n\r\nfunction pressCadastrar() {\r\n    document.getElementById(\"btncadastrar\").addEventListener(\"click\", function () {\r\n        let receita = Object(_manipuladorInput__WEBPACK_IMPORTED_MODULE_0__[\"getConteudoInput\"])(\"camposCadastro\");\r\n        cadastrarReceita(receita);\r\n        document.getElementById(\"result\").innerHTML += \"Receita cadastrada com sucesso!\";\r\n    });\r\n}\r\n\r\naddIngrediente();\r\npressCadastrar();\n\n//# sourceURL=webpack:///./src/dom/listenersCadastro.js?");

/***/ }),

/***/ "./src/dom/manipuladorInput.js":
/*!*************************************!*\
  !*** ./src/dom/manipuladorInput.js ***!
  \*************************************/
/*! exports provided: getConteudoInput, createHtmlIngredienteInput, pendurarInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getConteudoInput\", function() { return getConteudoInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHtmlIngredienteInput\", function() { return createHtmlIngredienteInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pendurarInput\", function() { return pendurarInput; });\nfunction getConteudoInput(elemento) {\r\n    let filhos = pegarFilhos(elemento);\r\n    let arrayDeFilhos = passarFilhosParaArray(filhos);\r\n    let input = [];\r\n    arrayDeFilhos.forEach(filho => {\r\n        if (filho.value.length > 1) {\r\n            input.push(filho.value);\r\n        }\r\n    });\r\n    return input;\r\n}\r\n\r\nfunction passarFilhosParaArray(elemento) {\r\n    return Array.from(elemento);\r\n}\r\n\r\nfunction pegarFilhos(elemento) {\r\n    return document.getElementById(elemento).childNodes;\r\n}\r\n\r\nfunction createHtmlIngredienteInput(counter) {\r\n    let text = document.createElement(\"li\");\r\n    text.innerHTML = \"<input type='text' id='campoIngrediente\" + counter + \"'></li>\";\r\n    return text;\r\n}\r\n\r\nfunction pendurarInput(elemento, text) {\r\n    elemento.appendChild(text);\r\n    console.log(elemento);\r\n}\n\n//# sourceURL=webpack:///./src/dom/manipuladorInput.js?");

/***/ })

/******/ });