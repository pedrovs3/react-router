import React from 'react';
import { useRouterContext } from '../context';

interface IRedirectProps {
  to: string;
  data?: any;
}

export const Redirect: React.FC<IRedirectProps> = ({ to, data }) => {
  const { navigate } = useRouterContext();
  React.useEffect(() => {
    navigate(to, data);
  }, [data, navigate, to]);
  return null;
};
