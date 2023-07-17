import { getCarProperties } from './getter';
import { ButtonNames } from '../types';

class Controller {
  public eventDelegate(event: MouseEvent): void {
    const target: HTMLElement = <HTMLElement>event.target;
    const createButton: HTMLElement | null = document.querySelector('.form__buttons_create');
    if (target === createButton) {
      event.preventDefault();
      getCarProperties(`${ButtonNames.create}`);
    }
  }
}

export default Controller;
