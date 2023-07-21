import Controller from '../controller/controller';
import Loader from '../controller/loader';
import { PagesNumber } from '../types';
import createTemplate from '../view/create/template';

class App {
  private controller: Controller = new Controller();

  public start(pagesNumber?: PagesNumber): void {
    const firstPage: number = 1;
    createTemplate();
    if (pagesNumber) {
      Loader.getCars(pagesNumber.garage);
      Loader.getWinners(pagesNumber.winners);
    } else {
      Loader.getCars(firstPage);
      Loader.getWinners(firstPage);
    }

    const body: HTMLElement | null = document.querySelector('.body');
    if (body) {
      body.addEventListener('click', (e: MouseEvent): void => this.controller.eventDelegate(e));
    }
  }
}
export default App;
