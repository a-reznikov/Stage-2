import data from '../../json/level.json';
import Generator from '../model/generator';
import nextLevel from './changeLevel';

const minLevel: number = 1;
const maxLevel: number = data.length;

function isLevel(request: string): boolean {
  const newLevel: number = +request;
  return !!newLevel && newLevel >= minLevel && newLevel <= maxLevel;
}

function isAnswer(request: string): void {
  const currentLevel: number = Generator.level + 1;
  let isRightAnswer: boolean = false;
  const rightAnswer: NodeListOf<Element> = document.querySelectorAll(`.selected`);
  const answer: NodeListOf<Element> = document.querySelectorAll(`${request}`);
  for (let index = 0; index < answer.length; ) {
    if (answer[index] !== rightAnswer[index]) {
      isRightAnswer = false;
      break;
    } else {
      isRightAnswer = true;
    }
    index += 1;
  }
  if (isRightAnswer && request !== '.selected') {
    nextLevel(currentLevel);
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
