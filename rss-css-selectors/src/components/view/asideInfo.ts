import createHamburger from './hamburger';

export default function createAsideInfo(): HTMLElement {
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
  const help: HTMLElement = document.createElement('div');
  help.className = 'info__help help';
  infoHeader.append(currentLevel);
  infoHeader.append(checkLevel);
  infoNavigation.append(previousLevel);
  infoNavigation.append(nextLevel);
  infoNavigation.append(hamburger);
  infoHeader.append(infoNavigation);
  asideInfo.append(infoHeader);
  asideInfo.append(help);
  return asideInfo;
}
