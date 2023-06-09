import { Callback } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  public getSources<T>(callback: Callback<T>): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  public getNews<T>(e: PointerEvent, callback: Callback<T>): void {
    let target: HTMLDivElement | null = <HTMLDivElement>e.target;
    const newsContainer: HTMLDivElement | null = <HTMLDivElement>e.currentTarget;

    while (target !== newsContainer) {
      if (target && target.classList.contains('source__item')) {
        const sourceId: string | null = target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          if (sourceId) newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
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
