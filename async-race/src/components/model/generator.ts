import { Cars, Links, Methods, Winners } from '../types';
import renderTrack from '../view/render/track';
import renderWinner from '../view/render/winner';

async function getCar(id: number): Promise<Cars> {
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

function generateCars(cars: Cars[]): void {
  const playground: HTMLElement | null = document.querySelector('.playground');
  if (playground) {
    playground.innerHTML = '';
  }
  cars.forEach((car: Cars): void => {
    renderTrack(car);
  });
}

function generateWinners(winners: Winners[]): void {
  const amountWinnersOnPage: number = winners.length;
  let counter: number = 0;
  const scoreBody: HTMLElement | null = document.querySelector('.score__body');
  if (scoreBody) {
    scoreBody.innerHTML = '';
  }
  winners.forEach(
    async (winner: Winners): Promise<void> => {
      counter += 1;
      const car: Cars = await getCar(winner.id);
      renderWinner(car, winner, counter);
    }
  );
}

export { generateCars, generateWinners };
