/* eslint-disable no-else-return */
/* eslint-disable no-lonely-if */
export default function bsearchLastEqualTo(items: number[], target: number): number {
  let low = 0;
  let high = items.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (items[mid] < target) {
      low = mid + 1;
    } else if (items[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === items.length - 1 || items[mid + 1] > target) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
}
