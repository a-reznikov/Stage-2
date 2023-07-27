import { Links } from '../../types';

export default function changeAmount(amount: number, section: string): void {
  if (section === Links.garage) {
    const pageTitle: HTMLElement | null = document.querySelector('.garage__title');
    if (pageTitle) {
      pageTitle.textContent = `Garage (${amount})`;
    }
  }

  if (section === Links.winners) {
    const pageTitle: HTMLElement | null = document.querySelector('.winners__title');
    if (pageTitle) {
      pageTitle.textContent = `Winners  (${amount})`;
    }
  }
}
