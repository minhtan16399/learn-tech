import useAxios from "../../hooks/useAxios";
import {ProductsApiType, ProductType} from "../../../shared/validation/type";
import {ProductCard} from "../../../core/components/product-card";

export const HomePage = () => {
    const {data} = useAxios<ProductsApiType>('https://dummyjson.com/products', 'GET');

    return (
        <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'}>
            {!data ? null : data.products.map((item: ProductType, index: number)=>(
                <div key={index}>
                    <ProductCard item={item} key={index}/>
                </div>
            ))}
        </div>
    )
}