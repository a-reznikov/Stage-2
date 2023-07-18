import { Cars, Links } from '../types';
import renderTrack from '../view/render/track';

class Car {
  constructor(public name: string, public color: string) {}

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
      const data: Cars = await response.json();
      renderTrack(data);
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static async deleteCar(id: number): Promise<void> {
    const method: string = 'DELETE';
    try {
      await fetch(`${Links.baseLink}${Links.garage}/${id}`, { method });
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }
}

export default Car;
