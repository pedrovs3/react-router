export const matchPath = (currentPath: string, pathOrigin: string) => {
  const currentPathArray = currentPath.split('?')[0].split('/');
  const pathOriginArray = pathOrigin.split('/');

  if (currentPathArray.length !== pathOriginArray.length && !pathOriginArray.includes('*')) {
    return false;
  }

  const params: { [key: string]: string } = {};

  const match = pathOriginArray.every((path, index) => {

    if (path === '*') {
      return true;
    }

    if (path.startsWith(':')) {
      params[path.slice(1)] = currentPathArray[index];
      return true;
    }

    return path === currentPathArray[index];
  });

  return match ? params : false;
};
