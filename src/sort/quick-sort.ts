/* eslint-disable no-param-reassign, no-plusplus */
import { ComparisonOperator } from './types';
import swap from './swap';

/**
 * Pick an item from items as a pivot, divide items into two parts to make
 * everyone in left part is less than or equal to the pivot and everyone
 * in the right part is greater than or equal to the pivot.
 * @returns endIndexOfLeftPart [number]
 */
function partition<T>(
  items: T[],
  left: number,
  right: number,
  compare: ComparisonOperator<T>,
): number {
  const pivot = items[Math.floor((left + right) / 2)];

  while (left < right) {
    while (compare(items[left], pivot) < 0) {
      left++;
    }
    // now, there are `items[left] >= pivot` and `items[left-1] < pivot`

    while (compare(pivot, items[right]) < 0) {
      right--;
    }
    // now
    // if (right - left > 2) the `items` will be like
    //   `[..., (left), (middle1), (middle2), ..., (right), ...]`
    //   when this turn completing, the loop will continue.
    // else the `items` will be like
    //                                            ___
    //      `[..., (left), (middle), (right), ...]`  | -> left < right
    //   or `[..., (left), (right), ...]`____________|
    //   or `[..., (left), ...]`                       -> left === right
    //   or `[..., (right), (left), ...]`              -> left > right
    //   when this turn completing, the loop will be over.

    if (left < right) {
      if (compare(items[left], items[right]) > 0) {
        swap(items, left, right);
      }
      left++;
      right--;
    }
    // now the `items` will be like
    //      `[..., (left), ...]`          -> left === right
    //   or `[..., (right), (left), ...]` -> left > right

    if (left === right) {
      // now, there are `items[left-1] <= pivot` and `items[left+1] >= pivot`,
      // but we can't judge items[left] is <, = or > pivot.
      // if (items[left] <= pivot), we put it in the left part, otherwise the right part.
      return compare(items[left], pivot) <= 0 ? left : left - 1;
    }
  }

  // now, there are `left === right + 1, items[left] >= pivot, items[right]` <= pivot`.
  // we put `items[right]` in the left part, and `items[left]` in the right part.
  return right;
}

function sort<T>(items: T[], left: number, right: number, compare: ComparisonOperator<T>): T[] {
  if (left < right) {
    const leftEnd = partition(items, left, right, compare);
    sort(items, left, leftEnd, compare);
    sort(items, leftEnd + 1, right, compare);
  }
  return items;
}

export default function quickSort<T>(items: T[], compare: ComparisonOperator<T>): T[] {
  return sort(items, 0, items.length - 1, compare);
}
