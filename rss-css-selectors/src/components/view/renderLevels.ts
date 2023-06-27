export default function renderLevels(item: HTMLElement): HTMLElement | null {
  const level: HTMLElement | null = document.querySelector('.level');
  if (level) {
    level.append(item);
  }
  return level || null;
}
