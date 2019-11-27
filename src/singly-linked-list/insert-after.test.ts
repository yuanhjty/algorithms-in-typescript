import ListNode from './list-node';
import insertAfter from './insert-after';

describe('insertAfter', () => {
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

  test('insert after head', () => {
    insertAfter(head, orange);
    expect(head.next).toBe(orange);
    expect(orange.next).toBe(apple);
  });

  test('insert after middle', () => {
    insertAfter(pear, orange);
    expect(pear.next).toBe(orange);
    expect(orange.next).toBe(banana);
  });

  test('insert after last', () => {
    insertAfter(banana, orange);
    expect(banana.next).toBe(orange);
    expect(orange.next).toBeNull();
  });
});
