import { creatTemplate } from './js/template';
import { creatCell } from './js/cell';
import clickSound from './assets/audio/click.mp3';
import ExploseSound from './assets/audio/mine-exp.mp3';
import FlagSound from './assets/audio/flag.mp3';
import WinSound from './assets/audio/win.mp3';
import LoseSound from './assets/audio/lose.mp3';

let quantityMines = 10;
let sizePlayground = 10;
let counterTime = 0;
let counterFlag = 0;
let currentAmountMines = quantityMines - counterFlag;
let counterSteps = 0;
let isFirstClick = true;
let isLose = false;
let isWinner = false;
const score = [];
let isMute = false;

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
  const amountFlags = document.querySelector('.flags');
  const amountSteps = document.querySelector('.steps');
  const amountTimes = document.querySelector('.times');
  amountMines.textContent = `${quantityMines}`.padStart(3, 0);
  amountFlags.textContent = `${counterFlag}`.padStart(3, 0);
  amountTimes.textContent = '000';
  amountSteps.textContent = '000';
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

function generateScore() {
  const scoreList = document.querySelector('.score');
  scoreList.innerHTML = '';
  scoreList.textContent = 'Last 10 games won!';
  let index = 0;
  score.forEach((element) => {
    index += 1;
    const lastResult = document.createElement('li');
    lastResult.className = 'results';
    lastResult.textContent = `${index}. ${element}`;
    scoreList.append(lastResult);
  });
}

function applyStyle(matrix) {
  const matrixOrder = matrix.length;
  const playground = document.querySelector('.playground');
  const wrapper = document.querySelector('.wrapper');
  playground.className = `playground inter playground_${matrixOrder}`;
  wrapper.className = `wrapper outer wrapper_${matrixOrder}`;
}

function soundPlay(currentSound) {
  const sound = currentSound;
  if (isMute) {
    sound.volume = 0;
  } else {
    sound.volume = 1;
  }
  sound.play();
}

function startTimer() {
  const amountTimes = document.querySelector('.times');
  const intervalId = setInterval(() => {
    if (isLose || isFirstClick || isWinner) {
      clearInterval(intervalId);
    } else {
      counterTime += 1;
      amountTimes.textContent = `${counterTime}`.padStart(3, 0);
    }
  }, 1000);
}

function writeScore() {
  const resultDate = `Winner Time: ${counterTime} sec, Steps:  ${counterSteps}`;
  if (score.length === 10) {
    score.pop();
  }
  score.unshift(resultDate);
  generateScore();
  console.log(score);
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
    console.log('You win, your time:', counterTime, 'sec');
    console.log('You win, counterSteps:', counterSteps, 'steps');
    writeScore();
    const sound = new Audio(WinSound);
    soundPlay(sound);
    isWinner = true;
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
  const amountFlags = document.querySelector('.flags');
  console.log(currentAmountMines);
  if (currentCell.classList.contains('cell_close')) {
    const sound = new Audio(FlagSound);
    soundPlay(sound);
    if (currentCell.classList.contains('cell_flag')) {
      currentCell.classList.remove('cell_flag');
      counterFlag -= 1;
      currentAmountMines = quantityMines - counterFlag;
      amountMines.textContent = `${currentAmountMines}`.padStart(3, 0);
      amountFlags.textContent = `${counterFlag}`.padStart(3, 0);
    } else {
      currentCell.classList.add('cell_flag');
      counterFlag += 1;
      currentAmountMines = quantityMines - counterFlag;
      amountMines.textContent = `${currentAmountMines}`.padStart(3, 0);
      amountFlags.textContent = `${counterFlag}`.padStart(3, 0);
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
  const sound = new Audio(ExploseSound);
  soundPlay(sound);
  const soundLose = new Audio(LoseSound);
  soundPlay(soundLose);
  counterTime = 0;
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

function countSteps() {
  const amountSteps = document.querySelector('.steps');
  counterSteps += 1;
  amountSteps.textContent = `${counterSteps}`.padStart(3, 0);
}

function activeSoundClick() {
  const sound = new Audio(clickSound);
  soundPlay(sound);
}

function toggleMute() {
  const volume = document.querySelector('.volume');
  volume.classList.toggle('volume_mute');
  if (isMute) {
    isMute = false;
  } else {
    isMute = true;
  }
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
  counterTime = 0;
  counterFlag = 0;
  counterSteps = 0;
  const emoji = document.querySelector('.emoji');
  emoji.className = 'emoji happy';
  restartGame(size);
  getAmount();
  isFirstClick = true;
  isWinner = false;
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

  const inputMines = document.querySelector('.quantity-mines');
  inputMines.addEventListener('change', () => {
    if (inputMines.value < 10) {
      quantityMines = 10;
      inputMines.value = quantityMines;
    } else if (inputMines.value > 99) {
      quantityMines = 99;
      inputMines.value = quantityMines;
    } else {
      quantityMines = inputMines.value;
    }
    console.log(quantityMines);
    refreshGame(sizePlayground);
  });

  const baseMatrix = createMatrixBase(sizePlayground);
  const matrixMines = createMatrixMines(baseMatrix);
  const matrix = addNumbersToMatrix(matrixMines);
  let currentMatrix = [];
  generateCells(matrix);
  applyStyle(matrix);
  const emoji = document.querySelector('.emoji');
  const volume = document.querySelector('.volume');
  const playground = document.querySelector('.playground');

  function firstClick(event, curMatrix, holdPosition) {
    const cells = document.querySelectorAll('.cell');
    let positionHoldCell = 0;
    startTimer();
    cells.forEach((cell) => {
      if (positionHoldCell === holdPosition) {
        const currentCell = cell;
        if (event.button === 2) {
          toggleFlag(currentCell);
        } else if (currentCell.classList.contains('cell_empty')) {
          countSteps();
          activeSoundClick();
          showCell(currentCell);
          openNearbyCells(curMatrix, holdPosition);
        } else if (currentCell.classList.contains('cell')) {
          countSteps();
          activeSoundClick();
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
      countSteps();
      if (currentCell.classList.contains('cell_mine')) {
        currentCell.classList.add('exp');
        loseGame();
        isLose = true;
      } else if (currentCell.classList.contains('cell_empty')) {
        activeSoundClick();
        showCell(currentCell);
        const position = searchPositionEmtyCell(event);
        openNearbyCells(currentMatrix, position);
      } else if (currentCell.classList.contains('cell')) {
        activeSoundClick();
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
  volume.addEventListener('click', toggleMute);
};
