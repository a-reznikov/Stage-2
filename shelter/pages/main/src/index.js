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
const sliderCards = document.querySelector('.slider__cards');
const sliderContainer = document.querySelector('.slider-wrapper__container');
let widthScreen = window.innerWidth;
let widthSlider = sliderCards.clientWidth;
let widthContainer = sliderContainer.clientWidth;
console.log(widthSlider);
console.log(widthContainer);
let amountShowCards = 0;
let allCards = dataPets;
let withoutCurrentSlide = allCards;
let tapeSlider = [];
let prevSlide = [];
let currentSlide = [];
let nextSlide = [];

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
  prevSlide = createArrayCards(amountShowCards, prevSlide);
  console.log('prevSlide', prevSlide);
  nextSlide = createArrayCards(amountShowCards, nextSlide);
  console.log('nextSlide', nextSlide);
  tapeSlider.push(...prevSlide);
  tapeSlider.push(...currentSlide);
  tapeSlider.push(...nextSlide);
}

window.addEventListener('resize',(e) => {
  widthScreen = window.innerWidth;
});


const renderCards = () => {
  const sliderItemPrev = getSliderItemPrev();
  const SliderItemCurrent = getSliderItemCurrent();
  const sliderItemNext = getSliderItemNext();
  const sliderContainer = getSliderContainer();
  generateCards(prevSlide).forEach(petCards => {
    sliderItemPrev.append(petCards.generateCard())
  });
  sliderContainer.append(sliderItemPrev);

  generateCards(currentSlide).forEach(petCards => {
    SliderItemCurrent.append(petCards.generateCard())
  });
  sliderContainer.append(SliderItemCurrent);

  generateCards(nextSlide).forEach(petCards => {
    sliderItemNext.append(petCards.generateCard())
  });
  sliderContainer.append(sliderItemNext);
}

// const renderContainer = () => {
//   const slideContainer = getSliderContainer();
// }

const getSliderContainer = () => {
  const slideContainer = document.querySelector('.slider-wrapper__container');
  slideContainer.innerHTML = "";
  return slideContainer;
}

const getSliderItemPrev = () => {
  const sliderItem = document.querySelector('.item_prev');
  sliderItem.innerHTML = "";
  return sliderItem;
}

const getSliderItemCurrent = () => {
  const sliderItem = document.querySelector('.item_current');
  sliderItem.innerHTML = "";
  return sliderItem;
}

const getSliderItemNext = () => {
  const sliderItem = document.querySelector('.item_next');
  sliderItem.innerHTML = "";
  return sliderItem;
}

const generateCards = (Slide) => {
  let petCards = [];
  Slide.forEach(pet=> {
    petCards.push(new Cards(pet))
  });
  return petCards;
}


//Slider

function showNextSlide() {
  const sliderItems = document.querySelectorAll('.slider-wrapper__item');
  const sliderContainer = document.querySelector('.slider-wrapper__container');
  const widthContainer = sliderContainer.clientWidth;
  sliderItems.forEach(slide => {
    slide.style.left = `${widthContainer}px`;
  });
}

function showPrevSlide() {
  const sliderItems = document.querySelectorAll('.slider-wrapper__item');
  const sliderContainer = document.querySelector('.slider-wrapper__container');
  const widthContainer = sliderContainer.clientWidth;
  sliderItems.forEach(slide => {
    slide.style.left = `-${widthContainer}px`;
  });
}

prevButtonSlider.onclick = showPrevSlide;
nextButtonSlider.onclick = showNextSlide;

//
