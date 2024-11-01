import {NavLink, useParams} from "react-router-dom";
import queryString from "query-string";
import useAxios from "../../hooks/useAxios";
import {ViewDetailProduct} from "../../components/detail-product/view-detail-product";
import {LoadingPage} from "../loading";
import {NotFoundPage} from "../404";
import {MultiImagePreview} from "../../../core/components/multi-image-preview";
import {ProductType} from "../../../shared/validation/type";

export default function DetailPage() {
    const params = useParams();
    const queryStringParams = queryString.parse(params.id??'');
    const idProduct = queryStringParams["id"];
    const {data, loading, error} = useAxios<ProductType>(`https://dummyjson.com/products/${idProduct}`,'GET');
    if (loading) {
        return <LoadingPage/>
    }
    if (error) {
        return <NotFoundPage/>
    }

    return (
        <div className={'p-5'}>
            {
                data ? <div className={'gap-5 grid grid-cols-2'}>
                    <div className={'border rounded-xl p-8'}>
                        <MultiImagePreview listImage={data.images}/>
                    </div>
                    <div className={'pt-10'}>
                        <ViewDetailProduct product={data}/>
                    </div>
                    <div className={'w-full text-end col-span-2'}>
                        <NavLink to={'/'} className={'rounded-md text-white hover:bg-red-400 p-3 bg-green-400'}>Back Home</NavLink>
                    </div>
                </div> : null
            }
        </div>
    )
}