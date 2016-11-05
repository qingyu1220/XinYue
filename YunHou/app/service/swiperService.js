app.service('swiperService',['$http',function ($http){
	this.swiperData1 = function (){
		return $http.get("public/json/swiper.json");
	}
	this.swiperData2 = function (){
		return $http.get("public/json/car.json");
	}
	this.swiperData3 = function (){
		return $http.get("public/json/car1.json");
	}
}])