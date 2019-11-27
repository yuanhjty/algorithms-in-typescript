import ListNode from './list-node';
import create from './create';
import findLast from './find-last';

test('findLast', () => {
  const head = create(['foo', 'bar', 'baz']);
  const tail = findLast(head);
  expect((tail as ListNode<string>).value).toBe('baz');
});
