import { Levels } from '../types';

export default function renderPlayground(level: Levels): void {
  const taskTitle: HTMLElement | null = document.querySelector('.task');
  const { task } = level;
  if (taskTitle) {
    taskTitle.innerHTML = '';
    taskTitle.textContent = task;
  }
}
