import {apiService} from "../connect-api/apiServices.ts";
import {ProductsApiType} from "../../presentation/pages/home/types/products.res.ts";
import {ProductType} from "../../shared/models/productType.ts";

export const getProducts = async () => {
    const res = await apiService<ProductsApiType>('/products', 'GET');

    return res.products ?? [];
};

export const getProductsByCategory = async (categoryId: string) => {
    if (!categoryId) {
        throw new Error('Category not found');
    }

    return await apiService<ProductsApiType>(`/products/category/${categoryId}`, 'GET')
};

export const getProductDetails = async (id: string) => {
    if (!id) {
        throw new Error("Product ID is required");
    }

    return await apiService<ProductType>(`/products/${id}`, 'GET');
};