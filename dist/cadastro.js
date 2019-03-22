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

/***/ "./src/cadastrarReceita.js":
/*!*********************************!*\
  !*** ./src/cadastrarReceita.js ***!
  \*********************************/
/*! exports provided: cadastrarReceita */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cadastrarReceita\", function() { return cadastrarReceita; });\n/* harmony import */ var _criarReceita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criarReceita */ \"./src/criarReceita.js\");\n/* harmony import */ var _receitasProntas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receitasProntas */ \"./src/receitasProntas.js\");\n\r\n\r\n\r\nlet cadastrarReceita = function(conteudoCadastro){\r\n    _receitasProntas__WEBPACK_IMPORTED_MODULE_1__[\"receitasProntas\"].push(Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(conteudoCadastro[0], conteudoCadastro[1], conteudoCadastro[3], conteudoCadastro[2]));\r\n    console.log(_receitasProntas__WEBPACK_IMPORTED_MODULE_1__[\"receitasProntas\"]);\r\n}\n\n//# sourceURL=webpack:///./src/cadastrarReceita.js?");

/***/ }),

/***/ "./src/criarReceita.js":
/*!*****************************!*\
  !*** ./src/criarReceita.js ***!
  \*****************************/
/*! exports provided: criarReceita */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"criarReceita\", function() { return criarReceita; });\nlet criarReceita = function(nome, autor, ingredientes, modoDePreparo){\r\n    return {\r\n        nome: nome,\r\n        autor: autor,\r\n        ingredientes: ingredientes,\r\n        modoDePreparo: modoDePreparo\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/criarReceita.js?");

/***/ }),

/***/ "./src/dom/listeners.js":
/*!******************************!*\
  !*** ./src/dom/listeners.js ***!
  \******************************/
/*! exports provided: addIngrediente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addIngrediente\", function() { return addIngrediente; });\n/* harmony import */ var _manipuladorInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipuladorInput */ \"./src/dom/manipuladorInput.js\");\n\r\n\r\nfunction addIngrediente(elemento) {\r\n    let counter = 1;\r\n    \r\n    document.getElementById(\"btnadd\").addEventListener(\"click\", function () {\r\n\r\n        let text = Object(_manipuladorInput__WEBPACK_IMPORTED_MODULE_0__[\"createHtmlIngredienteInput\"])(counter);\r\n        let ingrediente = document.getElementById(elemento);\r\n\r\n        Object(_manipuladorInput__WEBPACK_IMPORTED_MODULE_0__[\"pendurarInput\"])(ingrediente, text);\r\n\r\n        counter++;\r\n    });\r\n};\n\n//# sourceURL=webpack:///./src/dom/listeners.js?");

/***/ }),

/***/ "./src/dom/listenersCadastro.js":
/*!**************************************!*\
  !*** ./src/dom/listenersCadastro.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _manipuladorInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipuladorInput */ \"./src/dom/manipuladorInput.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ \"./src/dom/listeners.js\");\n/* harmony import */ var _cadastrarReceita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cadastrarReceita */ \"./src/cadastrarReceita.js\");\n\r\n\r\n\r\n\r\nfunction pressCadastrar() {\r\n    document.getElementById(\"btncadastrar\").addEventListener(\"click\", function () {\r\n        let conteudoCadastro = Object(_manipuladorInput__WEBPACK_IMPORTED_MODULE_0__[\"getConteudoCadastroReceita\"])(\"camposCadastro\");\r\n        Object(_cadastrarReceita__WEBPACK_IMPORTED_MODULE_2__[\"cadastrarReceita\"])(conteudoCadastro);\r\n        document.getElementById(\"result\").innerHTML += \"Receita cadastrada com sucesso!\";\r\n    });\r\n}\r\n\r\nObject(_listeners__WEBPACK_IMPORTED_MODULE_1__[\"addIngrediente\"])(\"listIngredienteul\");\r\npressCadastrar();\n\n//# sourceURL=webpack:///./src/dom/listenersCadastro.js?");

/***/ }),

/***/ "./src/dom/manipuladorInput.js":
/*!*************************************!*\
  !*** ./src/dom/manipuladorInput.js ***!
  \*************************************/
/*! exports provided: getConteudoPesquisaIngredientes, getConteudoCadastroReceita, createHtmlIngredienteInput, pendurarInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getConteudoPesquisaIngredientes\", function() { return getConteudoPesquisaIngredientes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getConteudoCadastroReceita\", function() { return getConteudoCadastroReceita; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHtmlIngredienteInput\", function() { return createHtmlIngredienteInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pendurarInput\", function() { return pendurarInput; });\nfunction getConteudoPesquisaIngredientes(elemento) {\r\n    let filhos = pegarFilhos(elemento);\r\n    let arrayDeFilhos = passarFilhosParaArray(filhos);\r\n    let input = [];\r\n    arrayDeFilhos.forEach(filho => {\r\n        if (filho.value.length > 1) {\r\n            input.push(filho.value);\r\n        }\r\n    });\r\n    return input;\r\n}\r\n\r\nfunction passarFilhosParaArray(elemento) {\r\n    return Array.from(elemento);\r\n}\r\n\r\nfunction pegarFilhos(elemento) {\r\n    console.log(document.getElementById(elemento));\r\n    return document.getElementById(elemento).childNodes;\r\n}\r\n\r\nfunction getConteudoCadastroReceita() {\r\n\r\n    let receita = [];\r\n    let ingredientes = [];\r\n\r\n    receita = [document.querySelector('input[name=\"nome\"]').value, document.querySelector('input[name=\"autor\"]').value,\r\n        document.querySelector('input[name=\"modopreparo\"]').value\r\n    ];\r\n\r\n    const camposIngredienteAdicionados = document.querySelector('ul[id=\"listIngredienteul\"').children[1].children;\r\n\r\n    ingredientes.push(document.querySelector('ul[id=\"listIngredienteul\"').children[0].children[0].value);\r\n\r\n    if (camposIngredienteAdicionados.length > 0) {\r\n        let campo;\r\n        for (campo in camposIngredienteAdicionados) {\r\n            const conteudoCampoAtual = camposIngredienteAdicionados[campo].value;\r\n            if (conteudoCampoAtual !== undefined) {\r\n                ingredientes.push(conteudoCampoAtual);\r\n            }\r\n        }\r\n    }\r\n\r\n    receita.push(ingredientes);\r\n    console.log(receita);\r\n    return receita;\r\n}\r\n\r\nfunction createHtmlIngredienteInput(counter) {\r\n    let text = document.createElement(\"li\");\r\n    text.setAttribute(\"name\", \"ingrediente\")\r\n    text.innerHTML = \"<input type='text' id='campoIngrediente\" + counter + \"'></li>\";\r\n    return text;\r\n}\r\n\r\nfunction pendurarInput(elemento, text) {\r\n    elemento.appendChild(text);\r\n    console.log(elemento);\r\n}\n\n//# sourceURL=webpack:///./src/dom/manipuladorInput.js?");

/***/ }),

/***/ "./src/receitasProntas.js":
/*!********************************!*\
  !*** ./src/receitasProntas.js ***!
  \********************************/
/*! exports provided: receitasProntas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receitasProntas\", function() { return receitasProntas; });\n/* harmony import */ var _criarReceita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criarReceita */ \"./src/criarReceita.js\");\n\r\n\r\nlet receitasProntas = [Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Bolo de Fubá\", \"Maria\", [\"4 xícaras de Farinha\", \"1 saco de Fubá\", \"2 ovos\"], \"Blablabla\"),\r\n                       Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Bolo de Milho\", \"João\", [\"1 Lata de Milho\", \"2 colheres de Açúcar\", \"4 xícaras de Farinha\"], \"Blablabla\"),\r\n                       Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Salada Oriental de Arroz com Frango\", \"Jorge\", [\"1/2 Xícara de Arroz\", \"1 Limão\", \"1 Peito de Frango\"], \"Blablabla\"),\r\n                       Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Sanduíche de Frango com Maçã\", \"Bianca\", [\"2 Maçãs Fuji\", \"1 Peito de frango\", \"2 Fatias de Pão\"], \"Blablabla\"),\r\n                       Object(_criarReceita__WEBPACK_IMPORTED_MODULE_0__[\"criarReceita\"])(\"Caipirinha da Jessikill\", \"Jessikill\", [\"1 Limão\", \"1L de Vodka\"], \"Blabla\")]\n\n//# sourceURL=webpack:///./src/receitasProntas.js?");

/***/ })

/******/ });