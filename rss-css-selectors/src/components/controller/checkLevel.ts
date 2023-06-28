import data from '../../json/level.json';

export default function isLevel(request: string): boolean {
  const newLevel: number = +request;
  const minLevel: number = 1;
  const maxLevel: number = data.length;
  console.log(newLevel);
  console.log(maxLevel);
  if (newLevel && newLevel >= minLevel && newLevel <= maxLevel) {
    return true;
  }
  return false;
}
