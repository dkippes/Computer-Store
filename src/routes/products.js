var express = require('express');
var router = express.Router();

//Controller
let productsController = require("../controllers/productsController");

/* GET home page. */
router.get('/', productsController.productsList);

module.exports = router;
