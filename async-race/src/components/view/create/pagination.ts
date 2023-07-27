import { ButtonNames } from '../../types';
import createButton from './button';

export default function createPagination(section: string): HTMLElement {
  const pagination: HTMLDivElement = document.createElement('div');
  pagination.className = `${section}__pagination pagination`;
  const buttonPrevious: HTMLButtonElement = createButton('pagination', `${ButtonNames.previous}`);
  const buttonNext: HTMLButtonElement = createButton('pagination', `${ButtonNames.next}`);
  pagination.append(buttonPrevious);
  pagination.append(buttonNext);

  return pagination;
}
