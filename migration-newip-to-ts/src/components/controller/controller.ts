import { Callback, EndpointName, Options } from '../../types';
import AppLoader from './appLoader';
import setOptions from './options';

class AppController extends AppLoader {
  private optionName: string | null = '';

  private option: Partial<Options> = {};

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
    this.option = setOptions(target);
    const [value] = Object.values(this.option);
    this.optionName = value;
    const newsTitle: HTMLDivElement | null = document.querySelector('.section__title');

    if (target && newsTitle) {
      if (newsTitle.getAttribute('data-source') !== this.optionName) {
        if (this.optionName) {
          newsTitle.setAttribute('data-source', this.optionName);
          newsTitle.textContent = `${this.optionName[0].toUpperCase()}${this.optionName.slice(1)}`.split('-').join(' ');
        }
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
