import ListNode from './list-node';
import create from './create';
import findLast from './find-last';

describe('find last', () => {
  test('only one node', () => {
    const head = new ListNode(1);
    expect(findLast(head)).toBe(head);
  });

  test('multi nodes', () => {
    const head = create(['foo', 'bar', 'baz']);
    const tail = findLast(head);
    expect((tail as ListNode<string>).value).toBe('baz');
  });
});
