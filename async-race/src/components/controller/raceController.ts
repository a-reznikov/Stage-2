import { ButtonNames } from '../types';
import Loader from './loader';

export default function eventRaceControl(target: HTMLElement): void {
  const isRaceStartButton: boolean = target.classList.contains('control__buttons_race');
  const isRaceResetButton: boolean = target.classList.contains('control__buttons_reset');
  if (isRaceStartButton) {
    const currentPage: number = 1; // TODO it will be implemented together with pagination, by getting the current page.
    Loader.getCarsOnPage(currentPage, ButtonNames.race);
  }
  if (isRaceResetButton) {
    const currentPage: number = 1; // TODO it will be implemented together with pagination, by getting the current page.
    Loader.getCarsOnPage(currentPage, ButtonNames.reset);
  }
}
