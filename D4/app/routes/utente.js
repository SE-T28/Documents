const express=require('express')
const multer=require('multer');
const upload = multer();

const router = express.Router();

const utenteController= require('../controllers/utente');

router.get('/crew', upload.none(), utenteController.getList);
router.post('/crew', upload.none(), utenteController.addUsr);
router.delete('/crew/:nome/:cognome', upload.none(), utenteController.deleteUsr);

module.exports= router;