import { useRouter } from "../context";

export const useNavigate = () => {
  const { setLocation, setNavigationData } = useRouter();

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

  return {
    navigate,
    goBack,
    goForward,
  }
}