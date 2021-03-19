const User = require('../models/User');

let usersController = {
    registerView: (req, res, next) => {
		res.render('users/register');
	},


	createUser: async (req, res, next) => {
		console.log(req.body);

		const newUser = new User({
			username: req.body.username,
			password: req.body.password
		})
		await newUser.save();

		res.render('users/listUsers');
	},


	
	listUsers: async (req, res, next) => {
		const users = await User.find();

		res.render('users/listUsers', {users: users});
	},
}


module.exports = usersController;


