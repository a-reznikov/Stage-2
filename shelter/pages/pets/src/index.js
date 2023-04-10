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
let pages = 0;

const randomPets = [];
resultArray.forEach(element => {
  randomPets.push(allCards[element]);
});

console.log(randomPets);

let showPets = randomPets.slice(pages, amountShowCards);
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


