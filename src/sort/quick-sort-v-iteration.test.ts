import compareNumber from '../shared/compare-number';
import isOrdered from './is-ordered';
import quickSort from './quick-sort-v-iteration';
import runTest from './shared/test-runner';

runTest(quickSort);

test('debug quick sort iteration version', () => {
  expect(isOrdered(quickSort([5, 4, 3, 2, 1]), compareNumber)).toBeTruthy();
});
