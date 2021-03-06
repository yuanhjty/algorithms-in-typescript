import { Compare } from '../shared/types';
import swap from '../shared/swap';

export default function bubbleSort<T>(items: T[], compare: Compare<T>): T[] {
  for (let end = items.length - 1; end > 0; end--) {
    let sorted = true;
    for (let i = 0; i < end; i++) {
      if (compare(items[i], items[i + 1]) > 0) {
        swap(items, i, i + 1);
        sorted = false;
      }
    }
    if (sorted) {
      break;
    }
  }
  return items;
}
