export const productEndpoint = {
    ALL_PRODUCTS: '/products',
    PRODUCT_DETAIL: (id:string) => `/products/${id}`,
    CATEGORY: (id:string) => `/products/category/${id}`,
}