const productsController = {

    productsList: (req, res, next) => {
		res.render('products/productsList');
	}

} 


module.exports = productsController;