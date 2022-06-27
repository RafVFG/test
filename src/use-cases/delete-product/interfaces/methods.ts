export interface DeleteProductMethods {
    run: (id: number) => Promise<number | null> 
}