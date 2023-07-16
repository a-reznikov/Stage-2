import createPagination from './pagination';
import createSetup from './setup';
import createTrack from './track';

export default function createGarage(): HTMLElement {
  const garage: HTMLElement = document.createElement('section');
  garage.className = 'section garage';
  const setup: HTMLElement = createSetup();
  const title: HTMLElement = document.createElement('h1');
  title.className = 'garage__title';
  title.textContent = 'Garage (amount cars)';
  const page: HTMLElement = document.createElement('p');
  page.className = 'garage__page';
  page.textContent = 'Page # 1';
  const playground: HTMLElement = document.createElement('div');
  playground.className = 'garage__playground';
  const track: HTMLElement = createTrack();
  const pagination: HTMLElement = createPagination();
  playground.append(track);
  garage.append(setup);
  garage.append(title);
  garage.append(page);
  garage.append(playground);
  garage.append(pagination);
  return garage;
}
