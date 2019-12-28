import quickSortV1 from './quick-sort';
import quickSortV2 from './quick-sort-v2';
import mergeSort from './merge-sort';
import bubbleSort from './bubble-sort';
import insertSort from './insert-sort';
import selectSort from './select-sort';
import bucketSort from './bucket-sort';
import countingSort from './counting-sort';
import radixSort from './radix-sort';
import measure from './shared/measure';

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
measure(quickSortV2, 3000, 1000);
measure(mergeSort, 3000, 1000);
const curryBucketSort1 = (items: number[]): number[] => bucketSort(items, 100);
measure(curryBucketSort1, 3000, 1000);
const curryBucketSort2 = (items: number[]): number[] => bucketSort(items, 10);
measure(curryBucketSort2, 3000, 1000);
measure(countingSort, 3000, 1000);
measure(radixSort, 3000, 1000);

console.log('---');
measure(quickSortV2, 1000000, 10);
measure(radixSort, 1000000, 10);