import dataPets from "./../../../assets/json/pets.json" assert { type: "json" };
import { Cards } from './scripts/cards'
import { Modal } from './scripts/modal'

window.onload = function () {
  
  startTemplate();
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
let amountShowCards = 0;
const mediaTwoCards = window.matchMedia("(max-width: 1110px)");
const mediaOneCards = window.matchMedia("(max-width: 767px)");


let widthScreen = window.innerWidth;
let allCards = dataPets;
let withoutCurrentSlide = [];
withoutCurrentSlide.push(...allCards);
let prevSlide = [];
let currentSlide = [];
let nextSlide = [];

function randomCard(array) {
  const amountCards = array.length;
  const randomNumberCard = Math.floor(Math.random() * amountCards);
  return randomNumberCard;
}

function createArrayCards(amount, arrayCards, withoutCurrentSlide) {
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

function reloadCards(amount) {
  withoutCurrentSlide = [];
  withoutCurrentSlide.push(...allCards);
  prevSlide = [];
  currentSlide = [];
  nextSlide = [];
  currentSlide = createArrayCards(amount, currentSlide, withoutCurrentSlide);
  console.log('currentSlide', currentSlide);
  prevSlide = createArrayCards(amount, prevSlide, withoutCurrentSlide);
  console.log('prevSlide', prevSlide);
  nextSlide = createArrayCards(amount, nextSlide, withoutCurrentSlide);
  console.log('nextSlide', nextSlide);
  renderCards();
}

mediaTwoCards.onchange = (e) => {
  if (e.matches) {
    amountShowCards = 2;
    reloadCards(amountShowCards)
  } else {
    amountShowCards = 3;
    reloadCards(amountShowCards)
  }
};

mediaOneCards.onchange = (e) => {
  if (e.matches) {
    amountShowCards = 1;
    reloadCards(amountShowCards)
  } else {
    amountShowCards = 2;
    reloadCards(amountShowCards)
  }
};

function startTemplate() {
  if (widthScreen >= 1110) {
    amountShowCards = 3;
    reloadCards(amountShowCards)
  } else if(widthScreen <= 767) {
    amountShowCards = 1;
    reloadCards(amountShowCards)
  } else {
    amountShowCards = 2;
    reloadCards(amountShowCards)
  }
}



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

const renderCardsPrev = () => {
  const sliderItemPrev = getSliderItemPrev();
  generateCards(prevSlide).forEach(petCards => {
    sliderItemPrev.append(petCards.generateCard())
  });
  sliderContainer.prepend(sliderItemPrev);
}

const renderCardsNext = () => {
  const sliderItemNext = getSliderItemNext();
  generateCards(nextSlide).forEach(petCards => {
    sliderItemNext.append(petCards.generateCard())
  });
  sliderContainer.append(sliderItemNext);
}

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
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderContainer = document.querySelector('.slider-wrapper__container');
const sliderItem = document.querySelector('.slider-wrapper__item');

function showNextSlide() {
  sliderContainer.classList.add("transition-next");
}

function showPrevSlide() {
  sliderContainer.classList.add("transition-prev");
}

function createWithoutCurrent(current, allCards) {
  let newWithoutCurrentSlide = [];
  allCards.forEach(element => {
    if (current.indexOf(element) === -1) {
      newWithoutCurrentSlide.push(element);
    }
  });
  return newWithoutCurrentSlide;
}

sliderContainer.addEventListener("animationend", (animationEvent) => {
  let newWithoutCurrentSlide = [];
  if (animationEvent.animationName === "move-prev") {
    sliderContainer.classList.remove("transition-prev");
    const itemCurrent = document.querySelector('.item_current');
    document.querySelector(".item_next").innerHTML = itemCurrent.innerHTML;
    const itemPrev = document.querySelector('.item_prev');
    document.querySelector(".item_current").innerHTML = itemPrev.innerHTML;
    nextSlide = [];
    nextSlide.push(...currentSlide);
    currentSlide = [];
    currentSlide.push(...prevSlide);
    newWithoutCurrentSlide = createWithoutCurrent(currentSlide, allCards);
    prevSlide = [];
    prevSlide = createArrayCards(amountShowCards, prevSlide, newWithoutCurrentSlide);
    renderCardsPrev();
  } else {
    sliderContainer.classList.remove("transition-next");
    const itemCurrent = document.querySelector('.item_current');
    document.querySelector(".item_prev").innerHTML = itemCurrent.innerHTML;
    const itemNext = document.querySelector('.item_next');
    document.querySelector(".item_current").innerHTML = itemNext.innerHTML;
    prevSlide = [];
    prevSlide.push(...currentSlide);
    currentSlide = [];
    currentSlide.push(...nextSlide);
    newWithoutCurrentSlide = createWithoutCurrent(currentSlide, allCards);
    nextSlide = [];
    nextSlide = createArrayCards(amountShowCards, nextSlide, newWithoutCurrentSlide);
    console.log('prevSlide', prevSlide);
    console.log('currentSlide', currentSlide);
    console.log('nextSlide', nextSlide);
    renderCardsNext();
  }
});
  
prevButtonSlider.onclick = showPrevSlide;
nextButtonSlider.onclick = showNextSlide;

//
