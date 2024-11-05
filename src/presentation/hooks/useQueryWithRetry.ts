import { useQuery, UseQueryResult } from '@tanstack/react-query';

const useQueryWithRetry = <TData>(queryKey: string, queryFn: () => Promise<TData>): UseQueryResult<TData> => {
    return useQuery<TData>({
        queryKey: [queryKey],
        queryFn,
        retry: 5,
        staleTime: 1000 * 30,
    });
};

export default useQueryWithRetry;