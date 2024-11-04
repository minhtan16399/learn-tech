import useQueryWithRetry from "../use-query-with-retry";
import {ProductType} from "../../../shared/validation/type";
import {getProductDetails} from "../../../core/services/products-service.ts";
import {useParams} from "react-router-dom";
import queryString from "query-string";

export const useGetProductDetail = () => {
    const params = useParams();
    const idProduct = queryString.parse(params.id??'')["id"];
    return useQueryWithRetry<ProductType, Error>(`product-detail-${idProduct}`, ()=> getProductDetails(`${idProduct}`))
}