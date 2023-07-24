import { getCarId, getCarProperties } from './getter';
import { ButtonNames } from '../types';
import { isControl, isInputs, isNavigation, unselectTrack } from './eventer';
import { eventControlButton } from './raceController';
import eventTrack from './trackController';
import Paginator from './paginator';
import changeSection from '../view/render/section';
import { eventSort } from './sorter';

class Controller {
  public static idSelectedCar: number = 0;

  public currentPage: number = 1;

  public static setIdSelectedCar(id: number): void {
    this.idSelectedCar = id;
  }

  public eventDelegate(event: MouseEvent): void {
    const target: HTMLElement = <HTMLElement>event.target;
    const createButton: HTMLElement | null = document.querySelector('.form__buttons_create');
    const isUpdateButton: boolean = target.classList.contains('form__buttons_update');
    const isSelectButton: boolean = target.classList.contains('settings__buttons_select');
    const isControlButton: boolean = isControl(target);
    const isNav: boolean = isNavigation(target);
    const isSetupInputs: boolean = isInputs(target);
    if (target.closest('.track')) {
      const carId: number = getCarId(target);
      Controller.setIdSelectedCar(carId);
      eventTrack(target, carId);
    }
    if (target === createButton) {
      event.preventDefault();
      getCarProperties(`${ButtonNames.create}`, Controller.idSelectedCar);
    }
    if (isUpdateButton) {
      event.preventDefault();
      getCarProperties(`${ButtonNames.update}`, Controller.idSelectedCar);
    }
    if (isControlButton) {
      eventControlButton(target);
    }
    if (isNav) {
      changeSection(target);
    }
    if (target.closest('.pagination')) {
      Paginator.eventPagination(target);
    }
    if (target.closest('.score__buttons')) {
      eventSort(target);
    }
    if (!isSetupInputs && !isSelectButton) {
      unselectTrack();
    }
  }
}

export default Controller;
