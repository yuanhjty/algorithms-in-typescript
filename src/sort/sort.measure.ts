import measureSort from './utils/measure-sort';
import quickSortV1 from './quick-sort';
import quickSortV2 from './quick-sort-v2';
import bubbleSort from './bubble-sort';
import insertSort from './insert-sort';

measureSort(quickSortV1);
measureSort(quickSortV2);
measureSort(bubbleSort, 800, 2000);
measureSort(insertSort, 800, 2000);
