import { ButtonNames, EngineStatus } from '../../types';

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

export { toggleButton, toggleRaceButton };
