/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/pets/src/index.js":
/*!*********************************!*\
  !*** ./pages/pets/src/index.js ***!
  \*********************************/
/***/ (() => {

eval("const body = document.querySelector('.body');\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst wrapperOverlay = document.querySelector('.wrapper_overlay');\r\nconst burger = document.querySelector('.hamburger');\r\nconst navigation = document.querySelector('.nav');\r\nconst naviLinks = document.querySelectorAll('.nav-item__link');\r\nlet isOpened = false;\r\n\r\nfunction toggleBurgerMenu() {\r\n  burger.classList.toggle('hamburger_opened');\r\n  navigation.classList.toggle('nav_opened');\r\n  body.classList.toggle(\"body_overlay\");\r\n  wrapper.classList.toggle(\"wrapper_overlay\");\r\n  if (isOpened) {\r\n    isOpened = false;\r\n  } else {\r\n    isOpened = true;\r\n  }\r\n}\r\n\r\nnaviLinks.forEach(links => {\r\n  links.onclick = function () {\r\n    if (isOpened) {\r\n      toggleBurgerMenu();\r\n    }\r\n  }\r\n});\r\n\r\n\r\nburger.onclick = toggleBurgerMenu;\r\n\r\nwindow.addEventListener('click', (event) => { \r\n  if (isOpened && !navigation.contains(event.target) && !burger.contains(event.target)) {\r\n    toggleBurgerMenu();\r\n  };\r\n}, false);\n\n//# sourceURL=webpack:///./pages/pets/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./pages/pets/src/index.js"]();
/******/ 	
/******/ })()
;