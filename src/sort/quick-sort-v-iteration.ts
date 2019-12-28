import swap from '../shared/swap';
import Stack from '../stack/array-stack';

function partition(items: number[], left: number, right: number): number {
  const pivot = items[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (items[j] < pivot) {
      swap(items, i, j);
      i++;
    }
  }
  swap(items, i, right);
  return i;
}

type Frame = {
  left: number;
  right: number;
  status: 0 | 1 | 2;
  middle?: number;
};

export default function quickSort(items: number[]): number[] {
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

    if (status === 0) {
      const middle = partition(items, left, right);
      frameStack.push({
        left,
        right: middle - 1,
        status: 0,
      });
      frame.middle = middle;
      frame.status = 1;
    } else if (status === 1) {
      frameStack.push({
        left: (frame.middle as number) + 1,
        right,
        status: 0,
      });
      frame.status = 2;
    } else if (status === 2) {
      frameStack.pop();
    }
  }

  return items;
}
