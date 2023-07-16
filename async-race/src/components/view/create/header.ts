import { ButtonNames } from '../../types';

export default function createHeader(): HTMLElement {
  const header: HTMLElement = document.createElement('header');
  header.className = 'header';
  const nav: HTMLElement = document.createElement('nav');
  nav.className = 'nav';
  const buttonGarage: HTMLElement = document.createElement('button');
  buttonGarage.className = 'buttons buttons_garage';
  buttonGarage.textContent = `${ButtonNames.garage}`;
  const buttonWinners: HTMLElement = document.createElement('button');
  buttonWinners.className = 'buttons buttons_winners';
  buttonWinners.textContent = `${ButtonNames.winners}`;
  header.append(buttonGarage);
  header.append(buttonWinners);
  return header;
}
