import './news.css';
import { ArticlesObject } from '../../../types';

class News {
  public draw(data: ArticlesObject[]): void {
    const news = data.length >= 10 ? data.filter((_item: ArticlesObject, idx: number) => idx < 10) : data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    if (newsItemTemp && newsItemTemp instanceof HTMLElement) {
      news.forEach((item: ArticlesObject, idx: number) => {
        const newsClone: Node = newsItemTemp.content.cloneNode(true);
        const newsItem: HTMLElement | null = (<Element>newsClone.parentNode).querySelector('.news__item');
        if (idx % 2 && newsItem) newsItem.classList.add('alt');
        if (newsItem) {
          const Photo: HTMLElement | null = newsItem.querySelector('.news__meta-photo');
          if (Photo) Photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
          const Author: HTMLElement | null = newsItem.querySelector('.news__meta-author');
          if (Author) Author.textContent = item.author || item.source.name;
          const Date: HTMLElement | null = newsItem.querySelector('.news__meta-date');
          if (Date) Date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
          const Title: HTMLElement | null = newsItem.querySelector('.news__description-title');
          if (Title) Title.textContent = item.title;
          const Source: HTMLElement | null = newsItem.querySelector('.news__description-source');
          if (Source) Source.textContent = item.source.name;
          const description: HTMLElement | null = newsItem.querySelector('.news__description-content');
          if (description) description.textContent = item.description;
          const readMore: HTMLElement | null = newsItem.querySelector('.news__read-more a');
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
