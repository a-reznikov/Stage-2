import Generator from '../model/generator';

class Controller {
  private indexLevel: number = 0;

  public getItems(event: MouseEvent): number {
    const target: HTMLElement | null = <HTMLElement>event.target;
    const level: HTMLElement | null = target.closest('.level');
    if (level) {
      const levelId: string | null = level.getAttribute('id');
      if (levelId) {
        this.indexLevel = +levelId - 1;
        Generator.generateItems(this.indexLevel);
      }
    }
    return this.indexLevel;
  }

  public checkResult(event: MouseEvent): void {
    event.preventDefault();
    const input: HTMLInputElement | null = document.querySelector('.form__input');
    const text: string = 'answer';
    let step: number = 0;
    const int = setInterval(function IntervalAnsver() {
      if (step === text.length) {
        clearInterval(int);
      }
      if (input) input.value = text.slice(0, step); // Текст от начала до текущей позиции
      step += 1;
    }, 500);
  }
}

export default Controller;
