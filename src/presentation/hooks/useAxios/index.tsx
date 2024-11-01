import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios<T> (url:string, method : 'GET' | 'POST' | 'PUT' | 'DELETE', body = {}, headers = {}): {
    data: T | null | undefined;
    loading: undefined | boolean;
    error: string | null | undefined
} {
    const [data, setData] = useState<T | null>();
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios({
                    method,
                    url,
                    data: body,
                    headers,
                });
                setData(response.data);
            } catch (errors) {
                setError((errors as Error).message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [method, url]);
    return { data, loading, error };
};

export default useAxios;
