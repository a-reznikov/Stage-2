import { ButtonNames, Cars, EngineStatus, Engines, Links, Methods, Timers, Winner } from '../types';
import activeAnimation from '../view/render/animation';
import resetPosition from '../view/render/reset';
import toggleButton from '../view/render/toggleButton';

class Engine {
  public static timers: Timers = {};

  public static winner: Partial<Winner> = {};

  public static async eventEngine(id: number, event: string, times?: number, race?: string): Promise<void> {
    const method: string = Methods.patch;
    try {
      if (event === EngineStatus.stopped) {
        clearInterval(this.timers[`${id}`]);
        toggleButton(id, EngineStatus.stopped);
        resetPosition(id);
        this.winner = {};
      }
      const response: Response = await fetch(`${Links.baseLink}${Links.engine}?id=${id}&status=${event}`, { method });
      const data: Engines = await response.json();
      if (event === EngineStatus.started) {
        const time: number = data.distance / data.velocity;
        const animationId = <NodeJS.Timer>activeAnimation(id, time);
        toggleButton(id, EngineStatus.started);
        this.timers[`${id}`] = animationId;
        this.eventEngine(id, EngineStatus.drive, time);
      }
      if (event === EngineStatus.drive && race) {
        if (!this.winner.winnerId) {
          this.winner.winnerId = id;
          this.winner.winnerTime = times;
          console.log('Winner', this.winner);
        }
      }
    } catch (err: Error | unknown) {
      clearInterval(Engine.timers[`${id}`]);
      console.error(err);
    }
  }

  public static async eventEngineRace(cars: Cars[], event: string): Promise<void> {
    const method: string = Methods.patch;
    try {
      if (event === EngineStatus.started) {
        const responses: Response[] = await Promise.all(
          cars.map((car: Cars) => fetch(`${Links.baseLink}${Links.engine}?id=${car.id}&status=${event}`, { method }))
        );
        const data: Engines[] = await Promise.all(responses.map((response: Response) => response.json()));
        console.log(data);
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
