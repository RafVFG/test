export interface Product {
    id: number,
    name: string,
    value: number,
    idUserCreate: number,
    idCompany: number,
    del: number,
}

export interface Filter {
    idUserCreate?: number,
    idCompany?: number,
}