import React from 'react';
import { getQueryParams } from '../helpers';

interface RouterContextProps {
  path: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  queryParams: object;
}

interface RouterContextProviderProps {
  children: React.ReactNode;
}

const RouterContext = React.createContext<RouterContextProps>({
  path: '',
  setLocation: () => {
  },
  queryParams: {},
});

export const RouterContextProvider:
React.FC<RouterContextProviderProps> = ({ children }) => {
  const [location, setLocation] = React.useState<string>(window.location.pathname || '/');
  const queryParams = getQueryParams(window.location.href);

  window.onpopstate = () => setLocation(window.location.pathname);

  return (
    <RouterContext.Provider value={{ path: location, setLocation, queryParams }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouterContext = () => {
  const context = React.useContext(RouterContext);

  const { path, setLocation, queryParams } = context ?? {};

  const navigate = (path: string, data?: object) => {
    window.history.pushState(null, '', path);
    setLocation(path);
    return data;
  };

  return {
    path,
    setLocation,
    queryParams,
    navigate,
  };
};
