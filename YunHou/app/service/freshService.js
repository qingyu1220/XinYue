app.service('freshService', ['$http', function($http){
	this.data = function () {
		return $http.get("public/json/car.json");
	}
}])
