import { ButtonNames } from '../../types';
import createButton from './button';
import createForm from './form';

export default function createSetup(): HTMLElement {
  const setup: HTMLElement = document.createElement('div');
  setup.className = 'garage__setup setup';
  const formCreate: HTMLFormElement = createForm(ButtonNames.create);
  const formUpdate: HTMLFormElement = createForm(ButtonNames.update);
  const control: HTMLElement = document.createElement('div');
  control.className = 'setup__control control';
  const buttonRace: HTMLButtonElement = createButton('control', `${ButtonNames.race}`);
  const buttonReset: HTMLButtonElement = createButton('control', `${ButtonNames.reset}`);
  const buttonGenerate: HTMLButtonElement = createButton('control', `${ButtonNames.generate}`);
  control.append(buttonRace);
  control.append(buttonReset);
  control.append(buttonGenerate);
  setup.append(formCreate);
  setup.append(formUpdate);
  setup.append(control);
  return setup;
}
