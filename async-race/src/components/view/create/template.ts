import createHeader from './header';
import createMain from './main';

export default function createTemplate(): HTMLBodyElement | null {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) body.className = 'body';
  const header: HTMLElement = createHeader();
  const main: HTMLElement = createMain();
  if (body) {
    body.append(header);
    body.append(main);
  }
  return body || null;
}
