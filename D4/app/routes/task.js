const express=require('express')
const multer=require('multer');
const upload = multer();

const router = express.Router();

const taskController = require('../controllers/task');

router.post('/task', upload.none(), taskController.addTask);
router.get('/task', upload.none(), taskController.getList);
router.get('/task/:nome', upload.none(), taskController.getTask)
router.delete('/task/:nome', upload.none(), taskController.deleteTask);

module.exports = router;