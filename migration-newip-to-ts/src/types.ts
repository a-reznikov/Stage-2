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

export interface Status {
  status: string;
  sources: Array<SourcesObject>;
  totalResults: number;
  articles: ArticlesObject[];
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

export interface SourcesId {
  sources?: string | null;
}

export interface Endpoint {
  endpoint: string;
  options?: SourcesId;
}

export type Callback<T> = (data: T) => void;

export enum BaseLink {
  main = 'https://newsapi.org/v2/',
  rss = 'https://rss-news-api.onrender.com/',
  proxy = 'https://news-proxy.spanb4.shop/',
}

export enum ApiKeys {
  main = 'bd767d6423de451fac45cea1e3bc8157',
  spare = '4fc1c4cdb41f48e8bdd14259015df9c1',
}

export enum EndpointName {
  sources = 'sources',
  everything = 'everything',
}
