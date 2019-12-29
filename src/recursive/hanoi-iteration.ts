import Stack from '../stack/array-stack';

const { log } = console;

type Frame = {
  n: number;
  a: string;
  b: string;
  c: string;
  status: 0 | 1 | 2 | 3;
};

/**
 * three rods: A B and C
 * move n disks from A to C
 */
export default function hanoi(n: number, a: string, b: string, c: string): string[] {
  const steps: string[] = [];

  const frameStack = new Stack<Frame>();
  frameStack.push({ n, a, b, c, status: 0 });

  while (!frameStack.isEmpty()) {
    const frame = frameStack.peek() as Frame;
    const { n: currN, a: currA, b: currB, c: currC, status } = frame;

    if (currN === 0) {
      frameStack.pop();
      continue;
    }

    if (currN === 1) {
      frameStack.pop();
      steps.push(`${currA} -> ${currC}`);
      continue;
    }

    if (status === 0) {
      frameStack.push({
        n: currN - 1,
        a: currA,
        b: currC,
        c: currB,
        status: 0,
      });
      frame.status = 1;
    } else if (status === 1) {
      frameStack.push({
        n: 1,
        a: currA,
        b: currB,
        c: currC,
        status: 0,
      });
      frame.status = 2;
    } else if (status === 2) {
      frameStack.push({
        n: currN - 1,
        a: currB,
        b: currA,
        c: currC,
        status: 0,
      });
      frame.status = 3;
    } else if (status === 3) {
      frameStack.pop();
    }
  }

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

// printHanoi();
