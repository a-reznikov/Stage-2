import createGarage from './garage';
import createWinners from './winners';

export default function createMain(): HTMLElement {
  const main: HTMLElement = document.createElement('main');
  main.className = 'main';
  const garage: HTMLElement = createGarage();
  const winners: HTMLElement = createWinners();
  main.append(garage);
  main.append(winners);
  return main;
}
