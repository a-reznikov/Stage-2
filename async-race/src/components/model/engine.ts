import { EngineStatus, Engines, Links, Methods } from '../types';
import activeAnimation from '../view/render/animation';

class Engine {
  public static async eventEngine(id: number, event: string, timeRace?: number): Promise<void> {
    const method: string = Methods.patch;
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.engine}?id=${id}&status=${event}`, { method });
      const data: Engines = await response.json();
      if (event === EngineStatus.started) {
        console.log('Start');
        const time: number = data.distance / data.velocity;
        activeAnimation(id, time);
        Engine.eventEngine(id, EngineStatus.drive, time);
      }
      if (event === EngineStatus.drive && timeRace) {
        console.log('Drive');
        console.log('Your time: ', timeRace);
      }
    } catch (err: Error | unknown) {
      Engine.eventEngine(id, EngineStatus.stopped);
      console.error(err);
    }
  }
}

export default Engine;
