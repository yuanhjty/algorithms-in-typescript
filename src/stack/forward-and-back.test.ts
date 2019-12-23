import createLocation from './forward-and-back';

describe('forward and back', () => {
  test('forward and back', () => {
    const location = createLocation();
    location.push('foo');
    location.push('bar');
    location.push('baz');
    expect(location.back()).toBe('baz');
    expect(location.back()).toBe('bar');
    expect(location.forward()).toBe('bar');
    expect(location.forward()).toBe('baz');
    expect(location.forward()).toBe(false);

    expect(location.back()).toBe('baz');
    expect(location.back()).toBe('bar');
    location.push('abc');
    expect(location.forward()).toBe(false);
  });
});
