import { User } from "./interfaces/user";

export function user(data: User) {
    let user: Record<string, any> = {};
    user["value"] = data;

    function getValue() {
        return data
    }

    return {
        getValue
    }
}