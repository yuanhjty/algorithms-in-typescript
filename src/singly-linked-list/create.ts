import ListNode from './list-node';

export default function create<T>(values?: T[]): ListNode<T> {
  const head = new ListNode<T>(null as never);
  let curr = head;
  values &&
    values.forEach(value => {
      curr.next = new ListNode(value);
      curr = curr.next;
    });

  return head;
}
