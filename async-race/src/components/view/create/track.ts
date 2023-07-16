import { ButtonNames } from '../../types';
import createButton from './button';

export default function createTrack(): HTMLElement {
  const track: HTMLDivElement = document.createElement('div');
  track.className = 'track';
  const settings: HTMLDivElement = document.createElement('div');
  settings.className = 'track__settings settings';
  const buttonSelect: HTMLButtonElement = createButton('settings', `${ButtonNames.select}`);
  const buttonRemove: HTMLButtonElement = createButton('settings', `${ButtonNames.remove}`);
  const carName: HTMLSpanElement = document.createElement('span');
  carName.className = 'track__car-name';
  carName.textContent = 'VW Polo';
  const race: HTMLDivElement = document.createElement('div');
  race.className = 'track__race race';
  const engineControl: HTMLDivElement = document.createElement('div');
  engineControl.className = 'track__engine-control engine-control';
  const buttonStart: HTMLButtonElement = createButton(' engine-control', `${ButtonNames.start}`);
  const buttonStop: HTMLButtonElement = createButton(' engine-control', `${ButtonNames.stop}`);
  const progress: HTMLDivElement = document.createElement('div');
  progress.className = 'track__progress progress';
  const car: HTMLDivElement = document.createElement('div');
  car.className = 'track__car car';
  settings.append(buttonSelect);
  settings.append(buttonRemove);
  settings.append(carName);
  engineControl.append(buttonStart);
  engineControl.append(buttonStop);
  progress.append(car);
  race.append(engineControl);
  race.append(progress);
  track.append(settings);
  track.append(race);
  return track;
}
