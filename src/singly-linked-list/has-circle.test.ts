import ListNode from './list-node';
import create from './create';
import hasCircle from './has-circle';

describe('hasCircle', () => {
  const apple = new ListNode('apple');
  const banana = new ListNode('banana');
  const pear = new ListNode('pear');
  const orange = new ListNode('orange');
  const pineapple = new ListNode('pineapple');
  const pitaya = new ListNode('pitaya');

  afterEach(() => {
    apple.next = null;
    banana.next = null;
    pear.next = null;
    orange.next = null;
    pineapple.next = null;
    pitaya.next = null;
  });

  test('no circle', () => {
    const head1 = create();
    const head2 = create([1]);
    const head3 = create([1, 2]);
    const head4 = create([1, 2, 3]);
    expect(hasCircle(head1)).toBeFalsy();
    expect(hasCircle(head2)).toBeFalsy();
    expect(hasCircle(head3)).toBeFalsy();
    expect(hasCircle(head4)).toBeFalsy();
  });

  test('1 node circle', () => {
    apple.next = apple;
    expect(hasCircle(apple)).toBeTruthy();
  });

  test('2 nodes circle', () => {
    apple.next = banana;
    banana.next = apple;
    expect(hasCircle(apple)).toBeTruthy();
  });

  test('3 nodes circle', () => {
    apple.next = banana;
    banana.next = pear;
    pear.next = apple;
    expect(hasCircle(apple)).toBeTruthy();
  });

  test('line and circle, length of line equivalent to length of circle', () => {
    apple.next = banana;
    banana.next = pear;
    pear.next = orange;
    orange.next = pineapple;
    pineapple.next = pitaya;
    pitaya.next = orange;
    expect(hasCircle(apple)).toBeTruthy();
  });

  test('line and circle, length of line less than length of circle', () => {
    apple.next = banana;
    banana.next = pear;
    pear.next = orange;
    orange.next = pineapple;
    pineapple.next = pitaya;
    pitaya.next = pear;
    expect(hasCircle(banana)).toBeTruthy();
  });

  test('line and circle, length of line larger than length of circle', () => {
    apple.next = banana;
    banana.next = pear;
    pear.next = orange;
    orange.next = pineapple;
    pineapple.next = pitaya;
    pitaya.next = pineapple;
    expect(hasCircle(apple)).toBeTruthy();
  });
});
