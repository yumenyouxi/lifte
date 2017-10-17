app.controller('forgetuserController', ['$scope', '$timeout', '$state', 'messageTips', 'loadTips', 'API', function ($scope, $timeout, $state, messageTips, loadTips, API) {

		$scope.forgetuser = {
			userPhone:'',
			validCode: ''
		};

		$scope.validCode = null;

		$scope.isEnbales = {
			isEnbalePhone: false,
			isEnbalePhoneCode: true,
			isEnbaleCodeBtn: true,
			isEnbaleConfirm: false
		};

		var resetIsEnbales = function (a, b) {
			$scope.isEnbales = {
				isEnbalePhone: a,
				isEnbalePhoneCode: b,
				isEnbaleCodeBtn: b,
				isEnbaleConfirm: a
			};
		}

		$scope.getValidCode = function () {

			if (!validForgetUser()) {
				return;
			}

			loadTips.showMessageForSendPhone('验证码正在发送, 稍等...')
			API.fetchGet('/forgetuser', {userPhone: $scope.forgetuser.userPhone})
				.then(function (data) {
					console.log('data==>',data);

					loadTips.hideMessageForSendPhone();

					loadTips.showMessage(data.data.message, 1500);

					if (data.data.status === 300) {
						resetIsEnbales(true, false);
						$scope.validCode = data.data.validCode;
						localStorage.forgetPhone = $scope.forgetuser.userPhone;
						 $timeout(function () {
						 	$scope.validCode = new Date().getTime();
						 	resetIsEnbales(false, true);
						 }, 1000 * 60 * 5);
					}
					
				})
				.catch(function (err) {
					console.log('出错啦');
				})

		}


		function validForgetUser() {
			var phoneReg = /^1[358]\d{9}$/;

			if(!phoneReg.test($scope.forgetuser.userPhone)){
			messageTips.showMessageTips('请输入正确的电话号码');
				return false;
			}

			return true;
		}


		$scope.goForgetPwd = function () {
			if ($scope.forgetuser.validCode === $scope.validCode) {
				$state.go('forgetpwd');
			} else {
				loadTips.showMessage('验证码不正确', 2000);
			}
			
		}


	}])