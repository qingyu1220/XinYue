app.service('impressSev', ['$http', function($http){
	this.impressProducts = function(){
		return $http.get('public/json/lightImpress/lightImpress.json');
	}
}])