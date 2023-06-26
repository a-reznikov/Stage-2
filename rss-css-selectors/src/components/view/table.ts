export default function createTable(table: HTMLElement): void {
  const tableTop: HTMLElement = document.createElement('div');
  tableTop.className = 'table__top';
  const tableLegs: HTMLElement = document.createElement('div');
  tableLegs.className = 'table__legs';
  if (table) {
    table.append(tableTop);
    table.append(tableLegs);
  }
}
