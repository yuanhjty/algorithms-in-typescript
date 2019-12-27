import compareNumber from '../shared/compare-number';
import runTest from './shared/test-runner';
import isSorted from './is-ordered';
import radixSort from './radix-sort';

runTest(radixSort);

describe('radixSort debug test', () => {
  test('test', () => {
    expect(isSorted(radixSort([3, 2, 3, 25, 83, 21, 10, 132, 126]), compareNumber)).toBeTruthy();
  });
});
