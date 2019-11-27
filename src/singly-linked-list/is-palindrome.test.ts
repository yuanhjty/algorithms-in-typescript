import create from './create';
import values from './values';
import isPalindrome from './is-palindrome';

describe('isPalindrome', () => {
  test('empty', () => {
    const chars: string[] = [];
    const head = create(chars);
    expect(isPalindrome(head)).toBeTruthy();
    expect(values(head)).toEqual(chars);
  });

  test('odd chars', () => {
    const chars = 'abcdcba'.split('');
    const head = create(chars);
    expect(isPalindrome(head)).toBeTruthy();
    expect(values(head)).toEqual(chars);
  });

  test('even chars', () => {
    const chars = 'abccba'.split('');
    const head = create(chars);
    expect(isPalindrome(head)).toBeTruthy();
    expect(values(head)).toEqual(chars);
  });

  test('not palindrome', () => {
    const chars = 'abcdba'.split('');
    const head = create(chars);
    expect(isPalindrome(head)).toBeFalsy();
    expect(values(head)).toEqual(chars);
  });
});
