import Queue from './linked-queue';

describe('linked queue', () => {
  test('linked queue', () => {
    const q = new Queue<number>();

    expect(q.isEmpty()).toBeTruthy();
    expect(q.enqueue(1)).toBeTruthy();
    expect(q.isEmpty()).toBeFalsy();
    expect(q.dequeue()).toBe(1);
    expect(q.isEmpty()).toBeTruthy();

    expect(q.enqueue(2)).toBeTruthy();
    expect(q.enqueue(3)).toBeTruthy();
    expect(q.enqueue(4)).toBeTruthy();
    expect(q.enqueue(5)).toBeTruthy();

    expect(q.dequeue()).toBe(2);
    expect(q.dequeue()).toBe(3);
  });
});
