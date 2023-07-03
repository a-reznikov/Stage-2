import data from '../../json/level.json';
import { Items, Levels } from '../types';
import Level from './level';
import renderLevels from '../view/renderLevels';
import { renderHelpContainer, renderLevelInfo } from '../view/renderInfo';
import { renderViewer } from '../view/viewer';
import deepGenerateItems from './deepGenerator';
import clearPlayground from '../view/clearPlayground';

class Generator {
  public static level: number = 0;

  public static generateItems(indexLevel?: number | undefined): void {
    if (!(typeof indexLevel === 'undefined')) {
      this.level = indexLevel - 1;
    }
    const levelItems: Items[] = data[this.level].items;
    clearPlayground();
    renderLevelInfo(data[this.level]);
    renderHelpContainer(data[this.level].help);
    deepGenerateItems(levelItems);
    renderViewer();
  }

  public static getLevel(): number {
    return Generator.level + 1;
  }

  public static generateLevels(): void {
    data.forEach((element: Levels) => {
      const newItem = new Level(element);
      const item = newItem.createLevel();
      renderLevels(item);
    });
  }
}

export default Generator;
