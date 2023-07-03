import { Constants } from '../types';
import highlightElement from './highlight';
import createOutput from './output';

export default function createEditor(): void {
  const field: HTMLElement | null = document.querySelector('.editor__field');
  const form: HTMLFormElement = document.createElement('form');
  form.className = 'editor__form form';
  const inputLine: HTMLInputElement = document.createElement('input');
  inputLine.className = 'form__input language-css hljs';
  inputLine.setAttribute('type', 'text');
  inputLine.setAttribute('id', 'solution');
  inputLine.setAttribute('placeholder', 'Type in a CSS selector');
  highlightElement(inputLine);
  const inputButton: HTMLInputElement = document.createElement('input');
  inputButton.className = 'form__button buttons';
  inputButton.setAttribute('type', 'submit');
  inputButton.setAttribute('value', 'enter');
  const inputLabel: HTMLElement = createOutput();
  const description: HTMLDivElement = document.createElement('div');
  description.className = 'editor__description';
  description.innerHTML = Constants.descriptionEditor;
  const help: HTMLDivElement = document.createElement('div');
  help.className = 'editor__help';
  help.innerHTML = Constants.helpEditor;
  const skip: HTMLDivElement = document.createElement('div');
  skip.className = 'editor__skip';
  skip.innerHTML = Constants.skipEditor;

  if (field) {
    form.append(inputLine);
    form.append(inputButton);
    form.append(inputLabel);
    field.append(form);
    field.append(description);
    field.append(help);
    field.append(skip);
  }
}
