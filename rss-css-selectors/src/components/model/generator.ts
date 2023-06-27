import data from '../../json/level.json';
import { Items, Levels } from '../types';
import Item from './item';
import renderItems from '../view/renderItems';
import Level from './level';
import renderLevels from '../view/renderLevels';

class Generator {
  public static generateItems(): void {
    const level: number = 1;
    const levelItems: Items[] = data[level].items;

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
