import ListNode from './list-node';
import findPrev from './find-prev';

export default function deleteNode<T>(head: ListNode<T>, node: ListNode<T>): ListNode<T> | null {
  const prev = findPrev(head, node);
  if (!prev) {
    return null;
  }

  prev.next = node.next;
  node.next = null;

  return node;
}
