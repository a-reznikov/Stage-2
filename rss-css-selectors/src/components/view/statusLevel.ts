export default function selectCurrentLevel(levelId: number): number {
  const allLevels: NodeListOf<Element> = document.querySelectorAll('.level');
  const CurrentLevel: HTMLElement | null = document.getElementById(`${levelId}`);
  allLevels.forEach((element) => {
    element.classList.remove('level_current');
  });
  if (CurrentLevel) {
    CurrentLevel.classList.add('level_current');
  }
  return levelId;
}
