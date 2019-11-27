import ListNode from './list-node';
import values from './values';
import deleteNode from './delete-node';

describe('deleteNode', () => {
  const head = new ListNode('');
  const apple = new ListNode('apple');
  const pear = new ListNode('pear');
  const banana = new ListNode('banana');

  beforeEach(() => {
    head.next = apple;
    apple.next = pear;
    pear.next = banana;
  });

  afterEach(() => {
    head.next = null;
    apple.next = null;
    pear.next = null;
    banana.next = null;
  });

  test('delete head', () => {
    const deleted = deleteNode(head, head);
    expect(deleted).toBeNull();
    expect(values(head)).toEqual(['apple', 'pear', 'banana']);
  });

  test('delete first', () => {
    const deleted = deleteNode(head, apple);
    expect(deleted).toBe(apple);
    expect(values(head)).toEqual(['pear', 'banana']);
  });

  test('delete middle', () => {
    const deleted = deleteNode(head, pear);
    expect(deleted).toBe(pear);
    expect(values(head)).toEqual(['apple', 'banana']);
  });

  test('delete last', () => {
    const deleted = deleteNode(head, banana);
    expect(deleted).toBe(banana);
    expect(values(head)).toEqual(['apple', 'pear']);
  });
});
