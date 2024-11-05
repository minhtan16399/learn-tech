import {ProductType} from "../../../shared/models/productType.ts";
import {NavLink} from "react-router-dom";
import {useQueryParams} from "../../../presentation/hooks/useQueryParams.ts";
import {ROUTERS} from "../../constant/routers/router.config.ts";

type ProductCardProps = {
    item: ProductType;
};

export const ProductCard = ({item}: ProductCardProps) => {
    const queryIdProduct = useQueryParams('SET', `${item.id}`);
    return (
        <div className='col-span-1 p-4 shadow-md rounded-lg h-full'>
            <div className='flex flex-col gap-5 justify-start h-full'>
                <div className='flex justify-center items-center'>
                    <img className='max-h-[228px] md:h-[228px]' src={item.thumbnail} alt={item.title}/>
                </div>
                <div className='flex flex-col gap-1 h-full justify-between'>
                    <NavLink to={`${ROUTERS.PRODUCT_DETAIL}/${queryIdProduct}`} className='hover:underline'>
                        <h2 className='text-lg font-semibold'>{item.title}</h2>
                    </NavLink>
                    <p className='text-red-600'>${item.price}</p>
                </div>
            </div>
        </div>
    )
}