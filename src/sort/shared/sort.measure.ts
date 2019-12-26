import quickSortV1 from '../quick-sort';
import quickSortV2 from '../quick-sort-v2';
import mergeSort from '../merge-sort';
import bubbleSort from '../bubble-sort';
import insertSort from '../insert-sort';
import selectSort from '../select-sort';
import measure from './measure';

measure(quickSortV1, 100, 1000);
measure(quickSortV2, 100, 1000);
measure(mergeSort, 100, 1000);
measure(bubbleSort, 100, 1000);
measure(insertSort, 100, 1000);
measure(selectSort, 100, 1000);

console.log('---');
measure(quickSortV1, 200, 1000);
measure(quickSortV2, 200, 1000);
measure(mergeSort, 200, 1000);
measure(bubbleSort, 200, 1000);
measure(insertSort, 200, 1000);
measure(selectSort, 200, 1000);

console.log('---');
measure(quickSortV1, 500, 1000);
measure(quickSortV2, 500, 1000);
measure(mergeSort, 500, 1000);
measure(bubbleSort, 500, 1000);
measure(insertSort, 500, 1000);
measure(selectSort, 500, 1000);

console.log('---');
measure(quickSortV1, 1000, 1000);
measure(quickSortV2, 1000, 1000);
measure(mergeSort, 1000, 1000);
measure(bubbleSort, 1000, 1000);
measure(insertSort, 1000, 1000);
measure(selectSort, 1000, 1000);

console.log('---');
measure(quickSortV1, 1000, 3000);
measure(quickSortV2, 1000, 3000);
measure(mergeSort, 1000, 3000);
