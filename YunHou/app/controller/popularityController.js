app.controller('popularityController', ['$scope','popularityService', function($scope,popularityService){
	popularityService.popularityProducts().success(function (res){
		$scope.products = res.products;
	})
}])

app.controller('rushController',['$scope','rushService',function ($scope,rushService){
	rushService.rushProducts().success(function (res){
		$scope.rushProducts = res.list;
	})
}])
