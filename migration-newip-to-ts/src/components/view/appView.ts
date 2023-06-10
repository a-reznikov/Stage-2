import News from './news/news';
import Sources from './sources/sources';
import { ArticlesObject, SourcesObject, Status } from '../../types';

export class AppView {
  private news: News = new News();

  private sources: Sources = new Sources();

  public drawNews(data: Pick<Status, 'status' | 'totalResults' | 'articles'>): void {
    const values: ArticlesObject[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: Pick<Status, 'status' | 'sources'>): void {
    const values: SourcesObject[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
