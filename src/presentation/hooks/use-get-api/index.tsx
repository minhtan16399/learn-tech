import { useQuery } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';

interface UseQueryApiOptions {
    url: string;
    config?: AxiosRequestConfig;
}

function useGetApi<TData>({url, config,}: UseQueryApiOptions) {
    const {data, isLoading, error} = useQuery<TData>({
        queryKey: [url],
        queryFn: async () => {
            const response = await axios.get<TData>(`https://dummyjson.com${url}`, config);
            return response.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return {data, isLoading, error };
}

export default useGetApi;
