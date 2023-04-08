/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/main/src/index.js":
/*!*********************************!*\
  !*** ./pages/main/src/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/cards */ \"./pages/main/src/scripts/cards.js\");\n\r\n\r\nconst body = document.querySelector('.body');\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst burger = document.querySelector('.hamburger');\r\nconst navigation = document.querySelector('.nav');\r\nconst naviLinks = document.querySelectorAll('.nav-item__link');\r\n\r\n// const petsList = '../../../assets/json/pets.json';\r\n// console.log(petsList);\r\nlet isOpened = false;\r\n\r\nfunction toggleBurgerMenu() {\r\n  burger.classList.toggle('hamburger_opened');\r\n  navigation.classList.toggle('nav_opened');\r\n  body.classList.toggle(\"body_overlay\");\r\n  wrapper.classList.toggle(\"wrapper_overlay\");\r\n  if (isOpened) {\r\n    isOpened = false;\r\n  } else {\r\n    isOpened = true;\r\n  }\r\n}\r\n\r\nnaviLinks.forEach(links => {\r\n  links.onclick = function () {\r\n    if (isOpened) {\r\n      toggleBurgerMenu();\r\n    }\r\n  }\r\n});\r\n\r\n\r\nburger.onclick = toggleBurgerMenu;\r\n\r\nwindow.addEventListener('click', (event) => { \r\n  if (isOpened && !navigation.contains(event.target) && !burger.contains(event.target)) {\r\n    toggleBurgerMenu();\r\n  };\r\n}, false);\n\n//# sourceURL=webpack:///./pages/main/src/index.js?");

/***/ }),

/***/ "./pages/main/src/scripts/cards.js":
/*!*****************************************!*\
  !*** ./pages/main/src/scripts/cards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cards\": () => (/* binding */ Cards)\n/* harmony export */ });\nclass Cards {\r\n  showText () {\r\n    console.log(\"Cards\");\r\n  }\r\n}\n\n//# sourceURL=webpack:///./pages/main/src/scripts/cards.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./pages/main/src/index.js");
/******/ 	
/******/ })()
;