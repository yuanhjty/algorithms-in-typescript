/* eslint-disable no-plusplus */
export default function countingSort(items: number[]): number[] {
  const size = items.length;
  if (size === 0) {
    return items;
  }

  let min = items[0];
  let max = items[0];
  items.forEach(item => {
    if (!Number.isInteger(item)) {
      throw new Error('countingSort: cannot sort non integer list');
    }
    if (item < min) {
      min = item;
    } else if (item > max) {
      max = item;
    }
  });

  max -= min;

  // normalize items to range [0, max]
  for (let i = 0; i < size; i++) {
    items[i] -= min;
  }

  const counting = new Array(max + 1).fill(0);
  items.forEach(item => {
    counting[item] += 1;
  });

  for (let i = 1; i <= max; i++) {
    counting[i] = counting[i] + counting[i - 1];
  }

  const sorted = new Array(items.length);
  for (let i = items.length - 1; i >= 0; i--) {
    const value = items[i];
    sorted[--counting[value]] = value;
  }

  sorted.forEach((item, index) => {
    items[index] = item + min;
  });
  return items;
}
