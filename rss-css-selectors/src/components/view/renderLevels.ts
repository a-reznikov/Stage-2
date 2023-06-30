export default function renderLevels(item: HTMLElement): void {
  const levels: HTMLElement | null = document.querySelector('.levels');
  if (levels) {
    levels.append(item);
  }
}
