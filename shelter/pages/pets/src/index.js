import dataPets from "./../../../assets/json/pets.json" assert { type: "json" };
import { Cards } from './scripts/cards'

window.onload = function () {
  
  renderCards();
}

const body = document.querySelector('.body');
const wrapper = document.querySelector('.wrapper');
const wrapperOverlay = document.querySelector('.wrapper_overlay');
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


//Paggination

//Generate random massive
let allCards = dataPets;
let randomNumbersArray = [];
let numbersArray = [];
let firstPart = [];
let secondPart = [];
let lastPart = [];

function randomNumber(array) {
  const amountCards = array.length;
  const randomNumberCard = Math.floor(Math.random() * amountCards);
  return randomNumberCard;
}

function createnumbersArray(array) {
  while (randomNumbersArray.length != array.length) {
    let random = randomNumber(array);
    if(randomNumbersArray.indexOf(random) === -1) {
      randomNumbersArray.push(random);
    } else {
      createnumbersArray(array);
    }
  }
  return randomNumbersArray;
}

numbersArray = createnumbersArray(allCards);

firstPart = numbersArray.slice(0, 3);
secondPart = numbersArray.slice(3, 6);
lastPart = numbersArray.slice(6, 8);
let resultArray = [];
resultArray.concat(...numbersArray);

for (let i = 0; i < 6; i++) {
  randomNumbersArray = [];
  let firstNumbers = createnumbersArray(firstPart);
  firstNumbers.forEach(element => {
      resultArray.push(firstPart[element]);
    });
  randomNumbersArray = [];
  let secondNumbers = createnumbersArray(secondPart);
  secondNumbers.forEach(element => {
      resultArray.push(secondPart[element]);
    });
  randomNumbersArray = [];
  let lastNumbers = createnumbersArray(lastPart);
  lastNumbers.forEach(element => {
      resultArray.push(lastPart[element]);
    });
}

console.log(resultArray);

let amountShowCards = 8;
let MaxPages = resultArray.length / amountShowCards;
let page = 1;
let begin = 0;
let end = amountShowCards;

const randomPets = [];
resultArray.forEach(element => {
  randomPets.push(allCards[element]);
});

console.log(randomPets);

let showPets = randomPets.slice(begin, amountShowCards);
console.log(showPets);

//Render cards
const renderCards = () => {
  const petContainer = getPetContainer();
  generateCards(showPets).forEach(petCards => {
    petContainer.append(petCards.generateCard())
  });
}

const getPetContainer = () => {
  const petContainer = document.querySelector('.pets-container__slider');
  petContainer.innerHTML = "";
  return petContainer;
}

const generateCards = (showPets) => {
  let petCards = [];
  showPets.forEach(pet=> {
    petCards.push(new Cards(pet))
  });
  return petCards;
}


//Cnange Show
const firstPagButton = document.querySelector('.pag-button_first');
const prevPagButton = document.querySelector('.pag-button_prev');
const numberPag = document.querySelector('.pag-button_number');
const nextPagButton = document.querySelector('.pag-button_next');
const lastPagButton = document.querySelector('.pag-button_last');

function showPrevPage() {
  if (page === 2) {
    page --;
    console.log(page);
    numberPag.textContent = `${page}`;
    begin -= amountShowCards;
    end -= amountShowCards;
    console.log(begin, end);
    showPets = randomPets.slice(begin, end);
    renderCards();
    prevPagButton.classList.remove('pag-button_available');
    firstPagButton.classList.remove('pag-button_available');
    prevPagButton.removeEventListener('click', showPrevPage, false);
    firstPagButton.removeEventListener('click', showFirstPage, false);
  } else if(page <= MaxPages) {
    page --;
    console.log(page);
    numberPag.textContent = `${page}`;
    begin -= amountShowCards;
    end -= amountShowCards;
    console.log(begin, end);
    showPets = randomPets.slice(begin, end);
    renderCards();
    nextPagButton.classList.add('pag-button_available');
    lastPagButton.classList.add('pag-button_available');
    nextPagButton.addEventListener('click', showNextPage, false);
    lastPagButton.addEventListener('click', showLastPage, false);
  }
}

function showNextPage() {
  if (page === MaxPages - 1) {
    page ++;
    console.log(page);
    numberPag.textContent = `${page}`;
    begin += amountShowCards;
    end += amountShowCards;
    console.log(begin, end);
    showPets = randomPets.slice(begin, end);
    renderCards();
    nextPagButton.classList.remove('pag-button_available');
    lastPagButton.classList.remove('pag-button_available');
    nextPagButton.removeEventListener('click', showNextPage, false);
    lastPagButton.removeEventListener('click', showLastPage, false);
  } else if (page >= 1) {
    page ++;
    console.log(page);
    numberPag.textContent = `${page}`;
    begin += amountShowCards;
    end += amountShowCards;
    console.log(begin, end);
    showPets = randomPets.slice(begin, end);
    renderCards();
    firstPagButton.classList.add('pag-button_available');
    prevPagButton.classList.add('pag-button_available');
    prevPagButton.addEventListener('click', showPrevPage, false);
    firstPagButton.addEventListener('click', showFirstPage, false);
  }
}

function showFirstPage() {
  page = 1;
  console.log(page);
  numberPag.textContent = `${page}`;
  begin = 0;
  end = amountShowCards;
  console.log(begin, end);
  showPets = randomPets.slice(begin, end);
  renderCards();
  prevPagButton.classList.remove('pag-button_available');
  firstPagButton.classList.remove('pag-button_available');
  prevPagButton.removeEventListener('click', showPrevPage, false);
  firstPagButton.removeEventListener('click', showFirstPage, false);

  nextPagButton.classList.add('pag-button_available');
  lastPagButton.classList.add('pag-button_available');
  nextPagButton.addEventListener('click', showNextPage, false);
  lastPagButton.addEventListener('click', showLastPage, false);
}


function showLastPage() {
  page = MaxPages;
  console.log(page);
  numberPag.textContent = `${page}`;
  begin = (MaxPages - 1) * amountShowCards;
  end = MaxPages * amountShowCards;
  console.log(begin, end);
  showPets = randomPets.slice(begin, end);
  renderCards();
  nextPagButton.classList.remove('pag-button_available');
  lastPagButton.classList.remove('pag-button_available');
  nextPagButton.removeEventListener('click', showNextPage, false);
  lastPagButton.removeEventListener('click', showLastPage, false);

  prevPagButton.classList.add('pag-button_available');
  firstPagButton.classList.add('pag-button_available');
  prevPagButton.addEventListener('click', showPrevPage, false);
  firstPagButton.addEventListener('click', showFirstPage, false);
}


firstPagButton.addEventListener('click', showFirstPage, false);
prevPagButton.addEventListener('click', showPrevPage, false);
nextPagButton.addEventListener('click', showNextPage, false);
lastPagButton.addEventListener('click', showLastPage, false);


