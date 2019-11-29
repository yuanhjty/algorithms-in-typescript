import AStack from './array-stack';
import LStack from './linked-list-stack';

describe('stack', () => {
  test('initial values, pop, size, isEmpty, push', () => {
    const initialValues = [1, 22, 333];
    const aStack = new AStack(initialValues);
    const lStack = new LStack(initialValues);

    expect(aStack.size()).toBe(3);
    expect(lStack.size()).toBe(3);

    expect(aStack.isEmpty()).toBeFalsy();
    expect(lStack.isEmpty()).toBeFalsy();

    expect(aStack.pop()).toBe(333);
    expect(lStack.pop()).toBe(333);

    expect(aStack.pop()).toBe(22);
    expect(lStack.pop()).toBe(22);

    expect(aStack.size()).toBe(1);
    expect(lStack.size()).toBe(1);

    expect(aStack.pop()).toBe(1);
    expect(lStack.pop()).toBe(1);

    expect(aStack.size()).toBe(0);
    expect(lStack.size()).toBe(0);

    expect(aStack.isEmpty()).toBeTruthy();
    expect(lStack.isEmpty()).toBeTruthy();

    expect(aStack.pop()).toBe(undefined);
    expect(lStack.pop()).toBe(undefined);

    expect(aStack.size()).toBe(0);
    expect(lStack.size()).toBe(0);

    expect(aStack.push(10)).toBe(aStack);
    expect(lStack.push(10)).toBe(lStack);

    expect(aStack.size()).toBe(1);
    expect(lStack.size()).toBe(1);

    expect(aStack.isEmpty()).toBeFalsy();
    expect(lStack.isEmpty()).toBeFalsy();

    expect(aStack.pop()).toBe(10);
    expect(lStack.pop()).toBe(10);
  });

  test('no initial values', () => {
    const aStack = new AStack();
    const lStack = new LStack();

    expect(aStack.isEmpty()).toBeTruthy();
    expect(lStack.isEmpty()).toBeTruthy();
  });
});
