function getRightKthDigit(n: number, k: number): number {
  return Math.floor((n % 10 ** k) / 10 ** (k - 1));
}

export default function radixSort(items: number[]): number[] {
  const size = items.length;
  if (size === 0) {
    return items;
  }

  let max = items[0];
  items.forEach(item => {
    if (!Number.isInteger(item)) {
      throw new Error('radixSort: cannot sort non integer list');
    }
    if (item > max) {
      max = item;
    }
  });

  const maxDigitsCount = String(max).length;
  const countingMax = 9;
  const counting = new Array(countingMax + 1);
  const tmpList = new Array(size);

  for (let k = 1; k <= maxDigitsCount; k++) {
    counting.fill(0);

    items.forEach(item => {
      counting[getRightKthDigit(item, k)] += 1;
    });

    for (let i = 1; i <= countingMax; i++) {
      counting[i] += counting[i - 1];
    }

    for (let i = size - 1; i >= 0; i--) {
      tmpList[--counting[getRightKthDigit(items[i], k)]] = items[i];
    }

    for (let i = 0; i < size; i++) {
      items[i] = tmpList[i];
    }
  }

  return items;
}
