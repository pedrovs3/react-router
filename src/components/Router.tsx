import React from 'react';
import { RouterContextProvider, useRouterContext } from '@/context';

interface RouterProps {
  children: React.ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  const { setLocation } = useRouterContext();

  React.useEffect(() => {
    const popstateListener = () => {
      setLocation(window.location);
    };
    window.addEventListener('popstate', popstateListener);
    return () => {
      window.removeEventListener('popstate', popstateListener);
    };
  }, [setLocation]);

  return (
    <RouterContextProvider>
      {children}
    </RouterContextProvider>
  );
};

export default Router;
