export default class Queue<T> {
  private store: T[];
  private head: number = 0;
  private tail: number = 0;

  constructor(size: number) {
    this.store = new Array<T>(size);
  }

  capacity(): number {
    return this.store.length;
  }

  size(): number {
    return this.tail - this.head;
  }

  isFull(): boolean {
    return this.size() === this.capacity();
  }

  isEmpty(): boolean {
    return this.tail === this.head;
  }

  enqueue(item: T): boolean {
    if (this.isFull()) {
      return false;
    }

    if (this.tail === this.capacity()) {
      const { store, head, tail } = this;
      for (let i = head; i < tail; i++) {
        store[i - head] = store[i];
      }
      this.head = 0;
      this.tail -= head;
    }

    this.store[this.tail++] = item;
    return true;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.store[this.head++];
  }
}
