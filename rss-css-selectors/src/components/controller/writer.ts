import Generator from '../model/generator';
import highlightElement from '../view/highlight';
import { nextLevel } from './changeLevel';
import data from '../../json/level.json';
import callRightAnswer from './rightAnswer';

export default function writeAnswer(): void {
  const currentLevel: number = Generator.getLevel();
  const indexLevel: number = currentLevel - 1;
  const input: HTMLInputElement | null = document.querySelector('.form__input');
  const output: HTMLElement | null = document.querySelector('.label__out-code');
  const text: string = data[indexLevel].answer;
  const { length } = text;
  const speedWrite: number = 500;
  let step: number = 0;
  const increment: number = 1;
  callRightAnswer();
  const interval: NodeJS.Timer = setInterval(function IntervalAnsver() {
    if (step === length) {
      nextLevel(currentLevel);
      clearInterval(interval);
    }
    if (input && output) {
      input.value = text.slice(0, step);
      input.focus();
      output.textContent = text.slice(0, step);
      highlightElement(output);
    }
    step += increment;
  }, speedWrite);
}
