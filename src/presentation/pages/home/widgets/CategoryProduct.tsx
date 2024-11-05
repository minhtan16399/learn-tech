import {ProductType} from "../../../../shared/models/productType.ts";
import {ProductCard} from "../../../../core/components/product-card";
import {LoadingPage} from "../../../../core/components/loading";
import {NotFoundPage} from "../../../../core/components/404";
import {useGetCategory} from "../../../hooks/useGetCategory.ts";

export const CategoryProduct= () => {
    const {data, isLoading, error} = useGetCategory();

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