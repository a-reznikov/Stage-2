import { Order, Pages, Sorted } from '../types';
import changeBySort from '../view/render/sort';
import Loader from './loader';
import Paginator from './paginator';

function sortWinners(sort: string, order: string): void {
  const page: number = Paginator.getCurrentPage(`${Pages.winners}`);
  Loader.getWinners(page, sort, order);
  changeBySort(sort, order);
}

function isSorted(target: HTMLElement): boolean {
  return target.classList.contains('sorted');
}

function sortedAsc(target: HTMLElement): boolean {
  return target.classList.contains(`order_${Order.asc}`);
}

function eventSort(target: HTMLElement): void {
  const isWinsSort: boolean = target.classList.contains('header__wins');
  const isTimeSort: boolean = target.classList.contains('header__time');
  if (isSorted(target)) {
    if (sortedAsc(target)) {
      if (isWinsSort) sortWinners(Sorted.wins, Order.desc);
      if (isTimeSort) sortWinners(Sorted.time, Order.desc);
    } else {
      if (isWinsSort) sortWinners(Sorted.wins, Order.asc);
      if (isTimeSort) sortWinners(Sorted.time, Order.asc);
    }
  } else {
    if (isWinsSort) sortWinners(Sorted.wins, Order.asc);
    if (isTimeSort) sortWinners(Sorted.time, Order.asc);
  }
}

export { eventSort, sortWinners };
