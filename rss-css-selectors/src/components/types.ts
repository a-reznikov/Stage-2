export interface Items {
  tag: string;
  classItem: string;
  id: string;
}

export interface Levels {
  levelId: number;
  levelName: string;
  task: string;
  items: Items[];
}

export enum Constants {
  asideTitle = 'Choose a level',
}
