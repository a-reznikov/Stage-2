import { ButtonNames, Cars, Links, Methods } from '../types';
import { resetRace, startRace } from './eventer';

async function getCarsOnPage(page: number, event: string): Promise<void> {
  const method: string = Methods.get;
  try {
    const response: Response = await fetch(`${Links.baseLink}${Links.garage}?_page=${page}&_${Links.limitCars}`, {
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
  if (isRaceStartButton) {
    const currentPage: number = 1; // TODO it will be implemented together with pagination, by getting the current page.
    getCarsOnPage(currentPage, ButtonNames.race);
  }
  if (isRaceResetButton) {
    const currentPage: number = 1; // TODO it will be implemented together with pagination, by getting the current page.
    getCarsOnPage(currentPage, ButtonNames.reset);
  }
}

export { getCarsOnPage, eventRaceControl };
