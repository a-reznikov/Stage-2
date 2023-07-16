export default function createButton(parent: string, buttonName: string): HTMLButtonElement {
  const className: string = buttonName.split(' ').join('-');
  const button: HTMLButtonElement = document.createElement('button');
  button.className = `buttons ${parent}__buttons ${parent}__buttons_${className}`;
  button.textContent = `${buttonName.toUpperCase()}`;
  return button;
}
