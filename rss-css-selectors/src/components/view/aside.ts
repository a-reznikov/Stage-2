import { Constants } from '../types';
import createHamburger from './hamburger';

export default function createAside(aside: HTMLElement): void {
  const asideLevels: HTMLElement = document.createElement('div');
  asideLevels.className = 'aside__levels levels';
  const levelsTitle: HTMLElement = document.createElement('h2');
  levelsTitle.className = 'levels__title';
  levelsTitle.textContent = Constants.asideTitle;
  const asideInfo: HTMLElement = document.createElement('div');
  asideInfo.className = 'aside__info info';
  const infoHeader: HTMLElement = document.createElement('div');
  infoHeader.className = 'info__header';
  const currentLevel: HTMLElement = document.createElement('span');
  currentLevel.className = 'info__current-level';
  const checkLevel: HTMLElement = document.createElement('span');
  checkLevel.className = 'info__check-level';
  const infoNavigation: HTMLElement = document.createElement('nav');
  infoNavigation.className = 'info__nav nav';
  const previousLevel: HTMLElement = document.createElement('a');
  previousLevel.className = 'nav__buttons nav__buttons_previous';
  const nextLevel: HTMLElement = document.createElement('a');
  nextLevel.className = 'nav__buttons nav__buttons__next';
  const hamburger: HTMLElement = createHamburger();
  if (aside) {
    asideLevels.append(levelsTitle);
    infoHeader.append(currentLevel);
    infoHeader.append(checkLevel);
    infoNavigation.append(previousLevel);
    infoNavigation.append(nextLevel);
    infoNavigation.append(hamburger);
    infoHeader.append(infoNavigation);
    asideInfo.append(infoHeader);
    aside.append(asideLevels);
    aside.append(asideInfo);
  }
}
