import useQueryWithRetry from "../use-query-with-retry";
import {getProductsByCategory} from "../../../core/services/products-service.ts";
import queryString from "query-string";
import {ProductsApiType} from "../../pages/home/types/products.res.ts";
import {useParams} from "react-router-dom";

export const useGetCategory = () => {
    const params = useParams();
    const categoryName = queryString.parse(params.id??'')["category"];
    return useQueryWithRetry<ProductsApiType, Error>(`category-${categoryName}`, () =>  getProductsByCategory(`${categoryName}`))
}