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
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          if (item.classList.contains('hovered')) {
            markupElement.classList.add('hovered');
          } else {
            markupElement.classList.remove('hovered');
          }
        }
      });
    });
    observer.observe(item, { attributes: true });
    renderItems(item, parentItem);
    renderMarkupElement(markupElement, parentMarkup);
    if (element.subItems) {
      deepGenerateItems(element.subItems, item, markupElement);
    }
  });
}
