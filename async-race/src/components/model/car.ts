import Loader from '../controller/loader';
import Paginator from '../controller/paginator';
import { Cars, Links, Methods } from '../types';
import updateTrack from '../view/render/updateTrack';

class Car {
  constructor(public name: string, public color: string) {}

  public static updatePage(): void {
    const page: number = Paginator.getCurrentPage('garage');
    Loader.getCars(page);
  }

  public async createCar(body: Cars): Promise<void> {
    const method: string = Methods.post;
    try {
      await fetch(`${Links.baseLink}${Links.garage}`, {
        method: `${method}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      Car.updatePage();
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static async deleteCar(id: number): Promise<void> {
    const method: string = Methods.delete;
    try {
      await fetch(`${Links.baseLink}${Links.garage}/${id}`, { method });
      this.updatePage();
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static async updateCar(body: Cars, id: number): Promise<void> {
    const method: string = Methods.patch;
    try {
      await fetch(`${Links.baseLink}${Links.garage}/${id}`, {
        method: `${method}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      updateTrack(body, id);
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }
}

export default Car;
