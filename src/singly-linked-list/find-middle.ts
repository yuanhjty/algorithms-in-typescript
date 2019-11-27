import ListNode from './list-node';

export default function findMiddle<T>(head: ListNode<T>): ListNode<T> {
  type NODE_TYPE = ListNode<T> | null;
  let fast: NODE_TYPE = head;
  let slow: NODE_TYPE = head;

  // The head is sentry node.
  // When the fast pointer walks n steps and the loop is over,
  // if list size is 2n-1, it reaches (node<2n-1>).next, it's null,
  // if list size is 2n, it reaches node<2n>, it's not null.
  // The slow pointer reaches node<n> now.
  while (fast && fast.next) {
    fast = fast.next;
    fast = fast.next;
    slow = (slow as ListNode<T>).next;
  }
  return slow as ListNode<T>;
}
