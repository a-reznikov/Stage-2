import { creatTemplate } from './js/template';
import { creatCell } from './js/cell';

const quantityMines = 10;
let sizePlayground = 10;
let isFirstClick = true;
let isLose = false;

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

function getPositionsMines(order, holdPosition) {
  const positions = order ** 2;
  const positionsMines = [];
  while (positionsMines.length < quantityMines) {
    const randomPosition = getRandomPositions(positions);
    if (positionsMines.indexOf(randomPosition) === -1 && randomPosition !== holdPosition) {
      positionsMines.push(randomPosition);
    }
  }
  return positionsMines;
}

function createMatrixMines(matrixBase, holdPosition) {
  console.log('holdPosition', holdPosition);
  const matrixOrder = matrixBase.length;
  const positionsMines = getPositionsMines(matrixOrder, holdPosition);
  const matrixMines = matrixBase;
  for (let i = 0; i < positionsMines.length;) {
    const position = positionsMines[i];
    const codePosition = position / matrixOrder;
    const rowNumber = Math.floor(codePosition);
    const columnNumber = Math.round((codePosition - rowNumber) * matrixOrder);
    matrixMines[rowNumber][columnNumber] = 9;
    i += 1;
  }
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
  const cellMines = document.querySelectorAll('.cell_mine');
  const emoji = document.querySelector('.emoji');
  let amountShow = 0;
  cellsShow.forEach((cell) => {
    if (!cell.classList.contains('cell_mine')) {
      amountShow += 1;
    }
  });
  const needCellsForWin = order ** 2 - quantityMines;
  if (amountShow === needCellsForWin) {
    emoji.classList.add('win');
    cellMines.forEach((cell) => {
      if (cell.classList.contains('cell_mine')) {
        cell.classList.add('cell_flag');
      }
    });
  }
}

function showCell(cell) {
  const currentCell = cell;
  if (!currentCell.classList.contains('cell_flag')) {
    currentCell.classList.remove('cell_close');
    currentCell.classList.add('cell_show');
  }
}

function toggleFlag(cell) {
  const currentCell = cell;
  const amountMines = document.querySelector('.mines');
  let currentAmountMines = +amountMines.textContent;
  if (currentCell.classList.contains('cell_close')) {
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
          showCell(nearbyCell);
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
  const cellsClose = document.querySelectorAll('.cell_close');
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
      cell.classList.remove('cell_close');
      cell.classList.add('cell_flag-wrong');
    }
  });
  cellsClose.forEach((cell) => {
    cell.classList.remove('cell_close');
    cell.classList.add('cell_blocked');
  });
  isFirstClick = true;
}

function cleanPlayground() {
  const playground = document.querySelector('.playground');
  playground.innerHTML = '';
}

function restartGame(size, holdPosition) {
  console.log('_____________________ReSTART_____________________');
  cleanPlayground();
  const baseMatrix = createMatrixBase(size);
  const matrixMines = createMatrixMines(baseMatrix, holdPosition);
  const matrix = addNumbersToMatrix(matrixMines);
  generateCells(matrix);
  applyStyle(matrix);
  return matrix;
}

function refreshGame(size) {
  console.log('REFRESH============================>');
  restartGame(size);
  getAmount();
  isFirstClick = true;
  isLose = false;
  console.log('<============================REFRESH');
}

window.onload = function load() {
  creatTemplate();
  getAmount();
  const selectSize = document.querySelector('.size');
  sizePlayground = selectSize.value;
  console.log(sizePlayground);
  selectSize.addEventListener('change', () => {
    sizePlayground = selectSize.value;
    console.log(sizePlayground);
    refreshGame(sizePlayground);
  });
  const baseMatrix = createMatrixBase(sizePlayground);
  const matrixMines = createMatrixMines(baseMatrix);
  const matrix = addNumbersToMatrix(matrixMines);
  let currentMatrix = [];
  generateCells(matrix);
  applyStyle(matrix);
  const emoji = document.querySelector('.emoji');
  const playground = document.querySelector('.playground');

  function firstClick(event, curMatrix, holdPosition) {
    const cells = document.querySelectorAll('.cell');
    let positionHoldCell = 0;
    cells.forEach((cell) => {
      if (positionHoldCell === holdPosition) {
        const currentCell = cell;
        if (event.button === 2) {
          toggleFlag(currentCell);
        } else if (currentCell.classList.contains('cell_empty')) {
          showCell(currentCell);
          openNearbyCells(curMatrix, holdPosition);
        } else if (currentCell.classList.contains('cell')) {
          showCell(currentCell);
        }
        isWin(sizePlayground);
      }
      positionHoldCell += 1;
    });
  }

  function handlerUp(event) {
    const currentCell = event.target;
    const isFlag = currentCell.classList.contains('cell_flag');
    const isClose = currentCell.classList.contains('cell_close');
    if (isFirstClick) {
      const positionHold = searchPositionEmtyCell(event);
      currentMatrix = restartGame(sizePlayground, positionHold);
      firstClick(event, currentMatrix, positionHold);
    } else if (event.button === 2) {
      toggleFlag(currentCell);
    } else if (!isFlag && isClose && !isLose) {
      if (currentCell.classList.contains('cell_mine')) {
        currentCell.classList.add('exp');
        loseGame();
        isLose = true;
      } else if (currentCell.classList.contains('cell_empty')) {
        showCell(currentCell);
        const position = searchPositionEmtyCell(event);
        openNearbyCells(currentMatrix, position);
      } else if (currentCell.classList.contains('cell')) {
        showCell(currentCell);
      }
      isWin(sizePlayground);
    }
    isFirstClick = false;
  }

  function handlerContext(event) {
    event.preventDefault();
  }

  playground.addEventListener('mouseup', handlerUp);
  playground.addEventListener('contextmenu', handlerContext);

  emoji.addEventListener('click', () => refreshGame(sizePlayground));
};
