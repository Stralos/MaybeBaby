/* @flow */
import { shouldBeIndexed } from '../indexing';

describe('Utils/indexing --', () => {
  it('should return false when url should not be indexed', () => {
    const allowedUrls = {
      '/': true,
      '/contactts': true,
    };
    const url = '/index';

    expect(shouldBeIndexed(url, allowedUrls)).toBe(false);
  });

  it('should return true when url should be indexed', () => {
    const allowedUrls = {
      '/': true,
      '/contacts': true,
    };
    const url = '/test';

    expect(shouldBeIndexed(url, allowedUrls)).toBe(true);
  });
});
