import { Status } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller: AppController = new AppController();

  private view: AppView = new AppView();

  public start(): void {
    const sources: HTMLDivElement | null = document.querySelector('.sources');

    if (sources) {
      sources.addEventListener('click', (e: MouseEvent): void =>
        this.controller.getNews(e, (data: Pick<Status, 'status' | 'totalResults' | 'articles'>): void =>
          this.view.drawNews(data)
        )
      );
      this.controller.getSources((data: Pick<Status, 'status' | 'sources'>): void => this.view.drawSources(data));
    }
  }
}

export default App;
