import create from './create';
import values from './values';
import reverse from './reverse';

describe('reverse', () => {
  test('0 node', () => {
    const head = create();
    const reversed = reverse(head);
    expect(reversed).toBe(head);
    expect(reversed.next).toBeNull();
  });

  test('1 node', () => {
    const arr = [1];
    const head = create(arr);
    expect(values(reverse(head))).toEqual(arr.reverse());
  });

  test('2 nodes', () => {
    const arr = [1, 2];
    const head = create(arr);
    expect(values(reverse(head))).toEqual(arr.reverse());
  });

  test('3 nodes', () => {
    const arr = [1, 2, 3];
    const head = create(arr);
    expect(values(reverse(head))).toEqual(arr.reverse());
  });
});
