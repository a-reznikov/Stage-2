import { Cars, Links } from '../types';

class Car {
  constructor(public name: string, public color: string, public id: number) {}

  public async createCar(body: Cars): Promise<void> {
    const method: string = 'POST';
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.garage}`, {
        method: `${method}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }
}

export default Car;
