import { creatTemplate } from './js/template';
import { creatCell } from './js/cell';
import clickSound from './assets/audio/click.mp3';
import ExploseSound from './assets/audio/mine-exp.mp3';
import FlagSound from './assets/audio/flag.mp3';
import WinSound from './assets/audio/win.mp3';
import LoseSound from './assets/audio/lose.mp3';

let quantityMines = 10;
let sizePlayground = 10;
let preSize = 10;
let counterTime = 0;
let counterFlag = 0;
let currentAmountMines = quantityMines - counterFlag;
let counterSteps = 0;
let isFirstClick = true;
let isLose = false;
let isWinner = false;
let isMute = false;
let haveSave = false;
let currentTheme = 'light';
let score = [];
let saved = {};
let savedGameToLs = {};

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
  const wrapper = document.querySelector('.wrapper');
  wrapper.className = `wrapper outer wrapper_${matrixOrder}`;
}

function openModal(event, nameSaveFirst, nameSaveSecond) {
  console.log(event);
  const modalOverlay = document.querySelector('.modal__wrapper');
  const modalTitle = document.querySelector('.modal__title');
  const modalSubTitleFirst = document.querySelector('.subtitle_first');
  const modalSubTitleSecond = document.querySelector('.subtitle_second');
  const modalSubTitleThird = document.querySelector('.subtitle_third');
  let modaTitle = '';
  let subTitleFirst = '';
  let subTitleSecond = '';
  let subTitleThird = '';
  modalOverlay.classList.add('modal__wrapper_overlay');
  if (event === 'Save') {
    modaTitle = 'The game has been saved!';
    subTitleFirst = nameSaveFirst;
  } else if (event === 'Load') {
    modaTitle = 'The game has been load!';
    subTitleFirst = nameSaveFirst;
  } else if (event === 'Not save') {
    modaTitle = 'You don\'t have a saved game';
    subTitleFirst = 'Use the Save Game before';
  } else if (event === 'Choose save') {
    modaTitle = 'Choose a saved game:';
    subTitleFirst = nameSaveFirst;
    if (haveSave) {
      subTitleSecond = nameSaveSecond;
    } else {
      subTitleSecond = 'No saved game yet';
    }
    subTitleThird = 'Start New Game';
  } else if (event === 'Win') {
    modaTitle = `You ${event}! Time: ${counterTime} sec, Steps:  ${counterSteps}`;
    subTitleFirst = 'You\'re a real genius!';
  } else {
    modaTitle = `You ${event}! Time: ${counterTime} sec, Steps:  ${counterSteps}`;
    subTitleFirst = 'Try again!';
  }

  modalTitle.textContent = modaTitle;
  modalSubTitleFirst.textContent = subTitleFirst;
  modalSubTitleSecond.textContent = subTitleSecond;
  modalSubTitleThird.textContent = subTitleThird;
}

function closeModal() {
  const modalOverlay = document.querySelector('.modal__wrapper');
  const modal = document.querySelector('.modal');
  modalOverlay.classList.remove('modal__wrapper_overlay');
  modal.classList.remove('modal__save');
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
      console.log('ClearTimer');
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
    openModal('Win');
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
  openModal('Lose');
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
  if (isMute) {
    volume.classList.remove('volume_mute');
    isMute = false;
  } else {
    volume.classList.add('volume_mute');
    activeSoundClick();
    isMute = true;
  }
}

function toggleTheme() {
  const theme = document.querySelector('.theme');
  const wrapper = document.querySelector('.wrapper');
  if (currentTheme === 'light') {
    theme.classList.add('theme_dark');
    wrapper.classList.add('wrapper_dark');
    currentTheme = 'dark';
  } else {
    theme.classList.remove('theme_dark');
    wrapper.classList.remove('wrapper_dark');
    currentTheme = 'light';
  }
}

function saveGame(hoSave) {
  let hoSaveGame = '';
  const playground = document.querySelector('.playground');
  const now = new Date();
  const date = now.toLocaleString();
  haveSave = true;
  if (hoSave === 'usersInitSave') {
    hoSaveGame = 'The player saved the game';
    saved.name = `${hoSaveGame}: ${date}`;
    saved.quantityMines = quantityMines;
    console.log(sizePlayground);
    saved.sizePlayground = sizePlayground;
    saved.counterTime = counterTime;
    saved.counterFlag = counterFlag;
    saved.currentAmountMines = currentAmountMines;
    saved.counterSteps = counterSteps;
    saved.isFirstClick = isFirstClick;
    saved.isLose = isLose;
    saved.isWinner = isWinner;
    saved.isMute = isMute;
    saved.haveSave = haveSave;
    saved.currentTheme = currentTheme;
    saved.score = score;
    saved.html = playground.innerHTML;
    console.log(saved);
    openModal('Save', saved.name);
  } else if (hoSave === 'autoSave') {
    hoSaveGame = 'Auto save game';
    savedGameToLs.name = `${hoSaveGame}: ${date}`;
    savedGameToLs.quantityMines = quantityMines;
    savedGameToLs.sizePlayground = sizePlayground;
    savedGameToLs.counterTime = counterTime;
    savedGameToLs.counterFlag = counterFlag;
    savedGameToLs.currentAmountMines = currentAmountMines;
    savedGameToLs.counterSteps = counterSteps;
    savedGameToLs.isFirstClick = isFirstClick;
    savedGameToLs.isLose = isLose;
    savedGameToLs.isWinner = isWinner;
    savedGameToLs.isMute = isMute;
    savedGameToLs.haveSave = haveSave;
    savedGameToLs.currentTheme = currentTheme;
    savedGameToLs.score = score;
    savedGameToLs.html = playground.innerHTML;
    console.log('AutoSave', savedGameToLs);
    openModal('Save', savedGameToLs.name);
  }
}

function loadGame(dateSave, eventClose) {
  const wrapper = document.querySelector('.wrapper');
  const playground = document.querySelector('.playground');
  const inputMines = document.querySelector('.quantity-mines');
  const size = document.querySelector('.size');
  const volume = document.querySelector('.volume');
  const theme = document.querySelector('.theme');
  const amountMines = document.querySelector('.mines');
  const amountFlags = document.querySelector('.flags');
  const amountSteps = document.querySelector('.steps');
  const amountTimes = document.querySelector('.times');

  if (eventClose) {
    closeModal();
  }

  if (haveSave) {
    playground.innerHTML = dateSave.html;
    quantityMines = dateSave.quantityMines;
    sizePlayground = dateSave.sizePlayground;
    counterTime = dateSave.counterTime;
    counterFlag = dateSave.counterFlag;
    currentAmountMines = dateSave.currentAmountMines;
    counterSteps = dateSave.counterSteps;
    isFirstClick = dateSave.isFirstClick;
    isLose = dateSave.isLose;
    isWinner = dateSave.isWinner;
    isMute = dateSave.isMute;
    haveSave = dateSave.haveSave;
    currentTheme = dateSave.currentTheme;
    score = dateSave.score;
    wrapper.className = `wrapper outer wrapper_${sizePlayground}`;

    inputMines.value = quantityMines;
    if (sizePlayground === 10) {
      size.selectedIndex = 1;
    } else if (sizePlayground === 15) {
      size.selectedIndex = 2;
    } else {
      size.selectedIndex = 3;
    }
    if (isMute) {
      volume.classList.add('volume_mute');
    } else {
      volume.classList.remove('volume_mute');
      activeSoundClick();
    }
    if (currentTheme === 'light') {
      theme.classList.remove('theme_dark');
    } else {
      theme.classList.add('theme_dark');
      currentTheme = 'dark';
    }
    amountMines.textContent = `${currentAmountMines}`.padStart(3, 0);
    amountFlags.textContent = `${counterFlag}`.padStart(3, 0);
    amountSteps.textContent = `${counterSteps}`.padStart(3, 0);
    amountTimes.textContent = `${counterTime}`.padStart(3, 0);
    startTimer();
    openModal('Load', dateSave.name);
  } else {
    openModal('Not save');
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
  activeSoundClick();
  console.log('<============================REFRESH');
}

function newGame(eventClose) {
  if (eventClose) {
    closeModal();
    console.log('Click');
  }
  sizePlayground = preSize;
  refreshGame(sizePlayground);
}

function chooseGame(autoSave, playerSave) {
  const modal = document.querySelector('.modal');
  modal.classList.add('modal__save');
  const nameAutoSave = autoSave.name;
  const namePlayerSave = playerSave.name;
  openModal('Choose save', nameAutoSave, namePlayerSave);
}

window.onload = function load() {
  creatTemplate();
  getAmount();
  const selectSize = document.querySelector('.size');
  sizePlayground = selectSize.value;

  selectSize.addEventListener('change', () => {
    preSize = selectSize.value;
    activeSoundClick();
  });

  const inputMines = document.querySelector('.quantity-mines');
  inputMines.addEventListener('change', () => {
    activeSoundClick();
    if (inputMines.value < 10) {
      quantityMines = 10;
      inputMines.value = quantityMines;
    } else if (inputMines.value > 99) {
      quantityMines = 99;
      inputMines.value = quantityMines;
    } else {
      quantityMines = inputMines.value;
    }
  });

  const baseMatrix = createMatrixBase(sizePlayground);
  const matrixMines = createMatrixMines(baseMatrix);
  const matrix = addNumbersToMatrix(matrixMines);
  let currentMatrix = [];
  generateCells(matrix);
  applyStyle(matrix);
  const emoji = document.querySelector('.emoji');
  const volume = document.querySelector('.volume');
  const buttonNewGame = document.querySelector('.button_new-game');
  const buttonSaveGame = document.querySelector('.button_save');
  const buttonLoadGame = document.querySelector('.button_load');
  const buttonModalClose = document.querySelector('.button__modal_close');
  const buttonModalAutoSave = document.querySelector('.button__modal_save-auto');
  const buttonModalSavePalyer = document.querySelector('.button__modal_save-player');
  const buttonModalNewGame = document.querySelector('.button__modal_new-game');
  const buttonTheme = document.querySelector('.theme');
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
  buttonNewGame.addEventListener('click', newGame);
  buttonModalClose.addEventListener('click', closeModal);
  buttonModalAutoSave.addEventListener('click', () => loadGame(savedGameToLs, 'closeModal'));
  buttonModalSavePalyer.addEventListener('click', () => loadGame(saved, 'closeModal'));
  buttonModalNewGame.addEventListener('click', () => newGame('closeModal'));
  buttonSaveGame.addEventListener('click', () => saveGame('usersInitSave'));
  buttonLoadGame.addEventListener('click', () => loadGame(saved));
  volume.addEventListener('click', toggleMute);
  buttonTheme.addEventListener('click', toggleTheme);
};

function getLocalStorage() {
  if (localStorage.getItem('autoSavedGameToLs')) {
    const autoSavedGameFromLs = JSON.parse(localStorage.getItem('autoSavedGameToLs'));
    const playerSavedGameFromLs = JSON.parse(localStorage.getItem('playerSavedGameToLs'));
    savedGameToLs = autoSavedGameFromLs;
    saved = playerSavedGameFromLs;
    haveSave = savedGameToLs.haveSave;
    console.log(saved.name);
    console.log(savedGameToLs.name);
    chooseGame(savedGameToLs, saved);
  }
}
window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
  saveGame('autoSave');
  localStorage.setItem('autoSavedGameToLs', JSON.stringify(savedGameToLs));
  localStorage.setItem('playerSavedGameToLs', JSON.stringify(saved));
}
window.addEventListener('beforeunload', setLocalStorage);
