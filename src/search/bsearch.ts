export default function bsearch<T>(items: T[], target: T): number {
  let low = 0;
  let high = items.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (items[mid] === target) {
      return mid;
    }
    if (items[mid] < target) {
      low = mid + 1;
      continue;
    }
    high = mid - 1;
  }

  return -1;
}
