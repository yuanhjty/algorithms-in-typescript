import ListNode from './list-node';
import findLastNth from './find-last-nth-of-no-sentry-list';

export default function deleteLastNth<T>(head: ListNode<T>, n: number): ListNode<T> | null {
  if (n <= 0) {
    return null;
  }

  const targetPrev = findLastNth(head, n + 1);
  if (targetPrev && targetPrev.next) {
    const target = targetPrev.next;
    targetPrev.next = target.next;
    target.next = null;
    return target;
  }

  return null;
}
