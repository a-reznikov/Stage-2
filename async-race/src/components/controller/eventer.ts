import Car from '../model/car';

function deleteCar(id: number): void {
  Car.deleteCar(id);
}

function createNewCar(name: string, color: string): void {
  const newCar: Car = new Car(name, color);
  newCar.createCar(newCar);
}

export { createNewCar, deleteCar };
