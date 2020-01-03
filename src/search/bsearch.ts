export default function bsearch<T>(items: T[], target: T, start?: number, end?: number): number {
  let low = !start || !Number.isInteger(start) || start < 0 ? 0 : start;
  let high = !end || !Number.isInteger(end) || end > items.length - 1 ? items.length - 1 : end;

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
