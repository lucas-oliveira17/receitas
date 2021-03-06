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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dom/listenersPesquisa.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom/listenersPesquisa.js":
/*!**************************************!*\
  !*** ./src/dom/listenersPesquisa.js ***!
  \**************************************/
/*! exports provided: addIngredientePesquisa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addIngredientePesquisa\", function() { return addIngredientePesquisa; });\n/* harmony import */ var _manipuladorInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipuladorInput */ \"./src/dom/manipuladorInput.js\");\n/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toString */ \"./src/toString.js\");\n\r\n\r\n\r\nfunction pressOk() {\r\n    document.getElementById(\"btnok\").addEventListener(\"click\", function () {\r\n        let inputIngrediente = Object(_manipuladorInput__WEBPACK_IMPORTED_MODULE_0__[\"retirarValoresInput\"])(\"ingrediente\");\r\n        document.getElementById(\"resultPesquisa\").innerHTML += Object(_toString__WEBPACK_IMPORTED_MODULE_1__[\"printReceitas\"])(inputIngrediente);\r\n    });\r\n}\r\n\r\nfunction addIngredientePesquisa(elemento) {\r\n    let counter = 1;\r\n    document.getElementById(\"btnaddpesquisa\").addEventListener(\"click\", function () {\r\n\r\n        let text = Object(_manipuladorInput__WEBPACK_IMPORTED_MODULE_0__[\"createHtmlIngredienteInputPesquisa\"])(counter);\r\n        let filho = document.getElementById(elemento);\r\n\r\n        Object(_manipuladorInput__WEBPACK_IMPORTED_MODULE_0__[\"pendurarInput\"])(filho, text);\r\n\r\n        counter++;\r\n    });\r\n};\r\n\r\naddIngredientePesquisa(\"ingrediente\");\r\npressOk();\n\n//# sourceURL=webpack:///./src/dom/listenersPesquisa.js?");

/***/ }),

/***/ "./src/dom/manipuladorInput.js":
/*!*************************************!*\
  !*** ./src/dom/manipuladorInput.js ***!
  \*************************************/
/*! exports provided: retirarValoresInput, retirarValoresInputCadastroReceita, createHtmlIngredienteInputCadastro, createHtmlIngredienteInputPesquisa, pendurarInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"retirarValoresInput\", function() { return retirarValoresInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"retirarValoresInputCadastroReceita\", function() { return retirarValoresInputCadastroReceita; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHtmlIngredienteInputCadastro\", function() { return createHtmlIngredienteInputCadastro; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHtmlIngredienteInputPesquisa\", function() { return createHtmlIngredienteInputPesquisa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pendurarInput\", function() { return pendurarInput; });\nfunction retirarValoresInput(elemento) {\r\n    let nos = pegarNos(elemento);\r\n    let arrayDeNos = passarNosParaArray(nos);\r\n    let input = [];\r\n    arrayDeNos.forEach(no => {\r\n        input.push(no.value);\r\n    });\r\n    return input;\r\n}\r\n\r\nfunction passarNosParaArray(elemento) {\r\n    return Array.from(elemento);\r\n}\r\n\r\nfunction pegarNos(elemento) {\r\n    return document.getElementById(elemento).childNodes;\r\n}\r\n\r\nfunction retirarValoresInputCadastroReceita() {\r\n\r\n    let receita = [document.querySelector('input[name=\"nome\"]').value, document.querySelector('input[name=\"autor\"]').value,\r\n        document.querySelector('input[name=\"modopreparo\"]').value\r\n    ];\r\n\r\n    const ingredienteLiFilhos = document.querySelector('ul[id=\"camposIngredienteCadastro\"').children;\r\n    let ingredientes = [];\r\n\r\n    for (let campo = 0; campo < ingredienteLiFilhos.length; campo++) {\r\n        ingredientes.push(ingredienteLiFilhos[campo].childNodes[0].value);\r\n    }\r\n    receita.push(ingredientes);\r\n    return receita;\r\n}\r\n\r\nfunction createHtmlIngredienteInputCadastro(counter) {\r\n    let text = document.createElement(\"li\");\r\n    text.setAttribute(\"name\", \"ingrediente\")\r\n    text.innerHTML = \"<input type='text' placeholder=' Ingrediente' id='campoIngredienteCadastro\" + counter + \"'></li>\";\r\n    return text;\r\n}\r\n\r\nfunction createHtmlIngredienteInputPesquisa(counter) {\r\n    let text = document.createElement(\"li\");\r\n    text.setAttribute(\"name\", \"ingrediente\")\r\n    text.innerHTML = \"<input type='text' placeholder=' Ingrediente' id='campoIngredientePesquisa\" + counter + \"'></li>\";\r\n    text.setAttribute(\"style\", \"margin:7px\")\r\n    return text;\r\n}\r\n\r\nfunction pendurarInput(elemento, text) {\r\n    elemento.appendChild(text);\r\n}\n\n//# sourceURL=webpack:///./src/dom/manipuladorInput.js?");

/***/ }),

/***/ "./src/pesquisarReceitas.js":
/*!**********************************!*\
  !*** ./src/pesquisarReceitas.js ***!
  \**********************************/
/*! exports provided: pesquisaPorIngrediente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pesquisaPorIngrediente\", function() { return pesquisaPorIngrediente; });\nlet receitas = [];\r\n\r\nlet pesquisaPorIngrediente = function (ingredienteInput) {\r\n    console.log(receitasPadrao);\r\n    receitas = receitasPadrao.filter(receita => {\r\n        return ingredienteInput.every(ingr => receita.ingredientes.includes(ingr));\r\n    });\r\n    return receitas;\r\n}\n\n//# sourceURL=webpack:///./src/pesquisarReceitas.js?");

/***/ }),

/***/ "./src/toString.js":
/*!*************************!*\
  !*** ./src/toString.js ***!
  \*************************/
/*! exports provided: printReceitas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printReceitas\", function() { return printReceitas; });\n/* harmony import */ var _pesquisarReceitas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pesquisarReceitas */ \"./src/pesquisarReceitas.js\");\n\r\n\r\nlet printReceitas = function (ingrediente) {\r\n    let receitaOutput = \"\";\r\n    let ingredientesReceita = \"\";\r\n    \r\n    const listaDeReceitas = Object(_pesquisarReceitas__WEBPACK_IMPORTED_MODULE_0__[\"pesquisaPorIngrediente\"])(ingrediente);\r\n\r\n    listaDeReceitas.forEach(receita => {\r\n        ingredientesReceita = \"\";\r\n        receita.ingredientes.forEach(ingrediente => {\r\n            ingredientesReceita += `<li> ${ingrediente} </li>` });\r\n        receitaOutput += `<ul class=\"ulreceita\">\r\n                <li>Nome: ${receita.nome} </li>\r\n                <li>Autor: ${receita.autor} </li>\r\n                <li>Ingredientes:<ul class=\"ulingredientes\"> ${ingredientesReceita}</ul></li>\r\n                <li>Modo de Preparo: ${receita.modoDePreparo} </li>\r\n                </ul>`\r\n            })\r\n\r\n            return receitaOutput;\r\n        }\r\n\n\n//# sourceURL=webpack:///./src/toString.js?");

/***/ })

/******/ });