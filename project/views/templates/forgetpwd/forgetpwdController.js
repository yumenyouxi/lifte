app.controller('forgetpwdController', ['$scope', '$state', '$timeout', 'messageTips', 'loadTips', 'API', function ($scope, $state, $timeout, messageTips, loadTips, API) {

		$scope.forgetpwd = {
			newPwd: '',
			rePwd: ''
		};

		$scope.modifyPwd = function () {
			if (!validPwd()) {
				return;
			}

			loadTips.showLoadTips();
			API.fetchPost('/forgetpwd', {pwd: $scope.forgetpwd.newPwd, phone:localStorage.forgetPhone})
				.then(function (data) {
					console.log("forpwddata==>",data);
					loadTips.hideLoadTips();
					if (data.data.status === 1) {
						loadTips.showMessage(data.data.message, 1500);
						$timeout(function () {
							$state.go('login');
						}, 1500)
					}
					
				})
				.catch(function (err) {
					console.log('出错啦');
				})


		}

		function validPwd() {

			if ($scope.forgetpwd.newPwd.trim() === '') {
				messageTips.showMessageTips('密码不能为空');
				return false;
			} else if ($scope.forgetpwd.newPwd.trim().length < 6 || $scope.forgetpwd.newPwd.trim().length > 16) {
				messageTips.showMessageTips('密码6-16位');
				return false;
			} else if (/\W/.test($scope.forgetpwd.newPwd)) {
				messageTips.showMessageTips('密码字母数字下划线组合');
				return false;
			} else if ($scope.forgetpwd.newPwd !== $scope.forgetpwd.rePwd) {
				messageTips.showMessageTips('两次密码不一致');
				return false;
			}

			return true;
		}

	}])