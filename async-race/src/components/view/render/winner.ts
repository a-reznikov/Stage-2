import { Cars, Winners } from '../../types';

export default function renderWinner(car: Cars, winner: Winners, position: number): void {
  const scoreBody: HTMLElement | null = document.querySelector('.score__body');
  const number: HTMLSpanElement = document.createElement('span');
  number.className = `body__number`;
  number.textContent = `${position}`;
  const carIco: HTMLDivElement = document.createElement('div');
  carIco.className = 'track__car track__car_body';
  carIco.style.background = car.color;
  const carBrand: HTMLSpanElement = document.createElement('span');
  carBrand.className = `body__car-brand`;
  carBrand.textContent = `${car.name}`;
  const wins: HTMLSpanElement = document.createElement('span');
  wins.className = `body__wins`;
  wins.textContent = `${winner.wins}`;
  const time: HTMLSpanElement = document.createElement('span');
  time.className = `body__time`;
  time.textContent = `${winner.time}`;

  if (scoreBody) {
    scoreBody.append(number);
    scoreBody.append(carIco);
    scoreBody.append(carBrand);
    scoreBody.append(wins);
    scoreBody.append(time);
  }
}
