export default class Stack<T> {
  private store: T[];

  constructor(values?: T[]) {
    this.store = values ? [...values] : [];
  }

  push(value: T): Stack<T> {
    this.store.push(value);
    return this;
  }

  pop(): T | undefined {
    return this.store.pop();
  }

  clear(): Stack<T> {
    this.store = [];
    return this;
  }

  size(): number {
    return this.store.length;
  }

  isEmpty(): boolean {
    return this.store.length === 0;
  }
}
