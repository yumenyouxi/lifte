app.controller('rootController',['$scope','$location','$ionicHistory','$ionicSlideBoxDelegate',function ($scope,$location,$ionicHistory,$ionicSlideBoxDelegate) {
	$scope.isCross=false;
	$scope.jump=function(url){
		$location.path(url);
	}
	$scope.isShow=function(){
		$scope.isCross=$scope.isCross?false:true;
	}
	$scope.goback = function () {
			$ionicHistory.goBack();
		}
}])