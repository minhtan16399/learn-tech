import {ProductsApiType, ProductType} from "../../../../shared/validation/type";
import {ProductCard} from "../../../../core/components/product-card";
import useAxios from "../../../hooks/useAxios";
import {useParams} from "react-router-dom";
import queryString from "query-string";

export const CategoryProduct= () => {
    const params = useParams();
    const queryStringParams = queryString.parse(params.id??'');
    const categoryName = queryStringParams["category"];
    const {data} = useAxios<ProductsApiType>(`https://dummyjson.com/products/category/${categoryName}`,'GET')
    return (
        <div>
            <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'}>
                {!data ? null : data.products.map((item: ProductType, index: number) => (
                    <div key={index}>
                        <ProductCard item={item} key={index}/>
                    </div>
                ))}
            </div>
        </div>
    )
}