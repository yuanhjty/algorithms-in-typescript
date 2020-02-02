import compare from '../shared/compare-number';
import heapSort from './heap-sort';
import runTest from './shared/test-runner';

runTest(heapSort);

describe('heap sort debug test', () => {
  test('test', () => {
    const items = [3, 4];
    heapSort(items, compare);
    // console.log(items);
    expect(items).toEqual([3, 4]);
  });
});
