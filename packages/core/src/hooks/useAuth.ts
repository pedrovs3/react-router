import { useAuthContext } from '../context';

export const useAuth = () => {
  const { addTokenToCookie, token, removeTokenFromCookie } = useAuthContext();

  return {
    login: addTokenToCookie,
    logout: removeTokenFromCookie,
    token,
  };
};
