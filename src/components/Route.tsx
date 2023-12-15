import React from 'react';
import { useRouterContext } from '../context';
import { getPathParams } from '../helpers';

interface RouteProps {
  path: string;
  component: React.ComponentType<any>;
}

export const Route: React.FC<RouteProps> = ({ path, component: Component }) => {
  const { path: currentPath, queryParams } = useRouterContext();
  const pathParams = getPathParams(path, currentPath);

  const isMatch = currentPath.startsWith(path);

  return isMatch
    ? (
      <Component
        pathParams={pathParams}
        queryParams={queryParams}
      />
    )
    : null;
};
