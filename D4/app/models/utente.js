const mongoose= require('mongoose');

const Utente= mongoose.model("utente", new mongoose.Schema({
    "nome": {type: String, required: true},
    "cognome": {type: String, required: true},
    "email": {type: String, required: true},
    "numero_telefono": {type: String, required: true},
    "data_nascita": {type: String, required: true},
    "password": {type: String, required: true},
    "role":{type: mongoose.Schema.Types.ObjectId, ref: "Role"}
}));

module.exports= Utente;