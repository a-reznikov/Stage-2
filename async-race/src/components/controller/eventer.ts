import Car from '../model/car';
import Engine from '../model/engine';
import { Base, Cars, EngineStatus } from '../types';

function deleteCar(id: number): void {
  Car.deleteCar(id);
}

function createNewCar(name: string, color: string): void {
  const newCar: Car = new Car(name, color);
  newCar.createCar(newCar);
}

function updateOldCar(name: string, color: string, id: number): void {
  const oldCar: Car = new Car(name, color);
  Car.updateCar(oldCar, id);
}

function isInputs(target: HTMLElement): boolean {
  const inputName: HTMLInputElement | null = document.querySelector('.input__name_update');
  const inputColor: HTMLInputElement | null = document.querySelector('.input__color_update');
  if (target === inputName || target === inputColor) {
    return true;
  }
  return false;
}

function isControl(target: HTMLElement): boolean {
  let isControlButton: boolean = false;
  const controlButtons: NodeListOf<Element> = document.querySelectorAll('.control__buttons');
  controlButtons.forEach((button) => {
    if (target === button) {
      isControlButton = true;
    }
  });
  return isControlButton;
}

function isNavigation(target: HTMLElement): boolean {
  let isNavButton: boolean = false;
  const navButtons: NodeListOf<Element> = document.querySelectorAll('.nav__buttons');
  navButtons.forEach((button) => {
    if (target === button) {
      isNavButton = true;
    }
  });
  return isNavButton;
}

function toggleDiasbleUpdate(status: string, selectedCar?: Cars): void {
  const inputName: HTMLInputElement | null = document.querySelector('.input__name_update');
  const inputColor: HTMLInputElement | null = document.querySelector('.input__color_update');
  const buttonForm: HTMLButtonElement | null = document.querySelector('.form__buttons_update');
  if (inputName && inputColor && buttonForm) {
    if (status === 'enabled') {
      inputName.removeAttribute('disabled');
      inputColor.removeAttribute('disabled');
      buttonForm.removeAttribute('disabled');
      if (selectedCar) {
        inputName.value = selectedCar.name;
        inputColor.value = selectedCar.color;
      }
    }
    if (status === 'disabled') {
      inputName.setAttribute('disabled', '');
      inputColor.setAttribute('disabled', '');
      buttonForm.setAttribute('disabled', '');
      inputName.value = Base.name;
      inputColor.value = Base.color;
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

async function selectTrack(track: HTMLElement, id: number): Promise<void> {
  unselectTrack();
  track.classList.add('selected');
  const selectedCar: Cars = await Car.getCar(id);
  toggleDiasbleUpdate('enabled', selectedCar);
}

async function startDrive(id: number): Promise<void> {
  await Engine.eventEngine(id, EngineStatus.started);
}

async function stopDrive(id: number): Promise<void> {
  await Engine.eventEngine(id, EngineStatus.stopped);
}

async function startDriveRace(cars: Cars[]): Promise<void> {
  await Engine.eventEngineRace(cars, EngineStatus.started);
}

async function startRace(cars: Cars[]): Promise<void> {
  startDriveRace(cars);
}

async function resetRace(cars: Cars[]): Promise<void> {
  cars.forEach((car: Cars) => {
    if (car.id) {
      stopDrive(car.id);
    }
  });
}

export {
  deleteCar,
  createNewCar,
  updateOldCar,
  selectTrack,
  unselectTrack,
  isInputs,
  isControl,
  isNavigation,
  startDrive,
  stopDrive,
  startRace,
  resetRace,
};
