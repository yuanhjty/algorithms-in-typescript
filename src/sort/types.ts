export type ComparisonOperator<T> = (a: T, b: T) => number;
export type Sort<T> = (items: T[], compare: ComparisonOperator<T>) => T[];
