export function creatCell(cellValue) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.textContent = cellValue;
  return cell;
}
