import { isRightLevel, nextLevel, previousLevel } from '../changeLevel';

const rightLevelNumber: number = 5;
const minLevel: number = 1;
const maxLevel: number = 10;
const negativeNumber: number = -2;
const overNumber: number = 20;

test('Function should return true', () => {
  expect(isRightLevel(rightLevelNumber)).toBeTruthy();
});

test('Function should return true', () => {
  expect(isRightLevel(minLevel)).toBeTruthy();
});

test('Function should return true', () => {
  expect(isRightLevel(maxLevel)).toBeTruthy();
});

test('Function should return false', () => {
  expect(isRightLevel(negativeNumber)).toBeFalsy();
});

test('Function should return false', () => {
  expect(isRightLevel(overNumber)).toBeFalsy();
});

test('Previouse level must be equal 4', () => {
  expect(previousLevel(rightLevelNumber)).toBe(4);
});

test('Previouse level must be equal 0', () => {
  expect(previousLevel(minLevel)).toBe(0);
});

test('Previouse level must be equal 9', () => {
  expect(previousLevel(maxLevel)).toBe(9);
});

test('Previouse level must be equal -3', () => {
  expect(previousLevel(negativeNumber)).toBe(-3);
});

test('Previouse level must be equal -3', () => {
  expect(previousLevel(overNumber)).toBe(19);
});

test('Previouse level must be equal 6', () => {
  expect(nextLevel(rightLevelNumber)).toBe(6);
});

test('Previouse level must be equal 2', () => {
  expect(nextLevel(minLevel)).toBe(2);
});

test('Previouse level must be equal 11', () => {
  expect(nextLevel(maxLevel)).toBe(11);
});

test('Previouse level must be equal -1', () => {
  expect(nextLevel(negativeNumber)).toBe(-1);
});

test('Previouse level must be equal -1', () => {
  expect(nextLevel(overNumber)).toBe(21);
});
