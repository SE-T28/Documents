const Utente= require('../models/utente');

const getList= (req, res) => {
    Utente.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

const addUsr= (req, res) => {
    Utente.findOne({id: req.body.id}, (err, data) => {
        if(!data){
            const newUtente= new Utente({
                nome: req.body.nome,
                cognome: req.body.cognome,
                email: req.body.email,
                numero_telefono: req.body.numero_telefono,
                data_nascita: req.body.data_nascita,
                id: req.body.id,
                password: req.body.password,
            });
            newUtente.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            });
        }else{
            if(err) return res.json("Qualcosa è andato storto, riprova. ${err}");
            return res.json({message: "Esiste già un utente con questo id"})
        }
    })
};

const deleteUsr= (req, res) => {
    let cod_id= req.params.id;
    Utente.findOneAndDelete({id: cod_id}, (err, data) => {
        if(err || !data) {
            return res.json({message: "User " + cod_id + " doesn't exist."});
        }else{
            return res.json(data);
        }
    });
};

module.exports= {getList, addUsr, deleteUsr};