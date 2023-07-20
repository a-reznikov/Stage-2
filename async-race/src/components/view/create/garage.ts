import createPagination from './pagination';
import createSetup from './setup';

export default function createGarage(): HTMLElement {
  const garage: HTMLElement = document.createElement('section');
  garage.className = 'section garage';
  const winner: HTMLElement = document.createElement('div');
  winner.className = 'garage__winner winner winner_hidden';
  const setup: HTMLElement = createSetup();
  const title: HTMLElement = document.createElement('h1');
  title.className = 'garage__title';
  title.textContent = 'Garage (amount cars)';
  const page: HTMLElement = document.createElement('p');
  page.className = 'garage__page';
  page.textContent = 'Page # 1';
  const playground: HTMLElement = document.createElement('div');
  playground.className = 'garage__playground playground';
  const pagination: HTMLElement = createPagination('garage');
  garage.append(winner);
  garage.append(setup);
  garage.append(title);
  garage.append(page);
  garage.append(playground);
  garage.append(pagination);
  return garage;
}
