import init from "../init";

// router.post('/task', upload.none(),[authJwt.verificaToken, authJwt.isTecnico_Interno], taskController.addTask);
export const addTask = (data) => {
    return init.post("/task", data);
}