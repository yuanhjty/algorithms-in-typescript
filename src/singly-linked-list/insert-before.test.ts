import ListNode from './list-node';
import insertBefore from './insert-before';

describe('insertBefore', () => {
  const head = new ListNode('');
  const apple = new ListNode('apple');
  const pear = new ListNode('pear');
  const banana = new ListNode('banana');
  const orange = new ListNode('orange');

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
    orange.next = null;
  });

  test('insert before first', () => {
    insertBefore(head, apple, orange);
    expect(head.next).toBe(orange);
    expect(orange.next).toBe(apple);
  });

  test('insert before middle', () => {
    insertBefore(head, pear, orange);
    expect(apple.next).toBe(orange);
    expect(orange.next).toBe(pear);
  });

  test('insert before last', () => {
    insertBefore(head, banana, orange);
    expect(pear.next).toBe(orange);
    expect(orange.next).toBe(banana);
  });
});
