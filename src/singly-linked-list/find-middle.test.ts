import create from './create';
import findMiddle from './find-middle';

describe('findMiddle', () => {
  test('0 node', () => {
    const head = create();
    const middle = findMiddle(head);
    expect(middle).toBe(head);
  });

  test('1 node', () => {
    const head = create([1]);
    const middle = findMiddle(head);
    expect(middle && middle.value).toBe(1);
  });

  test('2 nodes', () => {
    const head = create([1, 2]);
    const middle = findMiddle(head);
    expect(middle && middle.value).toBe(1);
  });

  test('3 nodes', () => {
    const head = create([1, 2, 3]);
    const middle = findMiddle(head);
    expect(middle && middle.value).toBe(2);
  });

  test('4 nodes', () => {
    const head = create([1, 2, 3, 4]);
    const middle = findMiddle(head);
    expect(middle && middle.value).toBe(2);
  });

  test('5 nodes', () => {
    const head = create([1, 2, 3, 4, 5]);
    const middle = findMiddle(head);
    expect(middle && middle.value).toBe(3);
  });
});
