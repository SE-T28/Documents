const Agenzia= require('../models/agenzia');

const getList= (req, res) => {
    Agenzia.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

module.exports= {getList};