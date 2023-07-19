import { Cars } from '../types';
import renderTrack from '../view/render/track';

export default function generateCars(cars: Cars[]): void {
  const playground: HTMLElement | null = document.querySelector('.playground');
  if (playground) {
    playground.innerHTML = '';
  }
  cars.forEach((car: Cars): void => {
    renderTrack(car);
  });
}
