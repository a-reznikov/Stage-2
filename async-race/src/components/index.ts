import Paginator from './controller/paginator';
import App from './model/app';
import { Pages, PagesNumber } from './types';

const app: App = new App();

function setLocalStorage(): void {
  const pagesNumber: PagesNumber = Paginator.getPagesNumber();
  localStorage.setItem('lastCurrentPagesNumber', JSON.stringify(pagesNumber));
}

function getLocalStorage(): void {
  if (localStorage.getItem('lastCurrentPagesNumber')) {
    const pagesNumberFromStorage: string | null = localStorage.getItem('lastCurrentPagesNumber');
    if (pagesNumberFromStorage) {
      const pagesNumber: PagesNumber = JSON.parse(pagesNumberFromStorage);
      Paginator.setCurrentPage(pagesNumber.garage, Pages.garage);
      Paginator.setCurrentPage(pagesNumber.winners, Pages.winners);
      app.start(pagesNumber);
    }
  } else {
    app.start();
  }
}
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
