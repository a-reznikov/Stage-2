import Generator from '../model/generator';
import createAside from './aside';
import createTable from './table';

export default function createTemplate(): void {
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
  const aside: HTMLElement = document.createElement('aside');
  aside.className = 'aside';
  const footer: HTMLElement = document.createElement('footer');
  footer.className = 'footer';
  createTable(table);
  createAside(aside);
  if (body) {
    interection.append(editor);
    interection.append(viewer);
    playground.append(table);
    playground.append(interection);
    main.append(playground);
    main.append(aside);
    body.append(header);
    body.append(main);
    body.append(footer);
  }
  Generator.generateItems();
  Generator.generateLevels();
}
