import React from 'react';
import { getQueryParams } from '../helpers';

interface RouterContextProps {
  path: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  queryParams: object;
  navigationData: object;
  setNavigationData: React.Dispatch<React.SetStateAction<object>>;
}

interface RouterContextProviderProps {
  children: React.ReactNode;
}

const RouterContext = React.createContext<RouterContextProps>({
  path: '',
  setLocation: () => {
  },
  queryParams: {},
  navigationData: {},
  setNavigationData: () => {
  },
});

export const RouterContextProvider:
React.FC<RouterContextProviderProps> = ({ children }) => {
  const [location, setLocation] = React.useState<string>(window.location.pathname || '/');
  const [navigationData, setNavigationData] = React.useState<object>({});
  const queryParams = getQueryParams(window.location.href);

  window.onpopstate = () => setLocation(window.location.pathname);

  return (
    <RouterContext.Provider value={{
      path: location, setLocation, queryParams, navigationData, setNavigationData,
    }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouterContext = () => {
  const context = React.useContext(RouterContext);

  const {
    path, setLocation, queryParams, navigationData, setNavigationData,
  } = context ?? {};

  const navigate = (path: string, data?: object) => {
    window.history.pushState(null, '', path);
    setLocation(path);
    setNavigationData(data ?? {});
  };

  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  const getNavigationData = () => navigationData;

  return {
    path,
    setLocation,
    queryParams,
    navigate,
    getNavigationData,
    goBack,
    goForward,
  };
};
