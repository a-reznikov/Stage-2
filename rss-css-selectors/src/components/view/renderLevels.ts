export default function renderLevels(item: HTMLElement): HTMLElement | null {
  const aside: HTMLElement | null = document.querySelector('.aside');
  if (aside) {
    aside.append(item);
  }
  return aside || null;
}
