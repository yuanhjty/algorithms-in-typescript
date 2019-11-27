import ListNode from './list-node';
import findPrev from './find-prev';
import insertAfter from './insert-after';

export default function insertBefore<T>(
  head: ListNode<T>,
  pos: ListNode<T>,
  node: ListNode<T>
): void {
  const prev = findPrev(head, pos);
  if (!prev) {
    return;
  }
  insertAfter(prev, node);
}
