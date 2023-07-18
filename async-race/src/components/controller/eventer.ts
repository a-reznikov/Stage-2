import Car from '../model/car';
import renderTrack from '../view/render/track';

function deleteCar(): void {}

function createNewCar(name: string, color: string, id: number): void {
  const newCar: Car = new Car(name, color, id);
  console.log(newCar);
  newCar.createCar(newCar);
  renderTrack(newCar);
}

export { createNewCar, deleteCar };
