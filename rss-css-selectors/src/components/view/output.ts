import highlightElement from './highlight';

export default function createOutput(): HTMLElement {
  const inputLabel: HTMLElement = document.createElement('label');
  inputLabel.className = 'form__label';
  inputLabel.setAttribute('for', 'solution');
  inputLabel.setAttribute('placeholder', 'Type in a CSS selector');
  const outCode: HTMLElement = document.createElement('div');
  outCode.className = 'label__out-code language-css hljs';
  inputLabel.append(outCode);
  highlightElement(outCode);
  return inputLabel;
}
