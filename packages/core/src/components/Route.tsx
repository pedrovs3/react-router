import React from 'react';
import { getPathParams } from '../helpers';
import { NotFound } from './pages';
import { usePath, useQueryParams } from '../hooks';
import { Redirect } from './Redirect';

interface RouteProps {
  path: string;
  component: React.ComponentType<IComponentProps>;
  guard?: () => boolean;
  redirectTo?: string;
}

interface IComponentProps {
  pathParams: object;
  queryParams: object;
}

export const Route: React.FC<RouteProps> = ({
  path, component: Component, guard, redirectTo,
}) => {
  const currentPath = usePath();
  const queryParams = useQueryParams();
  const pathParams = getPathParams(path, currentPath);
  const isMatch = path === '*' ? true : pathParams !== null;

  if (guard && !guard()) return <Redirect to={redirectTo || '/login'} />;

  if (!isMatch) return null;

  if (path === '*') return <NotFound />;

  return <Component pathParams={pathParams} queryParams={queryParams} />;
};
