const mongoose= require('mongoose');

const Agenzia= mongoose.model("agenzia", new mongoose.Schema({
    "nome" : {type: String, reqired: true},
    "logo" : {type: String, requed: true}
}));

module.exports= Agenzia;