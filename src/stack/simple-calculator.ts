import Stack from './array-stack';

const priorities: { [prop: string]: number } = {
  '+': 10,
  '-': 10,
  '*': 20,
  '/': 20,
};

const executors: { [prop: string]: (a: number, b: number) => number } = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const validOperators = new Set(['+', '-', '*', '/']);
function isValidOperator(char: string): boolean {
  return validOperators.has(char);
}

function isValidOperand(n: number | undefined): boolean {
  return typeof n === 'number' && !Number.isNaN(n);
}

function parseOperand(str: string): number {
  const operand = Number(str);
  if (!isValidOperand(operand)) {
    throw new Error(`Invalid operand: ${str}`);
  }
  return operand;
}

export default function simpleCalculator(expr: string): number {
  const operands = new Stack<number>();
  const operators = new Stack<string>();
  let operandStr = '';

  function handleWithOperand(): void {
    if (operandStr) {
      const operand = parseOperand(operandStr);
      operandStr = '';
      operands.push(operand);
    }
  }

  function executeOperation(): void {
    if (operands.size() < 2) {
      throw new Error('Invalid express!');
    }
    const operator = operators.pop() as string;
    const secondOperand = operands.pop() as number;
    const firstOperand = operands.pop() as number;
    const newOperand = executors[operator](firstOperand, secondOperand);
    operands.push(newOperand);
  }

  for (let i = 0, len = expr.length; i < len; i++) {
    const char = expr[i];
    if (/[ \t]/.test(char)) {
      handleWithOperand();
    } else if (isValidOperator(char)) {
      handleWithOperand();

      const currPriority = priorities[char];
      while (!operators.isEmpty() && priorities[operators.peek() as string] >= currPriority) {
        executeOperation();
      }

      operators.push(char);
    } else {
      operandStr += char;
    }
  }

  handleWithOperand();
  while (!operators.isEmpty()) {
    executeOperation();
  }

  if (operands.size() !== 1) {
    throw new Error('Invalid expression!');
  }

  return operands.pop() as number;
}
