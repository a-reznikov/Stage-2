import Controller from '../controller/controller';
import Loader from '../controller/loader';
import createTemplate from '../view/create/template';

class App {
  private controller: Controller = new Controller();

  private loader: Loader = new Loader();

  public start(): void {
    createTemplate();
    this.loader.getCars(1);

    const body: HTMLElement | null = document.querySelector('.body');
    if (body) {
      body.addEventListener('click', (e: MouseEvent): void => this.controller.eventDelegate(e));
    }
  }
}
export default App;
