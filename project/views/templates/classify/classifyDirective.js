app.directive('myDirective',['$ionicSlideBoxDelegate','$ionicScrollDelegate','$location',function($ionicSlideBoxDelegate,$ionicScrollDelegate,$location){
	return { 
		scope: false,
	 	restrict: 'EA', 
	 	replace: false,
	 	link: function(scope){
	 		scope.fiy='';
	 		var width=screen.width;
	 		var arr = window.location.href.split('/');
			var arrUrl =arr.pop();
			abc(arrUrl);
			console.log("arrurl==>",arrUrl)
			function abc(parm){
				for(var i=0;i<scope.classifyImgText.length;i++){
					scope.classifyImgText[i].isTrue = false;
					if(parm==scope.classifyImgText[i].jump){
						scope.classifyImgText[i].isTrue= true;
						if(i<4){
							$ionicScrollDelegate.scrollTo(0,0,true);
							}else if(i>3){
								$ionicScrollDelegate.scrollTo(0.6*width,0,true);
								}	
					}
						
				}
			}

	 		scope.select = function (index) {	

				abc(scope.classifyImgText[index].jump);
				
				$location.path(scope.classifyImgText[index].jump)
			    scope.fiy=scope.classifyImgText[index].jump;
			    console.log('点击的',scope.fiy);
		    }
		   scope.goswipe=function(url){
		   	abc(url);
		   	$location.path(url)
		   }

	 	}
	}; 		
}])