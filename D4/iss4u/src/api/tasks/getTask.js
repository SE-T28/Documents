import init from "../init";

export const getTasks = () => {
    return init.get("/task");
}