import { Items } from '../types';
import renderItems from '../view/renderItems';
import renderMarkupElement from '../view/renderMarkup';
import Item from './item';

export default function deepGenerateItems(
  listItems: Items[],
  parentItem?: HTMLElement,
  parentMarkup?: HTMLElement
): void {
  listItems.forEach((element: Items) => {
    const newItem: Item = new Item(element);
    const item: HTMLElement = newItem.createItme();
    const markupElement: HTMLElement = newItem.createMarkup();
    renderItems(item, parentItem);
    renderMarkupElement(markupElement, parentMarkup);
    if (element.subItems) {
      deepGenerateItems(element.subItems, item, markupElement);
    }
  });
}
