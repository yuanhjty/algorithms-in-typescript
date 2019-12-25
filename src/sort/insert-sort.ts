import { ComparisonOperator } from './types';

export default function insertSort<T>(items: T[], compare: ComparisonOperator<T>): T[] {
  for (let i = 1, len = items.length; i < len; i++) {
    const valueToInsert = items[i];
    for (let j = i - 1; j >= 0; j--) {
      if (compare(items[j], valueToInsert) > 0) {
        items[j + 1] = items[j];
      } else {
        items[j + 1] = valueToInsert;
        break;
      }
    }
  }

  return items;
}
