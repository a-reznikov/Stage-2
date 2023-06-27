import { Levels } from '../types';

class Level {
  private levelId: number;

  private levelName: string;

  constructor({ levelId, levelName }: Levels) {
    this.levelId = levelId;
    this.levelName = levelName;
  }

  public createLevel(): HTMLElement {
    const level: HTMLElement = document.createElement('a');
    level.className = 'level__link';
    const check: HTMLSpanElement = document.createElement('span');
    check.className = 'level__check';
    const levelNumber: HTMLSpanElement = document.createElement('span');
    levelNumber.className = 'level__id';
    levelNumber.setAttribute('id', `${this.levelId}`);
    levelNumber.textContent = `${this.levelId}`;
    const levelNames: HTMLSpanElement = document.createElement('span');
    levelNames.className = 'level__name';
    levelNames.textContent = `${this.levelName}`;
    level.append(check);
    level.append(levelNumber);
    level.append(levelNames);
    return level;
  }
}

export default Level;
