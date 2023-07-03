import Generator from '../model/generator';
import { addPassedLevel } from '../model/statusLevel';
import { nextLevel } from './changeLevel';

export default function callRightAnswer(): void {
  const rightAnswer: NodeListOf<Element> = document.querySelectorAll(`.selected`);
  rightAnswer.forEach((element) => {
    element.classList.remove('selected');
    element.classList.add('right-answer');
    console.log(element);
  });
  const currentLevel: number = Generator.getLevel();
  const speedWrite: number = 250;
  let step: number = 0;
  const length: number = 2;
  const increment: number = 1;
  const interval: NodeJS.Timer = setInterval(function IntervalAnsver() {
    if (step === length) {
      nextLevel(currentLevel);
      addPassedLevel(currentLevel);
      clearInterval(interval);
    }
    step += increment;
  }, speedWrite);
}
