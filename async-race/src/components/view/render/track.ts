import { ButtonNames, Cars } from '../../types';
import createButton from '../create/button';

export default function renderTrack(car: Cars): HTMLElement {
  const playground: HTMLElement | null = document.querySelector('.playground');
  const track: HTMLDivElement = document.createElement('div');
  track.className = 'track';
  const settings: HTMLDivElement = document.createElement('div');
  settings.className = 'track__settings settings';
  const buttonSelect: HTMLButtonElement = createButton('settings', `${ButtonNames.select}`);
  const buttonRemove: HTMLButtonElement = createButton('settings', `${ButtonNames.remove}`);
  const carName: HTMLSpanElement = document.createElement('span');
  carName.className = 'track__car-name';
  carName.textContent = `${car.name}`;
  const race: HTMLDivElement = document.createElement('div');
  race.className = 'track__race race';
  const engineControl: HTMLDivElement = document.createElement('div');
  engineControl.className = 'track__engine-control engine-control';
  const buttonStart: HTMLButtonElement = createButton(' engine-control', `${ButtonNames.start}`);
  const buttonStop: HTMLButtonElement = createButton(' engine-control', `${ButtonNames.stop}`);
  buttonStop.setAttribute('disabled', '');
  const progress: HTMLDivElement = document.createElement('div');
  progress.className = 'track__progress progress';
  const carIco: HTMLDivElement = document.createElement('div');
  carIco.className = 'track__car car';
  carIco.setAttribute('id', `${car.id}`);
  carIco.style.background = car.color;
  settings.append(buttonSelect);
  settings.append(buttonRemove);
  settings.append(carName);
  engineControl.append(buttonStart);
  engineControl.append(buttonStop);
  progress.append(carIco);
  race.append(engineControl);
  race.append(progress);
  track.append(settings);
  track.append(race);

  if (playground) playground.append(track);

  return track;
}
