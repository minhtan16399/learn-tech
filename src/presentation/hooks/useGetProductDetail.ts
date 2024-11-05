import useQueryWithRetry from "./useQueryWithRetry.ts";
import {ProductType} from "../../shared/models/productType.ts";
import {getProductDetails} from "../../core/services/productsService.ts";
import {useQueryParams} from "./useQueryParams.ts";

export const useGetProductDetail = () => {
    const idProduct = useQueryParams('GET', 'id')
    return useQueryWithRetry<ProductType>(`product-detail-${idProduct}`, ()=> getProductDetails(`${idProduct}`))
}