import { ComparisonOperator } from './types';

export default function isOrdered<T>(list: T[], operator: ComparisonOperator<T>): boolean {
  for (let i = 1, len = list.length; i < len; i++) {
    if (operator(list[i - 1], list[i]) > 0) {
      return false;
    }
  }
  return true;
}
