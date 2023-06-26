import generatItems from '../model/generator';
import createTable from './table';

export default async function createTemplate(): Promise<void> {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) body.className = 'body';
  const header: HTMLHeadElement = document.createElement('header');
  header.className = 'header';
  const main: HTMLElement = document.createElement('main');
  main.className = 'main';
  const playground: HTMLElement = document.createElement('section');
  playground.className = 'playground';
  const table: HTMLElement = document.createElement('section');
  table.className = 'table';
  const interection: HTMLElement = document.createElement('section');
  interection.className = 'playground__interection interection';
  const editor: HTMLElement = document.createElement('section');
  editor.className = 'interection__editor editor';
  const viewer: HTMLElement = document.createElement('section');
  viewer.className = 'interection__viewer viewer';
  const level: HTMLElement = document.createElement('aside');
  level.className = 'level';
  const footer: HTMLElement = document.createElement('footer');
  footer.className = 'footer';
  createTable(table);
  if (body) {
    interection.append(editor);
    interection.append(viewer);
    playground.append(table);
    playground.append(interection);
    main.append(playground);
    main.append(level);
    body.append(header);
    body.append(main);
    body.append(footer);
  }
  generatItems();
  // return body || null;
}
