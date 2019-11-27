import create from './create';
import values from './values';

describe('values', () => {
  test('0 node', () => {
    const head = create();
    expect(values(head)).toEqual([]);
  });

  test('1 node', () => {
    const head = create([1]);
    expect(values(head)).toEqual([1]);
  });

  test('3 nodes', () => {
    const head = create([1, 2, 3]);
    expect(values(head)).toEqual([1, 2, 3]);
  });
});
