export default function generateTable(): HTMLElement | null {
  const tableTop: HTMLElement | null = document.querySelector('.table__top');
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
  if (tableTop) {
    tableTop.append(plate);
    tableTop.append(plateDark);
    tableTop.append(bento);
    tableTop.append(egg);
    tableTop.append(pear);
    bento.append(pear);
    tableTop.append(lemon);
  }
  return tableTop || null;
}
