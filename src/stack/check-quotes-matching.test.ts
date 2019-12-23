import checkQuotesMatching from './check-quotes-matching';

describe('checkQuotesMatch', () => {
  test('matching', () => {
    expect(checkQuotesMatching('{(foo[bar]baz)[[()]]}')).toBeTruthy();
  });

  test('not matching', () => {
    expect(checkQuotesMatching('{(foo[bar]baz)][()]]}')).toBeFalsy();
  });
});
