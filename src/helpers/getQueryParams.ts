export const getQueryParams = (url: string) => {
  const [_, urlFormatted] = url.split('?');
  const queryParams = new URLSearchParams(urlFormatted);
  const params: any = {};

  queryParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};
