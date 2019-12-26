import compareNumber from '../shared/compare-number';
import searchKthLargest from './search-kth-largest';

describe('searchKthLargest', () => {
  let l1: number[] = [];
  let l2: number[] = [];

  beforeEach(() => {
    l1 = [1, 2, 3, 5, 8, 3, 1];
    l2 = [1, 3, 11, 6, 5, 4, 34, 2, 9, 5];
  });

  test('1st largest of l1', () => {
    expect(searchKthLargest(l1, 1, compareNumber)).toBe(8);
  });

  test('2nd largest of l1', () => {
    expect(searchKthLargest(l1, 2, compareNumber)).toBe(5);
  });

  test('3rd largest of l1', () => {
    expect(searchKthLargest(l1, 3, compareNumber)).toBe(3);
  });

  test('4th largest of l1', () => {
    expect(searchKthLargest(l1, 4, compareNumber)).toBe(3);
  });

  test('5th largest of l1', () => {
    expect(searchKthLargest(l1, 5, compareNumber)).toBe(2);
  });

  test('6th largest of l1', () => {
    expect(searchKthLargest(l1, 6, compareNumber)).toBe(1);
  });

  test('7th largest of l1', () => {
    expect(searchKthLargest(l1, 7, compareNumber)).toBe(1);
  });

  test('8th largest of l1', () => {
    expect(searchKthLargest(l1, 8, compareNumber)).toBe(null);
  });

  test('1st largest of l2', () => {
    expect(searchKthLargest(l2, 1, compareNumber)).toBe(34);
  });

  test('2nd largest of l2', () => {
    expect(searchKthLargest(l2, 2, compareNumber)).toBe(11);
  });

  test('3rd largest of l2', () => {
    expect(searchKthLargest(l2, 3, compareNumber)).toBe(9);
  });
});
