import isOrdered from './is-ordered';

function operator(a: number, b: number): number {
  return a - b;
}

describe('isOrdered', () => {
  test('ordered', () => {
    const list1 = [1, 3, 4, 4, 6];
    const list2 = [1, 3, 4, 5, 6];
    expect(isOrdered(list1, operator)).toBeTruthy();
    expect(isOrdered(list2, operator)).toBeTruthy();
  });

  test('disordered', () => {
    const list1 = [2, 5, 1, 5];
    const list2 = [5, 4, 3, 2, 1];
    expect(isOrdered(list1, operator)).toBeFalsy();
    expect(isOrdered(list2, operator)).toBeFalsy();
  });
});
