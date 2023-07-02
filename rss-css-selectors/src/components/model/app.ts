import Controller from '../controller/controller';
import Navigator from '../controller/navigator';
import createTemplate from '../view/template';

class App {
  private controller: Controller = new Controller();

  private navigator: Navigator = new Navigator();

  public start(level?: number): void {
    createTemplate(level);

    const aside: HTMLElement | null = document.querySelector('.aside');
    const formButton: HTMLElement | null = document.querySelector('.form__button');
    const asideHiddenButton: HTMLElement | null = document.querySelector('.aside__button');
    const navigation: HTMLElement | null = document.querySelector('.nav');
    if (aside) {
      aside.addEventListener('click', (e: MouseEvent): number => this.controller.getItems(e));
    }
    if (formButton) {
      formButton.addEventListener('click', (e: MouseEvent): void => this.controller.checkRequest(e));
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
