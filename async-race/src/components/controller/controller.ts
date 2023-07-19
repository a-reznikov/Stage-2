import { getCarId, getCarProperties } from './getter';
import { ButtonNames } from '../types';
import { isControl } from './eventer';
import eventRaceControl from './raceController';
import eventTrack from './trackController';

class Controller {
  public static idSelectedCar: number = 0;

  public currentPage: number = 0;

  public static setidSelectedCar(id: number): void {
    this.idSelectedCar = id;
  }

  public eventDelegate(event: MouseEvent): void {
    const target: HTMLElement = <HTMLElement>event.target;
    const createButton: HTMLElement | null = document.querySelector('.form__buttons_create');
    const isUpdateButton: boolean = target.classList.contains('form__buttons_update');
    const isControlButton: boolean = isControl(target);
    if (target.closest('.track')) {
      Controller.setidSelectedCar(getCarId(target));
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
      eventRaceControl(target);
    }
  }
}

export default Controller;
