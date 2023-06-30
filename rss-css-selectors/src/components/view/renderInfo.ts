import { Help, Levels } from '../types';
import renderHelp from './help';

function renderLevelInfo(level: Levels): void {
  const taskTitle: HTMLElement | null = document.querySelector('.task');
  const { task } = level;
  if (taskTitle) {
    taskTitle.innerHTML = '';
    taskTitle.textContent = task;
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
