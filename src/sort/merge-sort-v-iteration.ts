import Stack from '../stack/array-stack';

function merge(items: number[], left: number, middle: number, right: number): void {
  const sorted = new Array(right - left + 1);
  let i = left;
  let j = middle + 1;
  let k = 0;

  while (i <= middle && j <= right) {
    if (items[i] <= items[j]) {
      sorted[k++] = items[i++];
    } else {
      sorted[k++] = items[j++];
    }
  }

  while (i <= middle) {
    sorted[k++] = items[i++];
  }

  while (j <= right) {
    sorted[k++] = items[j++];
  }

  k = 0;
  while (left <= right) {
    items[left++] = sorted[k++];
  }
}

/**
 * recursive version
 * function mergeSort(items, left, right) {
 *   if (left < right) {
 *     const middle = Math.floor((left + right) / 2);
 *     mergeSort(items, left, middle);
 *     mergeSort(items, middle + 1, right);
 *     merge(items, left, middle, right);
 *   }
 * }
 */

type Frame = {
  left: number;
  right: number;
  status: 0 | 1 | 2;
};

/**
 * iterate version
 */
export default function mergeSort(items: number[]): number[] {
  const frameStack = new Stack<Frame>();

  frameStack.push({
    left: 0,
    right: items.length - 1,
    status: 0,
  });

  while (!frameStack.isEmpty()) {
    const frame = frameStack.peek() as Frame;
    const { left, right, status } = frame;

    if (left >= right) {
      frameStack.pop();
      continue;
    }

    const middle = Math.floor((left + right) / 2);

    if (status === 0) {
      frameStack.push({
        left,
        right: middle,
        status: 0,
      });
      frame.status = 1;
    } else if (status === 1) {
      frameStack.push({
        left: middle + 1,
        right,
        status: 0,
      });
      frame.status = 2;
    } else if (status === 2) {
      merge(items, left, middle, right);
      frameStack.pop();
    }
  }

  return items;
}
