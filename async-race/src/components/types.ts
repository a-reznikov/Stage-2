export interface Cars {
  name: string;
  color: string;
  id?: number;
}

export interface Timers {
  [key: number]: NodeJS.Timer;
}

export interface Engines {
  velocity: 64;
  distance: 500000;
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
  garage = 'garage',
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
}
