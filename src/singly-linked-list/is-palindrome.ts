import ListNode from './list-node';

export default function isPalindrome<T>(head: ListNode<T>): boolean {
  let fast = head.next;
  let slow = head.next;
  let slowPrev: ListNode<T> | null = null;

  // When the fast pointer walks n steps and the loop is over,
  // if list size is 2n+1, it reaches node<2n+1>, it's not null,
  // if list size is 2n, it reaches (node<2n>).next, it's null.
  // The slow pointer reaches node<n+1> now.
  while (fast && fast.next) {
    fast = fast.next.next;
    const tmp = slow as ListNode<T>;
    slow = (slow as ListNode<T>).next;
    tmp.next = slowPrev;
    slowPrev = tmp;
  }

  let left = slowPrev;
  let right = fast ? (slow as ListNode<T>).next : slow;
  let result = true;
  while (left) {
    if (left.value !== (right as ListNode<T>).value) {
      result = false;
      break;
    }
    left = left.next;
    right = (right as ListNode<T>).next;
  }

  // recovery list
  while (slowPrev) {
    const tmp = slowPrev.next;
    slowPrev.next = slow;
    slow = slowPrev;
    slowPrev = tmp;
  }

  return result;
}
