import React from 'react';
import { useRouter } from '../context';

interface IRedirectProps {
  to: string;
  data?: any;
}

export const Redirect: React.FC<IRedirectProps> = ({ to, data }) => {
  const { navigate } = useRouter();
  React.useEffect(() => {
    navigate(to, data);
  }, [data, navigate, to]);
  return null;
};
