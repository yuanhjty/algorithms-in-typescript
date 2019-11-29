import ListNode from '../singly-linked-list/list-node';
import findPrev from '../singly-linked-list/find-prev';

export default class Stack<T> {
  private store: ListNode<T>;
  private tail: ListNode<T>;
  private length: number;

  constructor(values?: T[]) {
    this.store = new ListNode(null as never);
    this.tail = this.store;
    this.length = 0;
    (values || []).forEach(value => {
      this.push(value);
    });
  }

  push(value: T): Stack<T> {
    this.tail.next = new ListNode(value);
    this.tail = this.tail.next;
    this.length += 1;
    return this;
  }

  pop(): T | undefined {
    if (this.length > 0) {
      const tail = this.tail;
      const tailPrev = findPrev(this.store, tail);
      this.tail = tailPrev;
      this.tail.next = null;
      this.length -= 1;
      return tail.value;
    }

    return undefined;
  }

  clear(): Stack<T> {
    this.store = new ListNode(null as never);
    return this;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
