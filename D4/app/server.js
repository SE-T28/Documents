const mongoose = require("mongoose");
const express = require("express");
require('dotenv').config();

const db= require('./models/db');
const Role= db.role;
//-------------connection to DB------------------------------------------
db.mongoose.set('strictQuery', false);
try {
    mongoose.connect(
        process.env.MONGOATLASURI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
//------------------------------------------------------------------------

function initial(){
    Role.estimatedDocumentCount((err, count) => {
        if(!err && count==0){
            new Role({
                name: "utente_anonimo"
            }).save(err => {
                if(err){
                    console.log("error", err);
                }else{
                    console.log("added 'utente_anonimo' to roles collection")
                }
            });
            new Role({
                name: "tecnico_interno"
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added 'tecnico_interno' to roles collection");
              });
        
              new Role({
                name: "amministratore"
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added 'amministratore' to roles collection");
              });
        }
    })
}

const app=express();
app.use(express.json());
app.get("/", function (req, res) {
    res.send(req.headers, req.originalUrl, req.method, req.body);
});



app.listen(process.env.PORT, () =>
    console.log('app listening on port ' + process.env.PORT + '!')
);


const routesTask= require('./routes/task');
app.use('/', routesTask);

const routesModulo= require('./routes/modulo');
app.use('/', routesModulo);

const routesNews= require('./routes/news');
app.use('/', routesNews);

const routesAgenzia= require('./routes/agenzia');
app.use('/', routesAgenzia);

const routesUtente= require('./routes/utente');
app.use('/', routesUtente);