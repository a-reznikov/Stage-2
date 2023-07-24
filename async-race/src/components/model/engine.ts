import { ButtonNames, Cars, EngineStatus, Engines, Links, Methods, Timers, Winner } from '../types';
import activeAnimation from '../view/render/animation';
import resetPosition from '../view/render/reset';
import { toggleButton, toggleRaceButton } from '../view/render/toggleButton';
import toggleWinnerText from '../view/render/winnerMessage';
import Win from './win';

class Engine {
  public static timers: Timers = {};

  public static winner: Partial<Winner> = {};

  public static counter: number = 0;

  public static changeCounter(): void {
    this.counter -= 1;
    if (!this.counter) {
      toggleRaceButton(EngineStatus.finished);
    }
  }

  public static runPreStart(id: number, event: string): void {
    if (event === EngineStatus.started) {
      toggleButton(id, EngineStatus.preStart);
    }
    if (event === EngineStatus.drive) {
      toggleButton(id, EngineStatus.started);
    }
  }

  public static async eventEngine(id: number, event: string, times?: number, race?: string): Promise<void> {
    const method: string = Methods.patch;
    try {
      if (event === EngineStatus.stopped) {
        clearInterval(this.timers[`${id}`]);
        toggleButton(id, EngineStatus.stopped);
        resetPosition(id);
        toggleWinnerText();
        this.winner = {};
      }
      this.runPreStart(id, event);
      const response: Response = await fetch(`${Links.baseLink}${Links.engine}?id=${id}&status=${event}`, {
        method,
      });
      const data: Engines = await response.json();
      if (event === EngineStatus.started) {
        const time: number = data.distance / data.velocity;
        const animationId = <NodeJS.Timer>activeAnimation(id, time);
        toggleButton(id, EngineStatus.started);
        this.timers[`${id}`] = animationId;
        this.eventEngine(id, EngineStatus.drive, time);
      }
      if (event === EngineStatus.drive && race && times) {
        if (!this.winner.winnerId) {
          this.winner.winnerId = id;
          this.winner.winnerTime = times;
          const time: number = Number((times / 1000).toFixed(2));
          Win.eventWin(id, race, time);
          toggleWinnerText(id, race, time);
        }
      }
    } catch (err: Error | unknown) {
      clearInterval(Engine.timers[`${id}`]);
    } finally {
      if (race) {
        this.changeCounter();
      }
    }
  }

  public static async eventEngineRace(cars: Cars[], event: string): Promise<void> {
    toggleRaceButton(event);
    const method: string = Methods.patch;
    this.counter = cars.length;
    try {
      if (event === EngineStatus.started) {
        const responses: Response[] = await Promise.all(
          cars.map((car: Cars) => fetch(`${Links.baseLink}${Links.engine}?id=${car.id}&status=${event}`, { method }))
        );
        const data: Engines[] = await Promise.all(responses.map((response: Response) => response.json()));
        let i: number = 0;
        cars.forEach((car: Cars) => {
          const { id } = car;
          if (id) {
            const time: number = data[i].distance / data[i].velocity;
            const animationId = <NodeJS.Timer>activeAnimation(id, time);
            toggleButton(id, EngineStatus.started);
            this.timers[`${id}`] = animationId;
            this.eventEngine(id, EngineStatus.drive, time, ButtonNames.race);
          }
          i += 1;
        });
      }
    } catch (err: Error | unknown) {
      console.error(err);
    }
  }
}

export default Engine;
