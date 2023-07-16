export default function createHeader(): HTMLElement {
  const header: HTMLElement = document.createElement('header');
  header.className = 'header';
  const nav: HTMLElement = document.createElement('nav');
  nav.className = 'nav';
  const buttonGarage: HTMLElement = document.createElement('button');
  buttonGarage.className = 'buttons buttons_garage';
  buttonGarage.textContent = 'TO GARAGE';
  const buttonWinners: HTMLElement = document.createElement('button');
  buttonWinners.className = 'buttons buttons_winners';
  buttonWinners.textContent = 'To Winners';
  header.append(buttonGarage);
  header.append(buttonWinners);
  return header;
}
