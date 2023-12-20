import React, { useMemo } from 'react';
import { getPathParams } from '../helpers';
import { NotFound } from './pages';
import { usePath, useQueryParams } from '../hooks';
import { Redirect } from './Redirect';

interface RouteProps {
  path: string;
  component: Promise<{ default: React.ComponentType<IComponentProps> }>;
  metadata?: IMetaData;
  guard?: () => boolean;
  redirectTo?: string;
}

interface IMetaData {
  title: string;
  description?: string;
}

interface IComponentProps {
  pathParams: object;
  queryParams: object;
}

export const Route: React.FC<RouteProps> = ({
  path,
  component,
  guard,
  redirectTo,
  metadata = {
    title: document.title || 'React App',
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || 'React App',
  },
}) => {
  const Component = useMemo(() => React.lazy(() => component), [component]);
  const currentPath = usePath();
  const queryParams = useQueryParams();
  const pathParams = getPathParams(path, currentPath);
  const isMatch = path === '*' ? true : pathParams !== null;

  React.useMemo(() => {
    if (metadata) {
      document.title = metadata.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', metadata.description || '');
    }
  }, [metadata]);

  if (guard && !guard()) return <Redirect to={redirectTo || '/login'} />;

  if (!isMatch) return null;

  if (path === '*') return <NotFound />;

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component pathParams={pathParams} queryParams={queryParams} />
    </React.Suspense>
  );
};
