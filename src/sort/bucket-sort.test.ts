import getRandomList from '../shared/random-list';
import compareNumber from '../shared/compare-number';
import isOrdered from './is-ordered';
import bucketSort from './bucket-sort';

describe('bucketSort', () => {
  for (let i = 0; i < 50; i++) {
    test(`#${i + 1}`, () => {
      expect(isOrdered(bucketSort(getRandomList(1000), 100), compareNumber)).toBeTruthy();
    });
  }
});
