import { Product } from "./interfaces/product";

export function Product (data: Product) {
    let product: Record<string, any> = {};
    product["value"] = data;

    function getValue() {
        return data
    }

    return {
        getValue
    }
}