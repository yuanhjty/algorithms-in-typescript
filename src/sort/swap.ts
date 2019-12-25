export default function swap<T>(items: T[], firstIndex: number, secondIndex: number): void {
  const tmp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = tmp;
}
