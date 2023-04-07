const body = document.querySelector('.body');
const wrapper = document.querySelector('.wrapper');
const burgerIcon = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const naviLinks = document.querySelectorAll('.nav-item__link');

function toggleBurgerMenu() {
  burgerIcon.classList.toggle('hamburger_opened');
  navigation.classList.toggle('nav_opened');
  body.classList.toggle("body_overlay");
  wrapper.classList.toggle("wrapper_overlay");
}

burgerIcon.onclick = toggleBurgerMenu;

naviLinks.forEach(links => {
  links.onclick = toggleBurgerMenu;
});