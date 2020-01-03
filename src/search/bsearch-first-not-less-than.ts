/* eslint-disable no-else-return */
/* eslint-disable no-lonely-if */
export default function bsearchFirstNotLessThan(items: number[], target: number): number {
  let low = 0;
  let high = items.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (items[mid] >= target) {
      if (mid === 0 || items[mid - 1] < target) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
