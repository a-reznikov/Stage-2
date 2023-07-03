export default function clearPlayground(): void {
  const tableTop: HTMLElement | null = document.querySelector('.table__top');
  const markup: HTMLElement | null = document.querySelector('.markup');
  if (tableTop && markup) {
    tableTop.innerHTML = '';
    markup.innerHTML = '';
  }
}
