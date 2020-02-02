// max heap
export default class Heap {
  private store: number[];
  private count: number = 0;

  constructor(capacity: number) {
    this.store = new Array<number>(capacity + 1);
  }

  size(): number {
    return this.count;
  }

  capacity(): number {
    return this.store.length - 1;
  }

  isFull(): boolean {
    return this.size() === this.capacity();
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  values(): number[] {
    return this.store.slice(1, this.count + 1);
  }

  private leftChildPos(index: number): number {
    return index * 2;
  }

  private rightChildPos(index: number): number {
    return index * 2 + 1;
  }

  private parentPos(index: number): number {
    return Math.floor(index / 2);
  }

  insert(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    const { store } = this;
    store[++this.count] = value;
    let index = this.count;
    let parentIndex;
    while (
      ((parentIndex = this.parentPos(index)), parentIndex > 0 && store[index] > store[parentIndex])
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
    }
    return true;
  }

  private swap(i: number, j: number): void {
    const { store } = this;
    const tmp = store[i];
    store[i] = store[j];
    store[j] = tmp;
  }

  removeMax(): number {
    if (this.isEmpty()) {
      return -1;
    }

    const max = this.store[1];
    this.store[1] = this.store[this.count--];
    this.heapify(1);
    return max;
  }

  private heapify(index: number): void {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { count, store } = this;
      const left = this.leftChildPos(index);
      const right = this.rightChildPos(index);
      let maxPos = index;
      if (left <= count && store[maxPos] < store[left]) maxPos = left;
      if (right <= count && store[maxPos] < store[right]) maxPos = right;
      if (maxPos === index) break;
      this.swap(index, maxPos);
      index = maxPos;
    }
  }

  clear(): void {
    this.count = 0;
  }
}
