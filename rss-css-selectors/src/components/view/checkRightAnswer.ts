export default function checkRightAnswer(levelId: number, tag: string): void {
  const currentLevelElement: HTMLElement | null = document.getElementById(`${levelId}`);
  if (currentLevelElement) {
    currentLevelElement.classList.add(`level_${tag}`);
  }
}
