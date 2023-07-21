import { generateCars, generateWinners } from '../model/generator';
import { Cars, Links, Methods, Winners } from '../types';
import changeAmount from '../view/render/amount';
import changePageNumber from '../view/render/pageNumber';

class Loader {
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

  public static async getWinners(page: number): Promise<void> {
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(
        `${Links.baseLink}${Links.winners}?_page=${page}&_limit=${Links.limitWinners}`,
        { method }
      );
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
