let cookie = `token=1234; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; samesite=lax; httponly`

describe('removeFromCookie()', () => {
  it('should remove a cookie', () => {
    const cookiesWithoutToken = cookie.split('; ').filter((row) => !row.startsWith('token='));
    cookie = cookiesWithoutToken.join('; ');
    expect(cookie).toBe('path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; samesite=lax; httponly');
  });
});
