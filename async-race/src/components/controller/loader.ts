import generateCars from '../model/generator';
import { ButtonNames, Cars, Links, Methods } from '../types';
import { resetRace, startRace } from './eventer';

class Loader {
  public static async getCars(page: number): Promise<void> {
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(
        `${Links.baseLink}${Links.garage}?_page=${page}&_limit=${Links.limitCars}`,
        { method }
      );
      const data: Cars[] = await response.json();
      generateCars(data);
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static async getCarsOnPage(page: number, event: string): Promise<void> {
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.garage}?_page=${page}&_limit=7`, { method });
      const data: Cars[] = await response.json();
      if (event === ButtonNames.race) startRace(data);
      if (event === ButtonNames.reset) resetRace(data);
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
