export type Compare<T> = (a: T, b: T) => number;
export type Sort<T> = (items: T[], compare: Compare<T>) => T[];
