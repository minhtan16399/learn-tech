import {ProductsApiType, ProductType} from "../../../../shared/validation/type";
import {ProductCard} from "../../../../core/components/product-card";
import {useParams} from "react-router-dom";
import queryString from "query-string";
import useQueryApi from "../../../hooks/use-get-api";
import {LoadingPage} from "../../../../core/components/loading";
import {NotFoundPage} from "../../../../core/components/404";

export const CategoryProduct= () => {
    const params = useParams();
    const queryStringParams = queryString.parse(params.id??'');
    const categoryName = queryStringParams["category"];
    const {data, isLoading, error} = useQueryApi<ProductsApiType>({url:`https://dummyjson.com/products/category/${categoryName}`});
    return (
        <div className='w-full'>
            <LoadingPage loading={isLoading}/>
            <NotFoundPage error={error}/>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                {data?.products.map((item: ProductType, index: number) => (
                    <div key={index}>
                        <ProductCard item={item} key={index}/>
                    </div>
                ))}
            </div>
        </div>
    )
}