class Navigator {
  public chooseNavButton(event: MouseEvent): void {
    const hamburger: HTMLInputElement | null = document.querySelector('.hamburger');
    const previous: HTMLInputElement | null = document.querySelector('.nav__buttons_previous');
    const next: HTMLInputElement | null = document.querySelector('.nav__buttons_next');
    const navButton: HTMLElement = <HTMLElement>event.target;
    if (hamburger && hamburger.contains(navButton)) {
      this.toggleBurger(hamburger);
    } else if (previous && previous.contains(navButton)) {
      console.log(previous);
    } else if (next && next.contains(navButton)) {
      console.log(next);
    }
  }

  private toggleBurger(hamburgerButton: HTMLElement): void {
    const asideLevels: HTMLElement | null = document.querySelector('.levels');
    asideLevels?.classList.toggle('levels__hidden');
    hamburgerButton?.classList.toggle('hamburger__opened');
  }
}

export default Navigator;
