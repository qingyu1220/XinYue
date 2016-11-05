app.controller('newController', ['$scope','newService', function($scope,newService){
	newService.newProducts().success(function (res){
		$scope.products = res.products;
	})
}])
