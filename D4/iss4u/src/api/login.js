import init from "./init";
import authRoutes from "./../routes/auth.routes";

export const login = (user) => {
    return init.post("./src/routes/auth.routes", user);
};