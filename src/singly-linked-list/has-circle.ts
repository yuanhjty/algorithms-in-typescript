import ListNode from './list-node';

export default function hasCircle<T>(head: ListNode<T>): boolean {
  let fast: ListNode<T> | null = head;
  let slow: ListNode<T> = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next as ListNode<T>;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}
