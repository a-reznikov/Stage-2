export default function observeMediaQuery(): void {
  const buttonAsideHidden: HTMLInputElement | null = document.querySelector('.aside__button');
  const aside: HTMLInputElement | null = document.querySelector('.aside');
  if (aside && buttonAsideHidden) {
    aside.classList.add('aside__hidden');
    buttonAsideHidden.classList.add('aside__button_hidden');
  }
}
