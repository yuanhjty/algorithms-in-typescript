import ListNode from './list-node';
import values from './values';
import deleteLastNth from './delete-last-nth';

describe('deleteLastNth', () => {
  const head = new ListNode('');
  const apple = new ListNode('apple');
  const banana = new ListNode('banana');
  const pear = new ListNode('pear');
  const orange = new ListNode('orange');
  const pineapple = new ListNode('pineapple');

  const fruits = ['apple', 'banana', 'pear', 'orange', 'pineapple'];

  beforeEach(() => {
    head.next = apple;
    apple.next = banana;
    banana.next = pear;
    pear.next = orange;
    orange.next = pineapple;
  });

  afterEach(() => {
    head.next = null;
    apple.next = null;
    banana.next = null;
    pear.next = null;
    orange.next = null;
  });

  test('empty list', () => {
    const deleted = deleteLastNth(new ListNode(''), 1);
    expect(deleted).toBeNull();
  });

  test('delete the last', () => {
    const deleted = deleteLastNth(head, 1);
    const last = pineapple;
    const nextLast = orange;
    expect(deleted).toBe(last);
    expect((deleted as ListNode<string>).next).toBeNull();
    expect(nextLast.next).toBeNull();
    expect(values(head)).toEqual(fruits.slice(0, -1));
  });

  test('delete the first', () => {
    const deleted = deleteLastNth(head, 5);
    const first = apple;
    const nextFirst = banana;
    expect(deleted).toBe(first);
    expect((deleted as ListNode<string>).next).toBeNull();
    expect(head.next).toBe(nextFirst);
    expect(values(head)).toEqual(fruits.slice(1));
  });

  test('n is out of range', () => {
    const deleted0 = deleteLastNth(head, 0);
    expect(deleted0).toBeNull();
    expect(values(head)).toEqual(fruits);

    const deleted1 = deleteLastNth(head, -1);
    expect(deleted1).toBeNull();
    expect(values(head)).toEqual(fruits);

    const deleted2 = deleteLastNth(head, 6);
    expect(deleted2).toBeNull();
    expect(values(head)).toEqual(fruits);
  });

  test('normal cases', () => {
    const deleted = deleteLastNth(head, 3);
    expect(deleted).toBe(pear);
    expect((deleted as ListNode<string>).next).toBeNull();
    expect(banana.next).toBe(orange);
  });
});
