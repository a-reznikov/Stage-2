import { isAnswer, isLevel } from '../checkResult';

const correctRequests: string[] = ['abcd', '#div', '.span'];
const incorrectRequests: string[] = ['1abcd', '2#div', '3.span', '100'];

test('isAnswer function should return true', () => {
  correctRequests.forEach((request: string): void => {
    expect(isAnswer(request)).toBeTruthy();
  });
});

test('isAnswer function should return false', () => {
  incorrectRequests.forEach((request: string): void => {
    expect(isAnswer(request)).toBeFalsy();
  });
});

const rightLevelNumber: string = '5';
const maxLevel: string = '10';
const overNumber: string = '20';
const selectorTag: string = 'div';
const selectorId: string = '#div';
const selectorClass: string = '.div';

test('isLevel function should return true', () => {
  expect(isLevel(rightLevelNumber)).toBeTruthy();
});

test('isLevel function should return true', () => {
  expect(isLevel(maxLevel)).toBeTruthy();
});

test('isLevel function should return false', () => {
  expect(isLevel(overNumber)).toBeFalsy();
});

test('isLevel function should return false', () => {
  expect(isLevel(selectorTag)).toBeFalsy();
});

test('isLevel function should return false', () => {
  expect(isLevel(selectorId)).toBeFalsy();
});

test('isLevel function should return false', () => {
  expect(isLevel(selectorClass)).toBeFalsy();
});
