import { Sort } from '../../shared/types';
import getRandomList from '../../shared/random-list';

export default function measure(
  sort: Sort<number>,
  name?: string,
  listSize?: number,
  listCount?: number,
): number {
  name = name || sort.name;
  listSize = listSize || 2000;
  listCount = listCount || 1000;
  const lists = [];
  for (let i = 0; i < listCount; i++) {
    lists.push(getRandomList(listSize));
  }

  const startTime = Date.now();
  lists.forEach(list => sort(list, (a, b) => a - b));
  const timeRange = Date.now() - startTime;
  console.log(`sort ${listCount} lists of size ${listSize}: ${timeRange}ms: ${name}`);
  return timeRange;
}
