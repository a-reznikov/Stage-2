export default function renderItems(item: HTMLElement, parent?: HTMLElement): HTMLElement | null {
  const tableTop: HTMLElement | null = document.querySelector('.table__top');
  if (parent) {
    parent.append(item);
  } else if (tableTop) {
    tableTop.append(item);
  }
  return tableTop || null;
}
