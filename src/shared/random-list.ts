export default function getRandomList(sizeLimit: number): number[] {
  const len = Math.floor(Math.random() * sizeLimit);
  const list = new Array(len);
  for (let i = 0; i < len; i++) {
    list[i] = Math.floor(Math.random() * sizeLimit);
  }
  return list;
}
