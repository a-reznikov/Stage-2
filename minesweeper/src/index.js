import { creatTemplate } from './js/template';

const quantityMines = 10;

function createMatrixBase(order) {
  let matrixOrder = 0;
  if (!order) {
    matrixOrder = 10;
  } else {
    matrixOrder = order;
  }
  const matrixBase = [];
  for (let i = 0; i < matrixOrder - 1;) {
    matrixBase[i] = [];
    for (let j = 0; j < matrixOrder;) {
      matrixBase[i].push(0);
      j += 1;
    }
    matrixBase.push(matrixBase[i]);
    i += 1;
  }
  console.log(matrixBase);
  return matrixBase;
}

function getRandomPositions(positions) {
  const position = Math.floor(Math.random() * positions);
  console.log(position);
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
    i += 1;
    matrixMines[rowNumber][columnNumber] = 9;
  }
  console.log(positionsMines);
  console.log(matrixMines);
}

window.onload = function load() {
  creatTemplate();
  createMatrixMines(createMatrixBase());
};
