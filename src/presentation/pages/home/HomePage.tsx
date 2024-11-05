import {ProductType} from "../../../shared/models/productType.ts";
import {LoadingPage} from "../../../core/components/loading";
import {NotFoundPage} from "../../../core/components/404";
import {ProductCard} from "../../../core/components/product-card";
import {useGetProducts} from "../../hooks/useGetProducts.ts";

export const HomePage = () => {
    const {data, isLoading, error} = useGetProducts();

    return (
        <div className='w-full h-full'>
            <LoadingPage loading={isLoading}/>
            <NotFoundPage error={error}/>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                {!data ? null : data.map((item: ProductType, index: number) => (
                    <div key={index}>
                        <ProductCard item={item} key={index}/>
                    </div>
                ))}
            </div>
        </div>
    )
}