import init from "../init";

export const getNews = () => {
    return init.get("/news");
}