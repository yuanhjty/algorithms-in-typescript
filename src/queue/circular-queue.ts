export default class CircularQueue<T> {
  private store: T[];
  private head: number = 0;
  private tail: number = 0;

  constructor(size: number) {
    this.store = new Array<T>(size + 1);
  }

  private forward(cursor: number): number {
    return (cursor + 1) % this.store.length;
  }

  capacity(): number {
    return this.store.length - 1;
  }

  size(): number {
    const size = this.tail - this.head;
    return size > 0 ? size : size + this.store.length;
  }

  isEmpty(): boolean {
    return this.head === this.tail;
  }

  isFull(): boolean {
    return this.forward(this.tail) === this.head;
  }

  enqueue(item: T): boolean {
    if (this.isFull()) {
      return false;
    }
    this.store[this.tail] = item;
    this.tail = this.forward(this.tail);
    return true;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.store[this.head];
    this.head = this.forward(this.head);
    return item;
  }
}
