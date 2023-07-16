import { ButtonNames } from '../../types';
import createForm from './form';

export default function createControlPanel(): HTMLElement {
  const controlPanel: HTMLElement = document.createElement('div');
  controlPanel.className = 'garage__control-panel control-panel';
  const formCreate: HTMLFormElement = createForm(ButtonNames.create);
  const formUpdate: HTMLFormElement = createForm(ButtonNames.update);
  controlPanel.append(formCreate);
  controlPanel.append(formUpdate);
  return controlPanel;
}
