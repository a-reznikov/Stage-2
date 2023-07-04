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
    const observer = new MutationObserver((): void => {
      if (item.classList.contains('hovered')) {
        console.log(item);
        markupElement.classList.add('hovered');
      } else {
        markupElement.classList.remove('hovered');
      }
    });
    markupElement.addEventListener('mouseover', (e: MouseEvent): void => {
      e.stopPropagation();
      item.classList.add('hovered');
    });
    markupElement.addEventListener('mouseout', (): void => {
      item.classList.remove('hovered');
    });
    observer.observe(item, { attributes: true });
    renderItems(item, parentItem);
    renderMarkupElement(markupElement, parentMarkup);
    if (element.subItems) {
      deepGenerateItems(element.subItems, item, markupElement);
    }
  });
}
