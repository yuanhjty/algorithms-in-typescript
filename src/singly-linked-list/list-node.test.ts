import ListNode from './list-node';

const value = 'foo';
const node = new ListNode<string>(value);

test('Singly linked list node', () => {
  expect(node.value).toBe(value);
  expect(node.next).toBe(null);
});
