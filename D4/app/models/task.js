const mongoose=require('mongoose');

const Task = mongoose.model("task", new mongoose.Schema({
    "data_inizio" : {type: Date, required: true},
    "data_fine" : {type: Date, required: true},
    "nome" : {type: String, required: true},
    "modulo" : {type: String, required: true},
    "descrizione" : String,
    "completata" : {type: Boolean, required: true, default: false},
    "id" : {type: String, required: true}
}));

module.exports = Task;