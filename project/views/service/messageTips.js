app.factory('messageTips', ['$ionicPopup', function ($ionicPopup) {

	var messagetips = {};

	//有按钮的提示
	messagetips.showMessageTips = function (message) {
		var messageBox = $ionicPopup.show({
			title: '提示',
			template: '<div style="text-align: center;">' + message + '</div>',
			buttons: [
				{
					text: '确认',
					type: 'button-positive',
					onTap: function () {
						messageBox.close();
					}
				}
			]

		});
		return messageBox;
	}

	return messagetips;

}]);