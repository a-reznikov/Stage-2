import Generator from '../model/generator';
import createAside from './aside';
import createEditor from './editor';
import createInterection from './interection';
import createTable from './table';
import { createViewer } from './viewer';

export default function createTemplate(): HTMLBodyElement | null {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) body.className = 'body';
  const header: HTMLHeadElement = document.createElement('header');
  header.className = 'header';
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
  if (body) {
    playground.append(header);
    playground.append(asideHiddeButton);
    playground.append(taskTitle);
    playground.append(table);
    playground.append(interection);
    main.append(playground);
    main.append(aside);
    body.append(main);
    body.append(footer);
  }
  createEditor();
  createViewer();
  Generator.generateItems();
  Generator.generateLevels();
  return body || null;
}
