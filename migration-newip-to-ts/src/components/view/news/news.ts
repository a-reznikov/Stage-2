import './news.css';
import { ArticlesRequest } from '../../../types';

class News {
  protected draw(data: ArticlesRequest[]): void {
    const news = data.length >= 10 ? data.filter((_item: ArticlesRequest, idx: number) => idx < 10) : data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    if (newsItemTemp && newsItemTemp instanceof HTMLElement) {
      news.forEach((item: ArticlesRequest, idx: number) => {
        const newsClone: Node = newsItemTemp.content.cloneNode(true);
        const parentNewsClone: HTMLElement | null = (<Element>newsClone.parentNode).querySelector('.news__item');
        if (idx % 2 && parentNewsClone) parentNewsClone.classList.add('alt');
        if (parentNewsClone) {
          const Photo: HTMLElement | null = parentNewsClone.querySelector<HTMLElement>('.news__meta-photo');
          if (Photo) Photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
          const Author: HTMLElement | null = parentNewsClone.querySelector<HTMLElement>('.news__meta-author');
          if (Author) Author.textContent = item.author || item.source.name;
          const Date: HTMLElement | null = parentNewsClone.querySelector<HTMLElement>('.news__meta-date');
          if (Date) Date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
          const Title: HTMLElement | null = parentNewsClone.querySelector<HTMLElement>('.news__description-title');
          if (Title) Title.textContent = item.title;
          const Source: HTMLElement | null = parentNewsClone.querySelector<HTMLElement>('.news__description-source');
          if (Source) Source.textContent = item.source.name;
          const description: HTMLElement | null = parentNewsClone.querySelector<HTMLElement>(
            '.news__description-content'
          );
          if (description) description.textContent = item.description;
          const readMore: HTMLElement | null = parentNewsClone.querySelector<HTMLElement>('.news__read-more a');
          if (readMore) readMore.setAttribute('href', item.url);
        }
        fragment.append(newsClone);
      });
    }
    const newsContainer: HTMLElement | null = document.querySelector('.news');
    if (newsContainer) {
      newsContainer.innerHTML = '';
      newsContainer.appendChild(fragment);
    }
  }
}

export default News;
