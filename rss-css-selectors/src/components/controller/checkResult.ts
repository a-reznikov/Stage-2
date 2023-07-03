import data from '../../json/level.json';
import callRightAnswer from './rightAnswer';
import shakeTable from './shaker';

const minLevel: number = 1;
const maxLevel: number = data.length;

function isLevel(request: string): boolean {
  const newLevel: number = +request;
  return !!newLevel && newLevel >= minLevel && newLevel <= maxLevel;
}

function isAnswer(request: string): void {
  let isRightAnswer: boolean = false;
  if (Number.isInteger(+request[0])) {
    shakeTable();
    return;
  }
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
    console.log(rightAnswer);
    callRightAnswer();
  } else {
    shakeTable();
  }
}

export { isLevel, isAnswer };
