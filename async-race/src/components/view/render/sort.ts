import { Sorted } from '../../types';

export default function changeBySort(sort: string, order: string): void {
  const winsSort: HTMLElement | null = document.querySelector('.header__wins');
  const timeSort: HTMLElement | null = document.querySelector('.header__time');

  if (winsSort && timeSort) {
    winsSort.className = 'header__wins score__buttons';
    timeSort.className = 'header__time score__buttons';
    if (sort === Sorted.wins) {
      winsSort.classList.add(`order_${order}`);
      winsSort.classList.add(`sorted`);
    } else {
      timeSort.classList.add(`order_${order}`);
      timeSort.classList.add(`sorted`);
    }
  }
}
