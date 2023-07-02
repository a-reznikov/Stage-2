import Generator from '../model/generator';
import data from '../../json/level.json';

const minLevel: number = 1;
const maxLevel: number = data.length;

function isRightLevel(newLevel: number): boolean {
  return !!newLevel && newLevel >= minLevel && newLevel <= maxLevel;
}

export default function nextLevel(currentLevel: number): void {
  const newLevel: number = currentLevel + 1;
  console.log(newLevel);
  if (isRightLevel(newLevel)) {
    Generator.generateItems(newLevel);
  }
}
