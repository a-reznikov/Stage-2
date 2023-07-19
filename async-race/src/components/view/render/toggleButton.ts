import { EngineStatus } from '../../types';

export default function toggleButton(id: number, event: string): void {
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
