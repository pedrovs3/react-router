export const getPathParams = (pathRoute: string, currentPath: string) => {
  const pathRouteArray = pathRoute.split('/');
  const currentPathArray = currentPath.split('/');

  const params: { [key: string]: string } = {};

  pathRouteArray.forEach((pathItem, index) => {
    if (pathItem.startsWith(':')) {
      const key = pathItem.replace(':', '');
      params[key] = currentPathArray[index];
    }
  });

  return params;
};
