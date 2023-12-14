import React from 'react';

interface RouterContextProps {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
}

interface RouterContextProviderProps {
  children: React.ReactNode;
}

const RouterContext = React.createContext<RouterContextProps>({
  location: window.location, // TODO: verify if this prop don't break the app
  setLocation: () => {
  },
});

export const RouterContextProvider:
React.FC<RouterContextProviderProps> = ({ children }) => {
  const [location, setLocation] = React.useState<Location>(window.location);

  return (
    <RouterContext.Provider value={{ location, setLocation }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouterContext = () => React.useContext(RouterContext);
