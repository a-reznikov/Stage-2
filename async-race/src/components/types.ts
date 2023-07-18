export interface Cars {
  name: string;
  color: string;
  id?: number;
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
  start = 'a',
  stop = 'b',
  previous = 'previous',
  next = 'next',
}

export enum Links {
  baseLink = 'http://127.0.0.1:3000/',
  garage = 'garage',
}

export enum Methods {
  get = 'GET',
  delete = 'DELETE',
  post = 'POST',
  patch = 'PATCH',
}
