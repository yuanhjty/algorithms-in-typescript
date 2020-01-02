import bsearch from './bsearch';

describe('bsearch', () => {
  const items = [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 22, 33];
  const cases = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [8, 7],
    [10, 8],
    [11, 9],
    [22, 10],
    [33, 11],
    [44, -1],
  ];
  cases.forEach(([item, index], i) => {
    test(`#${i}`, () => {
      expect(bsearch(items, item)).toBe(index);
    });
  });
});
