import Generator from '../generator';

const newGenerator: Generator = new Generator();

test('Object newItem must be an instance of class Level', () => {
  expect(newGenerator).toBeInstanceOf(Generator);
});
