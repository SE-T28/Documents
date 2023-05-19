import init from "../init";

//router.delete('/task/:nome', upload.none(), [authJwt.verificaToken, authJwt.isTecnico_Interno], taskController.deleteTask);
export const deleteTask = (nome) => {
    return init.delete(`/task/${nome}`);
}