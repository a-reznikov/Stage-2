import Generator from '../model/generator';
import data from '../../json/level.json';

const minLevel: number = 1;
const maxLevel: number = data.length;

function isRightLevel(newLevel: number): boolean {
  return !!newLevel && newLevel >= minLevel && newLevel <= maxLevel;
}

function previousLevel(currentIndexLevel: number): number {
  const newLevel: number = currentIndexLevel - 1;
  if (isRightLevel(newLevel)) {
    Generator.generateItems(newLevel);
  }
  return newLevel;
}

function nextLevel(currentIndexLevel: number): number {
  const newLevel: number = currentIndexLevel + 1;
  if (isRightLevel(newLevel)) {
    Generator.generateItems(newLevel);
  }
  return newLevel;
}

export { nextLevel, previousLevel, isRightLevel };
