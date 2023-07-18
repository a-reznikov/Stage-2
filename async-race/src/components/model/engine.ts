import { EngineStatus, Engines, Links, Methods } from '../types';
import activeAnimation from '../view/render/animation';

class Engine {
  public static async eventEngine(id: number, event: string, timerId?: NodeJS.Timer): Promise<void> {
    const method: string = Methods.patch;
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.engine}?id=${id}&status=${event}`, { method });
      const data: Engines = await response.json();
      if (event === EngineStatus.started) {
        const time: number = data.distance / data.velocity;
        const animationId = <NodeJS.Timer>activeAnimation(id, time);
        Engine.eventEngine(id, EngineStatus.drive, animationId);
      }
      if (event === EngineStatus.drive) {
        //  TODO will be used to output the winner
      }
    } catch (err: Error | unknown) {
      if (timerId) {
        clearInterval(timerId);
      }
      Engine.eventEngine(id, EngineStatus.stopped);
      console.error(err);
    }
  }
}

export default Engine;
