import { Help, Levels } from '../types';
import renderHelp from './help';
import { selectCurrentLevel } from '../model/statusLevel';

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

export { renderLevelInfo, renderHelpContainer };
