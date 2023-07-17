import generateCars from '../model/generator';
import { Cars, Links } from '../types';

class Loader {
  public amountCars: number = 4;

  constructor(private baselink: string) {}

  public async getCars(): Promise<void> {
    const method: string = 'GET';
    try {
      const response: Response = await fetch(`${this.baselink}${Links.garage}`, { method });
      const data: Cars[] = await response.json();
      generateCars(data);
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }
}

export default Loader;
