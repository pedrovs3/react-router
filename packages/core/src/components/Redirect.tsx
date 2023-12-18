import React from 'react';
import { useRouter } from '../context';
import { useNavigate } from "../hooks";

interface IRedirectProps {
  to: string;
  data?: any;
}

export const Redirect: React.FC<IRedirectProps> = ({ to, data }) => {
  const { navigate } = useNavigate();
  React.useEffect(() => {
    navigate(to, data);
  }, [data, navigate, to]);
  return null;
};
