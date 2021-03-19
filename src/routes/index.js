var express = require('express');
var router = express.Router();

//Controller
let mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.home);

module.exports = router;
