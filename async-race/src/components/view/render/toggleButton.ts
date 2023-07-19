import { EngineStatus } from '../../types';

export default function toggleButton(id: number, event: string): void {
  const carIco: HTMLElement | null = document.getElementById(`${id}`);
  if (carIco) {
    const track: HTMLElement | null = carIco.closest('.track');
    if (track) {
      const startButton: HTMLElement | null = track.querySelector('.engine-control__buttons_start');
      if (startButton) {
        if (event === EngineStatus.started) {
          startButton.setAttribute('disabled', '');
        }
        if (event === EngineStatus.stopped) {
          startButton.removeAttribute('disabled');
        }
      }
    }
  }
}
