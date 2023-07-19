export default function changeAmountCars(amount: number): void {
  const pageTitle: HTMLElement | null = document.querySelector('.garage__title');
  if (pageTitle) {
    pageTitle.textContent = `Garage (${amount})`;
  }
}
