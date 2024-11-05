import {ProductType} from "../../../../shared/models/productType.ts";

export type ProductsApiType = {
    limit: number;
    products: ProductType[];
    skip: number;
    total: number;
}