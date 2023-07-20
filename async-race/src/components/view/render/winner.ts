import { ButtonNames } from '../../types';

export default function toggleWinnerText(id?: number, event?: string, time?: number): void {
  const winner: HTMLElement | null = document.querySelector('.garage__winner');
  if (id && event && time) {
    const carIco: HTMLElement | null = document.getElementById(`${id}`);
    const timeInSeconds: string = (time / 1000).toFixed(2);
    if (carIco) {
      const track: HTMLElement | null = carIco.closest('.track');
      if (track) {
        const carName: HTMLSpanElement | null = track.querySelector('.track__car-name');
        if (carName) {
          if (winner) {
            if (event === ButtonNames.race) {
              const name: string | null = carName.textContent;
              winner.textContent = `${name} went first [${timeInSeconds}s]!`;
              winner.classList.remove('winner_hidden');
            }
          }
        }
      }
    }
  } else if (winner) {
    winner.classList.add('winner_hidden');
  }
}
