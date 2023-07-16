import createHeader from './header';
import createMain from './main';

export default function createTemplate(): HTMLBodyElement | null {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) body.className = 'body';
  const header: HTMLElement = createHeader();
  const main: HTMLElement = createMain();
  const footer: HTMLElement = document.createElement('footer');
  footer.className = 'footer';
  if (body) {
    body.append(header);
    body.append(main);
    body.append(footer);
  }
  return body || null;
}
