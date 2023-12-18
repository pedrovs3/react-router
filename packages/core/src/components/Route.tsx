import React from 'react';
import { useRouterContext } from '../context';
import { getPathParams } from '../helpers';

interface RouteProps {
  path: string;
  component: React.ComponentType<IComponentProps>;
  basePath?: string;
  children?: React.ReactNode;
}

interface IComponentProps {
  pathParams: object;
  queryParams: object;
  children?: React.ReactElement<IComponentProps>[] | null;
  basePath?: string;
}

export const Route:
React.FC<RouteProps> = ({
  path, component: Component, basePath, children,
}) => {
  const { path: currentPath, queryParams } = useRouterContext();
  const fullPath = basePath ? `${basePath}${path}` : path;
  const pathParams = getPathParams(fullPath, currentPath);

  const isMatch = fullPath === '*' ? true : currentPath.startsWith(fullPath);

  if (!isMatch) return null;

  return (
    <Component pathParams={pathParams} queryParams={queryParams}>
      {React.Children.map(
        children as React.ReactElement<IComponentProps>[] | null,
        (child: React.ReactElement<IComponentProps> | null | undefined) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { basePath: fullPath });
          }
          return child;
        },
      )}
    </Component>
  );
};
