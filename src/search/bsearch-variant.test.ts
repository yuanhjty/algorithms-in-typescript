import bsearchFirstEqualTo from './bsearch-first-equal-to';
import bsearchLastEqualTo from './bsearch-last-equal-to';
import bsearchFirstNotLessThan from './bsearch-first-not-less-than';
import bsearchLastNotLargerThan from './bsearch-last-not-larger-than';

const items = [1, 1, 2, 3, 3, 3, 5, 5, 5, 6, 6, 7, 7, 8, 9, 9, 10];
//             0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16

describe('bsearch first equal to', () => {
  const testCases = [
    [0, -1],
    [20, -1],
    [1, 0],
    [2, 2],
    [3, 3],
    [8, 13],
    [9, 14],
    [10, 16],
  ];
  testCases.forEach(([target, index], i) => {
    test(`#${i}, target: ${target}, index: ${index}`, () => {
      expect(bsearchFirstEqualTo(items, target)).toBe(index);
    });
  });
});

describe('bsearch last equal to', () => {
  const testCases = [
    [0, -1],
    [20, -1],
    [1, 1],
    [2, 2],
    [3, 5],
    [8, 13],
    [9, 15],
    [10, 16],
  ];
  testCases.forEach(([target, index], i) => {
    test(`#${i}, target: ${target}, index: ${index}`, () => {
      expect(bsearchLastEqualTo(items, target)).toBe(index);
    });
  });
});

describe('bsearch first not less than', () => {
  const testCases = [
    [0, 0],
    [20, -1],
    [1, 0],
    [2, 2],
    [3, 3],
    [4, 6],
    [8, 13],
    [9, 14],
    [10, 16],
  ];
  testCases.forEach(([target, index], i) => {
    test(`#${i}, target: ${target}, index: ${index}`, () => {
      expect(bsearchFirstNotLessThan(items, target)).toBe(index);
    });
  });
});

describe('bsearch last not larger than', () => {
  const testCases = [
    [0, -1],
    [20, 16],
    [1, 1],
    [2, 2],
    [3, 5],
    [4, 5],
    [8, 13],
    [9, 15],
    [10, 16],
  ];
  testCases.forEach(([target, index], i) => {
    test(`#${i}, target: ${target}, index: ${index}`, () => {
      expect(bsearchLastNotLargerThan(items, target)).toBe(index);
    });
  });
});
