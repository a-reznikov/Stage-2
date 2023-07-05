import { Levels } from '../types';

class Level {
  private levelId: number;

  private levelName: string;

  constructor({ levelId, levelName }: Levels) {
    this.levelId = levelId;
    this.levelName = levelName;
  }

  public getLevelId(): number {
    return this.levelId;
  }

  public getLevelName(): string {
    return this.levelName;
  }

  public createLevel(): HTMLElement {
    const level: HTMLElement = document.createElement('a');
    level.className = 'level';
    level.setAttribute('id', `${this.levelId}`);
    const check: HTMLSpanElement = document.createElement('span');
    check.className = 'level__check checkmark';
    const levelNumber: HTMLSpanElement = document.createElement('span');
    levelNumber.className = 'level__id';
    levelNumber.textContent = `${this.levelId}`;
    const levelNames: HTMLSpanElement = document.createElement('span');
    levelNames.className = 'level__name';
    levelNames.textContent = `${this.levelName}`;
    const withHelp: HTMLSpanElement = document.createElement('span');
    withHelp.className = 'level__help';
    withHelp.textContent = '?';
    level.append(check);
    level.append(levelNumber);
    level.append(levelNames);
    level.append(withHelp);
    return level;
  }
}

export default Level;
