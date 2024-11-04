import { useQuery, UseQueryResult } from '@tanstack/react-query';

const useQueryWithRetry = <TData, TError>(queryKey: string, queryFn: () => Promise<TData>): UseQueryResult<TData, TError> => {
    return useQuery<TData, TError>({
        queryKey: [queryKey],
        queryFn,
        retry: 5,
        staleTime: 1000 * 30,
    });
};

export default useQueryWithRetry;