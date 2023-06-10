import { Callback, EndpointName } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  public getSources<GetType>(callback: Callback<GetType>): void {
    super.getResp(
      {
        endpoint: EndpointName.sources,
      },
      callback
    );
  }

  public getNews<GetType>(e: MouseEvent, callback: Callback<GetType>): void {
    let target: HTMLDivElement | null = <HTMLDivElement>e.target;
    const newsContainer: HTMLDivElement | null = <HTMLDivElement>e.currentTarget;

    while (target !== newsContainer) {
      if (target && target.classList.contains('source__item')) {
        const sourceId: string | null = target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          if (sourceId) newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: EndpointName.everything,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      if (target) target = <HTMLDivElement>target.parentNode;
    }
  }
}

export default AppController;
