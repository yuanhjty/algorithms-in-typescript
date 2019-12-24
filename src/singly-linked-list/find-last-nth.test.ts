import ListNode from './list-node';
import create from './create';
import findLastNth from './find-last-nth';

describe('find last nth', () => {
  test('n <= 0', () => {
    const head = create([1]);
    expect(findLastNth(head, 0)).toBeNull();
    expect(findLastNth(head, -1)).toBeNull();
  });

  test('0 node', () => {
    const head = create();
    expect(findLastNth(head, 1)).toBe(head);
  });

  test('1 node', () => {
    const head = create([1]);
    expect(findLastNth(head, 1)).toBe(head.next);
    expect(findLastNth(head, 2)).toBe(head);
    expect(findLastNth(head, 3)).toBeNull();
  });

  test('2 nodes', () => {
    const head = create([1, 2]);
    expect((findLastNth(head, 1) as ListNode<number>).value).toBe(2);
    expect(findLastNth(head, 2)).toBe(head.next);
    expect(findLastNth(head, 3)).toBe(head);
    expect(findLastNth(head, 4)).toBeNull();
  });

  test('3 nodes', () => {
    const head = create([1, 2, 3]);
    expect((findLastNth(head, 1) as ListNode<number>).value).toBe(3);
    expect((findLastNth(head, 2) as ListNode<number>).value).toBe(2);
    expect(findLastNth(head, 3)).toBe(head.next);
    expect(findLastNth(head, 4)).toBe(head);
    expect(findLastNth(head, 5)).toBeNull();
  });
});
