app.controller('registerController', ['$scope', '$timeout', '$state', '$ionicHistory', 'API', 'loadTips', 'messageTips', function ($scope, $timeout, $state, $ionicHistory, API, loadTips, messageTips) {
	$scope.registerData={
		userPhone:'',
		newPwd:'',
		rePwd:''
	}
	$scope.register=function(){
		if (!validRegisterData()) {
			return false;
		}
		loadTips.showLoadTips();

		API.fetchPost('/register', $scope.registerData)
			.then(function (data) {
				loadTips.hideLoadTips();
				loadTips.showMessage(data.data.message || '注册失败', 1000);
				if (data.data.status === 100) {
					$timeout(function () {
						$state.go('login');
					}, 1000);
				}
				
			})
			.catch(function (err) {
				console.log('出错啦');
			})

	}
	function validRegisterData(){
		var phoneReg = /^1[358]\d{9}$/;
		if(!phoneReg.test($scope.registerData.userPhone)){
			messageTips.showMessageTips('请输入正确的电话号码');
				return false;
		} else if ($scope.registerData.newPwd.trim() === '') {
			messageTips.showMessageTips('密码不能为空');
			return false;
		} else if ($scope.registerData.newPwd.trim().length < 6 || $scope.registerData.newPwd.trim().length > 16) {
			messageTips.showMessageTips('密码6-16位');
			return false;
		} else if (/\W/.test($scope.registerData.newPwd)) {
			messageTips.showMessageTips('密码字母数字下划线组合');
			return false;
		} else if ($scope.registerData.newPwd !== $scope.registerData.rePwd) {
			messageTips.showMessageTips('两次密码不一致');
			return false;
		}

		return true;
	}
}])