import './sources.css';
import { NewsSource } from '../../../types';

class Sources {
  protected draw(data: NewsSource[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    if (sourceItemTemp && sourceItemTemp instanceof HTMLElement) {
      data.forEach((item: NewsSource) => {
        const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
        const sourceItem: HTMLElement | null = (<Element>sourceClone.parentNode).querySelector('.source__item');
        if (sourceItem) {
          sourceItem.setAttribute('data-source-id', item.id);
          const sourceItemName: HTMLElement | null = sourceItem.querySelector('.source__item-name');
          if (sourceItemName) {
            sourceItemName.textContent = item.name;
          }
        }
        fragment.append(sourceClone);
      });
    }
    const sources: HTMLElement | null = document.querySelector('.sources');
    if (sources) {
      sources.append(fragment);
    }
  }
}

export default Sources;
