import { User } from "./interfaces/user";

export function userEntity(user: User) {
    if(user.email) 
        if(!emailValidate(user.email)) return null; 

    function emailValidate(email: string): boolean {
        const validate = /^([a-z0-9.]+)@([a-z0-9]+)\.([a-z]+)(\.[a-z]+)?$/gi;
        const validOrError = validate.exec(email);

        if(!validOrError) return false;
        if(validOrError.length > 255) return false;

        return true;
    }

    function getValue() {
        return user
    }

    return {
        getValue
    }
}