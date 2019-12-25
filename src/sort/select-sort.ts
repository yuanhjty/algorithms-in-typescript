import { ComparisonOperator } from './types';
import swap from './swap';

export default function selectSort<T>(items: T[], compare: ComparisonOperator<T>): T[] {
  for (let i = 0, len = items.length; i < len; i++) {
    let indexOfSmallest = i;
    for (let j = i + 1; j < len; j++) {
      if (compare(items[j], items[indexOfSmallest]) < 0) {
        indexOfSmallest = j;
      }
    }
    if (compare(items[i], items[indexOfSmallest]) > 0) {
      swap(items, i, indexOfSmallest);
    }
  }
  return items;
}
