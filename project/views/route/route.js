app.config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider','$locationProvider',function ($stateProvider,$urlRouterProvider,$ionicConfigProvider,$locationProvider) {

 	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.position('standard');
	$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
	$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
	$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
	$ionicConfigProvider.platform.ios.views.transition('ios');
	$ionicConfigProvider.platform.android.views.transition('android');    
	$ionicConfigProvider.scrolling.jsScrolling(false);
	$urlRouterProvider.otherwise('/lead1');	
	$stateProvider
		.state('lead1',{
			url:'/lead1',
			templateUrl:'templates/lead/lead1.html'
		})
		.state('lead2',{
			url:'/lead2',
			templateUrl:'templates/lead/lead2.html'
		})
		.state('lead3',{
			url:'/lead3',
			templateUrl:'templates/lead/lead3.html'
		})
		.state('register',{
			url:'/register',
			templateUrl:'templates/register/register.html',
			controller:'registerController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('register');
				}]
			}
		})
		.state('login',{
			url:'/login',
			templateUrl:'templates/login/login.html',
			controller:'loginController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('login');
				}]
			}
		})
		.state('forgetuser',{
			url:'/forgetuser',
			templateUrl:'templates/forgetpwd/forgetuser.html',
			controller:'forgetuserController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('forgetuser');
				}]
			}
		})
		.state('forgetpwd',{
			url:'/forgetpwd',
			templateUrl:'templates/forgetpwd/forgetpwd.html',
			controller:'forgetpwdController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('forgetpwd');
				}]
			}
		})
		.state('navfooter',{
			url:'',
			abstract: true,
			templateUrl:'templates/navfooter/navfooter.html',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('navfooter');
				}]
			}
		})
		.state('navfooter.home',{
			url:'/home',
			templateUrl: "templates/home/home.html",
			controller:'homeController',
      resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('home');
				}]
			}
		})
		.state('navfooter.community',{
			url:'/community',
			templateUrl: "templates/community/community.html",
      resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('community');
				}]
			}
		})
		.state('navfooter.shopping',{
			url:'/shopping',
			templateUrl: "templates/shopping/shopping.html",
			controller:'shoppingController',
      resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('shopping');
				}]
			}
		})
		.state('navfooter.my',{
			url:'/my',
			templateUrl: "templates/my/my.html",
      resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('my');
				}]
			}
		})

		.state('navfooter.myorder',{
			url:'',
			abstract: true,
			templateUrl:'templates/myorder/myorder.html',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('myorder');
				}]
			}
		})
		//全部订单
		.state('navfooter.myorder.allOrder',{
			url:'/allOrder',
			templateUrl: "templates/allOrder/allOrder.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('allOrder');
				}]
			}
		})
		//代支付
		.state('navfooter.myorder.payment',{
			url:'/payment',
			templateUrl: "templates/payment/payment.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('payment');
				}]
			}
		})
		//待收货
		.state('navfooter.myorder.take',{
			url:'/take',
			templateUrl: "templates/take/take.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('take');
				}]
			}
		})
		//待发货
		.state('navfooter.myorder.deliver',{
			url:'/deliver',
			templateUrl: "templates/deliver/deliver.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('deliver');
				}]
			}
		})
		//待评级
		.state('navfooter.myorder.evaluate',{
			url:'/evaluate',
			templateUrl: "templates/evaluate/evaluate.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('evaluate');
				}]
			}
		})
		.state('navfooter.mycollect',{
			url:'/mycollect',
			templateUrl: "templates/collect/mycollect.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('mycollect');
				}]
			}
		})
		.state('navfooter.mywallet',{
			url:'/mywallet',
			templateUrl: "templates/wallet/mywallet.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('mywallet');
				}]
			}
		})
		.state('address',{
			url:'/address',
			templateUrl: "templates/address/address.html",
            controller:'adderssController',
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('address');
				}]
			}
		})
		.state('mydata',{
			url:'/mydata',
			templateUrl: "templates/mydata/mydata.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('mydata');
				}]
			}
		})
		.state('navfooter.myrecharge',{
			url:'/myrecharge',
			templateUrl: "templates/myrecharge/myrecharge.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('myrecharge');
				}]
			}
		})
		.state('confirmOrder',{
			url:'/confirmOrder',
			templateUrl: "templates/confirmOrder/confirmOrder.html",
            controller:'confirmOrderController',
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('confirmOrder');
				}]
			}
		})
		.state('search',{
			url:'/search',
			templateUrl: "templates/search/search.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('search');
				}]
			}
		})
		.state('navfooter.message',{
			url:'/message',
			templateUrl: "templates/message/message.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('message');
				}]
			}
		})
		.state('pronav',{
			url:'',
			abstract: true,
			templateUrl: "templates/product/pronav.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('pronav');
				}]
			}
		})
		.state('pronav.product',{
			url:'/product',
			templateUrl: "templates/product/product.html",
			controller:'productController',
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('product');
				}]
			}
		})
		.state('pronav.discuss',{
			url:'/discuss',
			templateUrl: "templates/product/discuss.html",
			controller:'discussController',
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('discuss');
				}]
			}
		})
		//各种
		.state('navfooter.classify',{
			url:'',
			abstract:true,
			templateUrl:'templates/classify/classify.html',
			controller:'classifyController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('classify');
				}]
			}
		})
		.state('navfooter.classify.dengshi',{
			url:'/dengshi',
			templateUrl: "templates/classify/dengshi.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('dengshi');
				}]
			}
		})
		.state('navfooter.classify.shizhong',{
			url:'/shizhong',
			templateUrl: "templates/classify/shizhong.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('shizhong');
				}]
			}
		})
		.state('navfooter.classify.canyin',{
			url:'/canyin',
			templateUrl: "templates/classify/canyin.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('canyin');
				}]
			}
		})
		.state('navfooter.classify.riyong',{
			url:'/riyong',
			templateUrl: "templates/classify/riyong.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('riyong');
				}]
			}
		})
		.state('navfooter.classify.yizhi',{
			url:'/yizhi',
			templateUrl: "templates/classify/yizhi.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('yizhi');
				}]
			}
		})
		.state('navfooter.classify.zhuangshi',{
			url:'/zhuangshi',
			templateUrl: "templates/classify/zhuangshi.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('zhuangshi');
				}]
			}
		})
		.state('navfooter.classify.shouna',{
			url:'/shouna',
			templateUrl: "templates/classify/shouna.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('shouna');
				}]
			}
		})
		.state('navfooter.classify.fenlei',{
			url:'/fenlei',
			templateUrl: "templates/classify/fenlei.html",
            resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('fenlei');
				}]
			}
		})

		$locationProvider.html5Mode(true);

}])