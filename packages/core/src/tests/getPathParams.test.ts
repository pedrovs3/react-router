import { getPathParams } from '../helpers';

describe('getPathParams', () => {
  it('should return an empty object if there are no params', () => {
    expect(getPathParams('/home', '/home')).toEqual({});
  });

  it('should return an object with the params', () => {
    expect(getPathParams('/home/:id', '/home/1')).toEqual({ id: '1' });
  });

  it('should return an object with the params', () => {
    expect(getPathParams('/home/:id/:name', '/home/1/pedro')).toEqual({
      id: '1',
      name: 'pedro',
    });
  });
});
