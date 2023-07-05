import { Levels } from '../../types';
import Level from '../level';

const level: Levels = {
  levelId: 1,
  levelName: 'Plates',
  task: 'Select all the plates',
  answer: 'plate',
  help: {
    selector: 'Tag Selector',
    title: 'Use the tag as a selector.',
    syntax: 'span',
    description: 'To select all elements with the same tag, use the tag as a selector.',
    examples: 'span { color: white; }',
  },
  items: [
    {
      tag: 'plate',
      classItem: '',
      id: '',
      animated: 'selected',
      tooltip: '<plate></plate>',
    },
  ],
};

const newLevel: Level = new Level(level);

test('Object newLevel must be an instance of class Level', () => {
  expect(newLevel).toBeInstanceOf(Level);
});

test('Method getLevelId() object newLevel should return 1', () => {
  expect(newLevel.getLevelId()).toBe(1);
});

test('Method getLevelId() object newLevel should return Plates', () => {
  expect(newLevel.getLevelName()).toBe('Plates');
});
