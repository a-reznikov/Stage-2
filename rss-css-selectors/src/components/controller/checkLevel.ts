import data from '../../json/level.json';
import Generator from '../model/generator';

function isLevel(request: string): boolean {
  const newLevel: number = +request;
  const minLevel: number = 1;
  const maxLevel: number = data.length;
  console.log(newLevel);
  console.log(maxLevel);
  if (newLevel && newLevel >= minLevel && newLevel <= maxLevel) {
    return true;
  }
  return false;
}

function isAnswer(request: string): void {
  const currentLevel: number = 0;
  const rightAnswer: string | undefined = data[currentLevel].answer;
  if (request === rightAnswer) {
    const nextLevel: number = currentLevel + 2;
    Generator.generateItems(nextLevel);
  } else {
    const interection: HTMLElement | null = document.querySelector('.interection');
    if (interection) {
      interection.classList.add('shake');
      interection.addEventListener('animationend', () => {
        interection.classList.remove('shake');
      });
    }
  }
}

export { isLevel, isAnswer };
