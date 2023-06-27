import { Constants } from '../types';

export default function createAside(aside: HTMLElement): void {
  const asideTitle: HTMLElement = document.createElement('h2');
  asideTitle.className = 'aside__title';
  asideTitle.textContent = Constants.asideTitle;
  if (aside) {
    aside.append(asideTitle);
  }
}
