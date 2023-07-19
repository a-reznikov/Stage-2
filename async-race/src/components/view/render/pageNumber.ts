export default function changePageNumber(page: number): void {
  const pageNumber: HTMLElement | null = document.querySelector('.garage__page');
  if (pageNumber) {
    pageNumber.textContent = `Page # ${page}`;
  }
}
