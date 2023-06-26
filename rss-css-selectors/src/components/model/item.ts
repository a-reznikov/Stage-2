import { Items } from '../types';

class Item {
  private tag: string;

  private classItem: string;

  private id: string;

  constructor({ tag, classItem, id }: Items) {
    this.tag = tag;
    this.classItem = classItem;
    this.id = id;
  }

  public createItme(): HTMLElement {
    const item: HTMLElement = document.createElement(`${this.tag}`);
    item.className = `${this.classItem}`;
    if (this.id) {
      item.setAttribute('id', `${this.id}`);
    }
    return item;
  }
}

export default Item;
