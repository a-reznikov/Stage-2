import Generator from '../model/generator';
import createAside from './aside';
import createEditor from './editor';
import createFooter from './footer';
import createInterection from './interection';
import createTable from './table';
import { createViewer } from './viewer';

export default function createTemplate(level?: number): HTMLBodyElement | null {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) body.className = 'body';
  const main: HTMLElement = document.createElement('main');
  main.className = 'main';
  const playground: HTMLElement = document.createElement('section');
  playground.className = 'playground';
  const asideHiddeButton: HTMLElement = document.createElement('div');
  asideHiddeButton.className = 'aside__button';
  const taskTitle: HTMLElement = document.createElement('h1');
  taskTitle.className = 'task';
  const table: HTMLElement = document.createElement('section');
  table.className = 'table';
  const interection: HTMLElement = createInterection();
  const aside: HTMLElement = document.createElement('aside');
  aside.className = 'aside';
  const footer: HTMLElement = document.createElement('footer');
  footer.className = 'footer';
  createTable(table);
  createAside(aside);
  createFooter(footer);
  if (body) {
    playground.append(asideHiddeButton);
    playground.append(taskTitle);
    playground.append(table);
    playground.append(interection);
    playground.append(footer);
    main.append(playground);
    main.append(aside);
    body.append(main);
  }
  createEditor();
  createViewer();
  Generator.generateLevels();
  Generator.generateItems(level);
  return body || null;
}
