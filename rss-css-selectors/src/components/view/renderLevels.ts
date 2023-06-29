export default function renderLevels(item: HTMLElement): void {
  const aside: HTMLElement | null = document.querySelector('.aside');
  if (aside) {
    aside.append(item);
  }
}
