var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.listUsers);
router.get('/register', usersController.registerView);
router.post('/register', usersController.createUser);
router.get('/login', usersController.loginView);
router.post('/login', usersController.loginUser);
router.get('/editUser/:id', usersController.editUserView);
router.post('/editUser/:id', usersController.editUser);
router.get('/deleteUser/:id', usersController.deleteUser);

module.exports = router;
