import Generator from '../model/generator';
import { nextLevel, previousLevel } from './changeLevel';

class Navigator {
  public chooseNavButton(event: MouseEvent): void {
    const hamburger: HTMLElement | null = document.querySelector('.hamburger');
    const previous: HTMLElement | null = document.querySelector('.nav__buttons_previous');
    const next: HTMLElement | null = document.querySelector('.nav__buttons_next');
    const navButton: HTMLElement = <HTMLElement>event.target;
    const currentLevel: number = Generator.getLevel();
    if (hamburger && hamburger.contains(navButton)) {
      this.toggleBurger(hamburger);
    } else if (previous && previous.contains(navButton)) {
      previousLevel(currentLevel);
    } else if (next && next.contains(navButton)) {
      nextLevel(currentLevel);
    }
  }

  private toggleBurger(hamburgerButton: HTMLElement): void {
    const asideLevels: HTMLElement | null = document.querySelector('.levels');
    asideLevels?.classList.toggle('levels__hidden');
    hamburgerButton?.classList.toggle('hamburger__opened');
  }
}

export default Navigator;
