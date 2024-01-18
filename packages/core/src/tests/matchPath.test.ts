import { describe, it } from '@jest/globals';
import { matchPath } from '../helpers';

describe('matchPath', () => {
  it('should return false if the path is not the same', () => {
    const currentPath = '/foo/bar';
    const pathOrigin = '/bar/foo';

    expect(matchPath(currentPath, pathOrigin)).toBe(false);
  });

  it('should return true if the path is the same', () => {
    const currentPath = '/foo/bar';
    const pathOrigin = '/foo/bar';

    expect(matchPath(currentPath, pathOrigin)).toStrictEqual({});
  });

  it('should return params if the path is the same with params and have path parameters', () => {
    const currentPath = '/foo/bar';
    const pathOrigin = '/foo/:bar';

    expect(matchPath(currentPath, pathOrigin)).toEqual({ bar: 'bar' });
  });

  it('should not return if path`s length is different', () => {
    const currentPath = '/foo/bar';
    const pathOrigin = '/foo';

    expect(matchPath(currentPath, pathOrigin)).toBe(false);
  });

  it('should return params if the path is "*"', () => {
    const currentPath = '/foo/bar';
    const pathOrigin = '*';

    const match = matchPath(currentPath, pathOrigin);

    expect(match).toStrictEqual({});
  });
});
