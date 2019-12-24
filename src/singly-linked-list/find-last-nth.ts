import ListNode from './list-node';

export default function findLastNth<T>(head: ListNode<T>, n: number): ListNode<T> | null {
  if (n <= 0) {
    return null;
  }

  let ahead: ListNode<T> | null = head;
  let behind: ListNode<T> | null = head;

  let i = 0;
  for (; ahead && i < n; i++) {
    ahead = ahead.next;
  }

  if (!ahead) {
    return i === n ? head : null;
  }

  while (ahead) {
    ahead = ahead.next;
    behind = (behind as ListNode<T>).next;
  }

  return behind;
}
