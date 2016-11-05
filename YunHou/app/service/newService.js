app.service('newService',['$http',function ($http){
	// this.newData = function (){
	// 	return $http.get('public/json/new.json');
	// };
	this.newProducts = function (){
		return $http.get('public/json/newProduct.json')
	}
}])
