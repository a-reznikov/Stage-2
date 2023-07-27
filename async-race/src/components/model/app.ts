import Controller from '../controller/controller';
import Loader from '../controller/loader';
import { PageNumber, PagesNumber } from '../types';
import createTemplate from '../view/create/template';

class App {
  private controller: Controller = new Controller();

  public start(pagesNumber?: PagesNumber): void {
    createTemplate();

    if (pagesNumber) {
      Loader.getCars(pagesNumber.garage);
      Loader.getWinners(pagesNumber.winners);
    } else {
      Loader.getCars(PageNumber.firstPage);
      Loader.getWinners(PageNumber.firstPage);
    }

    const body: HTMLElement | null = document.querySelector('.body');

    if (body) {
      body.addEventListener('click', (e: MouseEvent): void => this.controller.eventDelegate(e));
    }
  }
}
export default App;
