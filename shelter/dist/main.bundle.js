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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_json_pets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../assets/json/pets.json */ \"./assets/json/pets.json\");\n/* harmony import */ var _scripts_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/cards */ \"./pages/main/src/scripts/cards.js\");\n\r\n\r\n\r\nwindow.onload = function () {\r\n  \r\n  renderCards();\r\n}\r\n\r\n//Burger\r\nconst body = document.querySelector('.body');\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst burger = document.querySelector('.hamburger');\r\nconst navigation = document.querySelector('.nav');\r\nconst naviLinks = document.querySelectorAll('.nav-item__link');\r\n\r\nlet isOpened = false;\r\n\r\nfunction toggleBurgerMenu() {\r\n  burger.classList.toggle('hamburger_opened');\r\n  navigation.classList.toggle('nav_opened');\r\n  body.classList.toggle(\"body_overlay\");\r\n  wrapper.classList.toggle(\"wrapper_overlay\");\r\n  if (isOpened) {\r\n    isOpened = false;\r\n  } else {\r\n    isOpened = true;\r\n  }\r\n}\r\n\r\nnaviLinks.forEach(links => {\r\n  links.onclick = function () {\r\n    if (isOpened) {\r\n      toggleBurgerMenu();\r\n    }\r\n  }\r\n});\r\n\r\n\r\nburger.onclick = toggleBurgerMenu;\r\n\r\nwindow.addEventListener('click', (event) => { \r\n  if (isOpened && !navigation.contains(event.target) && !burger.contains(event.target)) {\r\n    toggleBurgerMenu();\r\n  };\r\n}, false);\r\n\r\n\r\n//Cards generator\r\nconst prevButtonSlider = document.querySelector('.button-slider_prev');\r\nconst nextButtonSlider = document.querySelector('.button-slider_next');\r\nlet widthScreen = window.innerWidth;\r\nlet amountShowCards = 0;\r\nlet allCards = _assets_json_pets_json__WEBPACK_IMPORTED_MODULE_0__;\r\nlet withoutCurrentSlide = allCards;\r\nlet prevArrayCards = [];\r\nlet currentSlide = [];\r\nlet nextArrayCards = [];\r\n\r\nfunction randomCard(array) {\r\n  const amountCards = array.length;\r\n  const randomNumberCard = Math.floor(Math.random() * amountCards);\r\n  return randomNumberCard;\r\n}\r\n\r\nfunction createArrayCards(amount, arrayCards) {\r\n  if (arrayCards === currentSlide) {\r\n    while (amount != 0) {\r\n      let numberCard = randomCard(withoutCurrentSlide);\r\n      arrayCards.push(withoutCurrentSlide[numberCard]);\r\n      withoutCurrentSlide.splice(numberCard, 1);\r\n      amount -= 1;\r\n    }\r\n  } else {\r\n    let availableCards = [];\r\n    availableCards.push(...withoutCurrentSlide);\r\n    while (amount != 0) {\r\n      let numberCard = randomCard(availableCards);\r\n      arrayCards.push(availableCards[numberCard]);\r\n      availableCards.splice(numberCard, 1);\r\n      amount -= 1;\r\n    }\r\n}\r\n  return arrayCards;\r\n}\r\n\r\n\r\nif (widthScreen >= 1110) {\r\n  amountShowCards = 3;\r\n  currentSlide = createArrayCards(amountShowCards, currentSlide);\r\n  console.log('currentSlide', currentSlide);\r\n  prevArrayCards = createArrayCards(amountShowCards, prevArrayCards);\r\n  console.log('prevArrayCards', prevArrayCards);\r\n  nextArrayCards = createArrayCards(amountShowCards, nextArrayCards);\r\n  console.log('nextArrayCards', nextArrayCards);\r\n}\r\n\r\nwindow.addEventListener('resize',(e) => {\r\n  widthScreen = window.innerWidth;\r\n  // console.log(widthScreen);\r\n});\r\n\r\nconst renderCards = () => {\r\n  const sliderCards = getSliderCards();\r\n  generateCards(currentSlide).forEach(petCards => {\r\n    sliderCards.append(petCards.generateCard())\r\n  });\r\n}\r\n\r\nconst getSliderCards = () => {\r\n  const sliderCards = document.querySelector('.slider__cards');\r\n  sliderCards.innerHTML = \"\";\r\n  return sliderCards;\r\n}\r\n\r\nconst generateCards = (currentSlide) => {\r\n  let petCards = [];\r\n  currentSlide.forEach(pet=> {\r\n    petCards.push(new _scripts_cards__WEBPACK_IMPORTED_MODULE_1__.Cards(pet))\r\n  });\r\n  return petCards;\r\n}\r\n\r\nfunction showNextSlide() {\r\n  prevArrayCards = currentSlide;\r\n  currentSlide = nextArrayCards;\r\n  renderCards();\r\n}\r\n\r\nfunction showPrevSlide() {\r\n  nextArrayCards = currentSlide;\r\n  currentSlide = prevArrayCards;\r\n  renderCards();\r\n}\r\n\r\nprevButtonSlider.onclick = showPrevSlide;\r\nnextButtonSlider.onclick = showNextSlide;\r\n\r\n//\r\n\n\n//# sourceURL=webpack:///./pages/main/src/index.js?");

/***/ }),

/***/ "./pages/main/src/scripts/cards.js":
/*!*****************************************!*\
  !*** ./pages/main/src/scripts/cards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cards\": () => (/* binding */ Cards)\n/* harmony export */ });\nclass Cards {\r\n  constructor({ urlImage, petName }) {\r\n    this.urlImage = urlImage;\r\n    this.petName = petName;\r\n}\r\n\r\ngenerateCard() {\r\n    let template = '';\r\n    let cardArticle = document.createElement('article');\r\n    cardArticle.className = 'layout-3-row card our-friends__card';\r\n\r\n    if (this.urlImage) {\r\n      template += '<div class=\"card__image\">';\r\n      template += `<img src=\"${this.urlImage}\" alt=\"pets-${this.petName}\" class=\"card__image-pets\">`;\r\n      template += '</div>';\r\n    } else {\r\n      console.log(\"URl not\");\r\n    }\r\n\r\n    if (this.petName) {\r\n      template += `<h4 class=\"card__title\">${this.petName}</h4>`;\r\n    }\r\n\r\n    template += '<button class=\"card__button button button_bordered\">Learn more</button>';\r\n\r\n    cardArticle.innerHTML = template;\r\n    return cardArticle;\r\n}\r\n}\n\n//# sourceURL=webpack:///./pages/main/src/scripts/cards.js?");

/***/ }),

/***/ "./assets/json/pets.json":
/*!*******************************!*\
  !*** ./assets/json/pets.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"petName\":\"Jennifer\",\"urlImage\":\"../../assets/images/pets/jennifer-min.png\",\"type\":\"Dog\",\"breed\":\"Labrador\",\"description\":\"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\\'t hesitate to play up a storm in the house if she has all of her favorite toys.\",\"age\":\"2 months\",\"inoculations\":[\"none\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"petName\":\"Sophia\",\"urlImage\":\"../../assets/images/pets/sophia-min.png\",\"type\":\"Dog\",\"breed\":\"Shih tzu\",\"description\":\"Sophia here and I\\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\",\"age\":\"1 month\",\"inoculations\":[\"parvovirus\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"petName\":\"Woody\",\"urlImage\":\"../../assets/images/pets/woody-min.png\",\"type\":\"Dog\",\"breed\":\"Golden Retriever\",\"description\":\"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.\",\"age\":\"3 years 6 months\",\"inoculations\":[\"adenovirus\",\"distemper\"],\"diseases\":[\"right back leg mobility reduced\"],\"parasites\":[\"none\"]},{\"petName\":\"Scarlett\",\"urlImage\":\"../../assets/images/pets/scarlett-min.png\",\"type\":\"Dog\",\"breed\":\"Jack Russell Terrier\",\"description\":\"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.\",\"age\":\"3 months\",\"inoculations\":[\"parainfluenza\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"petName\":\"Katrine\",\"urlImage\":\"../../assets/images/pets/katrine-min.png\",\"type\":\"Cat\",\"breed\":\"British Shorthair\",\"description\":\"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.\",\"age\":\"6 months\",\"inoculations\":[\"panleukopenia\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"petName\":\"Timmy\",\"urlImage\":\"../../assets/images/pets/timmy-min.png\",\"type\":\"Cat\",\"breed\":\"British Shorthair\",\"description\":\"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.\",\"age\":\"2 years 3 months\",\"inoculations\":[\"calicivirus\",\"viral rhinotracheitis\"],\"diseases\":[\"kidney stones\"],\"parasites\":[\"none\"]},{\"petName\":\"Freddie\",\"urlImage\":\"../../assets/images/pets/freddie-min.png\",\"type\":\"Cat\",\"breed\":\"British Shorthair\",\"description\":\"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.\",\"age\":\"2 months\",\"inoculations\":[\"rabies\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"petName\":\"Charly\",\"urlImage\":\"../../assets/images/pets/charly-min.png\",\"type\":\"Dog\",\"breed\":\"Jack Russell Terrier\",\"description\":\"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.\",\"age\":\"8 years\",\"inoculations\":[\"bordetella bronchiseptica\",\"leptospirosis\"],\"diseases\":[\"deafness\",\"blindness\"],\"parasites\":[\"lice\",\"fleas\"]}]');\n\n//# sourceURL=webpack:///./assets/json/pets.json?");

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