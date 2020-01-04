/* eslint-disable no-lonely-if */
export default function search(items: number[], target: number): number {
  let low = 0;
  let high = items.length - 1;
  const item0 = items[0];

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const item = items[mid];

    if (item === target) {
      return mid;
    }

    if (item >= item0) {
      if (target < item && target >= item0) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } /* if (item < item0) */ else {
      if (target > item && target < item0) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}
