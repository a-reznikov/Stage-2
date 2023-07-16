import createSetup from './setup';

export default function createGarage(): HTMLElement {
  const garage: HTMLElement = document.createElement('section');
  garage.className = 'section garage';
  const setup: HTMLElement = createSetup();
  garage.append(setup);
  return garage;
}
