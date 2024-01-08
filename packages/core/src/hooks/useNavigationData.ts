import { useRouter } from "../context";

export const useNavigationData = () => {
	const { navigationData, setNavigationData } = useRouter();

	return { navigationData, setNavigationData };
};
