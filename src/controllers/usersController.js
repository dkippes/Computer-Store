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
		} else {
			req.session.userLogged = user.username;
			res.redirect('/');
		}
		
	},


	editUserView: async (req, res, next) => {
		const idUrl = req.params.id;

		// El id en mongo usa 24 caracteres HEX - Si tira error es por eso

		const user = await User.findOne({
			_id: idUrl
		});

		if(user == null) {
			return res.render('error');
		}

		res.render('users/editUser', {user: user});
	},

	editUser: async (req, res, next) => {
		const idUrl = req.params.id;

		// If empty
		if(req.body.username == "" || req.body.password == "") {

			const user = await User.findOne({
				_id: idUrl
			});

			return res.render('users/editUser', {user: user, formErrors: 'This can not be empty'});
		}


		await User.findOneAndUpdate({
			_id: idUrl
		}, {
			username: req.body.username,
			password: req.body.password
		});

		res.redirect('/users');
	},


	deleteUser: async (req, res, next) => {
		const idUrl = req.params.id;

		// El id en mongo usa 24 caracteres HEX - Si tira error es por eso
		await User.findOneAndDelete({
			_id: idUrl
		})

		res.redirect('/users');
	},
	
}


module.exports = usersController;


