import ListNode from './list-node';

export default function insertAfter<T>(pos: ListNode<T>, node: ListNode<T>): void {
  const next = pos.next;
  pos.next = node;
  node.next = next;
}
