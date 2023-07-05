import createHamburger from '../hamburger';

test('CreateHamburger function should create HTMLElement', () => {
  expect(createHamburger()).toBeInstanceOf(HTMLElement);
});
