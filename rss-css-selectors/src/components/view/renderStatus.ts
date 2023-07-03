export default function renderStatusLevels(status: Partial<Storage>): void {
  console.log('status', status.length);
  const levels: NodeListOf<Element> = document.querySelectorAll('.level');
  levels.forEach((level) => {
    const levelId: string | null = level.getAttribute('id');
    if (levelId && +levelId in status) {
      if (status[+levelId].passed) {
        level.classList.add('level_passed');
      }
      if (status[+levelId].withHelp) {
        level.classList.add('level_with-help');
      }
    } else {
      level.classList.remove('level_passed');
      level.classList.remove('level_with-help');
    }
  });
}
