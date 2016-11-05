app.service('selfStoreSev', ['$http', function($http){
	this.popPro = function(){
		return $http.get('public/json/goodStore/pop.json');
	}
	this.babyPro = function(){
		return $http.get('public/json/goodStore/baby.json');
	}
	this.cosmeticPro = function(){
		return $http.get('public/json/goodStore/cosmetic.json');
	}
}])