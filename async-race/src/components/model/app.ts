import Controller from '../controller/controller';
import Loader from '../controller/loader';
import { Links } from '../types';
import createTemplate from '../view/create/template';

class App {
  private controller: Controller = new Controller();

  private loader: Loader = new Loader(Links.baseLink);

  public start(): void {
    createTemplate();
    this.loader.getCars();

    const body: HTMLElement | null = document.querySelector('.body');
    if (body) {
      body.addEventListener('click', (e: MouseEvent): void => this.controller.eventDelegate(e));
    }
  }
}
export default App;
