const express = require('express');

const router = express.Router();

const routesController = require(__basename + '/routesController/routesController.js');

module.exports = function (app) {

	
	app.get('/', routesController.rootController);
	app.get('/lead1', routesController.rootController);
	app.get('/lead2', routesController.rootController);
	app.get('/lead3', routesController.rootController);
	app.post('/register',routesController.registerController);
	app.post('/login', routesController.loginController);
	app.get('/forgetuser', routesController.forgetuserController);
	app.post('/forgetpwd', routesController.forgetpwdController);	
	app.get('/shopping',routesController.shoppingController);
	app.get('/home', routesController.rootController);
	// app.get('/community',routesController.rootController);
	// app.get('/my',routesController.rootController);
	// app.get('/allOrder',routesController.rootController);
	// app.get('/payment',routesController.rootController);
	// app.get('/take',routesController.rootController);
	// app.get('/deliver',routesController.rootController);
	// app.get('/evaluate',routesController.rootController);
	// app.get('/address',routesController.rootController);
	// app.get('/mycollect',routesController.rootController);
	// app.get('/dengshi',routesController.rootController);
	// app.get('/canyin',routesController.rootController);
	// app.get('/fenlei',routesController.rootController);
	// app.get('/riyong',routesController.rootController);
	// app.get('/shizhong',routesController.rootController);
	// app.get('/shouna',routesController.rootController);
	// app.get('/yizhi',routesController.rootController);
	// app.get('/zhuangshi',routesController.rootController);
	// app.get('/mydata',routesController.rootController);
	// app.get('/myrecharge',routesController.rootController);
	// app.get('/product',routesController.rootController);
	// app.get('/discuss',routesController.rootController);
	// app.get('/search',routesController.rootController);
}