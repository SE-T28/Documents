import init from "../init";

// router.post('/task', upload.none(),[authJwt.verificaToken, authJwt.isTecnico_Interno], taskController.addTask);
export const addTask = (task) => {
    return init.post("/task", task);
}