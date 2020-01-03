/* eslint-disable no-else-return */
/* eslint-disable no-lonely-if */
export default function bsearchLastNotLargerThan(items: number[], target: number): number {
  let low = 0;
  let high = items.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (items[mid] <= target) {
      if (mid === items.length - 1 || items[mid + 1] > target) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
