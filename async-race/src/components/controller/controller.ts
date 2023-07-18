import { getCarId, getCarProperties } from './getter';
import { ButtonNames } from '../types';

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
      getCarId(target);
    }
  }
}

export default Controller;
