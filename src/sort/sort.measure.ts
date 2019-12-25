import measureSort from './utils/measure-sort';
import quickSortV1 from './quick-sort';
import quickSortV2 from './quick-sort-v2';
import mergeSort from './merge-sort';
import bubbleSort from './bubble-sort';
import insertSort from './insert-sort';
import selectSort from './select-sort';

measureSort(quickSortV1, 100, 1000);
measureSort(quickSortV2, 100, 1000);
measureSort(mergeSort, 100, 1000);
measureSort(bubbleSort, 100, 1000);
measureSort(insertSort, 100, 1000);
measureSort(selectSort, 100, 1000);

console.log('---');
measureSort(quickSortV1, 200, 1000);
measureSort(quickSortV2, 200, 1000);
measureSort(mergeSort, 200, 1000);
measureSort(bubbleSort, 200, 1000);
measureSort(insertSort, 200, 1000);
measureSort(selectSort, 200, 1000);

console.log('---');
measureSort(quickSortV1, 500, 1000);
measureSort(quickSortV2, 500, 1000);
measureSort(mergeSort, 500, 1000);
measureSort(bubbleSort, 500, 1000);
measureSort(insertSort, 500, 1000);
measureSort(selectSort, 500, 1000);

console.log('---');
measureSort(quickSortV1, 1000, 1000);
measureSort(quickSortV2, 1000, 1000);
measureSort(mergeSort, 1000, 1000);
measureSort(bubbleSort, 1000, 1000);
measureSort(insertSort, 1000, 1000);
measureSort(selectSort, 1000, 1000);

console.log('---');
measureSort(quickSortV1, 1000, 3000);
measureSort(quickSortV2, 1000, 3000);
measureSort(mergeSort, 1000, 3000);
