import { Cars } from '../types';
import renderTrack from '../view/render/track';

export default function generateCars(cars: Cars[]): void {
  cars.forEach((car: Cars): void => {
    renderTrack(car);
  });
}
