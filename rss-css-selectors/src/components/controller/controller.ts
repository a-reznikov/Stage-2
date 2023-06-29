import Generator from '../model/generator';
import { isAnswer, isLevel } from './checkResult';
import writeAnswer from './writer';

class Controller {
  private indexLevel: number = 0;

  public getItems(event: MouseEvent): number {
    const target: HTMLElement | null = <HTMLElement>event.target;
    const level: HTMLElement | null = target.closest('.level');
    if (level) {
      const levelId: string | null = level.getAttribute('id');
      if (levelId) {
        this.indexLevel = +levelId;
        Generator.generateItems(this.indexLevel);
      }
    }
    return this.indexLevel;
  }

  public checkRequest(event: MouseEvent): void {
    event.preventDefault();
    const input: HTMLInputElement | null = document.querySelector('.form__input');
    let request: string = '';
    if (input) {
      request = input.value;
    }
    const requestIsLevel: boolean = isLevel(request);
    if (request === 'help') {
      writeAnswer();
    } else if (requestIsLevel) {
      console.log('requestIsLevel', requestIsLevel);
      Generator.generateItems(+request);
    } else {
      isAnswer(request);
    }
  }
}

export default Controller;
