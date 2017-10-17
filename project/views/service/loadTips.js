app.factory('loadTips',['$ionicLoading','$timeout',function($ionicLoading,$timeout){
	var loadtips={};
	loadtips.showLoadTips=function(){
		$ionicLoading.show({
			template:'<ion-spinner icon="ios" class="spinner-light"></ion-spinner>',
			noBackdrop: true
		});
	}
	loadtips.hideLoadTips = function () {
			$ionicLoading.hide();
		}


	loadtips.showMessage = function (message, wait) {
		$ionicLoading.show({
			template: '<div>' + message + '</div>',
			noBackdrop: true
		});
		$timeout(function () {
			$ionicLoading.hide();
		}, wait);
	}

	loadtips.showMessageForSendPhone = function (message) {
		$ionicLoading.show({
			template: '<div>' + message + '</div>',
			noBackdrop: true
		});
	}

	loadtips.hideMessageForSendPhone = function () {
		$ionicLoading.hide();
	}
	return loadtips;
}])