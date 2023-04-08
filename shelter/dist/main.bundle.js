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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/cards */ \"./pages/main/src/scripts/cards.js\");\n\r\n\r\nwindow.onload = function () {\r\n  \r\n  renderCards();\r\n}\r\n\r\nconst dataPets = [\r\n  {\r\n    \"petName\": \"Jennifer\",\r\n    \"urlImage\": \"../../assets/images/pets/jennifer-min.png\",\r\n    \"type\": \"Dog\",\r\n    \"breed\": \"Labrador\",\r\n    \"description\": \"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.\",\r\n    \"age\": \"2 months\",\r\n    \"inoculations\": [\"none\"],\r\n    \"diseases\": [\"none\"],\r\n    \"parasites\": [\"none\"]\r\n  },\r\n  {\r\n    \"petName\": \"Sophia\",\r\n    \"urlImage\": \"../../assets/images/pets/sophia-min.png\",\r\n    \"type\": \"Dog\",\r\n    \"breed\": \"Shih tzu\",\r\n    \"description\": \"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\",\r\n    \"age\": \"1 month\",\r\n    \"inoculations\": [\"parvovirus\"],\r\n    \"diseases\": [\"none\"],\r\n    \"parasites\": [\"none\"]\r\n  },\r\n  {\r\n    \"petName\": \"Woody\",\r\n    \"urlImage\": \"../../assets/images/pets/woody-min.png\",\r\n    \"type\": \"Dog\",\r\n    \"breed\": \"Golden Retriever\",\r\n    \"description\": \"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.\",\r\n    \"age\": \"3 years 6 months\",\r\n    \"inoculations\": [\"adenovirus\", \"distemper\"],\r\n    \"diseases\": [\"right back leg mobility reduced\"],\r\n    \"parasites\": [\"none\"]\r\n  },\r\n  {\r\n    \"petName\": \"Scarlett\",\r\n    \"urlImage\": \"../../assets/images/pets/scarlett-min.png\",\r\n    \"type\": \"Dog\",\r\n    \"breed\": \"Jack Russell Terrier\",\r\n    \"description\": \"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.\",\r\n    \"age\": \"3 months\",\r\n    \"inoculations\": [\"parainfluenza\"],\r\n    \"diseases\": [\"none\"],\r\n    \"parasites\": [\"none\"]\r\n  },\r\n  {\r\n    \"petName\": \"Katrine\",\r\n    \"urlImage\": \"../../assets/images/pets/katrine-min.png\",\r\n    \"type\": \"Cat\",\r\n    \"breed\": \"British Shorthair\",\r\n    \"description\": \"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.\",\r\n    \"age\": \"6 months\",\r\n    \"inoculations\": [\"panleukopenia\"],\r\n    \"diseases\": [\"none\"],\r\n    \"parasites\": [\"none\"]\r\n  },\r\n  {\r\n    \"petName\": \"Timmy\",\r\n    \"urlImage\": \"../../assets/images/pets/timmy-min.png\",\r\n    \"type\": \"Cat\",\r\n    \"breed\": \"British Shorthair\",\r\n    \"description\": \"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.\",\r\n    \"age\": \"2 years 3 months\",\r\n    \"inoculations\": [\"calicivirus\", \"viral rhinotracheitis\"],\r\n    \"diseases\": [\"kidney stones\"],\r\n    \"parasites\": [\"none\"]\r\n  },\r\n  {\r\n    \"petName\": \"Freddie\",\r\n    \"urlImage\": \"../../assets/images/pets/freddie-min.png\",\r\n    \"type\": \"Cat\",\r\n    \"breed\": \"British Shorthair\",\r\n    \"description\": \"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.\",\r\n    \"age\": \"2 months\",\r\n    \"inoculations\": [\"rabies\"],\r\n    \"diseases\": [\"none\"],\r\n    \"parasites\": [\"none\"]\r\n  },\r\n  {\r\n    \"petName\": \"Charly\",\r\n    \"urlImage\": \"../../assets/images/pets/charly-min.png\",\r\n    \"type\": \"Dog\",\r\n    \"breed\": \"Jack Russell Terrier\",\r\n    \"description\": \"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.\",\r\n    \"age\": \"8 years\",\r\n    \"inoculations\": [\"bordetella bronchiseptica\", \"leptospirosis\"],\r\n    \"diseases\": [\"deafness\", \"blindness\"],\r\n    \"parasites\": [\"lice\", \"fleas\"]\r\n  }\r\n];\r\n\r\n//Burger\r\nconst body = document.querySelector('.body');\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst burger = document.querySelector('.hamburger');\r\nconst navigation = document.querySelector('.nav');\r\nconst naviLinks = document.querySelectorAll('.nav-item__link');\r\n\r\nlet isOpened = false;\r\n\r\nfunction toggleBurgerMenu() {\r\n  burger.classList.toggle('hamburger_opened');\r\n  navigation.classList.toggle('nav_opened');\r\n  body.classList.toggle(\"body_overlay\");\r\n  wrapper.classList.toggle(\"wrapper_overlay\");\r\n  if (isOpened) {\r\n    isOpened = false;\r\n  } else {\r\n    isOpened = true;\r\n  }\r\n}\r\n\r\nnaviLinks.forEach(links => {\r\n  links.onclick = function () {\r\n    if (isOpened) {\r\n      toggleBurgerMenu();\r\n    }\r\n  }\r\n});\r\n\r\n\r\nburger.onclick = toggleBurgerMenu;\r\n\r\nwindow.addEventListener('click', (event) => { \r\n  if (isOpened && !navigation.contains(event.target) && !burger.contains(event.target)) {\r\n    toggleBurgerMenu();\r\n  };\r\n}, false);\r\n\r\n//Cards\r\n// async function getDataPets() {  \r\n//   const dataPetsUrl = '../../assets/json/pets.json';\r\n//   const res = await fetch(dataPetsUrl);\r\n//   const dataPets = await res.json(); \r\n//   console.log(dataPets);\r\n//   return dataPets;\r\n// }\r\n\r\nconst renderCards = () => {\r\n  const sliderCards = getSliderCards();\r\n  generateCards(dataPets).forEach(petCards => {\r\n    sliderCards.append(petCards.generateCard())\r\n  });\r\n}\r\n\r\nconst getSliderCards = () => {\r\n  const sliderCards = document.querySelector('.slider__cards');\r\n  sliderCards.innerHTML = \"\";\r\n  return sliderCards;\r\n}\r\n\r\nconst generateCards = (dataPets) => {\r\n  let petCards = [];\r\n  dataPets.forEach(pet=> {\r\n    petCards.push(new _scripts_cards__WEBPACK_IMPORTED_MODULE_0__.Cards(pet))\r\n  });\r\n  return petCards;\r\n}\r\n\n\n//# sourceURL=webpack:///./pages/main/src/index.js?");

/***/ }),

/***/ "./pages/main/src/scripts/cards.js":
/*!*****************************************!*\
  !*** ./pages/main/src/scripts/cards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cards\": () => (/* binding */ Cards)\n/* harmony export */ });\nclass Cards {\r\n  constructor({ urlImage, petName }) {\r\n    this.urlImage = urlImage;\r\n    this.petName = petName;\r\n}\r\n\r\ngenerateCard() {\r\n    let template = '';\r\n    let cardArticle = document.createElement('article');\r\n    cardArticle.className = 'layout-3-row card our-friends__card';\r\n\r\n    if (this.urlImage) {\r\n      template += '<div class=\"card__image\">';\r\n      template += `<img src=\"${this.urlImage}\" alt=\"pets-${this.petName}\" class=\"card__image-pets\">`;\r\n      template += '</div>';\r\n    } else {\r\n      console.log(\"URl not\");\r\n    }\r\n\r\n    if (this.petName) {\r\n      template += `<h4 class=\"card__title\">${this.petName}</h4>`;\r\n    }\r\n\r\n    template += '<button class=\"card__button button button_bordered\">Learn more</button>';\r\n\r\n    cardArticle.innerHTML = template;\r\n    return cardArticle;\r\n}\r\n}\n\n//# sourceURL=webpack:///./pages/main/src/scripts/cards.js?");

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