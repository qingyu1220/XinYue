app.service('popularityService',['$http',function ($http){
	this.popularityProducts = function (){
		return $http.get('public/json/popImgs.json')
	}
}])
app.service('rushService',['$http',function ($http){
	this.rushProducts = function (res){
		return $http.get('public/json/select1.json');
	}
}])
