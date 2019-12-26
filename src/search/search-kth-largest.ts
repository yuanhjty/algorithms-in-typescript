import { Compare } from '../shared/types';
import swap from '../shared/swap';

function partition<T>(items: T[], left: number, right: number, compare: Compare<T>): number {
  const pivot = items[right];
  let i = left;
  let j = left;
  for (; i < right; i++) {
    if (compare(items[i], pivot) > 0) {
      swap(items, i, j);
      j += 1;
    }
  }
  swap(items, j, right);
  return j;
}

function search<T>(items: T[], left: number, right: number, k: number, compare: Compare<T>): T {
  if (left < right) {
    const index = partition(items, left, right, compare);
    if (index === k) {
      return items[index];
    }
    if (index < k) {
      return search(items, index + 1, right, k, compare);
    }
    return search(items, left, index - 1, k, compare);
  }
  return items[left];
}

export default function searchKthLargest<T>(items: T[], k: number, compare: Compare<T>): T | null {
  if (k < 0 || k > items.length) {
    return null;
  }
  return search(items, 0, items.length - 1, k - 1, compare);
}
