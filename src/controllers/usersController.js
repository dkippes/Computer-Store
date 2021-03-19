const User = require('../models/User');

let usersController = {
	listUsers: async (req, res, next) => {
		const users = await User.find();

		res.render('users/listUsers', {users: users});
	},


    registerView: (req, res, next) => {
		res.render('users/register');
	},


	createUser: async (req, res, next) => {

		if(req.body.username == "" || req.body.password == "") {
			return res.render('users/register', {formErrors: 'This can not be empty'});
		}

		const newUser = new User({
			username: req.body.username,
			password: req.body.password
		})
		await newUser.save();

		res.redirect('/users');
	},


	loginView: (req, res, next) => {
		res.render('users/login');
	},

	loginUser: async (req, res, next) => {

		const user = await User.findOne({
			username: req.body.username,
			password: req.body.password
		});

		if(user == null) {
			res.render('users/login', {userNotFound: 'Credential error or User Not Found'})
		}
		
		res.render('index', {userLogged: user});
	},
	
}


module.exports = usersController;


