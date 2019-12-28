import { Compare } from '../shared/types';

function merge<T>(
  items: T[],
  left: number,
  middle: number,
  right: number,
  compare: Compare<T>,
): T[] {
  const sorted: T[] = new Array<T>(right - left + 1);
  let i = left;
  let j = middle + 1;
  let k = 0;

  while (i <= middle && j <= right) {
    if (compare(items[i], items[j]) <= 0) {
      sorted[k++] = items[i++];
    } else {
      sorted[k++] = items[j++];
    }
  }

  while (i <= middle) {
    sorted[k++] = items[i++];
  }

  while (j <= right) {
    sorted[k++] = items[j++];
  }

  while (k >= 0) {
    items[right--] = sorted[--k];
  }

  return items;
}

function sort<T>(items: T[], left: number, right: number, compare: Compare<T>): T[] {
  if (left < right) {
    const middle = Math.floor((left + right) / 2);
    sort(items, left, middle, compare);
    sort(items, middle + 1, right, compare);
    merge(items, left, middle, right, compare);
  }
  return items;
}

export default function mergeSort<T>(items: T[], compare: Compare<T>): T[] {
  return sort(items, 0, items.length - 1, compare);
}
