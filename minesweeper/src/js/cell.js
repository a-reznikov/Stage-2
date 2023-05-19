export function creatCell(cellValue) {
  const cell = document.createElement('button');
  cell.className = 'cell';
  switch (cellValue) {
    case 1:
      cell.className = 'cell cell_one';
      break;
    case 2:
      cell.className = 'cell cell_two';
      break;
    case 3:
      cell.className = 'cell cell_three';
      break;
    case 4:
      cell.className = 'cell cell_four';
      break;
    case 5:
      cell.className = 'cell cell_five';
      break;
    case 6:
      cell.className = 'cell cell_six';
      break;
    case 7:
      cell.className = 'cell cell_seven';
      break;
    case 8:
      cell.className = 'cell cell_eight';
      break;
    case 9:
      cell.className = 'cell cell_mine';
      break;
    default:
      cell.className = 'cell cell_empty';
  }
  if (cellValue !== 0 && cellValue !== 9) {
    cell.textContent = cellValue;
  }
  return cell;
}
