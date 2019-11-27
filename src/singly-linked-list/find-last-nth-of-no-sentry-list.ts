import ListNode from './list-node';

export default function findLastNth<T>(head: ListNode<T>, n: number): ListNode<T> | null {
  if (n <= 0) {
    return null;
  }

  let first: ListNode<T> | null = head;
  let second: ListNode<T> | null = head;

  let i = 0;
  for (; first && i < n; i++) {
    first = first.next;
  }

  if (!first) {
    return i === n ? head : null;
  }

  while (first) {
    first = first.next;
    second = (second as ListNode<T>).next;
  }

  return second;
}
