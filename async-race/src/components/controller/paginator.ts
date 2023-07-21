import { Links, Methods, Pages } from '../types';
import Loader from './loader';

class Paginator {
  public static currentGaragePage: number = 1;

  public static currenWinnersPage: number = 1;

  public static setCurrentPage(newPage: number, pageName: string): void {
    if (pageName === Pages.garage) {
      this.currentGaragePage = newPage;
    }
    if (pageName === Pages.winners) {
      this.currenWinnersPage = newPage;
    }
  }

  public static getCurrentPage(pageName: string): number {
    let pageNember: number = 0;
    if (pageName === Pages.garage) {
      pageNember = this.currentGaragePage;
    }
    if (pageName === Pages.winners) {
      pageNember = this.currenWinnersPage;
    }
    return pageNember;
  }

  public static async getTotalCount(): Promise<number> {
    let amountCars: number = 0;
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.garage}?_limit=${Links.limitCars}`, { method });
      amountCars = Number(response.headers.get('X-Total-Count'));
    } catch (err: Error | unknown) {
      console.error(err);
    }
    return amountCars;
  }

  public static async getAmountPage(pageName: string): Promise<number> {
    let amountPage: number = 0;
    const amountCars: number = await this.getTotalCount();
    if (pageName === Pages.garage) {
      amountPage = Math.ceil(amountCars / Links.limitCars);
    }
    if (pageName === Pages.winners) {
      amountPage = Math.ceil(amountCars / Links.limitWinners);
    }
    return amountPage;
  }

  public static disableButton(selector: string, pageName: string): void {
    const pagePaginetion: HTMLElement | null = document.querySelector(`.${pageName}__pagination`);
    if (pagePaginetion) {
      const button: HTMLElement | null = pagePaginetion.querySelector(`${selector}`);
      if (button) {
        button.setAttribute('disabled', '');
      }
    }
  }

  public static enableButton(selector: string, pageName: string): void {
    const pagePaginetion: HTMLElement | null = document.querySelector(`.${pageName}__pagination`);
    if (pagePaginetion) {
      const button: HTMLElement | null = pagePaginetion.querySelector(`${selector}`);
      if (button) {
        button.removeAttribute('disabled');
      }
    }
  }

  public static nextPage(amountPage: number, currentPage: number, pageName: string): void {
    const secondPage: number = 2;
    const nextPage: number = currentPage + 1;
    if (amountPage > currentPage) {
      this.setCurrentPage(nextPage, pageName);
      console.log(
        'this.currentGaragePage =',
        this.currentGaragePage,
        'this.currenWinnersPage =',
        this.currenWinnersPage
      );
      if (pageName === Pages.garage) Loader.getCars(nextPage);
      if (pageName === Pages.winners) Loader.getWinners(nextPage);
      if (amountPage === nextPage) {
        this.disableButton('.pagination__buttons_next', pageName);
      }
      if (nextPage >= secondPage) {
        this.enableButton('.pagination__buttons_previous', pageName);
      }
    }
  }

  public static previousPage(amountPage: number, currentPage: number, pageName: string): void {
    const firstPage: number = 1;
    const secondPage: number = 2;
    const prevoiusePage: number = currentPage - 1;
    if (currentPage >= secondPage) {
      this.setCurrentPage(prevoiusePage, pageName);
      console.log(
        'this.currentGaragePage =',
        this.currentGaragePage,
        'this.currenWinnersPage =',
        this.currenWinnersPage
      );
      if (pageName === Pages.garage) Loader.getCars(prevoiusePage);
      if (pageName === Pages.winners) Loader.getWinners(prevoiusePage);
      if (prevoiusePage === firstPage) {
        this.disableButton('.pagination__buttons_previous', pageName);
      }
      if (amountPage > prevoiusePage) {
        this.enableButton('.pagination__buttons_next', pageName);
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
      console.log('nextButton', 'currentPage =', currentPage);
      this.nextPage(amountPage, currentPage, pageName);
    }
    if (isPrevious) {
      this.previousPage(amountPage, currentPage, pageName);
    }
  }
}

export default Paginator;
