import Car from '../model/car';

function deleteCar(id: number): void {
  Car.deleteCar(id);
}

function createNewCar(name: string, color: string): void {
  const newCar: Car = new Car(name, color);
  newCar.createCar(newCar);
}

function isInputs(target: HTMLElement): boolean {
  const inputName: HTMLInputElement | null = document.querySelector('.input__name_update');
  const inputColor: HTMLInputElement | null = document.querySelector('.input__color_update');
  if (target === inputName || target === inputColor) {
    return true;
  }
  return false;
}

function toggleDiasbleUpdate(status: string): void {
  const inputName: HTMLInputElement | null = document.querySelector('.input__name_update');
  const inputColor: HTMLInputElement | null = document.querySelector('.input__color_update');
  const buttonForm: HTMLButtonElement | null = document.querySelector('.form__buttons_update');
  if (inputName && inputColor && buttonForm) {
    if (status === 'enabled') {
      inputName.removeAttribute('disabled');
      inputColor.removeAttribute('disabled');
      buttonForm.removeAttribute('disabled');
    }
    if (status === 'disabled') {
      inputName.setAttribute('disabled', '');
      inputColor.setAttribute('disabled', '');
      buttonForm.setAttribute('disabled', '');
    }
  }
}

function unselectTrack(): void {
  const selectedTrack: HTMLElement | null = document.querySelector('.selected');
  if (selectedTrack) {
    selectedTrack.classList.remove('selected');
  }
  toggleDiasbleUpdate('disabled');
}

function selectTrack(track: HTMLElement): void {
  unselectTrack();
  track.classList.add('selected');
  toggleDiasbleUpdate('enabled');
}

export { createNewCar, deleteCar, selectTrack, unselectTrack, isInputs };
