import createInterection from '../interection';

test('CreateInterection function should create HTMLElement', () => {
  expect(createInterection()).toBeInstanceOf(HTMLElement);
});
