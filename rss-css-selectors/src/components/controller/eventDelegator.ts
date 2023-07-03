import Generator from '../model/generator';
import { addWithHelpLevel, resetProgress } from '../model/statusLevel';
import { renderCurrentCheckLevel } from '../view/renderInfo';
import renderStatusLevels from '../view/renderStatus';
import writeAnswer from './writer';

export default function delegateEventClick(event: MouseEvent): void {
  const resetButton: HTMLElement | null = document.querySelector('.levels__button');
  const helpButton: HTMLElement | null = document.querySelector('.help__button');
  const button: HTMLElement = <HTMLElement>event.target;
  if (resetButton && resetButton.contains(button)) {
    const resetStorage: Partial<Storage> = resetProgress();
    Generator.generateItems(1);
    renderStatusLevels(resetStorage);
  } else if (helpButton && helpButton.contains(button)) {
    const currentLevel: number = Generator.getLevel();
    addWithHelpLevel(currentLevel);
    renderCurrentCheckLevel(currentLevel);
    writeAnswer();
  }
}
