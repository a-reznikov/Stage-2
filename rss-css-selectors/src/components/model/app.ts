import Controller from '../controller/controller';
import createTemplate from '../view/template';

class App {
  private controller: Controller = new Controller();

  public start(): void {
    createTemplate();

    const aside: HTMLElement | null = document.querySelector('.aside');
    const formButton: HTMLElement | null = document.querySelector('.form__button');
    const asideHiddenButton: HTMLElement | null = document.querySelector('.aside__button');
    if (aside) {
      aside.addEventListener('click', (e: MouseEvent): number => this.controller.getItems(e));
    }
    if (formButton) {
      formButton.addEventListener('click', (e: MouseEvent): void => this.controller.checkRequest(e));
    }
    if (asideHiddenButton) {
      asideHiddenButton.addEventListener('click', (e: MouseEvent): void => this.controller.toggleAside(e));
    }
  }
}
export default App;
