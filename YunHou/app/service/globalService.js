app.service('globalService', ['$http', function($http){
	this.swiper = function () {
		return $http.get("public/json/swiper.json");
	}
	this.items = function () {
		return $http.get("public/json/select1.json");
	}
}])