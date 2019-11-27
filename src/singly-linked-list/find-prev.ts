import ListNode from './list-node';

export default function findPrev<T>(head: ListNode<T>, node: ListNode<T>): ListNode<T> | null {
  let curr: ListNode<T> | null = head;
  while (curr && curr.next !== node) {
    curr = curr.next;
  }
  return curr;
}
