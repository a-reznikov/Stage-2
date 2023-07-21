import { Links } from '../../types';

export default function changePageNumber(page: number, section: string): void {
  if (section === Links.garage) {
    const pageNumber: HTMLElement | null = document.querySelector('.garage__page');
    if (pageNumber) {
      pageNumber.textContent = `Page # ${page}`;
    }
  }
  if (section === Links.winners) {
    const pageNumber: HTMLElement | null = document.querySelector('.winners__page');
    if (pageNumber) {
      pageNumber.textContent = `Page # ${page}`;
    }
  }
}
