import { Compare } from '../shared/types';
import swap from '../shared/swap';

function partition<T>(items: T[], left: number, right: number, compare: Compare<T>): number {
  const middle = Math.floor((left + right) / 2);
  const leftValue = items[left];
  const rightValue = items[right];
  const middleValue = items[middle];
  let pivot = middleValue;

  if (pivot < leftValue && pivot < rightValue) {
    if (leftValue < rightValue) {
      pivot = leftValue;
    } else {
      pivot = rightValue;
    }
  } else if (pivot > items[left] && pivot > items[right]) {
    if (leftValue < rightValue) {
      pivot = rightValue;
    } else {
      pivot = leftValue;
    }
  }

  if (pivot === middleValue) {
    swap(items, middle, right);
  } else if (pivot === leftValue) {
    swap(items, left, right);
  }

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
