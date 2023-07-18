import { Cars } from '../../types';

export default function updateTrack(car: Cars, id: number): void {
  const carIco: HTMLElement | null = document.getElementById(`${id}`);
  if (carIco) {
    const track: HTMLElement | null = carIco.closest('.track');
    console.log(track);
    if (track) {
      const carName: HTMLSpanElement | null = track.querySelector('.track__car-name');
      console.log(carName);
      if (carName) {
        carName.textContent = `${car.name}`;
        carIco.style.background = car.color;
      }
    }
  }
}
