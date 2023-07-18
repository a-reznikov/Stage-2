import { getCarId, getCarProperties, getTrack } from './getter';
import { ButtonNames } from '../types';
import { deleteCar, isInputs, selectTrack, unselectTrack } from './eventer';
import Loader from './loader';

class Controller {
  public eventDelegate(event: MouseEvent): void {
    const target: HTMLElement = <HTMLElement>event.target;
    const createButton: HTMLElement | null = document.querySelector('.form__buttons_create');
    const isRemoveButton: boolean = target.classList.contains('settings__buttons_remove');
    const isSelectButton: boolean = target.classList.contains('settings__buttons_select');
    const updateButton: boolean = target.classList.contains('form__buttons_update');
    const isSetupInputs: boolean = isInputs(target);
    if (target === createButton) {
      event.preventDefault();
      getCarProperties(`${ButtonNames.create}`);
    }
    if (isRemoveButton) {
      deleteCar(getCarId(target));
      getTrack(target)?.remove();
    }
    if (isSelectButton) {
      const track: HTMLElement | null = getTrack(target);
      if (track) selectTrack(track);
      Loader.getCar(getCarId(target));
    } else if (!isSetupInputs) {
      unselectTrack();
    }
    if (updateButton) {
    }
  }
}

export default Controller;
