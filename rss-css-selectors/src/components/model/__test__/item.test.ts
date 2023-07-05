import { Items } from '../../types';
import Item from '../item';

const item: Items = {
  tag: 'plate',
  classItem: '',
  id: '',
  animated: 'selected',
  tooltip: '<plate></plate>',
};

const newItem: Item = new Item(item);

test('Object newItem must be an instance of class Level', () => {
  expect(newItem).toBeInstanceOf(Item);
});

test('Method createItme() object newLevel should create HTMLElement', () => {
  expect(newItem.createItme()).toBeInstanceOf(HTMLElement);
});

test('Method getTag() object newLevel should return Plates', () => {
  expect(newItem.getTag()).toBe('plate');
});
