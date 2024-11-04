import useQueryWithRetry from "../use-query-with-retry";
import {getProducts} from "../../../core/services/products-service.ts";
import {ProductType} from "../../../shared/validation/type";

export const useGetProducts = () => {
    return useQueryWithRetry<ProductType[], Error>('products', ()=> getProducts())
}