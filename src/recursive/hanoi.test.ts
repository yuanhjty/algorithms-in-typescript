import hanoi from './hanoi';
import hanoiIteration from './hanoi-iteration';

const cases = [
  [1, ['A -> C']],
  [2, ['A -> B', 'A -> C', 'B -> C']],
  [3, ['A -> C', 'A -> B', 'C -> B', 'A -> C', 'B -> A', 'B -> C', 'A -> C']],
  [
    4,
    [
      'A -> B',
      'A -> C',
      'B -> C',
      'A -> B',
      'C -> A',
      'C -> B',
      'A -> B',
      'A -> C',
      'B -> C',
      'B -> A',
      'C -> A',
      'B -> C',
      'A -> B',
      'A -> C',
      'B -> C',
    ],
  ],
];

describe('hanoi', () => {
  cases.forEach(([n, result]) => {
    test(`${n} disks`, () => {
      expect(hanoi(n as number, 'A', 'B', 'C')).toEqual(result);
      expect(hanoiIteration(n as number, 'A', 'B', 'C')).toEqual(result);
    });
  });
});
