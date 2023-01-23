const mongoose = require("mongoose");
const express = require("express");
require('dotenv').config();


//-------------connection to DB------------------------------------------
mongoose.set('strictQuery', false);
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