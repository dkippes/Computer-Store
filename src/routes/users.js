var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.listUsers);
router.get('/register', usersController.registerView);
router.post('/register', usersController.createUser);


module.exports = router;
