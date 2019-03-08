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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/front.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/criarReceita.js":
/*!*****************************!*\
  !*** ./src/criarReceita.js ***!
  \*****************************/
/*! exports provided: criarReceita */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"criarReceita\", function() { return criarReceita; });\nlet criarReceita = function(nome, autor, ingredientes, modoDePreparo){\r\n    return {\r\n        nome: nome,\r\n        autor: autor,\r\n        ingredientes: ingredientes,\r\n        modoDePreparo: modoDePreparo\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/criarReceita.js?");

/***/ }),

/***/ "./src/front.js":
/*!**********************!*\
  !*** ./src/front.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pesquisarReceitas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pesquisarReceitas */ \"./src/pesquisarReceitas.js\");\n\r\n\r\nlet toStr = function (ingrediente) {\r\n    let str = \"\";\r\n    Object(_pesquisarReceitas__WEBPACK_IMPORTED_MODULE_0__[\"pesquisaPorIngrediente\"])(ingrediente).forEach(receita => {\r\n        str += \"Nome: \" + receita.nome + \"<br>\" +\r\n               \"Autor: \" + receita.autor + \"<br>\" +\r\n               \"Ingredientes: \" + receita.ingredientes + \"<br>\" +\r\n               \"Modo de Preparo: \" + receita.modoDePreparo + \"<br><br>\"\r\n    })\r\n    return str;\r\n}\r\n\r\ndocument.getElementById(\"btnok\").addEventListener(\"click\", function () {\r\n    document.getElementById(\"result\").innerHTML = toStr(document.getElementById(\"caixaIngrediente\").value);\r\n})\n\n//# sourceURL=webpack:///./src/front.js?");

/***/ }),

/***/ "./src/pesquisarReceitas.js":
/*!**********************************!*\
  !*** ./src/pesquisarReceitas.js ***!
  \**********************************/
/*! exports provided: pesquisaPorIngrediente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pesquisaPorIngrediente\", function() { return pesquisaPorIngrediente; });\n/* harmony import */ var _receitasProntas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receitasProntas */ \"./src/receitasProntas.js\");\n\r\n\r\nlet receitas = [];\r\n\r\nlet pesquisaPorIngrediente = function (ingredienteInput) {\r\n    receitas = _receitasProntas__WEBPACK_IMPORTED_MODULE_0__[\"receitasProntas\"].filter(receita => {\r\n        return receita.ingredientes.some(ingrediente => {\r\n            return ingrediente === ingredienteInput;\r\n        });\r\n    });\r\n    return receitas;\r\n}\n\n//# sourceURL=webpack:///./src/pesquisarReceitas.js?");

/***/ }),

/***/ "./src/receitasProntas.js":
/*!********************************!*\
  !*** ./src/receitasProntas.js ***!
  \********************************/
/*! exports provided: receitasProntas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receitasProntas\", function() { return receitasProntas; });\n/* harmony import */ var _criarReceita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criarReceita */ \"./src/criarReceita.js\");\n\r\n\r\nlet receitasProntas = [Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Bolo de Fubá\", \"Maria\", [\"4 xícaras de Farinha\", \"1 saco de Fubá\", \"2 ovos\"], \"Blablabla\"),\r\n                       Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Bolo de Milho\", \"João\", [\"1 Lata de Milho\", \"2 colheres de Açúcar\", \"4 xícaras de Farinha\"], \"Blablabla\"),\r\n                       Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Salada Oriental de Arroz com Frango\", \"Jorge\", [\"Meia Xícara de Arroz\", \"1 Limão\", \"1 Peito de Frango\"], \"Blablabla\"),\r\n                       Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Sanduíche de Frango com Maçã\", \"Bianca\", [\"2 Maçãs Fuji\", \"1 Peito de frango\", \"2 Fatias de Pão\"], \"Blablabla\"),\r\n                       Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Caipirinha da Jessikill\", \"Jessikill\", [\"1 Limão\", \"1L de Vodka\"], \"Blabla\")]\n\n//# sourceURL=webpack:///./src/receitasProntas.js?");

/***/ })

/******/ });