import { Sort } from '../../shared/types';
import getRandomList from '../../shared/random-list';

export default function measure(sort: Sort<number>, listSize?: number, listCount?: number): number {
  listSize = listSize || 2000;
  listCount = listCount || 1000;
  const lists = [];
  for (let i = 0; i < listCount; i++) {
    lists.push(getRandomList(listSize));
  }

  const startTime = Date.now();
  lists.forEach(list => sort(list, (a, b) => a - b));
  const timeRange = Date.now() - startTime;
  console.log(`sort ${listCount} lists of size ${listSize}: ${sort.name}: ${timeRange}ms`);
  return timeRange;
}
