import init from "../init";

export const deleteUser = (data) =>{
    /*nome = "/"+data.nome;
    cognome = "/"+data.cognome;
    text = "/crew"+nome+cognome;
    console.log(text);
    return init.delete(text);*/
    return init.delete("/crew/"+data.nome+"/"+data.cognome);
}