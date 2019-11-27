import ListNode from './list-node';

export default function values<T>(head: ListNode<T>): T[] {
  let curr = head.next;
  const result: T[] = [];
  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }
  return result;
}
