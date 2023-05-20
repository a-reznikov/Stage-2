export function creatCell(cellValue) {
  const cell = document.createElement('button');
  switch (cellValue) {
    case 1:
      cell.className = 'cell cell_one cell_close';
      break;
    case 2:
      cell.className = 'cell cell_two cell_close';
      break;
    case 3:
      cell.className = 'cell cell_three cell_close';
      break;
    case 4:
      cell.className = 'cell cell_four cell_close';
      break;
    case 5:
      cell.className = 'cell cell_five cell_close';
      break;
    case 6:
      cell.className = 'cell cell_six cell_close';
      break;
    case 7:
      cell.className = 'cell cell_seven cell_close';
      break;
    case 8:
      cell.className = 'cell cell_eight cell_close';
      break;
    case 9:
      cell.className = 'cell cell_mine cell_close';
      break;
    default:
      cell.className = 'cell cell_empty cell_close';
  }
  if (cellValue !== 0 && cellValue !== 9) {
    cell.textContent = cellValue;
  }
  return cell;
}
