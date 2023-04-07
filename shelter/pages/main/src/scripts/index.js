const burgerIcon = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');

function toggleBurgerMenu() {
  burgerIcon.classList.toggle('hamburger_opened');
  navigation.classList.toggle('nav_opened');
}

burgerIcon.onclick = toggleBurgerMenu;
// burgerIcon.addEventListener('click', openBurgerMenu);