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
  setLocation: () => {},
  queryParams: {},
  navigationData: {},
  setNavigationData: () => {},
});

export const RouterContextProvider: React.FC<RouterContextProviderProps> = ({
  children,
}) => {
  const [location, setLocation] = React.useState<string>(
    window.location.pathname || '/',
  );
  const [navigationData, setNavigationData] = React.useState<object>({});
  const queryParams = React.useMemo(
    () => getQueryParams(window.location.href),
    [],
  );

  window.onpopstate = () => setLocation(window.location.pathname);

  return (
    <RouterContext.Provider
      value={{
        path: location,
        setLocation,
        queryParams,
        navigationData,
        setNavigationData,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = React.useContext(RouterContext);

  const { path, setLocation, queryParams, navigationData, setNavigationData } =
    context ?? {};

  return {
    path,
    setLocation,
    queryParams,
    navigationData,
    setNavigationData,
  };
};
