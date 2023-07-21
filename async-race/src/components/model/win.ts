import Loader from '../controller/loader';
import Paginator from '../controller/paginator';
import { Links, Methods, Pages, Winners } from '../types';

class Win {
  constructor(public id: number, public wins: number, public time: number) {}

  public static updatePage(): void {
    const page: number = Paginator.getCurrentPage(`${Pages.winners}`);
    Loader.getWinners(page);
  }

  public static async createWinner(body: Winners): Promise<void> {
    const method: string = Methods.post;
    try {
      await fetch(`${Links.baseLink}${Links.winners}`, {
        method: `${method}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      this.updatePage();
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  private static errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 404) console.log(`There is no such winner`);
      throw Error(res.statusText);
    }
    return res;
  }

  public static async getWinner(id: number): Promise<Winners> {
    let winner: Winners = {
      id: 0,
      wins: 0,
      time: 0,
    };
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.winners}/${id}`, { method }).then(
        this.errorHandler
      );
      const data: Winners = await response.json();
      winner = data;
    } catch (err: Error | unknown) {
      console.error(err);
    }
    return winner;
  }

  public static async getWinners(): Promise<Winners[]> {
    let winners: Winners[] = [];
    const method: string = Methods.get;
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.winners}`, { method }).then(this.errorHandler);
      const data: Winners[] = await response.json();
      winners = data;
    } catch (err: Error | unknown) {
      console.error(err);
    }
    return winners;
  }

  public static async eventWin(id: number, time: number): Promise<void> {
    let isWinner: boolean = false;
    const winners: Winners[] = await this.getWinners();
    winners.forEach((winner) => {
      if (winner.id === id) {
        isWinner = true;
      }
    });
    if (isWinner) {
      console.log('Need Update');
    } else {
      const firstWin: number = 1;
      const newWinner: Win = new Win(id, firstWin, time);
      this.createWinner(newWinner);
    }
  }
}

export default Win;
