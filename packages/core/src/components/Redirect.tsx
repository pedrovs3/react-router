import React from 'react';
import { useNavigate } from '../hooks';

interface IRedirectProps {
  to: string;
  data?: object;
}

export const Redirect: React.FC<IRedirectProps> = ({ to, data }) => {
  const { navigate } = useNavigate();
  React.useEffect(() => {
    navigate(to, data);
  }, [data, navigate, to]);
  return null;
};
