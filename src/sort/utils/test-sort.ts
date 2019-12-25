import { Sort } from '../types';
import isOrdered from '../is-ordered';
import getRandomList from './random-list';

function operator(a: number, b: number): number {
  return a - b;
}

export default function testSort(sort: Sort<number>): void {
  describe('quickSort', () => {
    const lists = [
      [],
      [1],
      [3, 4],
      [4, 3],
      [3, 3],
      [4, 5, 6],
      [6, 5, 4],
      [1, 2, 3, 5, 3, 8, 1],
      [1, 2, 3, 5, 8, 3, 1],
      [1, 2, 3, 5, 5, 5, 1],
      [1, 3, 11, 6, 5, 4, 34, 2, 9, 5],
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1],
      [3, 3, 3, 3, 3],
    ];

    lists.forEach((l, i) => {
      test(`sort list #${i + 1}, list size: ${l.length}`, () => {
        expect(isOrdered(sort(l, operator), operator)).toBeTruthy();
      });
    });

    const randomLists = new Array(50);
    for (let i = 0; i < 50; i++) {
      randomLists[i] = getRandomList(100);
    }

    randomLists.forEach((l, i) => {
      test(`sort random list #${i + 1}, list size: ${l.length}`, () => {
        expect(isOrdered(sort(l, operator), operator)).toBeTruthy();
      });
    });
  });
}
