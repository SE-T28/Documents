import init from "../init";

export const editTask = (task) => {
    return init.patch("/task/"+task.nomeoriginale, task);
}