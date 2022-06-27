import { Product } from "./interfaces/product";

export function ProductEntity(product: Product) {
    if(product.name)
        if(!nameValidate(product.name)) return null;

    function nameValidate(name: string): boolean {
        if(nameValidate.length > 100) return false;

        return true;
    }

    function getValue() {
        return product
    }

    return {
        getValue
    }

}