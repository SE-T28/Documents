const mongoose= require('mongoose');

const Utente= mongoose.model("utente", new mongoose.Schema({
    "nome": {type: String, required: true},
    "cognome": {type: String, required: true},
    "email": {type: String, required: true},
    "numero_telefono": {type: String, required: true},
    "data_nascita": {type: String, required: true},
    "id": {type: Date, required: true},
    "password": {type: String, required: true},
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ]
}));

module.exports= Utente;