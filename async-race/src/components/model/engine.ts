import { Cars, EngineStatus, Engines, Links, Methods, Timers } from '../types';
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

  public static async eventEngineRace(cars: Cars[], event: string): Promise<void> {
    const method: string = Methods.patch;
    const requests = cars.map((car: Cars) =>
      fetch(`${Links.baseLink}${Links.engine}?id=${car.id}&status=${event}`, { method })
    );
    try {
      // if (event === EngineStatus.stopped) {
      //   clearInterval(Engine.timers[`${id}`]);
      //   toggleButton(id, EngineStatus.stopped);
      //   resetPosition(id);
      // }
      if (event === EngineStatus.started) {
        const responses: Response[] = await Promise.all(requests);
        const data: Engines[] = await Promise.all(responses.map((response: Response) => response.json()));
        console.log(data);
        let i: number = 0;
        cars.forEach((car: Cars) => {
          const { id } = car;
          if (id) {
            const time: number = data[i].distance / data[i].velocity;
            const animationId = <NodeJS.Timer>activeAnimation(id, time);
            toggleButton(id, EngineStatus.started);
            Engine.timers[`${id}`] = animationId;
            Engine.eventEngineRace(cars, EngineStatus.drive);
          }
          i += 1;
        });
      }
      // if (event === EngineStatus.drive) {
      //   const responses: Response = await Promise.any(requests);
      // }
    } catch (err: Error | unknown) {
      // clearInterval(Engine.timers[`${id}`]);
      console.error(err);
    }
  }
}

export default Engine;
