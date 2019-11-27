import ListNode from './list-node';
import findPrev from './find-prev';

test('findPrev', () => {
  const head = new ListNode('');
  const foo = new ListNode('foo');
  const bar = new ListNode('bar');
  const baz = new ListNode('baz');
  head.next = foo;
  foo.next = bar;
  bar.next = baz;

  expect(findPrev(head, foo)).toBe(head);
  expect(findPrev(head, bar)).toBe(foo);
  expect(findPrev(head, baz)).toBe(bar);
});
