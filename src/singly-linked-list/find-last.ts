import ListNode from './list-node';
import findLastNth from './find-last-nth';

export default function findLast<T>(head: ListNode<T>): ListNode<T> | null {
  return findLastNth(head, 1);
}
