import createAsideInfo from '../asideInfo';

test('CreateAsideInfo function should create HTMLElement', () => {
  expect(createAsideInfo()).toBeInstanceOf(HTMLElement);
});
