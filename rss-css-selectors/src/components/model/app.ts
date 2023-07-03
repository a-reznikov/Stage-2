import Controller from '../controller/controller';
import delegateEventClick from '../controller/eventDelegator';
import Navigator from '../controller/navigator';
import transmitCode from '../controller/transmitter';
import createTemplate from '../view/template';

class App {
  private controller: Controller = new Controller();

  private navigator: Navigator = new Navigator();

  public start(level?: number): void {
    createTemplate(level);

    const aside: HTMLElement | null = document.querySelector('.aside');
    const levels: HTMLElement | null = document.querySelector('.levels');
    const formButton: HTMLElement | null = document.querySelector('.form__button');
    const asideHiddenButton: HTMLElement | null = document.querySelector('.aside__button');
    const navigation: HTMLElement | null = document.querySelector('.nav');
    const input: HTMLElement | null = document.querySelector('.form__input');
    if (levels) {
      levels.addEventListener('click', (e: MouseEvent): number => this.controller.getItems(e));
    }
    if (aside) {
      aside.addEventListener('click', (e: MouseEvent): void => delegateEventClick(e));
    }
    if (formButton) {
      formButton.addEventListener('click', (e: MouseEvent): void => this.controller.checkRequest(e));
    }
    if (input) {
      input.addEventListener('input', (): void => transmitCode());
    }
    if (asideHiddenButton) {
      asideHiddenButton.addEventListener('click', (e: MouseEvent): void => this.controller.toggleAside(e));
    }
    if (navigation) {
      navigation.addEventListener('click', (e: MouseEvent): void => this.navigator.chooseNavButton(e));
    }
  }
}
export default App;
