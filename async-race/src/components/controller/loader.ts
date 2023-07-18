import generateCars from '../model/generator';
import { Cars, Links, Methods } from '../types';

class Loader {
  public async getCars(): Promise<void> {
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.garage}`, { method });
      const data: Cars[] = await response.json();
      generateCars(data);
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
