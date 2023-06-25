export default function createTemplate(): HTMLBodyElement | null {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) body.className = 'body';
  const header: HTMLHeadElement = document.createElement('header');
  header.className = 'header';
  const main: HTMLElement = document.createElement('main');
  main.className = 'main';
  const playground: HTMLElement = document.createElement('section');
  playground.className = 'playground';
  const display: HTMLElement = document.createElement('section');
  display.className = 'display';
  const plate: HTMLElement = document.createElement('plate');
  plate.className = 'plate';
  const pear: HTMLElement = document.createElement('pear');
  pear.className = 'pear';
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
  if (body) {
    interection.append(editor);
    interection.append(viewer);
    display.append(plate);
    display.append(pear);
    playground.append(display);
    playground.append(interection);
    main.append(playground);
    main.append(level);
    body.append(header);
    body.append(main);
    body.append(footer);
  }
  return body || null;
}
