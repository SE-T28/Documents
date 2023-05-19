import init from "../init";

export const register = (user) => {
    return init.post("/register", user);
}