import data from '../../json/level.json';
import { Items, Levels } from '../types';
import Item from './item';
import renderItems from '../view/renderItems';
import Level from './level';
import renderLevels from '../view/renderLevels';
import renderPlayground from '../view/playground';
import renderMarkupElement from '../view/renderMarkup';
import { renderViewer } from '../view/viewer';

class Generator {
  private static level: number = 0;

  public static generateItems(indexLevel?: number | undefined): void {
    if (!(typeof indexLevel === 'undefined')) {
      this.level = indexLevel - 1;
    }
    const levelItems: Items[] = data[this.level].items;
    const tableTop: HTMLElement | null = document.querySelector('.table__top');
    if (tableTop) tableTop.innerHTML = '';
    const markup: HTMLElement | null = document.querySelector('.markup');
    if (markup) markup.innerHTML = '';
    renderPlayground(data[this.level]);

    levelItems.forEach((element: Items) => {
      const newItem = new Item(element);
      const item = newItem.createItme();
      const markupElement = newItem.createMarkup();
      renderItems(item);
      renderMarkupElement(markupElement);
    });
    renderViewer();
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
