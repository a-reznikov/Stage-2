import { Callback, EndpointName, Options } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  private optionName: string | null = '';

  private option: Options = {};

  public getSources<GetType>(callback: Callback<GetType>): void {
    super.getResp(
      {
        endpoint: EndpointName.sources,
      },
      callback
    );
  }

  public getNews<GetType>(e: MouseEvent, callback: Callback<GetType>): void {
    const target: HTMLElement | null = <HTMLElement>e.target;
    const newsContainer: HTMLDivElement | null = document.querySelector('.news');
    let sourceId: string | null = target.getAttribute('data-source-id');
    if (target.classList.contains('source__item') || target.classList.contains('source__item-name')) {
      if (target.classList.contains('source__item-name')) {
        const sourceItem: HTMLDivElement | null = target.closest('.source__item');
        if (sourceItem) sourceId = sourceItem.getAttribute('data-source-id');
      }
      this.optionName = sourceId;
      this.option = {
        sources: this.optionName,
      };
    } else if (target.classList.contains('form__button')) {
      const keyword: HTMLInputElement | null = document.querySelector('.form__input');
      if (keyword) {
        this.optionName = keyword.value;
        this.option = {
          q: this.optionName,
        };
      }
    }

    if (target && newsContainer) {
      if (newsContainer.getAttribute('data-source') !== this.optionName) {
        if (this.optionName) newsContainer.setAttribute('data-source', this.optionName);
        super.getResp(
          {
            endpoint: EndpointName.everything,
            options: this.option,
          },
          callback
        );
      }
    }
  }
}

export default AppController;
