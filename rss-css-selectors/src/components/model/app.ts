import Controller from '../controller/controller';
import createTemplate from '../view/template';
import Generator from './generator';

class App {
  private controller: Controller = new Controller();

  private generator: Generator = new Generator();

  public start(): void {
    createTemplate();

    const aside: HTMLElement | null = document.querySelector('.aside');
    const formButton: HTMLElement | null = document.querySelector('.form__button');
    if (aside) {
      aside.addEventListener('click', (e: MouseEvent): number => this.controller.getItems(e));
    }
    if (formButton) {
      formButton.addEventListener('click', (e: MouseEvent): void => this.controller.checkResult(e));
    }
  }
}
export default App;
