import { getCarId, getCarProperties, getTrack } from './getter';
import { ButtonNames } from '../types';
import { deleteCar, isInputs, selectTrack, startDrive, unselectTrack } from './eventer';

class Controller {
  public idSelectedCar: number = 0;

  public eventDelegate(event: MouseEvent): void {
    const target: HTMLElement = <HTMLElement>event.target;
    const createButton: HTMLElement | null = document.querySelector('.form__buttons_create');
    const isRemoveButton: boolean = target.classList.contains('settings__buttons_remove');
    const isSelectButton: boolean = target.classList.contains('settings__buttons_select');
    const isUpdateButton: boolean = target.classList.contains('form__buttons_update');
    const isStartButton: boolean = target.classList.contains('engine-control__buttons_start');
    const isSetupInputs: boolean = isInputs(target);
    if (target === createButton) {
      event.preventDefault();
      getCarProperties(`${ButtonNames.create}`, this.idSelectedCar);
    }
    if (isRemoveButton) {
      deleteCar(getCarId(target));
      getTrack(target)?.remove();
    }
    if (isSelectButton) {
      const track: HTMLElement | null = getTrack(target);
      if (track) selectTrack(track);
      this.idSelectedCar = getCarId(target);
    } else if (!isSetupInputs) {
      unselectTrack();
    }
    if (isUpdateButton) {
      event.preventDefault();
      getCarProperties(`${ButtonNames.update}`, this.idSelectedCar);
    }
    if (isStartButton) {
      startDrive(getCarId(target));
    }
  }
}

export default Controller;
