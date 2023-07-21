import { ButtonNames, EngineStatus, Links, Pages } from '../../types';

function toggleButton(id: number, event: string): void {
  const carIco: HTMLElement | null = document.getElementById(`${id}`);
  if (carIco) {
    const track: HTMLElement | null = carIco.closest('.track');
    if (track) {
      const startButton: HTMLElement | null = track.querySelector('.engine-control__buttons_start');
      const stopButton: HTMLElement | null = track.querySelector('.engine-control__buttons_stop');
      if (startButton && stopButton) {
        if (event === EngineStatus.started) {
          startButton.setAttribute('disabled', '');
          stopButton.removeAttribute('disabled');
        }
        if (event === EngineStatus.stopped) {
          startButton.removeAttribute('disabled');
          stopButton.setAttribute('disabled', '');
        }
      }
    }
  }
}

function toggleRaceButton(event: string): void {
  const startRaceButton: HTMLElement | null = document.querySelector('.control__buttons_race');
  const resetRaceButton: HTMLElement | null = document.querySelector('.control__buttons_reset');
  if (startRaceButton && resetRaceButton) {
    if (event === EngineStatus.started) {
      startRaceButton.setAttribute('disabled', '');
      resetRaceButton.setAttribute('disabled', '');
    }
    if (event === EngineStatus.finished) {
      resetRaceButton.removeAttribute('disabled');
    }
    if (event === ButtonNames.reset) {
      startRaceButton.removeAttribute('disabled');
    }
  }
}

function changeDisableButton(amount: number, page: number, section: string): void {
  const firstPage: number = 1;
  let lastPage: number = 1;
  const pagePaginetion: HTMLElement | null = document.querySelector(`.${section}__pagination`);
  if (section === Pages.garage) {
    lastPage = Math.ceil(amount / Links.limitCars);
  }
  if (section === Pages.winners) {
    lastPage = Math.ceil(amount / Links.limitWinners);
  }
  if (!amount) {
    lastPage = 1;
  }
  if (pagePaginetion) {
    if (page === firstPage) {
      const button: HTMLElement | null = pagePaginetion.querySelector(`.pagination__buttons_previous`);
      if (button) {
        button.setAttribute('disabled', '');
      }
    }
    if (page === lastPage) {
      const button: HTMLElement | null = pagePaginetion.querySelector(`.pagination__buttons_next`);
      if (button) {
        button.setAttribute('disabled', '');
      }
    }
    if (page < lastPage) {
      const button: HTMLElement | null = pagePaginetion.querySelector(`.pagination__buttons_next`);
      if (button) {
        button.removeAttribute('disabled');
      }
    }
  }
}

export { toggleButton, toggleRaceButton, changeDisableButton };
