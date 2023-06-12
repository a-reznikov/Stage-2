import { Options } from '../../types';

export default function setOptions(target: HTMLElement | null): Partial<Options> {
  let optionName: string | null = '';

  let option: Partial<Options> = {};

  if (target) {
    let sourceId: string | null = target.getAttribute('data-source-id');
    if (target.classList.contains('source__item') || target.classList.contains('source__item-name')) {
      if (target.classList.contains('source__item-name')) {
        const sourceItem: HTMLDivElement | null = target.closest('.source__item');
        if (sourceItem) sourceId = sourceItem.getAttribute('data-source-id');
      }
      optionName = sourceId;
      option = {
        sources: optionName,
      };
    } else if (target.classList.contains('form__button')) {
      const keyword: HTMLInputElement | null = document.querySelector('.form__input');
      if (keyword) {
        optionName = keyword.value;
        option = {
          q: optionName,
        };
      }
    }
  }
  return option;
}
