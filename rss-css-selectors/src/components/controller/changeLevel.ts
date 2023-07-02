import Generator from '../model/generator';
import data from '../../json/level.json';

const minLevel: number = 1;
const maxLevel: number = data.length;

function isRightLevel(newLevel: number): boolean {
  return !!newLevel && newLevel >= minLevel && newLevel <= maxLevel;
}

function previousLevel(currentIndexLevel: number): void {
  const newLevel: number = currentIndexLevel;
  if (isRightLevel(newLevel)) {
    Generator.generateItems(newLevel);
  }
}

function nextLevel(currentIndexLevel: number): void {
  const newLevel: number = currentIndexLevel + 1;
  if (isRightLevel(newLevel)) {
    Generator.generateItems(newLevel);
  }
}

export { nextLevel, previousLevel };
