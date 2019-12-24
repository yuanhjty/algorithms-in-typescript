import Queue from './queue';
import CircularQueue from './circular-queue';

function testQueue(q: Queue<number> | CircularQueue<number>): void {
  expect(q.isEmpty()).toBeTruthy();

  expect(q.enqueue(1)).toBeTruthy();
  expect(q.isEmpty()).toBeFalsy();

  expect(q.enqueue(2)).toBeTruthy();
  expect(q.enqueue(3)).toBeTruthy();
  expect(q.isFull()).toBeTruthy();

  expect(q.enqueue(4)).toBeFalsy();

  expect(q.dequeue()).toBe(1);
  expect(q.isFull()).toBeFalsy();

  expect(q.dequeue()).toBe(2);

  expect(q.enqueue(4)).toBeTruthy();
  expect(q.enqueue(5)).toBeTruthy();
  expect(q.enqueue(6)).toBeFalsy();

  expect(q.dequeue()).toBe(3);
  expect(q.dequeue()).toBe(4);
  expect(q.dequeue()).toBe(5);

  expect(q.enqueue(6)).toBeTruthy();
  expect(q.dequeue()).toBe(6);
  expect(q.isEmpty()).toBeTruthy();
}

describe('queue', () => {
  test('queue', () => {
    const q = new Queue<number>(3);
    testQueue(q);
  });

  test('circular queue', () => {
    const q = new CircularQueue<number>(3);
    testQueue(q);
  });
});
