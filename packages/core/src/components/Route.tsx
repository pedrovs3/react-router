import React from 'react';
import { getPathParams } from '../helpers';
import { usePath, useQueryParams } from '../hooks';
import { Redirect } from './Redirect';
import { NotFound } from './pages';

interface RouteProps {
  path: string;
  component: RouteComponent;
  metadata?: IMetaData;
  middleware?: () => boolean;
  redirectTo?: string;
}

type RouteComponent =
  | React.ComponentType<IComponentProps>
  | (React.ExoticComponent<
  React.CustomComponentPropsWithRef<() => JSX.Element>
  > & {
    readonly _result: () => Element;
  });

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
  component: Component,
  middleware,
  redirectTo,
  metadata = {
    title: document.title || 'React App',
    description:
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content') || 'React App',
  },
}) => {
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

  if (middleware && !middleware()) return <Redirect to={redirectTo || '/login'} />;

  if (!isMatch) return null;

  if (path === '*') return <NotFound />;

  return typeof Component !== 'function' ? (
    <React.Suspense fallback={<div>Loading...</div>}>
      {/* @ts-ignore */}
      <Component pathParams={pathParams} queryParams={queryParams} />
    </React.Suspense>
  ) : (
    <Component pathParams={pathParams} queryParams={queryParams} />
  );
};
