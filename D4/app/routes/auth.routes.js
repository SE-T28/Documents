const { verifySignUp } = require("../middlewares"); //object destructuring
const controller = require("../controllers/auth.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/crew/addusr",[verifySignUp.checkDuplicatiNomeCognome, verifySignUp.checkRoleEsiste], controller.signup);

  app.post("/login", controller.signin);
};