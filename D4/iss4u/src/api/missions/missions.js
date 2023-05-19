import init from "../init";

export const getMissions = () => {
    return init.get("/missioni");
}