const { log } = console;

/**
 * three rods: A B and C
 * move n disks from A to C
 */
function hanoiInternally(n: number, a: string, b: string, c: string, steps: string[]): void {
  if (n === 0) {
    return;
  }
  if (n === 1) {
    steps.push(`${a} -> ${c}`);
  } else {
    hanoiInternally(n - 1, a, c, b, steps);
    hanoiInternally(1, a, b, c, steps);
    hanoiInternally(n - 1, b, a, c, steps);
  }
}

export default function hanoi(n: number, a: string, b: string, c: string): string[] {
  const steps: string[] = [];
  hanoiInternally(n, a, b, c, steps);
  return steps;
}

export function printHanoi(): void {
  log('move 1 ---');
  const h1 = hanoi(1, 'A', 'B', 'C');
  log(h1.length, h1);

  log('move 2 ---');
  const h2 = hanoi(2, 'A', 'B', 'C');
  log(h2.length, h2);

  log('move 3 ---');
  const h3 = hanoi(3, 'A', 'B', 'C');
  log(h3.length, h3);

  log('move 4 ---');
  const h4 = hanoi(4, 'A', 'B', 'C');
  log(h4.length, h4);
}
