import getRandomList from '../shared/random-list';
import compareNumber from '../shared/compare-number';
import isOrdered from './is-ordered';
import bucketSort from './bucket-sort';

describe('bucketSort', () => {
  for (let i = 0; i < 50; i++) {
    test(`#${i + 1}`, () => {
      const list = getRandomList(1000);
      list[list.length - 1] = 2;
      list[list.length] = 1;
      expect(isOrdered(list, compareNumber)).toBeFalsy();
      expect(isOrdered(bucketSort(list, 100), compareNumber)).toBeTruthy();
    });
  }
});
