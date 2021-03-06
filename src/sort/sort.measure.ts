import quickSortV1 from './quick-sort';
import quickSortV2 from './quick-sort-v2';
import quickSortVIteration from './quick-sort-v-iteration';
import mergeSort from './merge-sort';
import mergeSortVIteration from './merge-sort-v-iteration';
import heapSort from './heap-sort';
import bubbleSort from './bubble-sort';
import insertSort from './insert-sort';
import selectSort from './select-sort';
import bucketSort from './bucket-sort';
import countingSort from './counting-sort';
import radixSort from './radix-sort';
import measure from './shared/measure';

measure(quickSortV1, 'quick sort v1', 100, 2000);
measure(quickSortV2, 'quick sort v2', 100, 2000);
measure(quickSortVIteration, 'quick sort iteration version', 100, 2000);

measure(mergeSort, 'merge sort', 100, 2000);
measure(mergeSortVIteration, 'merge sort iteration version', 100, 2000);

measure(heapSort, 'heap sort', 100, 2000);

measure(bubbleSort, 'bubble sort', 100, 2000);
measure(insertSort, 'insert sort', 100, 2000);
measure(selectSort, 'select sort', 100, 2000);

console.log('---');
measure(quickSortV1, 'quick sort v1', 200, 2000);
measure(quickSortV2, 'quick sort v2', 200, 2000);
measure(quickSortVIteration, 'quick sort iteration version', 200, 2000);

measure(mergeSort, 'merge sort', 200, 2000);
measure(mergeSortVIteration, 'merge sort iteration version', 200, 2000);

measure(heapSort, 'heap sort', 200, 2000);

measure(bubbleSort, 'bubble sort', 200, 2000);
measure(insertSort, 'insert sort', 200, 2000);
measure(selectSort, 'select sort', 200, 2000);

console.log('---');
measure(quickSortV1, 'quick sort v1', 500, 2000);
measure(quickSortV2, 'quick sort v2', 500, 2000);
measure(quickSortVIteration, 'quick sort iteration version', 500, 2000);

measure(mergeSort, 'merge sort', 500, 2000);
measure(mergeSortVIteration, 'merge sort iteration version', 500, 2000);

measure(heapSort, 'heap sort', 500, 2000);

measure(bubbleSort, 'bubble sort', 500, 1000);
measure(insertSort, 'insert sort', 500, 1000);
measure(selectSort, 'select sort', 500, 1000);

console.log('---');
measure(quickSortV1, 'quick sort v1', 1000, 2000);
measure(quickSortV2, 'quick sort v2', 1000, 2000);
measure(quickSortVIteration, 'quick sort iteration version', 1000, 2000);

measure(mergeSort, 'merge sort', 1000, 2000);
measure(mergeSortVIteration, 'merge sort iteration version', 1000, 2000);

measure(heapSort, 'heap sort', 1000, 2000);

measure(bubbleSort, 'bubble sort', 1000, 1000);
measure(insertSort, 'insert sort', 1000, 1000);
measure(selectSort, 'select sort', 1000, 1000);

console.log('---');
measure(quickSortV1, 'quick sort v1', 3000, 2000);
measure(quickSortV2, 'quick sort v2', 3000, 2000);
measure(quickSortVIteration, 'quick sort iteration version', 3000, 2000);

measure(mergeSort, 'merge sort', 3000, 2000);
measure(mergeSortVIteration, 'merge sort iteration version', 3000, 2000);

measure(heapSort, 'heap sort', 3000, 2000);

const curryBucketSort1 = (items: number[]): number[] => bucketSort(items, 100);
measure(curryBucketSort1, 'bucket sort (bucket size 100)', 3000, 2000);
const curryBucketSort2 = (items: number[]): number[] => bucketSort(items, 10);
measure(curryBucketSort2, 'bucket sort (bucket size 10)', 3000, 2000);

measure(countingSort, 'counting sort', 3000, 2000);
measure(radixSort, 'radix sort', 3000, 2000);
