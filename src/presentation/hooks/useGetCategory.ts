import useQueryWithRetry from "./useQueryWithRetry.ts";
import {getProductsByCategory} from "../../core/services/productsService.ts";
import {ProductsApiType} from "../pages/home/types/products.res.ts";
import {useQueryParams} from "./useQueryParams.ts";

export const useGetCategory = () => {
    const category = useQueryParams('GET', 'category');
    return useQueryWithRetry<ProductsApiType>(`category-${category}`, () =>  getProductsByCategory(`${category}`))
}