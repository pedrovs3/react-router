import { useRouter } from "../context";

export const usePath = () => {
  const { path } = useRouter();

  return path;
}