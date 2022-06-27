export interface HttpRequest {
    query: {
        idUserCreate?: number,
        idCompany?: number
    }
}

export interface HttpResponse {
    statusCode: number,
    body?: any
}