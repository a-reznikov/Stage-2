import { generateCars, generateWinners } from '../model/generator';
import { Cars, Links, Methods, Winners } from '../types';
import changeAmount from '../view/render/amount';
import changePageNumber from '../view/render/pageNumber';

class Loader {
  public static urlMaker(section: string, page: number, limit: number, sort?: string, order?: string): string {
    let url: string = `${Links.baseLink}${section}?_page=${page}&_limit=${limit}`;
    if (sort) {
      url += `&_sort=${sort}`;
    }
    if (order) {
      url += `&_order=${order}`;
    }
    return url;
  }

  public static async getCars(page: number): Promise<void> {
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(
        `${Links.baseLink}${Links.garage}?_page=${page}&_limit=${Links.limitCars}`,
        { method }
      );
      const data: Cars[] = await response.json();
      const amountCars = Number(response.headers.get('X-Total-Count'));
      generateCars(data);
      changePageNumber(page, Links.garage);
      changeAmount(amountCars, Links.garage);
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static async getWinners(page: number, sort?: string, order?: string): Promise<void> {
    const method: string = Methods.get;
    let url: string = '';
    if (sort && order) {
      url = this.urlMaker(Links.winners, page, Links.limitWinners, sort, order);
    } else {
      url = this.urlMaker(Links.winners, page, Links.limitWinners);
    }
    try {
      const response: Response = await fetch(url, { method });
      const data: Winners[] = await response.json();
      const amountWinners = Number(response.headers.get('X-Total-Count'));
      generateWinners(data);
      changePageNumber(page, Links.winners);
      changeAmount(amountWinners, Links.winners);
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }
}

export default Loader;
