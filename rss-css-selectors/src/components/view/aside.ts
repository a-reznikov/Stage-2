import { Constants } from '../types';
import createAsideInfo from './asideInfo';

export default function createAside(aside: HTMLElement): void {
  const asideLevels: HTMLElement = document.createElement('div');
  asideLevels.className = 'aside__levels levels';
  const levelsTitle: HTMLElement = document.createElement('h2');
  levelsTitle.className = 'levels__title';
  levelsTitle.textContent = Constants.asideTitle;
  const asideInfo: HTMLElement = createAsideInfo();
  if (aside) {
    asideLevels.append(levelsTitle);
    aside.append(asideLevels);
    aside.append(asideInfo);
  }
}
