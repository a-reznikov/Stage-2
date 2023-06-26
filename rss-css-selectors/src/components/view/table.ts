export default function generateTable(): HTMLElement | null {
  const table: HTMLElement | null = document.querySelector('.table');
  const plate: HTMLElement = document.createElement('plate');
  plate.className = 'plate';
  const plateDark: HTMLElement = document.createElement('plate');
  plateDark.className = 'plate';
  plateDark.setAttribute('id', 'dark');
  const bento: HTMLElement = document.createElement('bento');
  bento.className = 'bento';
  const egg: HTMLElement = document.createElement('egg');
  egg.className = 'egg';
  const pear: HTMLElement = document.createElement('pear');
  pear.className = 'pear';
  const lemon: HTMLElement = document.createElement('lemon');
  lemon.className = 'lemon';
  if (table) {
    table.append(plate);
    table.append(plateDark);
    table.append(bento);
    table.append(egg);
    table.append(pear);
    bento.append(pear);
    table.append(lemon);
  }
  return table || null;
}
