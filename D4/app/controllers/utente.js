const Utente= require('../models/utente');

const allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
const tecnicointernoBoard = (req, res) => {
    res.status(200).send("Tecnico interno Content.");
  };
  
const amministratoreBoard = (req, res) => {
    res.status(200).send("Amministratore Content.");
  };

const getList= (req, res) => {
    Utente.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};
/*
const addUsr= (req, res) => {
    Utente.findOne({nome: req.body.nome, cognome: req.body.cognome}, (err, data) => {
        if(!data){
            const newUtente= new Utente({
                nome: req.body.nome,
                cognome: req.body.cognome,
                email: req.body.email,
                numero_telefono: req.body.numero_telefono,
                data_nascita: req.body.data_nascita,
                password: req.body.password,
                role: req.body.role
            });
            newUtente.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            });
        }else{
            if(err) return res.json("Qualcosa è andato storto, riprova. ${err}");
            return res.json({message: "Utente già esistente"})
        }
    })
};
*/
const deleteUsr= (req, res) => {
    let nome= req.params.nome;
    let cognome= req.params.cognome
    Utente.findOneAndDelete({nome: nome, cognome: cognome}, (err, data) => {
        if(err || !data) {
            return res.json({message: "User '" + nome + " " + cognome + "' doesn't exist."});
        }else{
            return res.json(data);
        }
    });
};

module.exports= {allAccess, tecnicointernoBoard, amministratoreBoard, getList, deleteUsr};