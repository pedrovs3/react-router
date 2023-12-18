import React from 'react';
import { useRouter } from '../context';
import { matchPath } from '../helpers';
import { NotFound } from './pages';

interface ISwitchProps {
  children: React.ReactNode;
  path?: string;
}

export const Switch: React.FC<ISwitchProps> = ({ children, path: SwitchPath = '' }) => {
  const { path: currentPath } = useRouter();

  let pathParams = {};
  const validChildren = React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child)) {
      return false;
    }

    const { path } = child.props;

    const childPath = path + (SwitchPath ? `/${SwitchPath}` : '');

    if (!path) {
      return false;
    }

    const match = matchPath(currentPath, childPath);
    if (match) {
      pathParams = match.params;
    }

    return !!match;
  });

  if (validChildren.length > 0 && React.isValidElement(validChildren[0])) {
    return React.cloneElement(validChildren[0], {
      pathParams,
    } as React.Attributes & { pathParams: any });
  }
  return <NotFound />;
};
