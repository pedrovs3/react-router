import React from 'react';
import { useRouter } from '../context';
import { getPathParams } from '../helpers';
import { NotFound } from './pages';

interface RouteProps {
  path: string;
  component: React.ComponentType<IComponentProps>;
}

interface IComponentProps {
  pathParams: object;
  queryParams: object;
}

export const Route: React.FC<RouteProps> = ({ path, component: Component }) => {
  const { path: currentPath, queryParams } = useRouter();
  const pathParams = getPathParams(path, currentPath);

  const isMatch = path === '*' ? true : pathParams !== null;

  if (!isMatch) return null;

  if (path === '*') return <NotFound />;

  return <Component pathParams={pathParams} queryParams={queryParams} />;
};
