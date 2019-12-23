import calculator from './simple-calculator';

describe('simpleCalculator', () => {
  test('#1', () => {
    expect(calculator('1 + 3 - 4 * 5 / 2 + 7 * 3')).toBe(15);
    expect(calculator('1+3-4*5/2 + 7 * 3')).toBe(15);
  });

  test('#2', () => {
    expect(calculator('1 * 3 - 4 * 5 / 2 + 7 - 3')).toBe(-3);
  });
});
