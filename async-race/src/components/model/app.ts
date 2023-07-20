import Controller from '../controller/controller';
import Loader from '../controller/loader';
import createTemplate from '../view/create/template';

class App {
  private controller: Controller = new Controller();

  public start(): void {
    createTemplate();
    Loader.getCars(1); // TODO this is current page number, it will get from Local Storage.
    Loader.getWinners(1); // TODO this is current page number, it will get from Local Storage.

    const body: HTMLElement | null = document.querySelector('.body');
    if (body) {
      body.addEventListener('click', (e: MouseEvent): void => this.controller.eventDelegate(e));
    }
  }
}
export default App;
