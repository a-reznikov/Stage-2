export default function createHamburger(): HTMLElement {
  const hamburger: HTMLElement = document.createElement('div');
  hamburger.className = 'nav__hamburger hamburger';
  hamburger.setAttribute('id', 'burger');
  const hamburgerLineFirst: HTMLElement = document.createElement('span');
  hamburgerLineFirst.className = 'hamburger__line hamburger__line_cross';
  const hamburgerLineHidden: HTMLElement = document.createElement('span');
  hamburgerLineHidden.className = 'hamburger__line hamburger__line_hidden';
  const hamburgerLineLast: HTMLElement = document.createElement('span');
  hamburgerLineLast.className = 'hamburger__line hamburger__line_cross';
  hamburger.append(hamburgerLineFirst);
  hamburger.append(hamburgerLineHidden);
  hamburger.append(hamburgerLineLast);
  return hamburger;
}
