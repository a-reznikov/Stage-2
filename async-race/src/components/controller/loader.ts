import generateCars from '../model/generator';
import { Cars } from '../types';

class Loader {
  constructor(private baseLink: string) {}

  public getCars(): void {
    const method: string = 'GET';
    fetch(this.baseLink, { method })
      .then((res: Response): Promise<Cars[]> => res.json())
      .then((data: Cars[]): void => generateCars(data))
      .catch((err: Error): void => console.error(err));
  }
}

export default Loader;
