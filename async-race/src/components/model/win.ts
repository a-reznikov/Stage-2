import Loader from '../controller/loader';
import Paginator from '../controller/paginator';
import { ButtonNames, Links, Methods, Pages, Sort, Winners } from '../types';

class Win {
  constructor(public id: number, public wins: number, public time: number) {}

  private static errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 404) console.log(`There is no such winner`);
      throw Error(res.statusText);
    }
    return res;
  }

  public static updatePage(): void {
    const page: number = Paginator.getCurrentPage(`${Pages.winners}`);
    if (Paginator.isSorted()) {
      const sortOptions: Sort = Paginator.getSortOptions();
      Loader.getWinners(page, sortOptions.sort, sortOptions.order);
    } else {
      Loader.getWinners(page);
    }
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

  public static async updateWinner(body: Winners, id: number): Promise<void> {
    const method: string = Methods.patch;
    try {
      await fetch(`${Links.baseLink}${Links.winners}/${id}`, {
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

  public static async deleteWinner(id: number): Promise<void> {
    const method: string = Methods.delete;
    try {
      await fetch(`${Links.baseLink}${Links.winners}/${id}`, { method });
      this.updatePage();
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }

  public static async eventWin(id: number, event: string, time?: number): Promise<void> {
    let isWinner: boolean = false;
    const winners: Winners[] = await this.getWinners();
    winners.forEach((winner) => {
      if (winner.id === id) {
        isWinner = true;
      }
    });
    if (isWinner) {
      if (event === ButtonNames.update) {
        this.updatePage();
      }
      if (event === ButtonNames.race) {
        const winner: Winners = await this.getWinner(id);
        const countWins: number = winner.wins + 1;
        if (time) {
          if (time < winner.time) {
            const oldWinner: Win = new Win(id, countWins, time);
            this.updateWinner(oldWinner, id);
          } else {
            const oldWinner: Win = new Win(id, countWins, winner.time);
            this.updateWinner(oldWinner, id);
          }
        }
      }
      if (event === ButtonNames.remove) {
        this.deleteWinner(id);
      }
    } else {
      const firstWin: number = 1;
      if (time) {
        const newWinner: Win = new Win(id, firstWin, time);
        this.createWinner(newWinner);
      }
    }
  }
}

export default Win;
