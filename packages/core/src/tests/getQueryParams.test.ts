import { getQueryParams } from '../helpers';

describe('getQueryParams', () => {
  it('should return an empty object if there are no query params', () => {
    expect(getQueryParams('http://localhost:3000/teste?id=1')).toEqual({
      id: '1',
    });
  });

  it('should return an empty object if there are no query params', () => {
    expect(getQueryParams('http://localhost:3000/teste')).toEqual({});
  });

  it('should return an empty object if there are no query params', () => {
    expect(
      getQueryParams('http://localhost:3000/teste?id=1&name=pedro')
    ).toEqual({ id: '1', name: 'pedro' });
  });
});
