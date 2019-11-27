import ListNode from './list-node';

export default function mergeInOrder<T>(one: ListNode<T>, another: ListNode<T>): ListNode<T> {
  const result: ListNode<T> = new ListNode(null as never);
  let curr = result;
  let first = one.next;
  let second = another.next;

  while (first && second) {
    if (first.value < second.value) {
      curr.next = first;
      first = first.next;
    } else {
      curr.next = second;
      second = second.next;
    }
    curr = curr.next;
  }

  if (first) {
    curr.next = first;
  }

  if (second) {
    curr.next = second;
  }

  return result;
}
