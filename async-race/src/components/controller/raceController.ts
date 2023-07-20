import { ButtonNames, Cars, Links, Methods } from '../types';
import { resetRace, startRace } from './eventer';
import Paginator from './paginator';

async function getCarsOnPage(page: number, event: string): Promise<void> {
  const method: string = Methods.get;
  try {
    const response: Response = await fetch(`${Links.baseLink}${Links.garage}?_page=${page}&_limit=${Links.limitCars}`, {
      method,
    });
    const data: Cars[] = await response.json();
    if (event === ButtonNames.race) startRace(data);
    if (event === ButtonNames.reset) resetRace(data);
  } catch (err: Error | unknown) {
    console.error(err);
  }
}

function eventRaceControl(target: HTMLElement): void {
  const isRaceStartButton: boolean = target.classList.contains('control__buttons_race');
  const isRaceResetButton: boolean = target.classList.contains('control__buttons_reset');
  const currentPage: number = Paginator.getCurrentPage('garage');
  if (isRaceStartButton) {
    getCarsOnPage(currentPage, ButtonNames.race);
  }
  if (isRaceResetButton) {
    getCarsOnPage(currentPage, ButtonNames.reset);
  }
}

export { getCarsOnPage, eventRaceControl };
