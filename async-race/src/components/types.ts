export interface Cars {
  name: string;
  color: string;
  id?: number;
}

export interface Winners {
  id: number;
  wins: number;
  time: number;
}

export interface Timers {
  [key: number]: NodeJS.Timer;
}

export interface Winner {
  winnerId: number;
  winnerTime: number;
}

export interface Engines {
  velocity: 64;
  distance: 500000;
}

export interface Sort {
  sort: string;
  order: string;
}

export interface PagesNumber {
  garage: number;
  winners: number;
}

export enum ButtonNames {
  toGarage = 'to garage',
  toWinners = 'to winners',
  create = 'create',
  update = 'update',
  race = 'race',
  reset = 'reset',
  generate = 'generate cars',
  select = 'select',
  remove = 'remove',
  start = 'start',
  stop = 'stop',
  previous = 'previous',
  next = 'next',
}

export enum Links {
  baseLink = 'http://127.0.0.1:3000/',
  limitCars = 7,
  limitWinners = 10,
  garage = 'garage',
  winners = 'winners',
  engine = 'engine',
}

export enum Methods {
  get = 'GET',
  delete = 'DELETE',
  post = 'POST',
  patch = 'PATCH',
}

export enum EngineStatus {
  drive = 'drive',
  started = 'started',
  stopped = 'stopped',
  finished = 'finished',
  preStart = 'preStart',
}

export enum Pages {
  garage = 'garage',
  winners = 'winners',
}

export enum Sorted {
  id = 'id',
  wins = 'wins',
  time = 'time',
}

export enum Order {
  asc = 'ASC',
  desc = 'DESC',
}

export enum Base {
  name = '',
  color = '#FFFFFF',
}

export enum PageNumber {
  firstPage = 1,
  secondPage = 2,
}

export enum Errors {
  fetch = 'Failed to fetch',
  fetchMessage = 'Please follow the link to install and run the server.',
  serverLink = 'https://github.com/mikhama/async-race-api',
  serverName = 'Async race api server',
}
