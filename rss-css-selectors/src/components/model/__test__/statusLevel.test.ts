import { resetProgress } from '../statusLevel';

const emptyObject: Partial<Storage> = {};

test('Function should return empty object', () => {
  expect(resetProgress()).toStrictEqual(emptyObject);
});
