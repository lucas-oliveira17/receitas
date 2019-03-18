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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/listeners.js");
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
/*! exports provided: printaReceita, getIngredientesInput, createHtmlInput, pendurarInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printaReceita\", function() { return printaReceita; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIngredientesInput\", function() { return getIngredientesInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHtmlInput\", function() { return createHtmlInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pendurarInput\", function() { return pendurarInput; });\n/* harmony import */ var _pesquisarReceitas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pesquisarReceitas */ \"./src/pesquisarReceitas.js\");\n\r\n\r\nlet printaReceita = function (ingrediente) {\r\n    let receitaOutput = \"\";\r\n    let ingredientesReceita = \"\";\r\n    Object(_pesquisarReceitas__WEBPACK_IMPORTED_MODULE_0__[\"pesquisaPorIngrediente\"])(ingrediente).forEach(receita => {\r\n        ingredientesReceita = \"\";\r\n        receita.ingredientes.forEach(ingrediente => {\r\n            ingredientesReceita += `<li> ${ingrediente} </li>` });\r\n        receitaOutput += `<ul>\r\n                <li>Nome: ${receita.nome} </li>\r\n                <li>Autor: ${receita.autor} </li>\r\n                <li>Ingredientes:<ul> ${ingredientesReceita}</ul></li>\r\n                <li>Modo de Preparo: ${receita.modoDePreparo} </li>\r\n                </ul>`\r\n            })\r\n\r\n            return receitaOutput;\r\n        }\r\n\r\nfunction getIngredientesInput() {\r\n    let ingrediente = pegarFilhos(\"ingrediente\");\r\n    let arrayDeFilhos = passarFilhosParaArray(ingrediente);\r\n    let inputIngrediente = [];\r\n    arrayDeFilhos.forEach(filhoIngrediente => {\r\n        if (filhoIngrediente.value.length > 1) {\r\n            inputIngrediente.push(filhoIngrediente.value);\r\n        }\r\n    });\r\n    return inputIngrediente;\r\n}\r\n\r\nfunction passarFilhosParaArray(elemento) {\r\n    return Array.from(elemento);\r\n}\r\n\r\nfunction pegarFilhos(elemento) {\r\n    return document.getElementById(elemento).childNodes;\r\n}\r\n\r\n\r\nfunction createHtmlInput(counter) {\r\n    let ingrediente = document.getElementById(\"ingrediente\");\r\n    let text = document.createElement(\"input\");\r\n    text.innerHTML = \"<input type='text' id='campoIngrediente\" + counter + \"'>\";\r\n    text.setAttribute(\"style\", \"margin:0.5% 30%\");\r\n    return { ingrediente, text };\r\n}\r\n\r\nfunction pendurarInput(ingrediente, text) {\r\n    ingrediente.appendChild(text);\r\n    console.log(ingrediente);\r\n    document.getElementById(\"new\").appendChild(ingrediente);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/front.js?");

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _front__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front */ \"./src/front.js\");\n\r\n\r\nfunction pressOk() {\r\n    document.getElementById(\"btnok\").addEventListener(\"click\", function () {\r\n        let inputIngrediente = Object(_front__WEBPACK_IMPORTED_MODULE_0__[\"getIngredientesInput\"])();\r\n        document.getElementById(\"result\").innerHTML += Object(_front__WEBPACK_IMPORTED_MODULE_0__[\"printaReceita\"])(inputIngrediente);\r\n    });\r\n}\r\n\r\nfunction addInput() {\r\n    let counter = 1;\r\n    \r\n    document.getElementById(\"btnadd\").addEventListener(\"click\", function () {\r\n\r\n        let { ingrediente, text } = Object(_front__WEBPACK_IMPORTED_MODULE_0__[\"createHtmlInput\"])(counter);\r\n\r\n        Object(_front__WEBPACK_IMPORTED_MODULE_0__[\"pendurarInput\"])(ingrediente, text);\r\n\r\n        counter++;\r\n    });\r\n};\r\n\r\naddInput();\r\npressOk();\n\n//# sourceURL=webpack:///./src/listeners.js?");

/***/ }),

/***/ "./src/pesquisarReceitas.js":
/*!**********************************!*\
  !*** ./src/pesquisarReceitas.js ***!
  \**********************************/
/*! exports provided: pesquisaPorIngrediente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pesquisaPorIngrediente\", function() { return pesquisaPorIngrediente; });\n/* harmony import */ var _receitasProntas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receitasProntas */ \"./src/receitasProntas.js\");\n\r\n\r\nlet receitas = [];\r\n\r\nlet pesquisaPorIngrediente = function (ingredienteInput) {\r\n    receitas = _receitasProntas__WEBPACK_IMPORTED_MODULE_0__[\"receitasProntas\"].filter(receita => {\r\n        return ingredienteInput.every(ingr => receita.ingredientes.includes(ingr));\r\n    });\r\n    return receitas;\r\n}\n\n//# sourceURL=webpack:///./src/pesquisarReceitas.js?");

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