import { Help, Levels } from '../types';
import renderHelp from './help';
import { exportLevel, selectCurrentLevel } from '../model/statusLevel';

function renderCurrentCheckLevel(levelId: number): void {
  const checkLevel: HTMLElement | null = document.querySelector('.info__check-level');
  const satatus: Partial<Storage> = exportLevel();
  console.log(satatus);
  if (levelId in satatus) {
    if (satatus[levelId].passed && checkLevel) {
      checkLevel.classList.add('passed');
    }
  } else if (checkLevel) checkLevel.classList.remove('passed');
}

function renderLevelInfo(level: Levels): void {
  const taskTitle: HTMLElement | null = document.querySelector('.task');
  const infoCurrentLevel: HTMLElement | null = document.querySelector('.info__current-level');
  const { task } = level;
  const { levelId } = level;
  selectCurrentLevel(levelId);
  if (taskTitle && infoCurrentLevel) {
    taskTitle.innerHTML = '';
    taskTitle.textContent = task;
    infoCurrentLevel.innerHTML = '';
    infoCurrentLevel.textContent = `Level ${levelId} of 10`;
    renderCurrentCheckLevel(levelId);
  }
}

function renderHelpContainer(help: Help): void {
  const helpContainer: HTMLElement | null = document.querySelector('.help');
  if (helpContainer) {
    helpContainer.innerHTML = '';
    const helpWrapper: HTMLElement = renderHelp(help);
    helpContainer.append(helpWrapper);
  }
}

export { renderLevelInfo, renderHelpContainer, renderCurrentCheckLevel };
