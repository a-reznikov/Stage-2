import { ButtonNames } from '../../types';
import createButton from './button';

export default function createForm(buttonName: string): HTMLFormElement {
  const form: HTMLFormElement = document.createElement('form');
  form.className = `form form_${buttonName} setup__form`;
  const inputName: HTMLInputElement = document.createElement('input');
  inputName.className = `form__input input__name_${buttonName}`;
  inputName.setAttribute('type', 'text');
  const inputColor: HTMLInputElement = document.createElement('input');
  inputColor.className = `form__input input__color_${buttonName}`;
  inputColor.setAttribute('type', 'color');
  const buttonForm: HTMLButtonElement = createButton('form', `${buttonName}`);
  if (buttonName === ButtonNames.update) {
    inputName.setAttribute('disabled', '');
    inputColor.setAttribute('disabled', '');
    buttonForm.setAttribute('disabled', '');
  }
  form.append(inputName);
  form.append(inputColor);
  form.append(buttonForm);
  return form;
}
