import {ProductType} from "../../../../shared/validation/type";

export type ProductsApiType = {
    limit: number;
    products: ProductType[];
    skip: number;
    total: number;
}