import {ProductType} from "../../../shared/validation/type";
import {NavLink} from "react-router-dom";
import queryString from "query-string";

type ProductCardProps = {
    item: ProductType;
}
export const ProductCard = ({item}: ProductCardProps) => {
    const params = {id: item.id};
    const query = queryString.stringify(params);
    return (
        <div className={'col-span-1 p-4 shadow-md rounded-lg h-full'}>
            <div className={'flex flex-col gap-5 justify-start h-full'}>
                <div className={'flex justify-center items-center'}>
                    <img className={'max-h-[228px] md:h-[228px]'} src={item.thumbnail} alt={item.title}/>
                </div>
                <div className={'flex flex-col gap-1 h-full justify-between'}>
                    <NavLink to={`/detail/${query}`} className={'hover:underline'}>
                        <h2 className={'text-lg font-semibold'}>{item.title}</h2>
                    </NavLink>
                    <p className={'text-red-600'}>${item.price}</p>
                </div>
            </div>
        </div>
    )
}