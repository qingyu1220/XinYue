app.service('goodStoreSev', ['$http', function($http){
	this.goodStoreImg = function() {
		return $http.get('public/json/goodStore/goodStore.json')
	}
}])