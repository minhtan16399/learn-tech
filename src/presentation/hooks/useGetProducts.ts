import useQueryWithRetry from "./useQueryWithRetry.ts";
import {getProducts} from "../../core/services/productsService.ts";
import {ProductType} from "../../shared/models/productType.ts";

export const useGetProducts = () => {
    return useQueryWithRetry<ProductType[]>('products', getProducts)
}