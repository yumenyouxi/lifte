(function () {
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
		 			name: 'register',
		 			files: [
		 				'templates/register/register.css',
		 				'templates/register/registerController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'forgetuser',
		 			files: [
		 				'templates/forgetpwd/forgetuser.css',
		 				'templates/forgetpwd/forgetuserController.js'              
		 		
		 			]
		 		},
		 		{
		 			name: 'forgetpwd',
		 			files: [
		 				'templates/forgetpwd/forgetpwd.css',
		 				'templates/forgetpwd/forgetpwdController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'login',
		 			files: [
		 				'templates/login/login.css',
		 				'templates/login/loginController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'navfooter',
		 			files: [
		 				'templates/navfooter/navfooter.css',
		 				'templates/navfooter/navfooterController.js'
		 			]
		 		},
		 		{
		 			name: 'home',
		 			files: [
		 				'templates/home/home.css',
		 				'templates/home/homeController.js'
		 			]
		 		},
		 		{
		 			name: 'community',
		 			files: [
		 				'templates/community/community.css',
		 				'templates/community/communityController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'shopping',
		 			files: [
		 				'templates/shopping/shopping.css',
		 				'templates/shopping/shoppingController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'my',
		 			files: [
		 				'templates/my/my.css',
		 				'templates/my/myController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'myorder',
		 			files: [
		 				'templates/myorder/myorder.css',
		 				'templates/myorder/myorderController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'allOrder',
		 			files: [
		 				'templates/allOrder/allOrder.css',
		 				'templates/allOrder/allOrderController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'payment',
		 			files: [
		 				'templates/payment/payment.css',
		 				'templates/payment/paymentController.js'
		 			]
		 		},
		 		{
		 			name: 'take',
		 			files: [
		 				'templates/take/take.css',
		 				'templates/take/takeController.js'
		 			]
		 		},
		 		{
		 			name: 'deliver',
		 			files: [
		 				'templates/deliver/deliver.css',
		 				'templates/deliver/deliverController.js'
		 			]
		 		},
		 		{
		 			name: 'evaluate',
		 			files: [
		 				'templates/evaluate/evaluate.css',
		 				'templates/evaluate/evaluateController.js'
		 			]
		 		},
		 		{
		 			name: 'mycollect',
		 			files: [
		 				'templates/collect/collect.css',
		 				'templates/collect/collectController.js'
		 			]
		 		},
		 		{
		 			name: 'mywallet',
		 			files: [
		 				'templates/wallet/wallet.css',
		 				'templates/wallet/walletController.js'
		 			]
		 		},
		 		{
		 			name: 'address',
		 			files: [
		 				'templates/address/address.css',
		 				'templates/address/upaddress.css',
		 				'templates/address/addressController.js'
		 			]
		 		},
		 		{
		 			name: 'mydata',
		 			files: [
		 				'templates/mydata/mydata.css',
		 				'templates/mydata/mydataController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'myrecharge',
		 			files: [
		 				'templates/myrecharge/myrecharge.css',
		 				'templates/myrecharge/myrechargeController.js'
		 		
		 			]
		 		},
		 		{
		 			name: 'confirmOrder',
		 			files: [
		 				'templates/confirmOrder/confirmOrder.css',
		 				'templates/confirmOrder/confirmAddress.css',
		 				'templates/confirmOrder/confirmOrderController.js'
		 			]
		 		},
		 		{
		 			name: 'search',
		 			files: [
		 				'templates/search/search.css',
		 				'templates/search/searchController.js'
		 			]
		 		},
		 		{
		 			name: 'message',
		 			files: [
		 				'templates/message/message.css',
		 				'templates/message/messageController.js'
		 			]
		 		},
		 		{
		 			name: 'pronav',
		 			files: [
		 				'templates/product/pronav.css',
		 			]
		 		},
		 		{
		 			name: 'product',
		 			files: [
		 				'templates/product/product.css',
		 				'templates/product/productController.js',
		 				'templates/product/productDirective.js'
		 			]
		 		},
		 		{
		 			name: 'discuss',
		 			files: [
		 				'templates/product/discuss.css',
		 				'templates/product/discussController.js',
		 			]
		 		},
		 		{
		 			name: 'classify',
		 			files: [
		 				'templates/classify/classify.css',
		 				'templates/classify/classifyController.js',
		 				'templates/classify/classifyDirective.js'
		 			]
		 		},
		 		{
		 			name: 'dengshi',
		 			files: [
		 				'templates/classify/dengshi.css',
		 				'templates/classify/dengshiController.js'
		 			]
		 		},
		 		{
		 			name: 'shizhong',
		 			files: [
		 				'templates/classify/shizhongController.js'
		 			]
		 		},
		 		{
		 			name: 'canyin',
		 			files: [
		 				'templates/classify/canyinController.js'
		 			]
		 		},
		 		{
		 			name: 'riyong',
		 			files: [
		 				'templates/classify/riyongController.js'
		 			]
		 		},
		 		{
		 			name: 'shouna',
		 			files: [
		 				'templates/classify/shounaController.js'
		 			]
		 		},
		 		{
		 			name: 'yizhi',
		 			files: [
		 				'templates/classify/yizhiController.js'
		 			]
		 		},
		 		{
		 			name: 'zhuangshi',
		 			files: [
		 				'templates/classify/zhuangshiController.js'
		 			]
		 		},
		 		{
		 			name: 'fenlei',
		 			files: [
		 				'templates/classify/fenlei.css',
		 				'templates/classify/fenleiController.js'
		 			]
		 		}
		 	]
		 		
 		});
	}]);
	
})();