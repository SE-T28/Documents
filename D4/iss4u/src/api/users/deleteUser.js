import init from "../init";

//   app.delete('/crew/:nome/:cognome', upload.none(), [authJwt.verificaToken, authJwt.isAmministratore], controller.deleteUsr);
export const deleteUser = (nome, cognome) => {
    return init.delete(`/crew/${nome}/${cognome}`);
}