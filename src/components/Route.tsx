import React from 'react';
import { useRouterContext } from '@/context';

interface RouteProps {
  path: string;
  component: React.ComponentType<any>;
}

const Route: React.FC<RouteProps> = ({ path, component: Component }) => {
  const { location: { pathname } } = useRouterContext();
  const pathMatch = new RegExp(`^${path}$`).exec(pathname);

  return pathMatch ? <Component queryParams={pathMatch} /> : null;
};

export default Route;
