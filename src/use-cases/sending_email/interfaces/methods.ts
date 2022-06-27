export interface EmailMethods {
    run: (email: string) => Promise<void>
}