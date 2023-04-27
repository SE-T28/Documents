const mongoose= require('mongoose');

const News= mongoose.model("news", new mongoose.Schema({
    "titolo" : {type: String, required: true},
    "descrizione": {type: String, required: true}
}));

module.exports= News;