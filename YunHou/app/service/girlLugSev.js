app.service('recommendSev', ['$http', function($http){
	this.recommendProducts = function () {
		return $http.get('public/json/lightImpress/recommend.json');
	}
	this.coachProducts = function () {
		return $http.get('public/json/lightImpress/coach.json');
	}
	this.MKProducts = function () {
		return $http.get('public/json/lightImpress/MK.json');
	}
	this.KSProducts = function () {
		return $http.get('public/json/lightImpress/KS.json');
	}
}])


