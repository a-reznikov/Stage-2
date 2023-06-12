import { Callback, EndpointName, Options } from '../../types';
import AppLoader from './appLoader';

class TopNewsLoader extends AppLoader {
  private optionName: string | null = 'us';

  private option: Partial<Options> = { country: this.optionName };

  public getSources<GetType>(callback: Callback<GetType>): void {
    super.getResp(
      {
        endpoint: EndpointName.sources,
      },
      callback
    );
  }

  public getNews<GetType>(callback: Callback<GetType>): void {
    const newsTitle: HTMLDivElement | null = document.querySelector('.section__title');
    if (newsTitle) {
      newsTitle.setAttribute('data-source', 'Top News');
      super.getResp(
        {
          endpoint: 'top-headlines',
          options: this.option,
        },
        callback
      );
    }
  }
}

export default TopNewsLoader;
