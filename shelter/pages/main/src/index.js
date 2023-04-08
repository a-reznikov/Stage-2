import { Cards } from './scripts/cards'

const body = document.querySelector('.body');
const wrapper = document.querySelector('.wrapper');
const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const naviLinks = document.querySelectorAll('.nav-item__link');

// const petsList = '../../../assets/json/pets.json';
// console.log(petsList);
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