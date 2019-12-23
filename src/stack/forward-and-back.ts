import Stack from './array-stack';

interface Location {
  forward: () => string | boolean;
  back: () => string | boolean;
  push: (path: string) => string;
}

export default function createLocation(): Location {
  const backStack = new Stack<string>();
  const forwardStack = new Stack<string>();

  function forward(): string | boolean {
    if (forwardStack.isEmpty()) {
      return false;
    }
    const target = forwardStack.pop() as string;
    backStack.push(target);
    return target;
  }

  function back(): string | boolean {
    if (backStack.isEmpty()) {
      return false;
    }
    const target = backStack.pop() as string;
    forwardStack.push(target);
    return target;
  }

  function push(path: string): string {
    backStack.push(path);
    forwardStack.clear();
    return path;
  }

  return {
    forward,
    back,
    push,
  };
}
