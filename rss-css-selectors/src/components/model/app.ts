import Controller from '../controller/controller';
import createTemplate from '../view/template';
import Generator from './generator';

class App {
  private controller: Controller = new Controller();

  private generator: Generator = new Generator();

  public start(): void {
    createTemplate();

    const aside: HTMLElement | null = document.querySelector('.aside');
    if (aside) {
      aside.addEventListener('click', (e: MouseEvent): number => this.controller.getItems(e));
    }
  }
}
export default App;
