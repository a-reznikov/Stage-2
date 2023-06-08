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
