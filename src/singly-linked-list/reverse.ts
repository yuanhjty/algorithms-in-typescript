import ListNode from './list-node';

export default function reverse<T>(head: ListNode<T>): ListNode<T> {
  let cursor = head.next;
  let tail = null;

  while (cursor) {
    const tmp = cursor.next;
    cursor.next = tail;
    tail = cursor;
    cursor = tmp;
  }

  head.next = tail;
  return head;
}
