console.log("controller");

const Task = require('../models/task');

const addTask= (req, res) => {
    //controlla se c'è una task con lo stesso nome
    Task.findOne({nome: req.body.nome}, (err, data)=>{
        //se non è già presente nel db
        if(!data){
            //creo una nuova task
            const newTask= new Task({
                data_inizio: req.body.data_inizio,
                data_fine: req.body.data_fine,
                nome: req.body.nome,
                modulo: req.body.modulo,
                descrizione: req.body.descrizione,
                completata: req.body.completata,
                id: req.body.id
            })

            //salvo l'oggetto nel db
            newTask.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        }else{
            if(err) return res.json("Qualcosa è andato storto, riprova. ${err}");
            return res.json({message: "Esiste già una task con questo nome"})
        }
    })
};

module.exports = {newTask};