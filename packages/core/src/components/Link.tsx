import React from 'react';
import { useRouter } from '../context';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  prefetch?: boolean;
}

export const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { setLocation } = useRouter();

  const onMouseOverPrefetch = React.useCallback(() => {
    fetch(to, { method: 'HEAD' })
      .then((response) => response.headers)
      .then((headers) => headers.get('x-navigation-data'))
      .then((data) => JSON.parse(data || '{}'));

    // TODO: Decide what to do with the data | context or local state?
    return () => {};
  }, [to]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState(null, '', to);
    setLocation(to);
  };

  return (
    <a href={to} onClick={handleClick} onMouseOver={onMouseOverPrefetch}>
      {children}
    </a>
  );
};
