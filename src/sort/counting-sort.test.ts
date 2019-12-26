import compareNumber from '../shared/compare-number';
import runnerTest from './shared/test-runner';
import isSorted from './is-ordered';
import countingSort from './counting-sort';

runnerTest(countingSort);

describe('test', () => {
  test('test', () => {
    expect(isSorted(countingSort([4, 3]), compareNumber)).toBeTruthy();
  });
});
