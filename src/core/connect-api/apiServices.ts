import { errorHandler } from './errorHandler.ts';
import axios from "axios";

const client = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000, // Thiết lập timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiResponse<T> {
    data: T;
}

export const apiService = async <T>(url: string, method: HttpMethod, data?: unknown): Promise<T> => {
    try {
        let response: ApiResponse<T>;

        switch (method) {
            case 'GET':
                response = await client.get(url);
                break;
            case 'POST':
                response = await client.post(url, data);
                break;
            case 'PUT':
                response = await client.put(url, data);
                break;
            case 'DELETE':
                response = await client.delete(url);
                break;
            default:
                throw new Error('Unsupported HTTP method');
        }
        return response.data; // Trả về data
    } catch (error) {
        errorHandler(error);
    }
};