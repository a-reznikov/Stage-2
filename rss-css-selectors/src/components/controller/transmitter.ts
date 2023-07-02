import highlightElement from '../view/highlight';

export default function transmitCode(): void {
  const inputCode: HTMLInputElement | null = document.querySelector('.form__input');
  const outputCode: HTMLInputElement | null = document.querySelector('.label__out-code');
  if (inputCode && outputCode) {
    outputCode.textContent = inputCode.value;
    highlightElement(outputCode);
  }
}
