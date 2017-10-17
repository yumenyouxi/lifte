app.factory('API',['$http',function($http){
	var api={};
	api.fetchGet=function(url,params){
		return $http({
			method:'GET',
			url:url,
			params:params
		});
	}
	api.fetchPost=function(url,data){
		return $http({
			method:'post',
			url:url,
			data:data
		});
	}
	return api;
}])

