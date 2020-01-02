export default function bsearch<T>(items: T[], item: T): number {
  let low = 0;
  let high = items.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (items[mid] === item) {
      return mid;
    }
    if (items[mid] < item) {
      low = mid + 1;
      continue;
    }
    high = mid - 1;
  }

  return -1;
}
