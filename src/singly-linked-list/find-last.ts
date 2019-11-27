import ListNode from './list-node';
import findLastNth from './find-last-nth';

export default function findLast<T>(head: ListNode<T>): ListNode<T> | null {
  // let curr: ListNode<T> | null = head.next;
  // if (!curr) {
  //   return null;
  // }
  // while (curr.next) {
  //   curr = curr.next;
  // }
  // return curr;
  return findLastNth(head, 1);
}
