export function creatTemplate() {
  const TITLE = 'Minesweeper';
  const SMALL = 'easy - 10x10';
  const MEDIUM = 'medium - 15x15';
  const HARD = 'hard - 25x25';
  const LABEL_MINES = 'Mines left';
  const LABEL_FLAGS = 'Flags used';
  const LABEL_STEPS = 'Steps';
  const LABEL_TIME = 'Time';
  const NEW_GAME = 'New Game';
  const SAVE_GAME = 'Save Game';
  const LOAD_GAME = 'Load Game';
  const body = document.querySelector('body');
  const container = document.createElement('main');
  container.className = 'main';
  const wrapperOuter = document.createElement('section');
  wrapperOuter.className = 'wrapper outer';
  const titleGame = document.createElement('h1');
  titleGame.className = 'title inter';
  titleGame.textContent = TITLE;
  const settings = document.createElement('div');
  settings.className = 'settings inter';
  const controls = document.createElement('div');
  controls.className = 'controls';
  const buttonsPanel = document.createElement('div');
  buttonsPanel.className = 'buttons-panel';
  const buttonNewGame = document.createElement('button');
  buttonNewGame.className = 'button outer button_new-game';
  buttonNewGame.textContent = NEW_GAME;
  const buttonSave = document.createElement('button');
  buttonSave.className = 'button outer button_save';
  buttonSave.textContent = SAVE_GAME;
  const buttonLoad = document.createElement('button');
  buttonLoad.className = 'button outer button_load';
  buttonLoad.textContent = LOAD_GAME;
  const quantityMines = document.createElement('input');
  quantityMines.className = 'quantity-mines inter';
  quantityMines.type = 'number';
  quantityMines.id = 'quantity-mines';
  quantityMines.setAttribute('min', '10');
  quantityMines.setAttribute('max', '99');
  quantityMines.setAttribute('placeholder', '10 Mines...');
  const size = document.createElement('select');
  size.className = 'size inter';
  size.textContent = 'Level';
  const defSize = document.createElement('option');
  defSize.className = 'def-size';
  defSize.setAttribute('value', '');
  defSize.setAttribute('disabled', 'disabled');
  defSize.setAttribute('selected', 'selected');
  defSize.textContent = 'Level ( easy )';
  defSize.value = 10;
  const smallSize = document.createElement('option');
  smallSize.className = 'small-size';
  smallSize.textContent = SMALL;
  smallSize.value = 10;
  const mediumSize = document.createElement('option');
  mediumSize.className = 'medium-size';
  mediumSize.textContent = MEDIUM;
  mediumSize.value = 15;
  const hardSize = document.createElement('option');
  hardSize.className = 'hard-size';
  hardSize.textContent = HARD;
  hardSize.value = 25;
  const volume = document.createElement('button');
  volume.className = 'volume outer';
  const statusGame = document.createElement('div');
  statusGame.className = 'status-game inter';
  const statusMines = document.createElement('div');
  statusMines.className = 'status status-mines';
  const labelMines = document.createElement('label');
  labelMines.className = 'label-mines';
  labelMines.textContent = LABEL_MINES;
  const amountMines = document.createElement('span');
  amountMines.className = 'amount inter mines';
  const statusFlags = document.createElement('div');
  statusFlags.className = 'status status-flags';
  const labelFlags = document.createElement('label');
  labelFlags.className = 'label-flags';
  labelFlags.textContent = LABEL_FLAGS;
  const amountFlags = document.createElement('span');
  amountFlags.className = 'amount inter flags';
  const emoji = document.createElement('button');
  emoji.className = 'emoji happy';
  const statusSteps = document.createElement('div');
  statusSteps.className = 'status status-steps';
  const labelSteps = document.createElement('label');
  labelSteps.className = 'label-steps';
  labelSteps.textContent = LABEL_STEPS;
  const amountSteps = document.createElement('span');
  amountSteps.className = 'amount inter steps';
  const statusTime = document.createElement('div');
  statusTime.className = 'status status-time';
  const labelTime = document.createElement('label');
  labelTime.className = 'label-time';
  labelTime.textContent = LABEL_TIME;
  const amountTimes = document.createElement('span');
  amountTimes.className = 'amount inter times';
  const playground = document.createElement('div');
  playground.className = 'playground inter';
  const score = document.createElement('ol');
  score.className = 'score inter';
  score.textContent = 'Last 10 games won!';
  const modalTitle = document.createElement('h2');
  modalTitle.className = 'modal__title';
  const modalSubTitle = document.createElement('h3');
  modalSubTitle.className = 'modal__subtitle';
  const modalButtonClose = document.createElement('button');
  modalButtonClose.className = 'button outer button__modal_close';
  modalButtonClose.textContent = 'Close';
  const modal = document.createElement('div');
  modal.className = 'modal';
  const modalWrapper = document.createElement('div');
  modalWrapper.className = 'modal__wrapper';

  statusMines.append(labelMines);
  statusMines.append(amountMines);
  statusFlags.append(labelFlags);
  statusFlags.append(amountFlags);
  statusSteps.append(labelSteps);
  statusSteps.append(amountSteps);
  statusTime.append(labelTime);
  statusTime.append(amountTimes);

  statusGame.append(statusMines);
  statusGame.append(statusFlags);
  statusGame.append(emoji);
  statusGame.append(statusSteps);
  statusGame.append(statusTime);

  size.append(defSize);
  size.append(smallSize);
  size.append(mediumSize);
  size.append(hardSize);

  controls.append(quantityMines);
  controls.append(size);
  controls.append(volume);

  buttonsPanel.append(buttonNewGame);
  buttonsPanel.append(buttonSave);
  buttonsPanel.append(buttonLoad);

  settings.append(controls);
  settings.append(buttonsPanel);

  modal.append(modalTitle);
  modal.append(modalSubTitle);
  modal.append(modalButtonClose);

  modalWrapper.append(modal);

  wrapperOuter.append(titleGame);
  wrapperOuter.append(settings);
  wrapperOuter.append(statusGame);
  wrapperOuter.append(playground);
  wrapperOuter.append(score);
  wrapperOuter.append(modalWrapper);

  container.append(wrapperOuter);

  body.append(container);
  return body;
}
