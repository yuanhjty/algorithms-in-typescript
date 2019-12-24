import ListNode from '../singly-linked-list/list-node';

export default class Queue<T> {
  private head: ListNode<T | null>;
  private tail: ListNode<T | null>;

  constructor() {
    this.head = new ListNode(null);
    this.tail = this.head;
  }

  isEmpty(): boolean {
    return this.head === this.tail;
  }

  enqueue(item: T): boolean {
    this.tail.value = item;
    this.tail.next = new ListNode(null);
    this.tail = this.tail.next;
    return true;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const { head } = this;
    this.head = head.next as ListNode<T | null>;
    return head.value;
  }
}
