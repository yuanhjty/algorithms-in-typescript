export default function bsearchSqrt(n: number, fractionDigits: number = 6): number {
  if (n < 0) {
    throw new Error(`cannot calculate square root of a negative number: ${n}`);
  }
  if (n > Number.MAX_SAFE_INTEGER) {
    throw new Error(`cannot calculate numbers larger than ${Number.MAX_SAFE_INTEGER}: ${n}`);
  }

  const epsilon = 10 ** -(fractionDigits + 1);

  let low = 0;
  let high = n;
  while (high - low > epsilon) {
    const mid = (low + high) / 2;
    const square = mid ** 2;
    if (square === n) {
      return mid;
    }
    if (square > n) {
      high = mid - epsilon;
      continue;
    }
    low = mid + epsilon;
  }
  return Number(((low + high) / 2).toFixed(fractionDigits));
}
