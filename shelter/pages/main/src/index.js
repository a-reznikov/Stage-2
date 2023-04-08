import dataPets from "./../../../assets/json/pets.json" assert { type: "json" };
import { Cards } from './scripts/cards'

window.onload = function () {
  
  renderCards();
}

//Burger
const body = document.querySelector('.body');
const wrapper = document.querySelector('.wrapper');
const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const naviLinks = document.querySelectorAll('.nav-item__link');

let isOpened = false;

function toggleBurgerMenu() {
  burger.classList.toggle('hamburger_opened');
  navigation.classList.toggle('nav_opened');
  body.classList.toggle("body_overlay");
  wrapper.classList.toggle("wrapper_overlay");
  if (isOpened) {
    isOpened = false;
  } else {
    isOpened = true;
  }
}

naviLinks.forEach(links => {
  links.onclick = function () {
    if (isOpened) {
      toggleBurgerMenu();
    }
  }
});


burger.onclick = toggleBurgerMenu;

window.addEventListener('click', (event) => { 
  if (isOpened && !navigation.contains(event.target) && !burger.contains(event.target)) {
    toggleBurgerMenu();
  };
}, false);


//Cards generator
const prevButtonSlider = document.querySelector('.button-slider_prev');
const nextButtonSlider = document.querySelector('.button-slider_next');
let widthScreen = window.innerWidth;
let amountShowCards = 0;
let allCards = dataPets;
let withoutCurrentSlide = allCards;
let prevArrayCards = [];
let currentSlide = [];
let nextArrayCards = [];

function randomCard(array) {
  const amountCards = array.length;
  const randomNumberCard = Math.floor(Math.random() * amountCards);
  return randomNumberCard;
}

function createArrayCards(amount, arrayCards) {
  if (arrayCards === currentSlide) {
    while (amount != 0) {
      let numberCard = randomCard(withoutCurrentSlide);
      arrayCards.push(withoutCurrentSlide[numberCard]);
      withoutCurrentSlide.splice(numberCard, 1);
      amount -= 1;
    }
  } else {
    let availableCards = [];
    availableCards.push(...withoutCurrentSlide);
    while (amount != 0) {
      let numberCard = randomCard(availableCards);
      arrayCards.push(availableCards[numberCard]);
      availableCards.splice(numberCard, 1);
      amount -= 1;
    }
}
  return arrayCards;
}


if (widthScreen >= 1110) {
  amountShowCards = 3;
  currentSlide = createArrayCards(amountShowCards, currentSlide);
  console.log('currentSlide', currentSlide);
  prevArrayCards = createArrayCards(amountShowCards, prevArrayCards);
  console.log('prevArrayCards', prevArrayCards);
  nextArrayCards = createArrayCards(amountShowCards, nextArrayCards);
  console.log('nextArrayCards', nextArrayCards);
}

window.addEventListener('resize',(e) => {
  widthScreen = window.innerWidth;
  // console.log(widthScreen);
});

const renderCards = () => {
  const sliderCards = getSliderCards();
  generateCards(currentSlide).forEach(petCards => {
    sliderCards.append(petCards.generateCard())
  });
}

const getSliderCards = () => {
  const sliderCards = document.querySelector('.slider__cards');
  sliderCards.innerHTML = "";
  return sliderCards;
}

const generateCards = (currentSlide) => {
  let petCards = [];
  currentSlide.forEach(pet=> {
    petCards.push(new Cards(pet))
  });
  return petCards;
}

function showNextSlide() {
  prevArrayCards = currentSlide;
  currentSlide = nextArrayCards;
  renderCards();
}

function showPrevSlide() {
  nextArrayCards = currentSlide;
  currentSlide = prevArrayCards;
  renderCards();
}

prevButtonSlider.onclick = showPrevSlide;
nextButtonSlider.onclick = showNextSlide;

//
