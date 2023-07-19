import { EngineStatus, Engines, Links, Methods, Timers } from '../types';
import activeAnimation from '../view/render/animation';
import resetPosition from '../view/render/reset';
import toggleButton from '../view/render/toggleButton';

class Engine {
  public static timers: Timers = {};

  public static async eventEngine(id: number, event: string): Promise<void> {
    const method: string = Methods.patch;
    try {
      if (event === EngineStatus.stopped) {
        clearInterval(Engine.timers[`${id}`]);
        toggleButton(id, EngineStatus.stopped);
        resetPosition(id);
      }
      const response: Response = await fetch(`${Links.baseLink}${Links.engine}?id=${id}&status=${event}`, { method });
      const data: Engines = await response.json();
      if (event === EngineStatus.started) {
        const time: number = data.distance / data.velocity;
        const animationId = <NodeJS.Timer>activeAnimation(id, time);
        toggleButton(id, EngineStatus.started);
        Engine.timers[`${id}`] = animationId;
        Engine.eventEngine(id, EngineStatus.drive);
      }
    } catch (err: Error | unknown) {
      clearInterval(Engine.timers[`${id}`]);
      console.error(err);
    }
  }
}

export default Engine;
