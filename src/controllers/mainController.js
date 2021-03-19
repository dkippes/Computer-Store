const mainController = {

    home: (req, res, next) => {
		res.render('index', {userLogged: req.session.userLogged});
	},





	logOut : (req, res, next) => {

        if (req.session.userLogged) {
          req.session.destroy();
          res.redirect('/');
        }
		
    }
} 


module.exports = mainController;