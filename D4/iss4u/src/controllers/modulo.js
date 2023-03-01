const Modulo= require('../models/modulo');

const getList= (req, res) => {
    Modulo.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

const getModulo= (req, res) => {
    let name= req.params.nome;
    Modulo.findOne({nome:name}, (err, data) => {
        if (err || !data){
            return res.json({message: "Module " + name + " doesn't exist."});
        }else{
            return res.json(data);
        }
    })    
};

module.exports = {getList, getModulo};