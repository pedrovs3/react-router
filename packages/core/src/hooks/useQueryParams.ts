import { useRouter } from "../context";

export const useQueryParams = () => {
	const { queryParams } = useRouter();

	return queryParams;
};
