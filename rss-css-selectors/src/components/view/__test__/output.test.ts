import createOutput from '../output';

test('CreateOutput function should create HTMLElement', () => {
  expect(createOutput()).toBeInstanceOf(HTMLElement);
});
