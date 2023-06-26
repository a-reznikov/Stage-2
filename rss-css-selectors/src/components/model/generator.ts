import data from '../../json/level.json';
import { Items } from '../types';
import Item from './item';
import renderItems from '../view/renderItems';

export default function generatItems(): void {
  const level: number = 1;
  const levelItems: Items[] = data[level].items;

  levelItems.forEach((element: Items) => {
    const newItem = new Item(element);
    const item = newItem.createItme();
    renderItems(item);
  });
}
