import Heap from './heap';

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
describe('heap', () => {
  const heap = new Heap(10);

  beforeEach(() => {
    values.forEach(v => {
      heap.insert(v);
    });
  });

  afterEach(() => {
    heap.clear();
  });

  test('insert', () => {
    expect(heap.values()).toEqual([10, 9, 6, 7, 8, 2, 5, 1, 4, 3]);
  });

  test('removeMax', () => {
    expect(heap.removeMax()).toBe(10);
    expect(heap.values()).toEqual([9, 8, 6, 7, 3, 2, 5, 1, 4]);

    expect(heap.removeMax()).toBe(9);
    expect(heap.values()).toEqual([8, 7, 6, 4, 3, 2, 5, 1]);
  });
});
