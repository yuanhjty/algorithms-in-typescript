import bsearchSqrt from './bsearch-sqrt';

function getRandomNumber(): number {
  return Math.random() * 1000000;
}

describe('sqrt by bsearch', () => {
  test('calculate negative value', () => {
    expect(() => bsearchSqrt(-3)).toThrow();
  });

  test('calculate too large value', () => {
    expect(() => bsearchSqrt(Number.MAX_VALUE)).toThrow();
  });

  for (let i = 0; i < 20; i++) {
    const n = getRandomNumber();
    test(`#${i + 1}: ${n}`, () => {
      expect(Math.abs(bsearchSqrt(n) - Math.sqrt(n)) < 10 ** -6).toBeTruthy();
    });
  }
});
