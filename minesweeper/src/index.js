import { creatTemplate } from './js/template';
import { creatCell } from './js/cell';

const quantityMines = 10;

function createMatrixBase(order) {
  let matrixOrder = 0;
  if (!order) {
    matrixOrder = 10;
  } else {
    matrixOrder = order;
  }
  const matrixBase = [];
  let i = 0;
  while (i < matrixOrder) {
    matrixBase[i] = [];
    for (let j = 0; j < matrixOrder;) {
      matrixBase[i].push(0);
      j += 1;
    }
    i += 1;
  }
  return matrixBase;
}

function getRandomPositions(positions) {
  const position = Math.floor(Math.random() * positions);
  return position;
}

function getPositionsMines(order) {
  const positions = order ** 2;
  const positionsMines = [];
  let tryGen = 0;
  while (positionsMines.length < quantityMines) {
    const randomPosition = getRandomPositions(positions);
    if (positionsMines.indexOf(randomPosition) === -1) {
      positionsMines.push(randomPosition);
    }
    tryGen += 1;
  }
  console.log('tryGen', tryGen);
  return positionsMines;
}

function createMatrixMines(matrixBase) {
  const matrixOrder = matrixBase.length;
  const positionsMines = getPositionsMines(matrixOrder);
  const matrixMines = matrixBase;
  for (let i = 0; i < positionsMines.length;) {
    const position = positionsMines[i];
    const codePosition = position / matrixOrder;
    const rowNumber = Math.floor(codePosition);
    const columnNumber = Math.round((codePosition - rowNumber) * matrixOrder);
    matrixMines[rowNumber][columnNumber] = 9;
    // console.log(`RowColumn${rowNumber}${columnNumber}`);
    i += 1;
  }
  console.log(positionsMines);
  console.log('matrixMines', matrixMines);
  return matrixMines;
}

function addNumbersToMatrix(matrixWhitMines) {
  const matrix = matrixWhitMines;
  const matrixOrder = matrix.length;
  for (let i = 0; i < matrixOrder;) {
    for (let j = 0; j < matrixOrder;) {
      if (matrix[i][j] === 9) {
        for (let r = -1; r <= 1;) {
          const row = i + r;
          for (let c = -1; c <= 1;) {
            const column = j + c;
            if (row >= 0 && row < matrixOrder && column >= 0 && column < matrixOrder) {
              if (matrix[row][column] !== 9) {
                matrix[row][column] += 1;
              }
            }
            c += 1;
          }
          r += 1;
        }
      }
      j += 1;
    }
    i += 1;
  }
  return matrix;
}

function getAmount() {
  const amountMines = document.querySelector('.mines');
  const amountTimes = document.querySelector('.times');
  amountMines.textContent = `${quantityMines}`.padStart(3, 0);
  amountTimes.textContent = '000';
}

function generateCells(matrix) {
  const playground = document.querySelector('.playground');
  const matrixOrder = matrix.length;
  for (let i = 0; i < matrixOrder;) {
    for (let j = 0; j < matrixOrder;) {
      playground.append(creatCell(matrix[i][j]));
      j += 1;
    }
    i += 1;
  }
}

function applyStyle(matrix) {
  const matrixOrder = matrix.length;
  const playground = document.querySelector('.playground');
  const wrapper = document.querySelector('.wrapper');
  playground.className = `playground playground_${matrixOrder}`;
  wrapper.className = `wrapper wrapper_${matrixOrder}`;
}

function isWin(order) {
  const cellsShow = document.querySelectorAll('.cell_show');
  const emoji = document.querySelector('.emoji');
  const amountShow = cellsShow.length;
  const needCellsForWin = order ** 2 - quantityMines;
  if (amountShow === needCellsForWin) {
    emoji.classList.add('win');
  }
}

function toggleFlag(cell) {
  const currentCell = cell;
  console.log(currentCell);
  const amountMines = document.querySelector('.mines');
  let currentAmountMines = +amountMines.textContent;
  if (currentCell.classList.contains('cell_flag')) {
    currentCell.classList.remove('cell_flag');
    currentAmountMines += 1;
    amountMines.textContent = `${currentAmountMines}`.padStart(3, 0);
  } else if (currentAmountMines > 0) {
    currentCell.classList.add('cell_flag');
    currentAmountMines -= 1;
    amountMines.textContent = `${currentAmountMines}`.padStart(3, 0);
  }
}

function searchPositionEmtyCell(event) {
  const cells = document.querySelectorAll('.cell');
  const arrCells = Array.from(cells);
  const position = arrCells.indexOf(event.target);
  return position;
}

function openNearbyCells(matrix, position, openedCell) {
  let openedCells = [];
  if (openedCell) {
    openedCells = openedCell;
  }
  openedCells.push(position);
  const cells = document.querySelectorAll('.cell');
  const matrixOrder = matrix.length;
  const codePosition = position / matrixOrder;
  const rowNumber = Math.floor(codePosition);
  const columnNumber = Math.round((codePosition - rowNumber) * matrixOrder);
  for (let r = -1; r <= 1;) {
    const row = rowNumber + r;
    for (let c = -1; c <= 1;) {
      const column = columnNumber + c;
      if (row >= 0 && row < matrixOrder && column >= 0 && column < matrixOrder) {
        if (!(row === rowNumber && column === columnNumber)) {
          const numberNearbyCell = row * matrixOrder + column;
          const nearbyCell = cells[numberNearbyCell];
          nearbyCell.classList.add('cell_show');
          if (nearbyCell.classList.contains('cell_flag')) {
            toggleFlag(nearbyCell);
          }
          if (nearbyCell.classList.contains('cell_empty') && openedCells.indexOf(numberNearbyCell) === -1) {
            openNearbyCells(matrix, numberNearbyCell, openedCells);
          }
        }
      }
      c += 1;
    }
    r += 1;
  }
}

function loseGame() {
  const cellMines = document.querySelectorAll('.cell_mine');
  const cellFlag = document.querySelectorAll('.cell_flag');
  const emoji = document.querySelector('.emoji');
  emoji.classList.remove('happy');
  emoji.classList.add('sad');
  cellMines.forEach((cell) => {
    if (!cell.classList.contains('cell_flag')) {
      cell.classList.add('cell_show');
    }
  });
  cellFlag.forEach((cell) => {
    if (!cell.classList.contains('cell_mine')) {
      cell.classList.remove('cell_flag');
      cell.classList.add('cell_flag-wrong');
    }
  });
}

function startGame() {
  creatTemplate();
  getAmount();
  const baseMatrix = createMatrixBase();
  const matrixMines = createMatrixMines(baseMatrix);
  const matrix = addNumbersToMatrix(matrixMines);
  const matrixOrder = matrix.length;
  generateCells(matrix);
  applyStyle(matrix);
  const playground = document.querySelector('.playground');

  function handlerUp(event) {
    const currentCell = event.target;
    currentCell.classList.remove('cell_open');
    if (event.button === 2) {
      console.log('Flag!');
      toggleFlag(currentCell);
    } else if (currentCell.classList.contains('cell_mine')) {
      currentCell.classList.add('exp');
      loseGame();
      playground.removeEventListener('mouseup', handlerUp);
    } else if (currentCell.classList.contains('cell_empty')) {
      currentCell.classList.add('cell_show');
      const position = searchPositionEmtyCell(event);
      openNearbyCells(matrix, position);
    } else if (currentCell.classList.contains('cell')) {
      currentCell.classList.add('cell_show');
    }
    isWin(matrixOrder);
  }

  function handlerContext(event) {
    event.preventDefault();
  }

  playground.addEventListener('mouseup', handlerUp);
  playground.addEventListener('contextmenu', handlerContext);
}

function cleanTemplate() {
  const body = document.querySelector('body');
  body.innerHTML = '';
}

function refreshGame() {
  cleanTemplate();
  startGame();
  const emoji = document.querySelector('.emoji');
  emoji.addEventListener('click', refreshGame);
}

window.onload = function load() {
  startGame();
  const emoji = document.querySelector('.emoji');
  emoji.addEventListener('click', refreshGame);
};
