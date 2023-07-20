export default function changeSection(target: HTMLElement): void {
  const winners: HTMLElement | null = document.querySelector('.winners');
  const garage: HTMLElement | null = document.querySelector('.garage');
  const isToGarage: boolean = target.classList.contains('nav__buttons_to-garage');
  const isToWinners: boolean = target.classList.contains('nav__buttons_to-winners');
  if (winners && garage) {
    if (isToGarage) {
      garage.classList.remove('garage_hidden');
      winners.classList.add('winners_hidden');
    }
    if (isToWinners) {
      winners.classList.remove('winners_hidden');
      garage.classList.add('garage_hidden');
    }
  }
}
