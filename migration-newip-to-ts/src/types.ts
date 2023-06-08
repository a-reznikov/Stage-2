export interface Api {
  apiKey: string;
}

export interface NewsSource {
  id: string;
  name: string;
  description: string;
  category: string;
  language: string;
  country: string;
}

export interface NewsRequest {
  status: string;
  sources: Array<NewsSource>;
}

export interface ArticlesSource {
  id: string;
  name: string;
}

export interface ArticlesRequest {
  source: ArticlesSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
