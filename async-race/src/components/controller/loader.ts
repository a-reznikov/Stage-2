import generateCars from '../model/generator';
import { Cars, Links, Methods } from '../types';
import changeAmountCars from '../view/render/amountCars';
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
      changePageNumber(page);
      changeAmountCars(amountCars);
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static async getCar(id: number): Promise<void> {
    const method: string = Methods.get;
    try {
      await fetch(`${Links.baseLink}${Links.garage}/${id}`, { method });
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }
}

export default Loader;
