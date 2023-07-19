import { Links, Pages } from '../types';
import { getTotalCount } from './getter';
import Loader from './loader';

class Paginator {
  public static currentGaragePage: number = 1;

  public static currenWinnersPage: number = 1;

  public static setCurrentPage(newPage: number): void {
    this.currentGaragePage = newPage;
  }

  public static async getAmountPage(pageName: string): Promise<number> {
    let amountPage: number = 0;
    const amountCars: number = await getTotalCount();
    if (pageName === Pages.garage) {
      amountPage = Math.ceil(amountCars / Links.limitCars);
    }
    if (pageName === Pages.winners) {
      amountPage = Math.ceil(amountCars / Links.limitWinners);
    }
    return amountPage;
  }

  public static disableButton(selector: string): void {
    const button: HTMLElement | null = document.querySelector(`${selector}`);
    if (button) {
      button.setAttribute('disabled', '');
    }
  }

  public static enableButton(selector: string): void {
    const button: HTMLElement | null = document.querySelector(`${selector}`);
    if (button) {
      button.removeAttribute('disabled');
    }
  }

  public static nextPage(amountPage: number, currentPage: number): void {
    const secondPage: number = 2;
    const nextPage: number = currentPage + 1;
    if (amountPage > currentPage) {
      this.setCurrentPage(nextPage);
      Loader.getCars(nextPage);
      if (amountPage === nextPage) {
        this.disableButton('.pagination__buttons_next');
      }
      if (nextPage >= secondPage) {
        this.enableButton('.pagination__buttons_previous');
      }
    }
  }

  public static previousPage(amountPage: number, currentPage: number): void {
    const firstPage: number = 1;
    const secondPage: number = 2;
    const prevoiusePage: number = currentPage - 1;
    if (currentPage >= secondPage) {
      this.setCurrentPage(prevoiusePage);
      Loader.getCars(prevoiusePage);
      if (prevoiusePage === firstPage) {
        this.disableButton('.pagination__buttons_previous');
      }
      if (amountPage > prevoiusePage) {
        this.enableButton('.pagination__buttons_next');
      }
    }
  }

  public static async eventPagination(target: HTMLElement): Promise<void> {
    let currentPage: number = 1;
    let pageName: string = '';
    if (target.closest('.garage')) {
      currentPage = this.currentGaragePage;
      pageName = Pages.garage;
    }
    if (target.closest('.winners')) {
      currentPage = this.currenWinnersPage;
      pageName = Pages.winners;
    }
    const isPrevious: boolean = target.classList.contains('pagination__buttons_previous');
    const isNext: boolean = target.classList.contains('pagination__buttons_next');
    const amountPage: number = await this.getAmountPage(pageName);
    if (isNext) {
      this.nextPage(amountPage, currentPage);
    }
    if (isPrevious) {
      this.previousPage(amountPage, currentPage);
    }
  }
}

export default Paginator;
