import search from './bsearch-in-circular-ordered-list';

describe('bsearch in circular ordered list', () => {
  const l0: number[] = [];
  const l1 = [1];
  const l2 = [1, 2];
  const l3 = [2, 1];
  const l4 = [1, 2, 3];
  const l5 = [3, 1, 2];
  const l6 = [4, 1, 2, 3];
  const l7 = [3, 4, 1, 2];
  const l8 = [2, 3, 4, 1];
  const l9 = [2, 3, 4, 5, 1];
  const l10 = [3, 4, 5, 1, 2];
  const l11 = [4, 5, 1, 2, 3];
  const l12 = [5, 1, 2, 3, 4];

  const testCases = [
    [l0, 1, -1],

    [l1, 1, 0],
    [l1, 0, -1],
    [l1, 10, -1],

    [l2, 1, 0],
    [l2, 2, 1],
    [l2, 0, -1],
    [l2, 10, -1],

    [l3, 1, 1],
    [l3, 2, 0],
    [l3, 0, -1],
    [l3, 10, -1],

    [l4, 1, 0],
    [l4, 2, 1],
    [l4, 3, 2],

    [l5, 1, 1],
    [l5, 2, 2],
    [l5, 3, 0],

    [l6, 1, 1],
    [l6, 2, 2],
    [l6, 3, 3],
    [l6, 4, 0],

    [l7, 1, 2],
    [l7, 2, 3],
    [l7, 3, 0],
    [l7, 4, 1],

    [l8, 1, 3],
    [l8, 2, 0],
    [l8, 3, 1],
    [l8, 4, 2],

    [l9, 1, 4],
    [l9, 2, 0],
    [l9, 3, 1],
    [l9, 4, 2],
    [l9, 5, 3],

    [l10, 1, 3],
    [l10, 2, 4],
    [l10, 3, 0],
    [l10, 4, 1],
    [l10, 5, 2],

    [l11, 1, 2],
    [l11, 2, 3],
    [l11, 3, 4],
    [l11, 4, 0],
    [l11, 5, 1],

    [l12, 1, 1],
    [l12, 2, 2],
    [l12, 3, 3],
    [l12, 4, 4],
    [l12, 5, 0],
    [l12, 0, -1],
    [l12, 10, -1],
  ];

  testCases.forEach(([items, target, index], i) => {
    test(`#${i}`, () => {
      expect(search(items as number[], target as number)).toBe(index);
    });
  });

  test('debug', () => {
    expect(search([3, 1, 2], 3)).toBe(0);
  });
});
