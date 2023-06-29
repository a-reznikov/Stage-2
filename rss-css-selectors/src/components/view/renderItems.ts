export default function renderItems(item: HTMLElement, parent?: HTMLElement): void {
  const tableTop: HTMLElement | null = document.querySelector('.table__top');
  if (parent) {
    parent.append(item);
  } else if (tableTop) {
    tableTop.append(item);
  }
}
