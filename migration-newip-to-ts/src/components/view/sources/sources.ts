import './sources.css';
import { SourcesObject } from '../../../types';

class Sources {
  public draw(data: SourcesObject[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    if (sourceItemTemp && sourceItemTemp instanceof HTMLElement) {
      data.forEach((item: SourcesObject): void => {
        const sourceClone: ParentNode = <ParentNode>sourceItemTemp.content.cloneNode(true);
        const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
        if (sourceItem) {
          sourceItem.setAttribute('data-source-id', item.id);
          const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
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
