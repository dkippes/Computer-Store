var express = require('express');
var router = express.Router();

//Controller
let mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.home);
router.get('/logout', mainController.logOut);

module.exports = router;
