const { authJwt } = require("../middlewares");
const controller = require("../controllers/utente");

const express=require('express')
const multer=require('multer');
const upload = multer();

//const router = express.Router();

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/all", controller.allAccess);

  app.get("/tecnicointerno",
          [authJwt.verificaToken, authJwt.isTecnico_Interno], 
          controller.tecnicointernoBoard
  );
  
  app.get(
    "/amministratore",
    [authJwt.verificaToken, authJwt.isAmministratore],
    controller.amministratoreBoard
  );

  app.get('/crew', upload.none(), controller.getList); //router.get(...)
  //router.post('/crew', upload.none(), utenteController.addUsr);
  app.delete('/crew/:nome/:cognome', upload.none(), controller.deleteUsr);
};

//module.exports= router;