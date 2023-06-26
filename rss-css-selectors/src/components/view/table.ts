export default function renderTable(item: HTMLElement): HTMLElement | null {
  const tableTop: HTMLElement | null = document.querySelector('.table__top');
  if (tableTop) {
    tableTop.append(item);
  }
  return tableTop || null;
}
