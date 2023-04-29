import init from "./init";
import authRoutes from "./../../../app/routes/auth.routes";

export const login = (user) => {
    return init.post("/login", user);
};