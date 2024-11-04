
import apiClient from './client';
import { errorHandler } from './error-handler';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiResponse<T> {
    data: T;
}

export const apiService = async <T>(url: string, method: HttpMethod, data?: unknown): Promise<T> => {
    try {
        let response: ApiResponse<T>;

        switch (method) {
            case 'GET':
                response = await apiClient.get(url);
                break;
            case 'POST':
                response = await apiClient.post(url, data);
                break;
            case 'PUT':
                response = await apiClient.put(url, data);
                break;
            case 'DELETE':
                response = await apiClient.delete(url);
                break;
            default:
                throw new Error('Unsupported HTTP method');
        }
        return response.data; // Trả về data
    } catch (error) {
        errorHandler(error);
    }
};