import React from 'react';
import { useRouter } from '../context';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { setLocation } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState(null, '', to);
    setLocation(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
