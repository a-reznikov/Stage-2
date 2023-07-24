import Loader from '../controller/loader';
import Paginator from '../controller/paginator';
import { ButtonNames, Cars, Links, Methods, Pages } from '../types';
import updateTrack from '../view/render/updateTrack';
import Win from './win';
import carsName from '../../json/carsName.json';

class Car {
  constructor(public name: string, public color: string) {}

  public static updatePage(): void {
    const page: number = Paginator.getCurrentPage(`${Pages.garage}`);
    Loader.getCars(page);
  }

  public static async isEmptyPage(page: number): Promise<boolean> {
    let isEmpty: boolean = false;
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(
        `${Links.baseLink}${Links.garage}?_page=${page}&_limit=${Links.limitCars}`,
        {
          method,
        }
      );
      const data: Cars[] = await response.json();
      const amountCarsOnPage: number = data.length;
      console.log(amountCarsOnPage);
      if (!amountCarsOnPage) {
        isEmpty = true;
      }
    } catch (err: Error | unknown) {
      console.error(err);
    }
    return isEmpty;
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

  public static async createCars(cars: Cars[]): Promise<void> {
    const method: string = Methods.post;
    try {
      await Promise.all(
        cars.map((car: Cars) =>
          fetch(`${Links.baseLink}${Links.garage}`, {
            method: `${method}`,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(car),
          })
        )
      );
      Car.updatePage();
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static async deleteCar(id: number): Promise<void> {
    const method: string = Methods.delete;
    try {
      await fetch(`${Links.baseLink}${Links.garage}/${id}`, { method });
      const page: number = Paginator.getCurrentPage(`${Pages.garage}`);
      const isEmpty: boolean = await this.isEmptyPage(page);
      if (isEmpty) {
        const previousPageButton: HTMLElement | null = document.querySelector('.pagination__buttons_previous');
        if (previousPageButton) Paginator.eventPagination(previousPageButton);
      }
      this.updatePage();
      Win.eventWin(id, ButtonNames.remove);
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static async getCar(id: number): Promise<Cars> {
    let car: Cars = {
      name: '',
      color: '',
    };
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.garage}/${id}`, { method });
      const data: Cars = await response.json();
      car = data;
    } catch (err: Error | unknown) {
      console.error(err);
    }
    return car;
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
      Win.eventWin(id, ButtonNames.update);
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static randomNumber(amountNames: number): number {
    const number: number = Math.floor(Math.random() * amountNames);
    return number;
  }

  public static randomColor(): string {
    const startColorCode: number = 2;
    const endColorCode: number = 8;
    const color: string = `${Math.random().toString(16)}000000$`.substring(startColorCode, endColorCode).toUpperCase();
    return color;
  }

  public static generateNewCar(): Cars {
    const amountNames: number = carsName.brands.length;
    const brend: string = `${carsName.brands[this.randomNumber(amountNames)]}`;
    const model: string = `${carsName.models[this.randomNumber(amountNames)]}`;
    const nameCar: string = `${brend} ${model}`;
    const colorCar: string = `#${this.randomColor()}`;
    const newCar: Cars = new Car(nameCar, colorCar);
    return newCar;
  }

  public static generateRandomCars(): void {
    const amountCars: number = 100;
    const randomCars: Cars[] = [];
    for (let i = 0; i < amountCars; ) {
      const newCar: Cars = this.generateNewCar();
      randomCars.push(newCar);
      i += 1;
    }
    this.createCars(randomCars);
  }
}

export default Car;
