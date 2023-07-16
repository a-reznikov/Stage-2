import createControlPanel from './controlPanel';

export default function createGarage(): HTMLElement {
  const garage: HTMLElement = document.createElement('section');
  garage.className = 'section garage';
  const controlPanel: HTMLElement = createControlPanel();
  garage.append(controlPanel);
  return garage;
}
