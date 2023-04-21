const { verifySignUp } = require("../middlewares"); //object destructuring
const controller = require("../controllers/auth.controller");
const multer= require('multer');
const upload= multer();

/*const express= require('express');
const router= express.Router();

router.use(function(req, res, next){  //forse funziona
  res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post('/crew/addusr',[verifySignUp.checkDuplicatiNomeCognome, verifySignUp.checkRoleEsiste], controller.signup);
router.post("/login", controller.signin);*/

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-control, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/crew/addusr", upload.none(), [verifySignUp.checkDuplicatiNomeCognome, verifySignUp.checkRoleEsiste], controller.signup);

  app.post("/login", upload.none(), controller.signin);
};

