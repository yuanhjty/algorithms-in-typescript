import ListNode from './list-node';
import create from './create';

describe('create()', () => {
  test('called without params', () => {
    const head = create();
    expect(head.value).toBeNull();
    expect(head.next).toBeNull();
  });

  test('called with an array param', () => {
    const values = ['foo', 'bar', 'baz'];
    const head = create(values);
    let curr = head.next;
    for (let i = 0, len = values.length; i < len; i++) {
      expect((curr as ListNode<string>).value).toBe(values[i]);
      curr = (curr as ListNode<string>).next;
    }
    expect(curr).toBeNull();
  });
});
