import {productEndpoint} from "../connect-api/endpoint.ts";
import {apiService} from "../connect-api/api-services.ts";
import {ProductsApiType} from "../../presentation/pages/home/types/products.res.ts";
import {ProductType} from "../../shared/validation/type";

export const getProducts = async () => {
    const res = await apiService<ProductsApiType>(productEndpoint.ALL_PRODUCTS, 'GET');

    if (!res.products || res.products.length === 0) {
        throw new Error('Product not found');
    }

    return res.products;
};

export const getProductsByCategory = async (categoryId: string) => {
    if (!categoryId) {
        throw new Error('Category not found');
    }

    return await apiService<ProductsApiType>(productEndpoint.CATEGORY(categoryId), 'GET')
};

export const getProductDetails = async (id: string) => {
    if (!id) {
        throw new Error("Product ID is required");
    }

    return await apiService<ProductType>(productEndpoint.PRODUCT_DETAIL(id), 'GET');
};