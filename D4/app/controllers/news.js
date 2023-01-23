const News = require('../models/news');

const getList= (req, res) => {
    News.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

module.exports= {getList};