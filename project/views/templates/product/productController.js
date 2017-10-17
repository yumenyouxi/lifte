app.controller('productController',['$scope','$location','$ionicActionSheet','$ionicScrollDelegate',function($scope,$location,$ionicActionSheet,$ionicScrollDelegate){
	$scope.productImgUrl=[
		'/images/720_01(25)@2x.png',
		'/images/720_02(31)@2x.png',
		'/images/720_03(28)@2x.png',
		'/images/720_04(30)@2x.png',
		'/images/720_05(23)@2x.png',
		'/images/720_06(25)@2x.png',
		'/images/720_07(22)@2x.png',
		'/images/720_08(29)@2x.png',
		'/images/720_10(22)@2x.png',
		'/images/720_12(23)@2x.png'
	];
  $scope.disImgUrl=[
    '/images/chanpin_2@2x.png',
    '/images/chanpin_2@2x.png',
    '/images/chanpin_2@2x.png',
    '/images/chanpin_2@2x.png',
    '/images/chanpin_2@2x.png',
    '/images/chanpin_2@2x.png',
  ]

  $scope.showShare = function () {
      var o = {
        buttons: [
          {text:'<span>QQ</span>'},
          {text:'<span>微信</span>'},
          {text:'<span>新浪</span>'},
          {text:'<span>复制连接</span>'},
        ],
        titleText: '分享到',
        cancelText: '取消',
        cancel: function () {},
        destructiveButtonClicked: function () {
          return false;
        },
        buttonClicked: function (index) {
          if (true) {
            hideAction();
          }
        }
      };
      var hideAction = $ionicActionSheet.show(o);
  }
  
  
  
 
}])
