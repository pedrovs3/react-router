import React from 'react';

export interface AuthContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const authContext = React.createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = React.useState<string>('');

  return (
    <authContext.Provider value={{ token, setToken }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(authContext);

  const { token, setToken } = context ?? {};

  const getTokenFromCookie = () => {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];
  };

  const addTokenToCookie = (token: string) => {
    document.cookie = `token=${token};`;
  };

  const removeTokenFromCookie = () => {
    const cookiesWithoutToken = document.cookie.split('; ').filter((row) => !row.startsWith('token='));
    document.cookie = cookiesWithoutToken.join('; ');
  };

  React.useEffect(() => {
    const cookieToken = getTokenFromCookie();

    if (cookieToken) {
      setToken(cookieToken);
    }
  }, [document.cookie]);

  return { token, addTokenToCookie, removeTokenFromCookie };
};
