export default function createScore(): HTMLElement {
  const score: HTMLDivElement = document.createElement('div');
  score.className = `winners__score score`;
  const scoreHeader: HTMLDivElement = document.createElement('div');
  scoreHeader.className = `score__header score__table`;
  const number: HTMLSpanElement = document.createElement('span');
  number.className = `header__number`;
  number.textContent = 'Number';
  const carIco: HTMLSpanElement = document.createElement('span');
  carIco.className = `header__car-ico`;
  carIco.textContent = 'Car';
  const carBrand: HTMLSpanElement = document.createElement('span');
  carBrand.className = `header__car-brand`;
  carBrand.textContent = 'Brand and model';
  const wins: HTMLSpanElement = document.createElement('button');
  wins.className = `header__wins score__buttons`;
  wins.innerHTML = 'Wins';
  const time: HTMLSpanElement = document.createElement('button');
  time.className = `header__time score__buttons`;
  time.innerHTML = 'Best time (sec)';
  const scoreBody: HTMLDivElement = document.createElement('div');
  scoreBody.className = `score__body score__table`;
  scoreHeader.append(number);
  scoreHeader.append(carIco);
  scoreHeader.append(carBrand);
  scoreHeader.append(wins);
  scoreHeader.append(time);
  score.append(scoreHeader);
  score.append(scoreBody);

  return score;
}
