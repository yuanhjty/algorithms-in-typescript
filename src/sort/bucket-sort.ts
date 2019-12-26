/* eslint-disable no-plusplus */
import compareNumber from '../shared/compare-number';
import quickSort from './quick-sort-v2';

/**
 * Applicable conditions: items can be divided into several buckets evenly.
 */
export default function bucketSort(items: number[], bucketSize: number = 1000): number[] {
  const itemsCount = items.length;
  const bucketsCount = Math.ceil(itemsCount / bucketSize);
  const buckets = new Array(bucketsCount);
  items.forEach(item => {
    const bucketIndex = Math.floor(item / bucketSize);
    const bucket = (buckets[bucketIndex] = buckets[bucketIndex] || { items: [], cursor: 0 });
    bucket.items[bucket.cursor++] = item;
  });

  let i = 0;
  buckets.forEach(bucket => {
    quickSort(bucket.items, compareNumber);
    bucket.items.forEach((item: number) => {
      items[i++] = item;
    });
  });

  return items;
}
