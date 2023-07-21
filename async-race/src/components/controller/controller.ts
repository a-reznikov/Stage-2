import { getCarId, getCarProperties } from './getter';
import { ButtonNames } from '../types';
import { isControl, isNavigation } from './eventer';
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
    const isControlButton: boolean = isControl(target);
    const isNav: boolean = isNavigation(target);
    if (target.closest('.track')) {
      Controller.setIdSelectedCar(getCarId(target));
      eventTrack(target);
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
  }
}

export default Controller;
