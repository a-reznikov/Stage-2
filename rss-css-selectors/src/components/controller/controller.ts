import Generator from '../model/generator';

class Controller {
  private indexLevel: number = 0;

  public getItems(event: MouseEvent): number {
    const target: HTMLElement | null = <HTMLElement>event.target;
    const level: HTMLElement | null = target.closest('.level');
    if (level) {
      const levelId: string | null = level.getAttribute('id');
      if (levelId) {
        this.indexLevel = +levelId - 1;
        Generator.generateItems(this.indexLevel);
      }
    }
    return this.indexLevel;
  }
}

export default Controller;
