import data from '../../json/level.json';
import { Items, Levels } from '../types';
import Item from './item';
import renderItems from '../view/renderItems';
import Level from './level';
import renderLevels from '../view/renderLevels';

class Generator {
  private static level: number = 0;

  public static generateItems(indexLevel?: number | undefined): void {
    if (!(typeof indexLevel === 'undefined')) {
      this.level = indexLevel;
    }
    const levelItems: Items[] = data[this.level].items;
    const tableTop: HTMLElement | null = document.querySelector('.table__top');
    if (tableTop) tableTop.innerHTML = '';

    levelItems.forEach((element: Items) => {
      const newItem = new Item(element);
      const item = newItem.createItme();
      renderItems(item);
    });
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
