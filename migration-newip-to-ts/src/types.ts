export interface Api {
  apiKey: string;
}

export interface SourcesObject {
  id: string;
  name: string;
  description: string;
  category: string;
  language: string;
  country: string;
}

export interface StatusSources {
  status: string;
  sources: Array<SourcesObject>;
}

export interface ArticlesSource {
  id: string;
  name: string;
}

export interface ArticlesObject {
  source: ArticlesSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface StatusArticles {
  status: string;
  totalResults: number;
  articles: ArticlesObject[];
}
