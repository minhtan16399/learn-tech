import {NavLink} from "react-router-dom";
import {ViewDetailProduct} from "./widgets/view-detail-product";
import {LoadingPage} from "../../../core/components/loading";
import {NotFoundPage} from "../../../core/components/404";
import {MultiImagePreview} from "../../../core/components/multi-image-preview";
import {useGetProductDetail} from "../../hooks/use-get-product-detail";

export default function DetailPage() {
    const {data, isLoading, error} = useGetProductDetail();

    return (
        <div>
            <LoadingPage loading={isLoading}/>
            <NotFoundPage error={error}/>
            <div className='p-5 container mx-auto'>
                {
                    data ? <div className='gap-5 grid grid-cols-2'>
                        <div className='border rounded-xl p-8'>
                            <MultiImagePreview listImage={data.images}/>
                        </div>
                        <div className='pt-10'>
                            <ViewDetailProduct product={data}/>
                        </div>
                        <div className='w-full text-end col-span-2'>
                            <NavLink to={'/'} className='rounded-md text-white hover:bg-red-400 p-3 bg-green-400'>Back
                                Home</NavLink>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}