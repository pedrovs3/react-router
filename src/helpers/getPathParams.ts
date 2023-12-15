export const getPathParams = (path: string, currentPath: string) => {
  const pathArray = path.split('/');
  const currentPathArray = currentPath.split('/');

  const params: { [key: string]: string } = {};

  pathArray.forEach((pathItem, index) => {
    if (pathItem.startsWith(':')) {
      const key = pathItem.replace(':', '');
      params[key] = currentPathArray[index];
    }
  });

  return params;
};
