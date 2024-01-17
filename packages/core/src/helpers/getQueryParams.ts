interface IQueryParams {
  [key: string]: number | string | boolean | null | undefined;
}

export const getQueryParams = (url: string) => {
  const [, urlFormatted] = url.split('?');
  const queryParams = new URLSearchParams(urlFormatted);
  const params: IQueryParams = {};

  queryParams.forEach((value, key) => {
    params[key] = value;
  });

  return params as IQueryParams;
};
