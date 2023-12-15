import React from 'react';
import { useRouterContext } from '../context';
import { getPathParams } from '../helpers';
import { NotFound } from '.';

interface RouteProps {
  path: string;
  component: React.ComponentType<IComponentProps>;
  notFoundPage?: React.ComponentType<any>;
}

interface IComponentProps {
  pathParams: object;
  queryParams: object;
}

export const Route: React.FC<RouteProps> = ({ path, component: Component, notFoundPage: NotFoundPage }) => {
  const { path: currentPath, queryParams } = useRouterContext();
  const pathParams = getPathParams(path, currentPath);

  const isMatch = path === "*" ? true : currentPath.startsWith(path);

  if (!isMatch) return null;

  if (path === "*") return NotFoundPage ? <NotFoundPage /> : <NotFound />;

  return <Component pathParams={pathParams} queryParams={queryParams} />;
};
