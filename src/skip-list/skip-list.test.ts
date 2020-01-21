import SkipList, { ListNode } from './skip-list';

describe('skip list', () => {
  const list = new SkipList();

  test('find in empty list', () => {
    expect(list.find(3)).toBe(null);
  });

  test('insert and find', () => {
    list.insert(3);
    list.insert(2);
    list.insert(5);
    list.insert(6);

    expect(list.toArray()).toEqual([2, 3, 5, 6]);
    expect(list.find(1)).toBeNull();
    expect((list.find(2) as ListNode).value).toBe(2);

    list.insert(1);
    list.insert(4);
    expect(list.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('delete and find', () => {
    expect(list.delete(8)).toBeNull();
    expect(list.find(3)).not.toBeNull();
    expect((list.delete(3) as ListNode).value).toBe(3);
    expect(list.find(3)).toBeNull();
    expect(list.toArray()).toEqual([1, 2, 4, 5, 6]);
  });
});
