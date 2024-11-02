import {ProductType} from "../../../../shared/validation/type";

export const ViewDetailProduct = ({product}:{product:ProductType}) => {
    return (
        <div>
            <div className='p-5'>
                <div className='grid grid-cols-1 gap-5'>
                    <div className='font-semibold text-2xl'>Thông tin chi tiết</div>
                    <div className='grid grid-cols-1 gap-3'>
                        <h2 className='text-lg font-semibold'>{product.title}</h2>
                        <div className='flex gap-10'>
                            <p><span className='font-semibold'>Thương hiệu: </span>{product.brand}</p>
                            <p><span className='font-semibold'>SKU: </span>{product.sku}</p>
                        </div>
                        <div className='grid grid-cols-1 gap-2'>
                            <p><span className='font-semibold'>Mô tả: </span>{product.description}</p>
                            <p><span className='font-semibold'>
                                Kích thước:
                                </span> {product.dimensions.depth}mm x {product.dimensions.width}mm
                                x {product.dimensions.height}mm</p>
                            <p><span className='font-semibold'>Tình trạng tồn kho: </span>{product.stock}</p>
                            <p><span className='font-semibold'>Bảo hành: </span>{product.warrantyInformation}</p>
                            <p><span className='font-semibold'>Thông tin vận chuyển: </span>{product.shippingInformation}</p>
                            <p><span className='font-semibold'>Chính sách hoàn trả: </span>{product.returnPolicy}</p>
                            <p><span
                                className='font-semibold'>Số lượng đặt hàng tối thiểu: </span>{product.minimumOrderQuantity}
                            </p>
                            <p><span
                                className='font-semibold'>Tags: {
                                product.tags.map((item, index)=>(
                                    <span key={index}> #{item}</span>
                                ))
                            }</span></p>
                        </div>
                        <div>
                            <span className='font-semibold text-red-600 text-lg'>${product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}