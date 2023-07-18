import { getCarId, getCarProperties, getTrack } from './getter';
import { ButtonNames } from '../types';
import { deleteCar } from './eventer';

class Controller {
  public eventDelegate(event: MouseEvent): void {
    const target: HTMLElement = <HTMLElement>event.target;
    const createButton: HTMLElement | null = document.querySelector('.form__buttons_create');
    const isRemoveButton: boolean = target.classList.contains('settings__buttons_remove');
    if (target === createButton) {
      event.preventDefault();
      getCarProperties(`${ButtonNames.create}`);
    }
    if (isRemoveButton) {
      deleteCar(getCarId(target));
      getTrack(target)?.remove();
    }
  }
}

export default Controller;
