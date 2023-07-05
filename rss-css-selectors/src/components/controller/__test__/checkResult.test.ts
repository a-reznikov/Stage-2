import { isAnswer } from '../checkResult';

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
