import { Compare } from '../shared/types';
import swap from '../shared/swap';

type CompareNumber = Compare<number>;

function leftChildPos(pos: number): number {
  return pos * 2 + 1;
}

function rightChildPos(pos: number): number {
  return pos * 2 + 2;
}

function parentPos(pos: number): number {
  return Math.floor((pos + 1) / 2) - 1;
}

function heapify(items: number[], lastPos: number, pos: number, compare: CompareNumber): void {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const leftPos = leftChildPos(pos);
    const rightPos = rightChildPos(pos);
    let maxPos = pos;
    if (leftPos <= lastPos && compare(items[maxPos], items[leftPos]) < 0) maxPos = leftPos;
    if (rightPos <= lastPos && compare(items[maxPos], items[rightPos]) < 0) maxPos = rightPos;
    if (maxPos === pos) break;
    swap(items, maxPos, pos);
    pos = maxPos;
  }
}

function buildHeap(items: number[], compare: CompareNumber): void {
  const lastNotLeafPos = parentPos(items.length - 1);
  for (let i = lastNotLeafPos; i >= 0; i--) {
    heapify(items, items.length, i, compare);
  }
}

export default function heapSort(items: number[], compare: CompareNumber): number[] {
  buildHeap(items, compare);
  let lastPos = items.length - 1;
  while (lastPos >= 0) {
    swap(items, 0, lastPos--);
    heapify(items, lastPos, 0, compare);
  }
  return items;
}
