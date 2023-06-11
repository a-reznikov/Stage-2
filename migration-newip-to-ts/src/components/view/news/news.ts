import { ArticlesObject } from '../../../types';

class News {
  public draw(data: Readonly<ArticlesObject[]>): void {
    const news = data.length >= 10 ? data.filter((_item: ArticlesObject, idx: number): boolean => idx < 10) : data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    if (newsItemTemp && newsItemTemp instanceof HTMLElement) {
      news.forEach((item: ArticlesObject, idx: number): void => {
        const newsClone: ParentNode = <ParentNode>newsItemTemp.content.cloneNode(true);
        const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
        if (idx % 2 && newsItem) newsItem.classList.add('alt');
        if (newsClone) {
          const Photo: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
          if (Photo) {
            if (item.urlToImage) {
              Photo.style.backgroundImage = `url(${item.urlToImage})`;
            } else {
              Photo.classList.add('placeholder');
            }
          }
          const Author: HTMLElement | null = newsClone.querySelector('.news__meta-author');
          if (Author) Author.textContent = item.author || item.source.name;
          const Date: HTMLElement | null = newsClone.querySelector('.news__meta-date');
          if (Date) Date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
          const Title: HTMLElement | null = newsClone.querySelector('.news__description-title');
          if (Title) Title.textContent = item.title;
          const Source: HTMLElement | null = newsClone.querySelector('.news__description-source');
          if (Source) Source.textContent = item.source.name;
          const description: HTMLElement | null = newsClone.querySelector('.news__description-content');
          if (description) description.textContent = item.description;
          const readMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
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
