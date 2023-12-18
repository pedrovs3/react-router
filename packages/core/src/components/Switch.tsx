import React from 'react';
import { useRouterContext } from '../context';
import { NotFound } from './pages';

interface ISwitchProps {
  children: React.ReactNode;
}

export const Switch: React.FC<ISwitchProps> = ({ children }) => {
  const { path: currentPath } = useRouterContext();

  let isMatch = false;
  let matchedChild:
  React.ReactElement<any, string | React.JSXElementConstructor<any>> | null = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const { path } = child.props;

    const currentPathSegments = currentPath.split('/').filter(Boolean);
    const pathSegments = path.split('/').filter(Boolean);

    if (path === '*') {
      isMatch = true;
      matchedChild = child;
    } else if (currentPathSegments.length >= pathSegments.length
      && pathSegments.every((segment: string, index: string | number) => segment
        === currentPathSegments[Number(index)])) {
      isMatch = true;
      matchedChild = child;
    }
  });

  return isMatch ? matchedChild ? React.cloneElement(matchedChild)
    : <NotFound />
    : <NotFound />;
};
