import { ButtonNames } from '../../types';
import createButton from './button';

export default function createHeader(): HTMLElement {
  const header: HTMLElement = document.createElement('header');
  header.className = 'header';
  const nav: HTMLElement = document.createElement('nav');
  nav.className = 'nav';
  const buttonGarage: HTMLButtonElement = createButton('nav', `${ButtonNames.toGarage}`);
  const buttonWinners: HTMLButtonElement = createButton('nav', `${ButtonNames.toWinners}`);
  nav.append(buttonGarage);
  nav.append(buttonWinners);
  header.append(nav);
  return header;
}
