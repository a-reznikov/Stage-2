import { Items } from '../types';
import highlightElement from '../view/highlight';

class Item {
  private tag: string;

  private classItem: string;

  private id: string;

  private animated: string | undefined;

  private tooltip: string | undefined;

  constructor({ tag, classItem, id, animated, tooltip }: Items) {
    this.tag = tag;
    this.classItem = classItem;
    this.id = id;
    this.animated = animated;
    this.tooltip = tooltip;
  }

  public createItme(): HTMLElement {
    const item: HTMLElement = document.createElement(`${this.tag}`);
    item.className = `${this.classItem}`;
    const itemToolTip: HTMLElement = document.createElement('div');
    itemToolTip.className = 'tooltip';
    itemToolTip.textContent = `${this.tooltip}`;
    if (this.id) {
      item.setAttribute('id', `${this.id}`);
    }
    if (this.animated) {
      item.classList.add(`${this.animated}`);
    }
    item.append(itemToolTip);
    return item;
  }

  public createMarkup(): HTMLElement {
    const markupElement: HTMLDivElement = document.createElement('div');
    const pre: HTMLElement = document.createElement('pre');
    const code: HTMLElement = document.createElement('code');
    markupElement.className = 'markup__element';
    let markupContent: string = '';
    markupContent += `<${this.tag} `;
    if (this.classItem) {
      markupContent += `class="${this.classItem}" `;
    }
    if (this.id) {
      markupContent += `id="${this.id}" `;
    }
    markupContent += '/>';
    code.textContent = markupContent;
    pre.append(code);
    markupElement.append(pre);
    highlightElement(markupElement);
    return markupElement;
  }
}

export default Item;
