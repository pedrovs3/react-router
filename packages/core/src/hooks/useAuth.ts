import { useAuthContext } from '../context';

export const useAuth = () => {
  const { addTokenToCookie, token } = useAuthContext();

  return {
    addTokenToCookie,
    token,
  };
};
