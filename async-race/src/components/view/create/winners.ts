import createPagination from './pagination';
import createScore from './score';

export default function createWinners(): HTMLElement {
  const winners: HTMLElement = document.createElement('section');
  winners.className = 'section winners';
  const title: HTMLElement = document.createElement('h2');
  title.className = 'winners__title';
  title.textContent = 'Winners (amount winners)';
  const page: HTMLElement = document.createElement('p');
  page.className = 'winners__page';
  page.textContent = 'Page # 1';
  const score: HTMLElement = createScore();
  const pagination: HTMLElement = createPagination('winners');
  winners.append(title);
  winners.append(page);
  winners.append(score);
  winners.append(pagination);
  return winners;
}
