import { ButtonNames, Links } from '../types';
import Car from '../model/car';

function getCarInfo(): void {}

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

// public getTotalCount(): number {
//   return this.amountCars;
// }

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
    const newCar: Car = new Car(nameCar, colorCar, newCarId);
    console.log(newCar);
    newCar.createCar(newCar);
  }
}

export { getCarProperties, getCarInfo };
