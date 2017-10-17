app.controller('loginController',['$scope','$location','$timeout','API','messageTips','loadTips',function($scope,$location,$timeout,API,messageTips,loadTips){
	$scope.loginData={
		phone:'',
		pwd:''
	};
	$scope.login =function(){
		if(!validloginData()){
			return;
		}
		loadTips.showLoadTips();
		API.fetchPost('/login',$scope.loginData)
			.then(function(data){
				console.log('data ==> ', data);
				loadTips.hideLoadTips();
				loadTips.showMessage(data.data.message || '登录失败', 1000);
				if(data.data.status===200){
					$timeout(function(){
						$location.path('home');
					},500)
				}
				
				
			})
		
	}
	function validloginData(){
		var phoneReg = /^1[358]\d{9}$/;
		if(!phoneReg.test($scope.loginData.phone)){
			messageTips.showMessageTips('请输入正确的电话号码');
				return false;
		} else if ($scope.loginData.pwd.trim() === '') {
			messageTips.showMessageTips('密码不能为空');
			return false;
		} else if ($scope.loginData.pwd.trim().length < 6 || $scope.loginData.pwd.trim().length > 16) {
			messageTips.showMessageTips('密码6-16位');
			return false;
		} else if (/\W/.test($scope.loginData.pwd)) {
			messageTips.showMessageTips('密码字母数字下划线组合');
			return false;
		} 
		return true;
	}
}])