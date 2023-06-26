import data from '../../json/level.json';
import { Items } from '../types';
import Item from './item';
import renderItems from '../view/renderItems';

export default function generatItems(): void {
  const items: Items[] = data;

  items.forEach((element: Items) => {
    const newItem = new Item(element);
    const item = newItem.createItme();
    renderItems(item);
  });
}
