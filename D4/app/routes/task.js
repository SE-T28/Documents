const express=require('express')
const multer=require('multer');
const upload = multer();

// 1.  Create an express router object to set up our routes
const router = express.Router();
// 2. Import our task controller from our controllers/Task.js file
const taskController = require('../controllers/task');
// 3.Create our first route with the controller function as the callback to handle the request
router.post('/task', upload.none(), taskController.newTask);
// 4.
module.exports = router;