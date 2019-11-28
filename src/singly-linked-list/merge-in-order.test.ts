import create from './create';
import values from './values';
import mergeInOrder from './merge-in-order';

describe('mergeInOrder', () => {
  test('first param empty', () => {
    const oneArr: number[] = [];
    const anotherArr = [1, 2];
    const one = create(oneArr);
    const another = create(anotherArr);
    expect(values(mergeInOrder(one, another))).toEqual(
      oneArr.concat(anotherArr).sort((a, b) => a - b),
    );
  });

  test('second param empty', () => {
    const oneArr = [1, 2];
    const anotherArr: number[] = [];
    const one = create(oneArr);
    const another = create(anotherArr);
    expect(values(mergeInOrder(one, another))).toEqual(
      oneArr.concat(anotherArr).sort((a, b) => a - b),
    );
  });

  test('last of one param smaller than first of another param', () => {
    const oneArr = [1, 2];
    const anotherArr = [3, 4];
    const one = create(oneArr);
    const another = create(anotherArr);
    expect(values(mergeInOrder(one, another))).toEqual(
      oneArr.concat(anotherArr).sort((a, b) => a - b),
    );
  });

  test('others', () => {
    const oneArr = [1, 3, 8];
    const anotherArr = [2, 3, 4, 5, 9];
    const one = create(oneArr);
    const another = create(anotherArr);
    expect(values(mergeInOrder(one, another))).toEqual(
      oneArr.concat(anotherArr).sort((a, b) => a - b),
    );
  });
});
