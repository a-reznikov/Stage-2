import { EngineStatus, Engines, Links, Methods } from '../types';

class Engine {
  public static async eventEngine(id: number | undefined, event: string): Promise<void> {
    const method: string = Methods.patch;
    try {
      const response: Response = await fetch(`${Links.baseLink}${Links.engine}?id=${id}&status=${event}`, { method });
      const data: Engines = await response.json();
      console.log(data);
    } catch (err: Error | unknown) {
      Engine.eventEngine(id, EngineStatus.stopped);
      console.error(err);
    }
  }
}

export default Engine;
