import axios from 'axios';

export function errorHandler(error: unknown): never {
    if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch data');
    } else {
        throw new Error('An unexpected error occurred');
    }
}