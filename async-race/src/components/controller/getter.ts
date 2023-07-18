import { ButtonNames, Links } from '../types';
import { createNewCar } from './eventer';

function getCarId(target: HTMLElement): number {
  let carId: number = 0;
  const track: HTMLElement | null = target.closest('.track');
  if (track) {
    const car: HTMLElement | null = track.querySelector('.car');
    if (car) {
      carId = Number(car.getAttribute('id'));
    }
  }
  return carId;
}

async function getTotalCount(): Promise<number> {
  let amountCars: number = 0;
  const method: string = 'GET';
  try {
    const response: Response = await fetch(`${Links.baseLink}${Links.garage}?_limit=7`, { method });
    amountCars = Number(response.headers.get('X-Total-Count'));
  } catch (err: Error | unknown) {
    console.error(err);
  }
  return amountCars;
}

async function getCarProperties(event: string): Promise<void> {
  let nameCar: string = '';
  let colorCar: string = '';
  const inputNameCreate: HTMLInputElement | null = document.querySelector('.input__name_create');
  if (inputNameCreate) {
    nameCar = inputNameCreate.value;
  }
  const inputColorCreate: HTMLInputElement | null = document.querySelector('.input__color_create');
  if (inputColorCreate) {
    colorCar = inputColorCreate.value;
  }
  if (event === ButtonNames.create) {
    const amount: number = await getTotalCount();
    const newCarId: number = amount + 1;
    createNewCar(nameCar, colorCar, newCarId);
  }
}

export { getCarProperties, getCarId };
