import { Status } from '../types';
import renderStatusLevels from '../view/renderStatus';
import checkRightAnswer from '../view/checkRightAnswer';

let statusLevels: Partial<Storage> = {};
function selectCurrentLevel(levelId: number): number {
  const allLevels: NodeListOf<Element> = document.querySelectorAll('.level');
  const CurrentLevel: HTMLElement | null = document.getElementById(`${levelId}`);
  allLevels.forEach((element) => {
    element.classList.remove('level_current');
  });
  if (CurrentLevel) {
    CurrentLevel.classList.add('level_current');
  }
  return levelId;
}

function addPassedLevel(levelId: number): void {
  if (levelId in statusLevels) {
    statusLevels[levelId].passed = true;
  } else {
    const currentPassedLevel: Partial<Status> = {};
    currentPassedLevel.passed = true;
    statusLevels[levelId] = currentPassedLevel;
  }
  checkRightAnswer(levelId, 'passed');
}

function addWithHelpLevel(levelId: number): void {
  if (levelId in statusLevels) {
    statusLevels[levelId].passed = true;
    statusLevels[levelId].withHelp = true;
  } else {
    const currentPassedLevel: Partial<Status> = {};
    currentPassedLevel.passed = true;
    currentPassedLevel.withHelp = true;
    statusLevels[levelId] = currentPassedLevel;
  }
  console.log(levelId);
  checkRightAnswer(levelId, 'with-help');
}

function reloadFromStorage(fromStorage: Partial<Storage>): void {
  statusLevels = fromStorage;
  renderStatusLevels(fromStorage);
}

function exportLevel(): Partial<Storage> {
  return statusLevels;
}

function resetProgress(): Partial<Storage> {
  statusLevels = {};
  return statusLevels;
}

export { selectCurrentLevel, addPassedLevel, exportLevel, reloadFromStorage, addWithHelpLevel, resetProgress };
