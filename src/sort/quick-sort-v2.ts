import { Compare } from '../shared/types';
import swap from '../shared/swap';

function partition<T>(items: T[], left: number, right: number, compare: Compare<T>): number {
  const pivot = items[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (compare(items[j], pivot) < 0) {
      swap(items, i, j);
      i += 1;
    }
  }
  swap(items, i, right);
  return i;
}

function sort<T>(items: T[], left: number, right: number, compare: Compare<T>): T[] {
  if (left < right) {
    const index = partition(items, left, right, compare);
    sort(items, left, index - 1, compare);
    sort(items, index + 1, right, compare);
  }
  return items;
}

export default function quickSort<T>(items: T[], compare: Compare<T>): T[] {
  return sort(items, 0, items.length - 1, compare);
}
