import init from "../init";

export const getCrew = () => {
    return init.get("/crew");
}
