import { Api, Callback, Endpoint, SourcesId } from '../../types';

class Loader {
  constructor(private baseLink: string, private options: Api) {}

  protected getResp<T>(
    { endpoint, options = {} }: Endpoint,
    callback: Callback<T> = (): void => {
      console.error('No callback for GET response');
    }
  ): void {
    const request: string = 'GET';
    this.load(request, endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: SourcesId, endpoint: string): string {
    const urlOptions: { [index: string]: string | null } = { ...this.options, ...options };
    let url: string = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load<LaodType>(
    method: string,
    endpoint: string,
    callback: Callback<LaodType>,
    options: SourcesId = {}
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: LaodType) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
