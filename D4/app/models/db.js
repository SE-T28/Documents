const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("../models/utente");
db.role = require("../models/role");

db.ROLES = ["utente_anonimo", "tecnico_interno", "amministratore"];

module.exports = db;