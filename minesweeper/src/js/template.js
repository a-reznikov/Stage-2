export function creatTemplate() {
  const TITLE = 'Minesweeper';
  const body = document.querySelector('body');
  const container = document.createElement('main');
  container.className = 'main';
  const wrapper = document.createElement('section');
  wrapper.className = 'wrapper';
  const titleGame = document.createElement('h1');
  titleGame.className = 'title';
  titleGame.textContent = TITLE;
  const statusGame = document.createElement('div');
  statusGame.className = 'status-game';
  const amountMines = document.createElement('span');
  amountMines.className = 'amount mines';
  const emoji = document.createElement('div');
  emoji.className = 'emoji happy';
  const amountTimes = document.createElement('span');
  amountTimes.className = 'amount times';
  const playground = document.createElement('div');
  playground.className = 'playground';

  statusGame.append(amountMines);
  statusGame.append(emoji);
  statusGame.append(amountTimes);
  wrapper.append(titleGame);
  wrapper.append(statusGame);
  wrapper.append(playground);
  container.append(wrapper);
  body.append(container);
  return body;
}
