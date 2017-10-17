app.directive('proDirective',['$ionicScrollDelegate',function($ionicScrollDelegate){
	return { 
		scope: false,
	 	restrict: 'A', 
	 	replace: false,
	 	link: function(scope,element){
	 		var header=angular.element(element);
	 		var childDiv=header.children(); 	
	 		var childDiv2=childDiv[1]
			var srollHeight=500;
			var opacity=null;
			var opacity2=null;
			scope.scrollMainToTop = function() {
			    var moveHeight=$ionicScrollDelegate.$getByHandle('mainScroll').getScrollPosition().top-50;
			    opacity=moveHeight/srollHeight;
			    opacity2=0.5-opacity/2;
			   
			    if (moveHeight>100) {
			    	angular.element(childDiv).css('color','#000');
			    }else if(moveHeight<100){
			    	angular.element(childDiv).css('color','#fff');
			    }
			    if((moveHeight-50)<=srollHeight){
			        angular.element(header).css("background-color","rgba(255,255,255,"+opacity+")");
			        angular.element(childDiv2).css('opacity',opacity);
			        angular.element(childDiv).css("background-color", "rgba(154,150,145,"+opacity2+")");
			    }
			 };
	 	}
	}; 		
}])