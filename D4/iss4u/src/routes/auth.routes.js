const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
// nome , cognome 
function log(){
  module.exports = login(app)
}
function login(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/crew/addusr",
    [
      verifySignUp.checkDuplicatiNomeCognome,
      verifySignUp.checkRoleEsiste
    ],
    controller.signup
  );
    alert("diocan");
  app.post("/login", controller.signin);
};
